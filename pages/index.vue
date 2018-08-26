<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        octopeth
      </h1>
      <h2 class="subtitle">
        Octopeth Landing Page
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Source Sans Pro", sans-serif;
  display: block;
  font-weight: 300;
  font-size: 70px;
  color: black;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 100;
  font-size: 35px;
  color: rgba(0,0,0,0.4);
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

