<template>
  <div class="egg">
    <img :class="is_move?eggsty.sty:'stop'" :src="is_move?eggMove:eggStop" @click="stop">
  </div>
</template>

<script>
export default {
  props:{
    eggsty:Object
  },
  data() {
    return {
      is_move:true,
      eggMove:"../../images/egg_02.png",
      eggStop: "../../images/egg_03.png"
    };
  },
  computed:{

  },
  methods: {
    stop(){
      this.is_move=false
    }
  },
  mounted() {

  }
}
</script>

<style>
.egg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240rpx;
  height: 230rpx;
}
.stop{
  width: 122rpx;
  height: 86rpx;
}

.active_0 {
  width: 120rpx;
  height: 153rpx;
  animation: myfirst 1.5s ease 1s infinite;
}

.active_1 {
  width: 120rpx;
  height: 153rpx;
  animation: myfirst 1.5s ease 2s infinite;
}

.active_2 {
  width: 120rpx;
  height: 153rpx;
  animation:myfirst 1.5s ease 3s infinite;
}
.active_3 {
  width: 120rpx;
  height: 153rpx;
  animation: myfirst 1.5s ease 5s infinite;
}
.active_4 {
  width: 120rpx;
  height: 153rpx;
  animation: myfirst 1.5s ease 6s infinite;
}
.active_5 {
  width: 120rpx;
  height: 153rpx;
  animation:myfirst 1.5s ease 7s infinite;
}
.active_6 {
  width: 120rpx;
  height: 153rpx;
  animation: myfirst 1.5s ease 9s infinite;
}
.active_7 {
  width: 120rpx;
  height: 153rpx;
  animation: myfirst 1.5s ease 10s infinite;
}
.active_8 {
  width: 120rpx;
  height: 153rpx;
  animation: myfirst 1.5s ease 11s infinite;
}
@keyframes myfirst {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
