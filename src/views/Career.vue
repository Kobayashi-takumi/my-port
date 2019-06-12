<template>
    <div id="career">
        <div class="contents">
        <ul>
            <li v-for="content in items" :key="content.item">{{ content.item }}</li>
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

</style>
