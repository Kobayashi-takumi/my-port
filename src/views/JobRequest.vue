<template>
    <div class="jobRequest">
        <div class="contents-body">
            <div class="body">
                <h1 style="text-align: center;">Job SNS</h1>
                <message-boby />
            </div>
            <div class="form">
                <message-form />
            </div>
        </div>
    </div>
</template>
<script>
import MessageBoby from '../components/MessageBody.vue'
import MessageForm from '../components/MessageForm.vue'
export default {
    name: 'jobRequest',
    components: {
        MessageBoby,
        MessageForm
    }
}
</script>

<style>
.body {
    margin-left: auto;
    margin-right: auto; 
    margin-bottom: 200px;
    border: 3px solid #eee;
    border-radius: 10px;
}
.contents-body {
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
}
.form {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 200px;
}
</style>
