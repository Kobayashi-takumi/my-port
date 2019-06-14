<template>
    <div id="message-body">
        <el-row>
            <el-col :span="24" v-for="message in messages" :key="message">
                <div >
                <el-card class="box-card" shadow="hover" :class="{ mymessage: message.from}">
                    <div slot="header" class="clearfix">
                        <span>{{ message.title }}</span>
                    </div>
                    <div>
                        {{ message.contents }}
                        <el-button style="float: right;" type="info" icon="el-icon-delete-solid" circle></el-button>
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
    data() {
        return {
            messages: [
                {title: 'Hello', contents: 'Hello Tom', from: true},
                {title: 'Fine', contents: "I'm fine Thank you", from: false},
                {title: 'Fine', contents: "I'm fine Thank you", from: false},
                {title: 'Fine', contents: "I'm fine Thank you", from: false},
                {title: 'Fine', contents: "I'm fine Thank you", from: false},
            ]
        }
    },
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
