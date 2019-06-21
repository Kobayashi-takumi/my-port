<template>
    <div class="chat">
        <div v-if="this.$store.getters.isSignIn" class="contents-body">
            <div class="body">
                <h1 style="text-align: center;">Job Chat</h1>
                <h3 style="text-align: center;">{{ user.displayName }}'s Chat Room</h3>
                <message-boby @message-delete="messageDelete" :messages="messages" />
            </div>
            <div class="form">
                <message-form @send-message="sendMessage" style="width: 60%; margin: auto;"/>
            </div>
        </div>
        <div v-else class="error-message">
            <not-signin-message style="hight: 100px; margin: auto;"/>
        </div>
    </div>
</template>
<script>
import MessageBoby from '../components/MessageBody.vue'
import MessageForm from '../components/MessageForm.vue'
import NotSigninMessage from '../components/NotSigninMessage'
import db from '../firebase/firestore.js'

export default {
    name: 'chat',
    data() {
        return {
            messages: [],
        }
    },
    created() {
        this.getChat();
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        isSignIn() {
            return this.$store.getters.isSignIn;
        },
        id() {
            return this.$store.getters.id
        },
    },
    watch: {
        user() {
            this.getChat()
        },
        deep: true
    },
    components: {
        MessageBoby,
        MessageForm,
        NotSigninMessage
    },
    methods: {
        getChat() {
            let list = []
            const room =db.collection('chat-rooms').doc(this.$store.getters.user.uid).collection('room').orderBy("created_at", "asc")
            room.onSnapshot(querySnapshot => {
                querySnapshot.forEach( doc => {
                    let from = ''
                    if (doc.data().from === this.$store.getters.user.displayName ){
                        from = true
                    }
                    let data = {
                        'id': doc.id,
                        'title': doc.data().title,
                        'message': doc.data().message,
                        'created_at': doc.data().created_at,
                        'from': from,
                    }
                    list.push(data)
                })
            })
            list.sort((a, b) => {
                a = a['created_at']
                b = b['created_at']
                if( a < b ) return -1;
                if( a > b ) return 1;
                return 0; 
            });
            this.messages = list
        },
        sendMessage() {
            const room =db.collection('chat-rooms').doc(this.$store.getters.user.uid).collection('room')
            room.add({
                'title': this.$store.getters.title,
                'message': this.$store.getters.message,
                'created_at': Date.now(),
                'from': this.user.displayName,
            })
            this.getChat();
            this.scrollBottom();
        },
        scrollBottom() {
            this.$nextTick(() => {
                window.scrollTo(0, document.body.clientHeight)
            })
        },
        messageDelete() {
            console.log('hello')
            const room =db.collection('chat-rooms').doc(this.$store.getters.user.uid).collection('room').doc(this.id)
            room.delete();
            this.getChat();
        },
    }
}
</script>

<style>
.body {
    margin-left: auto;
    margin-right: auto; 
    margin-bottom: 210px;
    width: 60%;
}
.contents-body {
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
}
.form {
    margin-left: auto;
    margin-right: auto;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 200px;
    padding: 10px;
    display: flex;
}
.error-message {
    width: 100;
    display: flex;
    padding: 10px;
    height: 500px;
}

</style>
