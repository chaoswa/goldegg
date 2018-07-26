<template>
  <div class="bottom">
    <img class='bottom_img' src="../images/bottom.png">
    <div class="prize">
      <img class='prize_title' src="../images/prize_title.png">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  },
}
</script>

<style>
.bottom {
  position: relative;
  width: 100%;
  height: 283rpx;
}

.bottom_img{
  width: 750rpx;
  height:283rpx;
}

.prize{
  position: absolute;
  top:60%;
  left: 0;
  width: 100%;
  height: 240rpx;
  background-color: #ff503e;
}
.prize_title{
  position: absolute;
  top: 0;
  left: 0;
  width: 133rpx;
  height: 133rpx;
  z-index: 10;
}
</style>
