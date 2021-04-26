<template>
  <div class="app_container">
    <div class="head_nv">
      <div class="logo">
        <img src="../assets/home_logo.jpg">
        <div class="span_container">
          <div class="logo_span">
            <span>教学诊改平台</span>
          </div>
        </div>
      </div>
      <div class="nav">
        <ul>
          <li><a href="#" @click="gotoHomePage">平台首页</a></li>
          <li><a href="#product">系列产品</a></li>
          <li><a href="#" @click="gotoNewspage">最新动态</a></li>
          <li ><a href="#" @click="gotoAboutUs">关于我们</a></li>
          <li style="border-bottom:2px solid #26a9de"><a href="#" @click="gotoContactWay">联系方式</a></li>
        </ul>
      </div>
    </div>
    <div class="carousel_container">
      <el-carousel trigger="click" height="500px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <!--      <Swiper v-if="list.length > 0">-->
      <!--        <Slide v-for="(item,index) in list" :key="index">-->
      <!--        </Slide>-->
      <!--      </Swiper>-->
    </div>
    <div class="features_container">
      <div class="features_title">
        <span>联系我们</span>
      </div>
<!--      <div class="features_p">-->
<!--        <span>深度研究相关政策，并与高职院校积极合作，积累了信息化规划设计、标准建设、系统集成、项目实施、运行维护的经验，为高职院校教学诊改建设提供嗯咯完整的解决方案并取得了良好的效果</span>-->
<!--      </div>-->
      <div class="contact_detail">
        <div class="contact_way">
          <div class="contact_first">
            <div class="phone_con">
              <div class="phone_pic">
                <img src="../assets/icon/dianhua.png">
              </div>
              <div class="con_chart">
                <p style="font-size: 18px"><span style="font-weight: bold;font-size: 18px">座机：</span>001-8273892</p>
                <p style="font-size: 18px"><span style="font-weight: bold;font-size: 18px">手机：</span>18302033203 13063527289</p>
              </div>
            </div>
            <div class="email_con">
              <div class="email_pic">
                <img src="../assets/icon/email.png">
              </div>
              <div class="email_char">
                <p style="font-size: 14px"><span style="font-weight: bold;font-size: 14px">邮箱：</span></p>
                <p style="font-size: 14px">1306389@zh.com</p>
              </div>
            </div>
            <div class="chuan_con">
              <div class="chuan_pic">
                <img src="../assets/icon/chuanzhen.png">
              </div>
              <div class="chuan_char">
                <p style="font-size: 14px"><span style="font-weight: bold;font-size: 14px">传真：</span></p>
                <p style="font-size: 14px">3434552245</p>
              </div>
            </div>
          </div>
          <div class="contact_first" style="margin-top: 2%">
            <div class="wx_con">
              <div class="wx_pic">
                <img src="../assets/icon/wx.png">
              </div>
              <div class="wx_img">
              </div>
            </div>
            <div class="address_con">
              <div class="address_pic">
                <img src="../assets/icon/dizhi.png">
              </div>
              <div class="address_char">
                <p style="font-size: 18px"><span style="font-weight: bold;font-size: 18px">通信地址：</span></p>
                <p style="font-size: 18px">北京市海淀区某某路234号</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_content">
        <div class="p_one">
          <div class="footer_head">
            <span>内部质量管理与现代化治理</span>
          </div>
          <p class="footer_p">
            内部质量管理平台
          </p>
          <p class="footer_p">
            教师发展平台
          </p>
          <p class="footer_p">
            学生发展平台
          </p>
          <p class="footer_p">
            专业管理系统
          </p>
          <p class="footer_p">
            资产可视化平台
          </p>
          <p class="footer_p">
            科研管理系统
          </p>
        </div>
        <div class="p_two">
          <div class="footer_head">
            <span>智慧教学综合服务</span>
          </div>
          <p class="footer_p">
            教学设计工作站
          </p>
          <p class="footer_p">
            智能课堂管理系统
          </p>
          <p class="footer_p">
            教学质量评价中心
          </p>
          <p class="footer_p">
            一体化教学资源中心
          </p>
          <p class="footer_p">
            教学全过程分析平台
          </p>
        </div>
        <div class="p_three">
          <div class="footer_head">
            <span>数据治理与应用分析</span>
          </div>
          <p class="footer_p">
            数据中心
          </p>
          <p class="footer_p">
            数据治理服务
          </p>
          <p class="footer_p">
            专题数据分析平台
          </p>
          <p class="footer_p">
            数据补采平台
          </p>
        </div>
        <div class="p_four">
          <div class="footer_head">
            <span>信息化综合服务</span>
          </div>
          <p class="footer_p">
            综合服务门户
          </p>
          <p class="footer_p">
            统一身份认证
          </p>
          <p class="footer_p">
            顶岗实习
          </p>
          <p class="footer_p">
            会议管理
          </p>
        </div>
        <div class="er_code_container">
          <div class="er_code_img">
            <img>
          </div>
          <div class="code_title">
            <span>中科智禾服务号</span>
          </div>
        </div>
      </div>
      <div class="copyright">
        <span>版权所有© Copyright 2020-2021 中科智禾</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactWay',
  data () {
    return {

    }
  },
  methods: {
    gotoAboutUs: function () {
      console.log('去关于我们')
      this.$router.push({ path: '/aboutus#' })
    },
    gotoContactWay: function () {
      console.log('去联系方式')
      this.$router.push({path: '/contactway#'})
    },
    gotoHomePage: function () {
      this.$router.push({path: '/#'})
    },
    gotoNewspage: function () {
      this.$router.push({path: '/newspage#'})
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
}
body{
  width: 100%;
  height: 700px;
}
.app_container {
  width: 100%;
  height: 100%;
}
.head_nv {
  width: 100%;
  height: 10%;
  background-color: #fff;
  box-shadow: 0 1px 2px #d6d6d6;
  /*position:sticky;*/
  /*position: -webkit-sticky;*/
  top: 0;
  position: fixed;
  z-index: 999;
}
.logo {
  float: left;
  width: 20%;
  height: 100%;
  /*background-color: pink;*/
}
.logo img {
  float: left;
  height: 100%;
  width: 30%;
  margin-left: 10%;
}
.span_container {
  float: left;
  height: 100%;
  width: 60%;
  /*background-color: #42b983;*/
  position: relative;
}
.logo_span {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-40%,-50%);
}
.logo_span span {
  width: 100%;
  color: #26a9de;
  font-weight: bold;
  font-size: 1.1rem;
  font-family:  Arial, Helvetica, sans-serif;
}
.nav {
  float: left;
  margin-left: 10%;
  width: 70%;
}
.nav ul {
  height: 100%;
}
.nav ul li {
  float: left;
  height: 100%;
  margin: 0 2%;
  cursor: pointer;
}
.nav ul li a {
  display: block;
  height: 30px;
  /*line-height: 42px;*/
  padding: 0 10px;
  font-size: 18px;
  color: #050505;
  margin-top: 30%;
}
.nav ul li a:hover {
  border-bottom:2px solid #26a9de;
}
.carousel_container {
  width: 100%;
  height: 500px;
  background-color: skyblue;
  margin-top: 4.5%;
}
.system_container {
  width: 100%;
  height: 90%;
  /*background: pink;*/
}
.system_head {
  width: 100%;
  height: 16%;
  text-align: center;
  /*background: white;*/
}
.system_head span {
  display: inline-block;
  font-size: 35px;
  font-weight: bold;
  margin-top: 3%;
  color: #666262;
}
.first_layer {
  width: 100%;
  height: 42%;
  /*background-color: hotpink;*/
  display: flex;
  justify-content: space-evenly;
}
.system_item {
  height: 80%;
  width: 20%;
  background-color: white;
  margin-top: 2%;
  border-radius: 4%;
  cursor: pointer;
}
.system_item:hover{
  -webkit-box-shadow: #ccc 0px 10px 10px;
  -moz-box-shadow: #ccc 0px 10px 10px;
  box-shadow: #ccc 0px 10px 10px;
}
.img_container {
  text-align: center;
}
.img_container img {
  width: 30%;
  height: 20%;
  margin-top: 13%;
}
.img_title {
  text-align: center;
}
.img_title span {
  font-weight: bold;
  display: inline-block;
  margin-top: 5%;
  color: #44b7e7;
}
.footer {
  width: 100%;
  height: 30%;
  background-color: skyblue;
}
.footer_content {
  width: 100%;
  height: 85%;
  background-color: #0064b0;
}
.p_one {
  float: left;
  width: 14%;
  height: 100%;
  /*background-color: pink;*/
  margin-left: 40%;
  margin-top: -0.2%;
}
.p_two {
  float: left;
  width: 10%;
  height: 100%;
  /*background-color: pink;*/
  /*margin-left: 2%;*/
}
.p_three {
  float: left;
  width: 10%;
  height: 100%;
  /*background-color: pink;*/
  /*margin-left: 2%;*/
}
.footer_p {
  color: white;
  font-size: 14px;
  margin-top: 3%;
  cursor: pointer;
}
.p_four {
  float: left;
  width: 10%;
  height: 100%;
  /*background-color: pink;*/
  /*margin-left: 2%;*/
}
.footer_head {
  margin-bottom: 4%;
}
.footer_head span {
  display: inline-block;
  margin-top: 4%;
  font-size: 16px;
  color: white;
  font-weight: bold;
}
.copyright {
  width: 100%;
  height: 15%;
  background-color: #004c8c;
  text-align: center;
}
.copyright span {
  display: inline-block;
  color: white;
  font-size: 12px;
  margin-top: 0.7%;
}
.er_code_container {
  float: left;
  width: 10%;
  height: 80%;
  /*background-color: white;*/
  text-align: center;
}
.er_code_img {
  width: 60%;
  height: 60%;
  margin-left: 20%;
  margin-top: 10%;
  background-color: #dbdee7;
}
.code_title span {
  font-size: 14px;
  color: #c4aeae;
}
.features_container {
  width: 100%;
  height: 70%;
  background-color: white;
}
.features_title {
  width: 100%;
  height: 18%;
  /*background-color: pink;*/
  text-align: center;
}
.features_title span {
  display: inline-block;
  font-size: 35px;
  font-weight: bold;
  margin-top: 1.5%;
  color: #666262;
}
.features_p {
  text-align: center;
}
.features_p span {
  display: inline-block;
  width: 50%;
  text-align: left;
  line-height: 30px;
  color: #666262;
}
.features_detail {
  margin-top: 1%;
  height: 62%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.zg_news_head span {
  display: inline-block;
  font-size: 35px;
  font-weight: bold;
  margin-top: 1.5%;
  color: #666262;
}
.contact_detail {
  margin-top: 1%;
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  /*background-color: pink;*/
}
.contact_way {
  width: 60%;
  height: 100%;
  /*background-color: #44b7e7;*/
}
.contact_first {
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: space-evenly;
}
.phone_con {
  width: 46%;
  height: 100%;
  /*background-color: #75e744;*/
  box-shadow: #ccc 5px 0px 8px 0px;
  position: relative;
}
.phone_pic {
  margin-top: 12%;
  margin-left: 5%;
  float: left;
}
.phone_pic img {
  width: 100%;
  height: 100%;
}
.con_chart {
  position: absolute;
  top: 35%;
  left: 24%;
}
.email_con {
  width: 24%;
  height: 100%;
  /*background-color: #75e744;*/
  box-shadow: #ccc 5px 0px 8px 0px;
  position: relative;
}
.email_pic {
  margin-top: 24%;
  margin-left: 5%;
  float: left;
}
.email_char {
  position: absolute;
  top: 40%;
  left: 40%;
}
.chuan_con {
  width: 24%;
  height: 100%;
  /*background-color: #75e744;*/
  box-shadow: #ccc 5px 0px 8px 0px;
  position: relative;
}
.chuan_pic {
  margin-top: 24%;
  margin-left: 5%;
  float: left;
}
.chuan_char {
  position: absolute;
  top: 40%;
  left: 40%;
}
.wx_con {
  width: 24%;
  height: 100%;
  /*background-color: #75e744;*/
  box-shadow: #ccc 5px 0px 8px 0px;
  position: relative;
}
.wx_pic {
  margin-top: 24%;
  margin-left: 5%;
  float: left;
}
.wx_img {
  width: 38%;
  height: 5%;
  background-color: #44b7e7;
  position: absolute;
  top: 24%;
  left: 45%;
}
.wx_img img{
  /*width: 50%;*/
  /*height: 50%;*/
  /*background-color: #44b7e7;*/
}
.address_con {
  width: 70%;
  height: 100%;
  /*background-color: #75e744;*/
  box-shadow: #ccc 5px 0px 8px 0px;
  position: relative;
}
.address_pic {
  margin-top: 8%;
  margin-left: 5%;
  float: left;
}
.address_char {
  position: absolute;
  top: 40%;
  left: 20%;
}
</style>
