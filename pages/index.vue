<template>
  <section class="hero">
    <background-gradient></background-gradient>
    <animated-title></animated-title>
    <nav class="main-nav">
      <a class="main-nav__link" href="//www.linkedin.com/in/scottsandersdev/" target="_blank">linkedin</a>
      <a class="main-nav__link" href="//github.com/scottsandersdev" target="_blank">github</a>
    </nav>
  </section>
</template>

<script>
import AnimatedTitle from '~/components/Animated-Title.vue'
import BackgroundGradient from '~/components/Background-Gradient.vue'

export default {
  components: {
    AnimatedTitle,
    BackgroundGradient
  }
}
</script>

<style>
.hero {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
}

.main-nav {
  display: flex;
}

.main-nav__link {
  color: white;
  margin: 0 20px;
}
</style>
