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
      message: ''
    }
  },
  methods: {
      send() {
              this.title = ''
              this.message = ''
        }
    }
}
</script>

<style scoped>
.el-row {
    border: 3px solid #eee;
    border-radius: 10px;
    padding: 10px;
    background-color: #eee;
}

.el-col {
    padding: 10px;
}
</style>
