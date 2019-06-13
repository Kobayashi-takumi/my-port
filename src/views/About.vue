<template>
  <div id="about">
    
    <el-row>
      <el-col :span="24">
        <el-carousel :interval="4000" type="card" height="250px">
          <div v-for="(item, index) in items" :key="item" class="lists">
            <div  @mouseover="isActive(index)">
            <el-carousel-item style="border-radius: 10px; display: flex;">
              <div class="carousel-item-contents" style="margin: auto;">
                <h2 class="medium">{{ item.title }}</h2>
              </div>
            </el-carousel-item>
            </div>
        </div>
        </el-carousel>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <transition name='fade'>
        <el-card class="box-card" v-if='show'>
          <el-button type="info" icon="el-icon-close" circle @click="isDeactive"></el-button>

          <p>経験年数 : {{ cardContents.year }}</p>
          <p>Frame Work : {{ cardContents.flamework }}</p>

          <div class="graph">
            <div class="graph-title"><i class="el-icon-medal" v-show="cardContents.meter > 70"></i>得意度</div>
            <div style="dispaly: inline; text-align: center;">
              <el-progress type="circle" :percentage="cardContents.meter" class="graph-body"></el-progress>
            </div>
          </div>

        </el-card>
        </transition>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'id',
  data() {
    return {
      items: [
        {title: 'python', year: 'python歴1年', flamework: 'Django',meter: 80},
        {title: 'Javascript', year: 'Javascript歴　３ヶ月', flamework: 'Vue.js', meter: 60},
      ],
      show: false,
      cardContents: null
    }
  },
  methods: {
    isActive(index) {
      this.cardContents = this.items[index];
      this.show = true;
    },
    isDeactive() {
      this.show = false;
    }
  }
}
</script>

<style scoped>

.el-row{
  width: 100%;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

 .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 30%;
    height: 400px;
    border-radius: 10px;
    margin: auto;
  }

  .fade-enter {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
    
  }

  .fade-enter-to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  @media (max-width: 800px) {
    .box-card{
      width: 100%;
      margin: 10px;
    }
  }
</style>
