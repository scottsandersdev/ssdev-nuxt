<template>
  <div>
    <div class="background-gradient background-gradient--blue-purple"></div>
    <div class="background-gradient background-gradient--green-blue"></div>
  </div>
</template>

<style>
.background-gradient {
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: -1;
}

.background-gradient--blue-purple {
  animation: fadeInOut 25s ease;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  background-color: #1D2B64;
  background-image: -webkit-linear-gradient(left, #1D2B64, #F8CDDA);
  background-image: linear-gradient(to right,#1D2B64, #F8CDDA);
}

.background-gradient--green-blue {
  animation: fadeOutIn 25s ease;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  background-color: #43cea2;
  background-image: -webkit-linear-gradient(left, #43cea2, #185a9d);
  background-image: linear-gradient(to right,#43cea2, #185a9d);
}
</style>
