<template>
  <div class="home">
    <div class="home-content">
      <transition> 
      <h1 class="home-text"><span
      v-for="(t, index) in text"
      :key="index"
      class="item"
      :style="{animationDelay: index*100+'ms'}"
      v-text="t"
      />
      </h1>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      text: "Welcome to Takumi's portfolio"
    }
  },
}
</script>
<style>
.home-content {
  width: 100%;
  height: 500px;
  display: flex;
}
.home-text{
  height: 100px;
  margin: auto;
}

@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
</style>
