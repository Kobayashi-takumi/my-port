<template>
    <div id="github">
        <div class="row">
        <div class="card">
            <div class="title"><span style="border-bottom: 3px solid #eee;">My Github</span></div>
            <img src="../assets/github.png" class="image">
            <div class="content" style="float: right;"><a href="https://github.com/Kobayashi-takumi"><el-button type="text"><i class="el-icon-thumb"></i>Click Me!</el-button></a></div>
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
  width: 40%;
  height: 50%;
  }

  .image {
    width: 100%;
    display: block;
  }

  @media (max-width: 600px) {
    .card{
      width: 100%;
      margin: 10px;
    }
  }
</style>
