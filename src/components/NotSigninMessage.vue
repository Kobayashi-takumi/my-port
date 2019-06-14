<template>
    <div id="signin-message">
        <el-row>
            <el-col :span="24">
                <transition>
                <h1>このコンテンツはSign Inしないと使えないよ</h1>
                </transition>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'signin-message',
}
</script>

<style scoped>

</style>
