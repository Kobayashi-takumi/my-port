<template>
  <div id="about">
    <div class="row">
      <div class="card" v-for="project in projects" :key="project.title">
        <p class="title">{{ project.title }}</p>
        <p class="content">{{ project.contents }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'id',
  data() {
    return {
      projects: [
        {title: 'test', contents: 'python'},
        {title: 'test2', contents: 'Javascript'},
        {title: 'test3', contents: 'python'},
        {title: 'test4', contents: 'python'},
        {title: 'test5', contents: 'python'},
      ]
    }
  }
}
</script>

<style scoped>
.title {
  border-bottom: 1px solid #eee;
}

.row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

.card {
  padding: 5px;
  border: 3px solid #eee;
  border-radius: 10px;
  margin: 10px;
  width: calc(30% - 10px);
  height: 300px;
  }

  @media (max-width: 500px) {
    .card{
      width: 100%;
      margin: 10px;
    }
  }
</style>
