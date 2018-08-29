<template>
  <div class="view">
    <Topbar/>
    <section class="container" style="margin-top: -85px">
      <div>
        <h1 class="title animatedFast animatedFadeInUp fadeInUp">The First Decentralized Ethereum ÐApps Store.</h1>
        <h3 class="subtitle animatedSlow animatedFadeInUp fadeInUp">Publish, Store and Browse ÐApps Locally.</h3>
        <!-- <button class="downloadBtn"><img src="apple.svg" width="17px" style="margin-right: 5px"/>Download Octopeth for macOS</button> -->
        <button class="downloadBtn animateIt animatedFade fadeIn hvr-buzz-out"><img src="github.png" width="20px" style="margin-right: 5px"/>View Project on Github</button>
        <img class="featuring desaturate" src="feat.jpg"/>
      </div>
    </section>
    <!-- <section class="container" style="background: #222; z-index: 100">

    </section> -->
  </div>
</template>

<script>
import Topbar from '~/components/Topbar.vue'

export default {
  components: {
    Topbar
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.featuring {
  width: 100%;
  bottom: 0px;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.links {
  padding-top: 15px;
}

.downloadBtn {
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  background: #fff;
  height: 55px;
  font-weight: 700;
  font-size: 15px;
  border-radius: 5px;
  border: 2px solid black;
  color: #000;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 25px;
  cursor: pointer;
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-transition: margin-top 0.5s ease-in-out;
  transition: margin-top 0.5s ease-in-out;
}

.title {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 500;
  font-size: 32px;
  color: black;
  word-spacing: 5px;
  padding-bottom: 10px;
  margin-top: 150px;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

.subtitle {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 500;
  font-size: 27px;
  color: rgba(0,0,0,0.3);
  word-spacing: 0.5px;
  padding-bottom: 15px;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
/* Animations */
@-webkit-keyframes toColor {
  0%    { -webkit-filter: grayscale(100%); filter: grayscale(100%); }
  25%   { -webkit-filter: grayscale(75%); filter: grayscale(75%); }
  50%   { -webkit-filter: grayscale(50%); filter: grayscale(50%); }
  75%   { -webkit-filter: grayscale(25%); filter: grayscale(25%); }
  100%  { -webkit-filter: grayscale(0%); filter: grayscale(0%); }
}
@keyframes toColor {
  0%    { -webkit-filter: grayscale(100%); filter: grayscale(100%); }
  25%   { -webkit-filter: grayscale(75%); filter: grayscale(75%); }
  50%   { -webkit-filter: grayscale(50%); filter: grayscale(50%); }
  75%   { -webkit-filter: grayscale(25%); filter: grayscale(25%); }
  100%  { -webkit-filter: grayscale(0%); filter: grayscale(0%); }
}
img.desaturate { 
  animation: toColor 7s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
}

.animateIt {
  animation-duration: 0.5s;
  animation-delay: 5s;
  animation-fill-mode: both;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-delay: 5s;
  -webkit-animation-fill-mode: both
}

.animatedFade {
  opacity: 0
}

.fadeIn {
  opacity: 0;
  animation-name: fadeIn;
  -webkit-animation-name: fadeIn;
}

@keyframes fadeInUp {
  from {
    transform: translate3d(0,40px,0)
  }

  to {
    transform: translate3d(0,0,0);
    opacity: 1
  }
}

@-webkit-keyframes fadeInUp {
  from {
    transform: translate3d(0,40px,0)
  }

  to {
    transform: translate3d(0,0,0);
    opacity: 1
  }
}

.animatedFast {
  animation-duration: 2s;
  animation-fill-mode: both;
  -webkit-animation-duration: 2s;
  -webkit-animation-fill-mode: both
}

.animatedSlow {
  animation-duration: 4s;
  animation-fill-mode: both;
  -webkit-animation-duration: 4s;
  -webkit-animation-fill-mode: both
}

.animatedFadeInUp {
  opacity: 0
}

.fadeInUp {
  opacity: 0;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
}
</style>

