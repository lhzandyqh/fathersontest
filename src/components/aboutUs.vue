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
    <div class="features_container">
      <div class="features_title">
        <span>关于我们</span>
      </div>
      <div class="features_p">
        <div class="features_content">
          <div class="content1"></div>
          <div class="content2"></div>
          <div class="content3">
            <span>&#8195;&#8195;
              中科智禾（北京）科技发展公司由中科院信息科技领域相关专家发起成立。她整合中科院和山东大学大数
              据和人工智能领域的科技力量，面向垂直行业智能化发展和提升，开展应用研究和研发实践，成立山东大学“大数据技术与认
              知智能实验室”，落地于北京和济南两地挂牌。
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="pic_con_one">
      <div class="one_img_container">
        <img :src="aboutone">
      </div>
    </div>
    <div class="one_shuoming_con">
      <p>我们定位在前沿科技研发与行业及市场需求相结合，通过发挥在大数据与人工智能领域的科研与技术优势，形成助推产业发展的科技智库与产
        学研协同创新技术实践服务与Ai产品研发平台。在教育信息化与智能化、医疗智能化与健康管理、智慧城市建设（智慧工地、智慧水利等）、工业大数
        据与智能园区等领域，开展深入工作推进。</p>
    </div>
    <div class="pic_con_one">
      <div class="one_img_container">
        <img :src="abouttwo">
      </div>
    </div>
    <div class="one_shuoming_con">
      <p>我们核心团队中具有正高级职称和博士学位专家超过1/3，团队成员均为研究生学历。目前科研及技术研发队伍50余人，包括中科院和
        山东大学相关专家、产业资深工程师、硕士博士研究生。团队在大数据技术、NLP与知识图谱、
        计算机视觉等方向的科研积累与应用实践，服务在科技咨询、产品研发、技术服务等方向的支撑。</p>
    </div>
    <div class="one_shuoming_con">
      <p>在与政府、园区、产业对接融合过程中，有效汇聚产业资源和创新需求，逐步搭建科研与产业融合及科技转移转化平台，同时推
        进大数据与人工智能领域高层次实用型人才培养，实现在产学研融合驱动下政府科技战略实施与产业创新落地标杆和示范。</p>
    </div>
    <div class="two_pic_container">
      <div class="two_head">
        <span>服务领域</span>
      </div>
      <div class="two_pic">
        <img :src="aboutthree">
      </div>
    </div>
    <div class="two_pic_container">
      <div class="two_head">
<!--        <span>服务领域</span>-->
      </div>
      <div class="two_pic">
        <img :src="aboutfour">
      </div>
    </div>
    <div style="width: 100%;height: 100px;">
    </div>
    <div class="three_pic_container">
      <div class="three_head">
        <span>软件著作权（近三年）</span>
      </div>
      <div class="three_pic">
        <img :src="aboutfive">
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
            <img src="../assets/qrcode.jpg">
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
      aboutone: 'http://zhongkeruitong.top/zg_propagate/aboutus1.png',
      abouttwo: 'http://zhongkeruitong.top/zg_propagate/aboutus2.png',
      aboutthree: 'http://zhongkeruitong.top/zg_propagate/aboutus3.png',
      aboutfour: 'http://zhongkeruitong.top/zg_propagate/aboutus4.png',
      aboutfive: 'http://zhongkeruitong.top/zg_propagate/aboutus5.png'
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
.er_code_img img {
  width: 100%;
  height: 100%;
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
  width: 50%;
  height: 795px;
  margin-left: 150px;
  background-color: #f1f1f1;
}
.content2 {
  position: absolute;
  top: 85px;
  left: 20%;
  width: 70%;
  height: 600px;
  /*background-color: #26a9de;*/
  background: url("../assets/about0.png") no-repeat;
  background-size: 100%;
}
.content3 {
  position: absolute;
  top:200px;
  left: 150px;
  width: 35%;
  height: 400px;
  font-weight: bold;
  color: white;
  background-color: rgba(59,113,186,0.8);
}
.content3 span {
  margin-top: 90px;
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
.content4 {
  width: 40%;
  height: 40%;
  position: absolute;
  left: 49%;
  top: 30%
}
.content4 img {
  width: 100%;
  height: 100%
}
.pic_con_one {
  height: 100%;
  height: 500px;
  background-color: white;
  position: relative;
}
.one_img_container {
  width: 50%;
  height: 80%;
  position: absolute;
  left: 25%;
}
.one_img_container img {
  width: 100%;
  height: 100%;
}
.one_shuoming_con {
  width: 100%;
  height: 150px;
  background-color: white;
  text-align: center;
  position: relative;
}
.one_shuoming_con p {
  width: 60%;
  position: absolute;
  left: 20%;
  font-size: 1.2rem;
  color: #666262;
}
.two_pic_container {
  width: 100%;
  height: 500px;
}
.two_head {
  height: 100px;
  /*background-color: #666262;*/
  text-align: center;
}
.two_head span {
  line-height: 100px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #656363;
}
.two_pic {
  width: 50%;
  height: 80%;
  margin-left: 25%;
}
.two_pic img {
  height: 100%;
  width: 100%;
}
.three_pic_container {
  width: 100%;
  height: 600px;
  background-color: white;
}
.three_head {
  height: 100px;
  /*background-color: #666262;*/
  text-align: center;
}
.three_head span {
  line-height: 100px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #656363;
}
.three_pic {
  width: 50%;
  height: 80%;
  margin-left: 25%;
}
.three_pic img {
  height: 100%;
  width: 100%;
}
</style>
