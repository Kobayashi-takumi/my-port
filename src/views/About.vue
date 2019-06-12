<template>
  <div id="about">
    <div class="row">
    <el-card class="box-card" v-for="project in projects" :key="project.title" body-style="width: 100%;">
        <h4 class="title">{{ project.title }}</h4>
        <div class="graph">
          <div class="graph-title"><i class="el-icon-medal" v-show="project.meter > 70"></i>得意度</div>
          <div style="dispaly: inline; text-align: center;">
            <el-progress type="circle" :percentage="project.meter" class="graph-body"></el-progress>
          </div>
        </div>
    </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'id',
  data() {
    return {
      projects: [
        {title: 'python', contents: 'python', meter: 80},
        {title: 'Javascript', contents: 'Javascript', meter: 60},
        {title: 'Django', contents: 'python', meter: 60},
        {title: 'Vue.js', contents: 'python', meter: 60},
      ]
    }
  }
}
</script>

<style scoped>
.title {
  padding: 10px;
  text-align: center;
}

.row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .box-card {
  padding: 5px;
  border: 3px solid #eee;
  border-radius: 10px;
  margin: 10px;
  width: calc(30% - 10px);
  height: 300px;
  display: flex;
  }

.graph{
  margin: auto;
  height: 50%;
}

.graph-title{
  text-align: center;
}
.graph-body {
  margin: auto;
}
  @media (max-width: 500px) {
    .card{
      width: 100%;
      margin: 10px;
    }
  }
</style>
