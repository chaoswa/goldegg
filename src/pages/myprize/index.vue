<template>
  <div class="container">
    <!--无奖品  -->
    <div class='no_more' v-if='noList'>您还未中奖，快去抽奖试试手气吧~</div>
    <!--我的奖品  -->
    <div class='trophy' v-if='showList'>
      <div v-for='item in prize_list' wx:key='index'>
        <!--item.res_type==1  表示广告奖品-->
        <div v-if='item.res_type==2'>
          <!--item.detail.ad_type==1 小程序  -->
          <navigator class='li' 
            target="miniProgram" 
            open-type="navigate" 
            app-id="item.detail.appid" 
            path="item.detail.path" 
            extra-data="" 
            version="release" 
            v-if="item.detail.ad_type==1" 
            id='item.detail.ad_gift_id' 
            @click='statistics'> 
            <div class='li_img'><img src='item.detail.icon'></div>
            <div class='li_tit'>{{item.detail.title}}</div>
            <div class='li_rig'> > </div>
          </navigator>
          <!--item.detail.ad_type==2 网页  -->
          <navigator class='li' 
            url="item.detail.path" 
            v-if='item.detail.ad_type==2' 
            id='item.detail.ad_gift_id' 
            @click='statistics'>
            <div class='li_img'><img src='item.detail.icon'></div>
            <div class='li_tit'>{{item.detail.title}}</div>
            <div class='li_rig'> > </div>
          </navigator>
        </div>
          
        <!--item.res_type==1  表示红包-->
        <div v-if='item.res_type==1'>
          <div class='li'>
            <div class='li_img'><img src='../../images/list2.png'></div>
            <div class='li_tit'>{{item.detail.title}}元</div>
            <div class='li_cath' hover-class='click_active' bindtap='goCash'>提现</div>
          </div>
        </div>
      </div>
    </div>
    <!--底部-返回抽奖  -->
    <div class='foot'>
      <div class='btn-back' hover-class='click_active' bindtap='toIndex'>返回抽奖</div>
    </div>

    <!--提现分享提示  -->
    <div class='mask' v-if='decorate'>
      <div class='decorate'>
        <div class='decorate_img'>
          <img src='../../images/decorate.png'>
        </div>
        <div class='decorate_tit'>您还不能提现，请先分享本程序哦~</div>
        <button class='decorate_btn' open-type='share'>去分享</button>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      prize_list:['1','2']
    }
  },

  components: {
    card
  },

  methods: {

  },

  created () {

  }
}
</script>

<style scoped>
page {
  width: 100%;
  background: #f2f2f2;
}
 /* .container{
  width: 100%;
  overflow: hidden;
  background: #f2f2f2;
}  */
.mask {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}
.no_more{
  font-size: 30rpx;
  margin:200rpx auto;
  color: #999;
}
.my_prize {
  width: 100%;
  min-height: 1028rpx;
  background: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-flow: column;
  position: absolute;
  transition: transform 0.3s linear;
}

.active {
  transform: translateY(-1028rpx);
}

.prize-head {
  width: 100%;
  height: 320rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.head-left {
  font-size: 32rpx;
  color: #666;
}

.head-left > view {
  color: #333;
  font-size: 45rpx;
  font-weight: bold;
}

.head-right image {
  width: 206rpx;
  height: 248rpx;
  margin-right: 50rpx;
}

.prize-title, .prize-detail, .prize-des, .prize-odes {
  width: 90%;
  font-size: 32rpx;
  color: #333;
  margin: 30rpx auto;
}

.prize-title {
  font-weight: bold;
  border-bottom: 1rpx solid #dcdcdc;
  padding-bottom: 20rpx;
  box-sizing: border-box;
}

.prize-word {
  font-weight: bold;
  margin-bottom: 10rpx;
}

.prize-btn {
  position: absolute;
  top: 80%;
  left: 44%;
}

.prize-btn image {
  width: 98rpx;
  height: 98rpx;
}

/*我的奖品  */
.trophy {
  width: 100%;
  /* overflow: hidden; */
  margin-top: 30rpx;
  background: #fff;
  margin-bottom: 150rpx;
}

.li {
  width: 100%;
  height: 180rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  border-bottom: 2rpx solid #f2f2f2;
}

.li_img {
  width: 200rpx;
  height: 124rpx;
}

.li_img image {
  width: 100%;
  height: 100%;
}

.li_tit {
  width: 200rpx;
  /* margin-right: 100rpx; */
  text-align: center;
  font-size: 32rpx;
  font-weight: 600;
}

.li_rig {
  width: 126rpx;
  height: 54rpx;
  text-align: center;
  line-height: 54rpx;
  color: #999;
}
.li_cath{
  width: 126rpx;
  height: 54rpx;
  background-color: #029048;
  border-radius: 60rpx;
  text-align: center;
  line-height: 54rpx;
  color: #fff;
  font-size: 30rpx;
}

.decorate{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 250rpx;
}
.decorate_img image{
  width: 366rpx;
  height: 233rpx;
  margin-bottom: 50rpx;
}
.decorate_tit{
  color: #fff;
  font-size: 32rpx;
  margin-bottom: 100rpx;
}
.decorate_btn{
  width: 272rpx;
  height: 88rpx;
  background-color: #ffc53b;
  border-radius: 60rpx;
  color: #753400;
}

</style>
