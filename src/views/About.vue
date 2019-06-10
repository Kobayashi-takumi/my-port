<template>
  <div id="about">
    <section class='my-project'>
      <el-row :gutter="12" v-for="project in projects" v-bind:key="project.title">
        <el-col :span="8">
          <el-card shadow="hover">
          {{ project.title }}
          </el-card>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
export default {
  name: 'id',
  data() {
    return {
      projects: [
        {title: 'test'},
        {title: 'test2'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
