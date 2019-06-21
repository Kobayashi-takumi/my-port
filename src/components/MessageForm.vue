<template>
    <div id="message-form">
        <el-row>
            <el-col>
                <el-input
                type="textarea"
                autosize
                placeholder="title"
                v-model="title">
                </el-input>
            </el-col>
            <el-col>
                <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="Message"
                v-model="message">
                </el-input>
            </el-col>
            <el-col>
                <el-button type="primary" icon="el-icon-upload2" round style="float: right;" @click="send"></el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'message-form',
    data() {
        return {
            title: '',
            message: '',
        }
    },
    methods: {
      send() {
          if (this.message == '') return alert('messageに入力がありません！')
          this.$store.commit('setTitle', this.title);
          this.$store.commit('setMessage', this.message);
          this.$emit('send-message');
          this.title = '';
          this.message = '';
        }
    }
}
</script>

<style scoped>
.el-row {
    border: 3px solid #475669;
    border-radius: 10px;
    padding: 10px;
    background-color: rgb(34, 33, 33);
    color: white;
}

.el-col {
    padding: 10px;
}
</style>
