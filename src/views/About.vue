<template>
  <div id="about">
    <div class="row">
    <el-card class="box-card" v-for="project in projects" :key="project.title" body-style="width: 100%;">

      <el-carousel>
        <el-carousel-item>
          <h4 class="title">{{ project.title }}</h4>
          <div class="graph">
            <div class="graph-title"><i class="el-icon-medal" v-show="project.meter > 70"></i>得意度</div>
            <div style="dispaly: inline; text-align: center;">
              <el-progress type="circle" :percentage="project.meter" class="graph-body"></el-progress>
            </div>
          </div>
        </el-carousel-item>

        <el-carousel-item>
          <p class='back'>{{ project.contents }}</p>
        </el-carousel-item>
      </el-carousel>
        
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
}
</script>

<style scoped>

.title {
  padding: 10px;
  text-align: center;
  color: white;
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
  height: 330px;
  display: flex;
  background-color: dimgrey;
  }

.graph{
  margin: auto;
  height: 50%;
}

.graph-title{
  text-align: center;
  color: white;
}
.graph-body {
  margin: auto;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

.back{
  text-align: center;
  color: white;
}
  @media (max-width: 500px) {
    .box-card{
      width: 100%;
      margin: 10px;
    }
  }
</style>
