<template>
    <div id="message-body">
        <el-row>
            <el-col :span="24" v-for="message in sorted_messages" :key="message">
                <div >
                <el-card class="box-card" shadow="hover" :class="{ mymessage: message.from}">
                    <div slot="header" class="clearfix">
                        <span>{{ message.title }}</span>
                    </div>
                    <div>
                        {{ message.message }}
                        <el-button @click="del(message.id)" style="float: right;" type="info" icon="el-icon-delete-solid" circle></el-button>
                    </div>
                </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    name: 'message-body',
    props: ['sorted_messages'],
    methods: {
        del(id) {
            this.$store.commit('setId', id);
            this.$emit('message-delete');
        }
    }
}
</script>

 <style scoped>
 .box-card{
     width: 30%;
     padding: 20px;
     margin: 30px;
     border-radius: 10px;
     float: left;
     position: relative;
 }

 .el-botton {
     position: absolute;
     right: 0;
     bottom: 0;
 }

 .mymessage {
     float: right;
 }
 </style>
