<template>
  <div>
    <div class='top_left' @click='rule'>
      <img src="../images/icon.png" alt="icon" class='left_icon'>
      规则
    </div>

    <!-- 游戏规则弹窗 -->
    <view class='model' v-if="is_rule" @click='closeRule'>
      <view class='rule'>
        <img class='rule_bg' src='../images/rule_bg.png'>
        <view class='rule'>
          <view class='rule_title'>活动规则</view>
          <view class='rule_txt'>幸运好礼到，大奖等你拿~</view>
          <view class='rule_area'>活动说明：参与活动即有机会获得幸 运奖，每天限参与6次，8次机会免费。 次活动为概率中奖，奖品数量有限， 祝好运！~
          </view>
          <view class='rule_detile'>惊喜一：iPhone X</view>
          <view class='rule_detile'>惊喜二：88元现金红包</view>
          <view class='rule_detile'>惊喜三：66元现金红包</view>
          <view class='rule_detile'>惊喜四：2G全国流量</view>
          <view class='rule_detile'>惊喜五：8元现金红包</view>
        </view>
      </view>
    </view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_rule:false
    };
  },
  methods: {
    closeRule(){
      this.is_rule=false
    },
    rule(){
      this.is_rule=true
    }
  },
}
</script>

<style>
.top_left{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 134rpx;
  height: 50rpx;
  font-size: 26rpx;
  line-height: 50rpx;
  text-align: center;
  color: #fff;
  margin-left: 50rpx;
  border-radius: 30rpx;
  background-color: #fb9916;
}
.left_icon{
  width: 34rpx;
  height: 34rpx;
  margin-right: 10rpx;
}
.model{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}

.rule{
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 595rpx;
  height: 769rpx;
}

.rule_bg{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}
.rule_con{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.rule_title{
  width: 100%;
  height: 100rpx;
  margin-top: 90rpx;
  text-align: center;
  line-height: 100rpx;
  font-size: 46rpx;
  color: #fff;
}
.rule_txt{
  width: 100%;
  height: 106rpx;
  text-align: center;
  line-height: 106rpx;
  font-size: 30rpx;
  color: #333;
}
.rule_area{
  width: 440rpx;
  height: 186rpx;
  text-align: left;
  line-height: 40rpx;
  font-size: 26rpx;
  color: #333;
}
.rule_detile{
  width: 440rpx;
  height: 40rpx;
  text-align: left;
  line-height: 40rpx;
  font-size: 26rpx;
  color: #333;
}
</style>
