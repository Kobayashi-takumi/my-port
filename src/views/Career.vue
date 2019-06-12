<template>
    <div id="career">
        <div class="contents">
        <ul style="text-align: center; list-style: none;">
            <li v-for="content in items" :key="content.item" style="padding: 30px;">{{ content.item }}</li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'career',
    data() {
        return {
            items: [
                {item: 'Takumi Kobayashi'},
                {item: 'Meijigakuin univercity'},
                {item: 'HC asset manegment co'},
            ]
        }
    }
}
</script>
<style>
.content{
    width: 100%
}
</style>
