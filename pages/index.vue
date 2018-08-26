<template>
  <div class="view">
    <Topbar/>
    <section class="container" style="margin-top: -85px">
      <div>
        <button class="downloadBtn"><img src="apple.svg" width="17px" style="margin-right: 5px"/>Download Octopeth for macOS</button>
        <img class="featuring" src="scnshoot.jpg"/>
      </div>
    </section>
    <section class="container" style="background: #222; z-index: 100">

    </section>
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

.subtitle {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 100;
  font-size: 35px;
  color: rgba(0,0,0,0.4);
  word-spacing: 5px;
  padding-bottom: 15px;
  margin-top: 130px;
}

.featuring {
  width: 1100px;
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
  font-family: "Source Sans Pro", sans-serif;
  margin-top: 160px;
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
  -webkit-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;
}
.downloadBtn:hover {
  opacity: 0.7;
}
</style>

