<template>
  <div class="app_container">
    <div class="head_nv">
      <div class="logo">
        <img src="../assets/home_logo.jpg">
        <img class="logo_university" src="../assets/home_university.jpg">
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
          <li><a href="#" @click="gotoNewspage">最新动态</a></li>
          <li style="border-bottom:2px solid #26a9de"><a href="#" @click="gotoAboutUs">关于我们</a></li>
          <li><a href="#" @click="gotoContactWay">联系方式</a></li>
        </ul>
      </div>
    </div>
<!--    <div class="carousel_container">-->
<!--      <el-carousel trigger="click" height="500px">-->
<!--        <el-carousel-item v-for="item in 4" :key="item">-->
<!--          <h3 class="small">{{ item }}</h3>-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
<!--      &lt;!&ndash;      <Swiper v-if="list.length > 0">&ndash;&gt;-->
<!--      &lt;!&ndash;        <Slide v-for="(item,index) in list" :key="index">&ndash;&gt;-->
<!--      &lt;!&ndash;        </Slide>&ndash;&gt;-->
<!--      &lt;!&ndash;      </Swiper>&ndash;&gt;-->
<!--    </div>-->
    <div class="features_container">
      <div class="features_title">
        <span>关于我们</span>
      </div>
      <div class="features_p">
        <div class="features_content">
          <div class="content1"></div>
          <div class="content2"></div>
          <div class="content3">
            <span>&#8195;&#8195;深度研究相关政策，并与高职院校积极合作，积累了信息化规划设计、标准建设、系统集成、项目实施、运行维护的经验，为高职院校教学诊改建设提供嗯咯完整的解决方案并取得了良好的效果</span>
          </div>
        </div>
      </div>
<!--      <div class="features_detail">-->
<!--&lt;!&ndash;        <div class="features_item">&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="features_item">&ndash;&gt;-->

<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="features_item">&ndash;&gt;-->

<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="features_item">&ndash;&gt;-->

<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--      </div>-->
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
  name: 'aboutUs',
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
.logo .logo_university{
  float: left;
  width: 26%;
  height: 100%;
  padding: 3%;
  box-sizing: border-box;
  margin-left: -5%;
}
.span_container {
  float: left;
  height: 100%;
  width: 30%;
  /*width: 100px;*/
  /*background-color: #42b983;*/
  position: relative;
}
.logo_span {
  position: absolute;
  width: 150%;
  top: 50%;
  left: 60%;
  transform: translate(-40%,-50%);
}
.logo_span span {
  width: 100%;
  color: #26a9de;
  font-weight: bold;
  font-size: 1.3rem;
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
  color: #ffffff;
}
.features_container {
  width: 100%;
  /*height: 70%;*/
  height: 1150px;
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
  height: 1220px;
  text-align: center;
}
.features_content {
  position: relative;
  width: 100%;
  height: 800px;
  /*background-color: #26a9de;*/
}
.content1 {
  width: 590px;
  height: 795px;
  margin-left: 150px;
  background-color: #f1f1f1;
}
.content2 {
  position: absolute;
  top: 85px;
  left: 370px;
  width: 1220px;
  height: 600px;
  background-color: #26a9de;
}
.content3 {
  position: absolute;
  top:200px;
  left: 150px;
  width: 760px;
  height: 400px;
  font-weight: bold;
  color: white;
  background-color: rgba(59,113,186,0.8);
}
.content3 span {
  margin-top: 140px;
  font-size: 15px;
  color: #ffffff !important ;
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
.zg_news_container {
  width: 100%;
  height: 60%;
  background-color: white;
}
.zg_news_head {
  width: 100%;
  height: 16%;
  text-align: center;
}
.zg_news_head span {
  display: inline-block;
  font-size: 35px;
  font-weight: bold;
  margin-top: 1.5%;
  color: #666262;
}
.zg_news_content {
  width: 100%;
  height: 82%;
  background: pink;
}

</style>
