<script>
export default {
  created () {

  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
button{
  margin: 0;
  padding: 0;
}
button::after{
  border: none;
}
.foot {
  width: 100%;
  height: 120rpx;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
}
.click_active {
  opacity: 0.7;
}
.btn-back{
  width: 690rpx;
  height: 88rpx;
  background-color: #ff7200;
  border-radius: 60rpx;
  text-align: center;
  line-height: 88rpx;
  color: #fff;
  margin: 16rpx auto;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
