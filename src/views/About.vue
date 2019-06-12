<template>
  <div id="about">
    <div class="row">
    <el-card class="box-card" v-for="project in projects" :key="project.title" body-style="width: 100%;">

      <div v-if="project.disable == false">
        <h4 class="title">{{ project.title }}</h4>
        <div class="graph">
          <div class="graph-title"><i class="el-icon-medal" v-show="project.meter > 70"></i>得意度</div>
          <div style="dispaly: inline; text-align: center;">
            <el-progress type="circle" :percentage="project.meter" class="graph-body"></el-progress>
          </div>
        </div>
      </div>
      <div v-else-if="project.disable" class="back">
        <div>{{ project.contents }}</div>
      </div>

        <div class="detail">
          <el-button type="info" round @click="changeSwitch(project.id)"><i class="el-icon-more"></i></el-button>
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
        {id: 1, title: 'python', contents: 'python歴1年', meter: 80, disable: false},
        {id: 2, title: 'Javascript', contents: 'Javascript歴　３ヶ月', meter: 60, disable: false},
        {id: 3, title: 'Django', contents: 'Django歴　６ヶ月', meter: 60, disable: false},
        {id: 4, title: 'Vue.js', contents: 'Vue.js歴　１ヶ月', meter: 60, disable: false},
      ]
    }
  },
  methods: {
    changeSwitch(id) {
      this.projects[id - 1].disable =! this.projects[id - 1].disable;
    }
  },
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
  position: relative;
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

.detail {
  position: absolute;
  right: 0;
  bottom: 0;
}

.back {
  display: inline;
  text-align: center;
  height: 50%;
}
  @media (max-width: 500px) {
    .card{
      width: 100%;
      margin: 10px;
    }
  }
</style>
