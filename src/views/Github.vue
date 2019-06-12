<template>
    <div id="github">
        <div class="row">
        <div class="card animated flip">
            <h2 class="title"><span style="border-bottom: 3px solid #eee;">My Github</span></h2>
            <img src="../assets/github.png" class="image">
            <div class="content" style="margin: auto;"><a href="https://github.com/Kobayashi-takumi"><el-button type="text"><i class="el-icon-thumb"></i>Click Me!</el-button></a></div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'git',
}
</script>

<style>

@keyframes flip {
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }
  
  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
}

.animated.flip {
  backface-visibility: visible;
  animation-name: flip;
}


.row {
    padding-top: 100px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

.card {
  padding: 5px;
  border: 3px solid #eee;
  border-radius: 10px;
  margin: auto;
  width: 30%;
  height: 50%;
  }

  .image {
    width: 50%;
    height: 50%;
    display: block;
    margin: auto;
  }

  @media (max-width: 600px) {
    .card{
      width: 100%;
      margin: 10px;
    }
  }
</style>
