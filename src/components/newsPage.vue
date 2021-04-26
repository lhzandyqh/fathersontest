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
          <li><a href="./homePage.vue#product">系列产品</a></li>
          <li style="border-bottom:2px solid #26a9de"><a href="#" @click="gotoNewspage">最新动态</a></li>
          <li><a href="#" @click="gotoAboutUs">关于我们</a></li>
          <li><a href="#" @click="gotoContactWay">联系方式</a></li>
        </ul>
      </div>
    </div>
    <div class="carousel_container">
<!--      <el-carousel trigger="click" height="500px">-->
<!--        <el-carousel-item v-for="item in 4" :key="item">-->
<!--          <h3 class="small">{{ item }}</h3>-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
      <img src="../assets/homepage2.jpg" width="100%" height="100%">
      <!--      <Swiper v-if="list.length > 0">-->
      <!--        <Slide v-for="(item,index) in list" :key="index">-->
      <!--        </Slide>-->
      <!--      </Swiper>-->
    </div>
    <div class="news_container top_control">
      <div class="news_item" >
        <div class="news_item_img">
          <img src="../assets/newspage1.png" width="100%" height="100%">
        </div>
        <div class="news_item_title">
          <div class="item_title_first">
            <span>高职院校诊改平台简析</span>
          </div>
          <div class="item_title_second">
            <div class="title_date">
              <span>2020-10-09</span>
            </div>
            <div class="title_more">
              <span>了解更多</span>
            </div>
          </div>
        </div>
      </div>
      <div class="news_item" style="margin-left: 5%">
        <div class="news_item_img">
          <img src="../assets/newspage2.png" width="100%" height="100%">
        </div>
        <div class="news_item_title">
          <div class="item_title_first">
            <span>诊改8字螺旋理念</span>
          </div>
          <div class="item_title_second">
            <div class="title_date">
              <span>2020-10-09</span>
            </div>
            <div class="title_more">
              <span>了解更多</span>
            </div>
          </div>
        </div>
      </div>
      <div class="news_item" style="margin-left: 5%">
        <div class="news_item_img">
          <img src="../assets/newspage3.png" width="100%" height="100%">
        </div>
        <div class="news_item_title">
          <div class="item_title_first">
            <span>2020中等职业院校年度质量报告</span>
          </div>
          <div class="item_title_second">
            <div class="title_date">
              <span>2020-12-28</span>
            </div>
            <div class="title_more">
              <span>了解更多</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news_container top_control" style="margin-bottom: 4%">
      <div class="news_item" >
        <div class="news_item_img">
          <img src="../assets/newspage4.png" width="100%" height="100%">
        </div>
        <div class="news_item_title">
          <div class="item_title_first">
            <span>诊改最新动态</span>
          </div>
          <div class="item_title_second">
            <div class="title_date">
              <span>2020-09-16</span>
            </div>
            <div class="title_more">
              <span>了解更多</span>
            </div>
          </div>
        </div>
      </div>
      <div class="news_item" style="margin-left: 5%">
        <div class="news_item_img">
          <img src="../assets/newspage5.png" width="100%" height="100%">
        </div>
        <div class="news_item_title">
          <div class="item_title_first">
            <span>2020云南工程职业学院教学诊断工作</span>
          </div>
          <div class="item_title_second">
            <div class="title_date">
              <span>2020-10-29</span>
            </div>
            <div class="title_more">
              <span>了解更多</span>
            </div>
          </div>
        </div>
      </div>
      <div class="news_item" style="margin-left: 5%">
        <div class="news_item_img">
          <img src="../assets/newspage6.png" width="100%" height="100%">
        </div>
        <div class="news_item_title">
          <div class="item_title_first">
            <span>陕西高校巡视诊断组开展巡视工作</span>
          </div>
          <div class="item_title_second">
            <div class="title_date">
              <span>2020-10-25</span>
            </div>
            <div class="title_more">
              <span>了解更多</span>
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
  name: 'newPage',
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
.img_container img {
  width: 30%;
  height: 20%;
  margin-top: 13%;
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
  color: #ffffff;
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
.features_item {
  height: 100%;
  width: 14%;
  background-color: pink;
  margin-left: 4%;
  box-shadow: #ccc 0px 5px 5px;
  cursor: pointer;
}
.zg_news_head span {
  display: inline-block;
  font-size: 35px;
  font-weight: bold;
  margin-top: 1.5%;
  color: #666262;
}
.news_container {
  width: 100%;
  height: 45%;
  /*background-color: pink;*/
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.news_item {
  width: 20%;
  height: 100%;
  /*margin-right: 5%;*/
  /*margin-left: 5%;*/
  background-color: white;
  cursor: pointer;
}
.news_item:hover {
  -webkit-box-shadow: #ccc 0px 10px 10px;
  -moz-box-shadow: #ccc 0px 10px 10px;
  box-shadow: #ccc 0px 10px 10px;
}
.news_item_img {
  width: 100%;
  height: 70%;
  background-color: pink;
}
.news_item_title {
  width: 100%;
  height: 30%;
  /*background-color: #44b7e7;*/
}
.item_title_first {
  width: 100%;
  height: 40%;
  padding-top: 4%;
  text-align: center;
}
.item_title_first span {
  font-weight: bold;
  font-size: 20px;
}
.item_title_second {
  color: #656363;
}
.title_date {
  float: left;
  margin-left: 3%;
}
.title_date span {
  cursor: pointer;
}
.title_more {
  float: right;
  margin-right: 3%;
}
.title_more span {
  cursor: pointer;
}
.top_control {
  margin-top: 4%;
}
</style>
