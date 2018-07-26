<template>
  <div class="container">
    <div class="top">
      <img src="../../images/top_bg.png" class="topbg">
      <div class='top_txt'>
        <rule></rule>
        <div class='top_right' @click='toPrize'>我的奖品</div>
      </div>
    </div>
    
    <div class="center">
      <div v-for="(egg,index) in eggList" :key="index">
        <egg :eggsty='egg'></egg>
      </div>
      <div class='count'>免费次数：</div>
    </div>
    <prize-list></prize-list>

    <div class='hammer'>
      <img src="../../images/hammer.png">
    </div>
  </div>
</template>

<script>
import rule from "@/components/rule";
import egg from "@/components/egg";
import prizeList from '@/components/prizeList'
import { gameList, TYPE_TWO, TYPE_ONE} from '../../common/config'
import { myGet, myPost, useLogin,URL} from '../../common/api'
import { getLoginData,getInfoData,getIndexAd} from '../../common/index'

export default {
  data() {
    return {
      is_rule:false,
      code:'',
      whhm:'',
      eggList:gameList,
      float_ad:[],
      index_ad:[]
    };
  },

  components: {
    rule,
    egg,
    prizeList
  },

  methods: {
    async initIndex(){
      let that=this
      let whhm = that.$root.$mp.query.whhm? that.$root.$mp.query.whhm:''
      //获取首页广告
      getIndexAd();
      //login获取code
      let loginData=await useLogin();
      if(loginData.code){
        that.code=loginData.code
        that.whhm=whhm
        let userInfo = wx.getStorageSync('userInfo')
        if (userInfo) { 
          // 请求user/login接口，获取uid
          let userData=getLoginData(loginData,userInfo);
          if(userData.data.status=200){
            app.globalData.userData = userData.data.data;
            that.uid=userData.data.data.id
          }
          // 请求user/userInfo接口，获取用户信息
          let userInfoData= getInfoData(userData.data.data.id)
          if (userInfoData.data.status = 200) {
            that.validTimes=res.data.data.validTimes
          }
        }
      }
    },
    toPrize(){
      const url = '../myprize/main'
      wx.navigateTo({ url })
    }
  },

  mounted() {
    this.initIndex()
  }

};
</script>

<style scoped>
/**index.wxss**/
page {
  width: 100%;
  height: 100%;
}
.container {
  background-color: #ff6b5c;
}
.top {
  position: relative;
  width: 100%;
  height: 476rpx;
}
.top_txt {
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 94rpx;
}
.top_right {
  width: 134rpx;
  height: 50rpx;
  margin-right: 50rpx;
  border-radius: 30rpx;
  font-size: 26rpx;
  line-height: 50rpx;
  text-align: center;
  color: #fff;
  background-color: #fa781c;
}
.stop {
  width: 122rpx;
  height: 86rpx;
}
.topbg {
  width: 100%;
  height: 100%;
}

.center {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 650rpx;
}

.count {
  width: 100%;
  height: 44rpx;
  font-size: 30rpx;
  color: #333;
  text-align: center;
  line-height: 44rpx;
}

.hammer {
  position: absolute;
  top: 30%;
  right: 5%;
  z-index: 100;
  width: 107rpx;
  height: 119rpx;
}
.hammer img {
  width: 100%;
  height: 100%;
}
</style>
