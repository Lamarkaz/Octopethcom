<template>
  <div class="Topbar">
    <div class="content">
      <img class="Logo" src="logo-light.svg" height="45px"/>
      <nav class="navItems">
        <a href="" class="Item">Features</a>
        <a href="" class="Item">About</a>
        <a href="https://github.com/lamarkaz/octopeth" target="_blank" class="Item">Github</a>
      </nav>
      <div class="projectby">Project by <a class="lamarkaz" href="https://lamarkaz.com" target="_blank">LAMARKAZ</a></div>
    </div>
  </div>
</template>

<style scoped>
.Topbar {
  padding-top: 18px;
  padding-bottom: 18px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 2000;
  height: 85px;
  background: black;
}
.content {
  width: 900px;
  margin-right: auto;
  margin-left: auto;
}
.Logo {
  position: relative;
  left: 47.5%;
  top: 50%;
}
.navItems {
  position: absolute;
  left: 10%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.projectby {
  position: absolute;
  right: 10%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: rgba(255,255,255,.5);
  text-transform: uppercase;
  font-size: 16px;
  text-decoration: none;
  letter-spacing: .5px;
}
a.lamarkaz {
  color: white;
  text-decoration: none;
}
a.Item {
  margin-right: 27px;
  color: white;
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 16px;
  text-decoration: none;
  letter-spacing: .5px;
  transition: opacity 0.5s ease-in-out;
}
a.Item:hover {
  opacity: 0.9;
}
</style>

