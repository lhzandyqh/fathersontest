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
          <li style="border-bottom:2px solid #26a9de"><a href="#">平台首页</a></li>
          <li><a href="#product">系列产品</a></li>
          <li><a href="#" @click="gotoNewspage">最新动态</a></li>
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
      <img src="../assets/homepage1.jpg" width="100%" height="100%">
      <!--      <Swiper v-if="list.length > 0">-->
<!--        <Slide v-for="(item,index) in list" :key="index">-->
<!--        </Slide>-->
<!--      </Swiper>-->
    </div>
    <div class="zg_news_container">
      <div class="zg_news_head">
        <span>高职诊改发展</span>
      </div>
      <div class="zg_news_content">
<!--        <img src="../assets/homepage2.jpg" width="100%" height="100%">-->
      </div>
    </div>
    <div class="system_container" id="product">
      <div class="system_head">
        <span>教学诊改平台相关系统</span>
      </div>
      <div class="first_layer">
        <div class="system_item">
          <div class="img_container">
            <img src="../assets/icon/keshihua.png">
          </div>
          <div class="img_title">
            <span>诊改可视化大屏平台</span>
          </div>
        </div>
        <div class="system_item">
          <div class="img_container">
            <img src="../assets/icon/zhiliang.png">
          </div>
          <div class="img_title">
            <span>内部质量管理系统</span>
          </div>
        </div>
        <div class="system_item">
          <div class="img_container">
            <img src="../assets/icon/jiaoshi.png">
          </div>
          <div class="img_title">
            <span>教师发展平台</span>
          </div>
        </div>
        <div class="system_item">
          <div class="img_container">
            <img src="../assets/icon/xuesheng.png">
          </div>
          <div class="img_title">
            <span>学生发展平台</span>
          </div>
        </div>
      </div>
      <div class="first_layer">
        <div class="system_item">
          <div class="img_container">
            <img src="../assets/icon/zichan.png">
          </div>
          <div class="img_title">
            <span>资产可视化平台</span>
          </div>
        </div>
        <div class="system_item">
          <div class="img_container">
            <img src="../assets/icon/zhuanye.png">
          </div>
          <div class="img_title">
            <span>专业管理系统</span>
          </div>
        </div>
        <div class="system_item">
          <div class="img_container">
            <img src="../assets/icon/keyan.png">
          </div>
          <div class="img_title">
            <span>科研管理系统</span>
          </div>
        </div>
        <div class="system_item">
          <div class="img_container">
            <img src="../assets/icon/gengduo.png">
          </div>
          <div class="img_title">
            <span>更多系统</span>
          </div>
        </div>
      </div>
    </div>
    <div class="features_container">
      <div class="features_title">
        <span>高职院校教学诊改</span>
      </div>
      <div class="features_p">
        <span>深度研究相关政策，并与高职院校积极合作，积累了信息化规划设计、标准建设、系统集成、项目实施、运行维护的经验，为高职院校教学诊改建设提供嗯咯完整的解决方案并取得了良好的效果</span>
      </div>
      <div class="features_detail">
        <div class="features_item">
          <div class="features_head">
            <span>内部质量保证体系建设能力</span>
          </div>
          <div class="features_pic">
            <img>
          </div>
          <div class="features_explain">
            <p>基于“学校、专业、课程、教师、学生”五大层面的内部质量诊断与改进信息化平台，形成自我诊断机制，实现学校治理能力现代化。</p>
          </div>
        </div>
        <div class="features_item">
          <div class="features_head">
            <span>校园大数据集成与融合能力</span>
          </div>
          <div class="features_pic">
            <img>
          </div>
          <div class="features_explain">
            <p>针对信息系统业务模块分散建设，各业务系统缺乏统一规划，造成数据孤岛问题，制定集成方案，构建校本数据中心，为学校内部质量分析提供数据支撑服务。</p>
          </div>
        </div>
        <div class="features_item">
          <div class="features_head">
            <span>大数据可视化及智能分析能力</span>
          </div>
          <div class="features_pic">
            <img>
          </div>
          <div class="features_explain">
            <p>为校领导、各级管理机构和教师，提供五大层面的实时数据分析展现，及时发现校园管理与教学活动中的问题，为学校领导决策提供辅助和依据。</p>
          </div>
        </div>
        <div class="features_item">
          <div class="features_head">
            <span>统一平台支撑服务能力</span>
          </div>
          <div class="features_pic">
            <img>
          </div>
          <div class="features_explain">
            <p>提供统一身份认证、统一消息服务、统一流程管理等统一服务，集成各业务系统的入口，打通各应用系统的边界，为用户提供综合服务门户平台。</p>
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
// import { Swiper, SwiperSlide} from 'vue-awesome-swiper';
// import Swiper from "swiper"
// import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'homePage',
  components: {
    // Swiper,
    // SwiperSlide
    // Slide
  },
  data () {
    return {
      // list: [1,2,3,4]
      swiperOption: {
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },
        loop: true, // 无限循环
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 9,
        loopAdditionalSlides: 100
      },
      imagesData: [{name: 'aaa'}, {anme: 'bbb'}, {name: 'ccc'}]
    }
  },
  // created activated
  created () {
    console.log('created')
  },
  destroyed () {
    console.log('destroyed')
  },
  mounted () {
  },
  methods: {
    gotoAboutUs: function () {
      console.log('去关于我们ddd')
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
  /*background-color: #44b7e7;*/
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
  /*background-color: pink;*/
  margin-left: 4%;
  box-shadow: #ccc 0px 5px 5px;
  cursor: pointer;
}
.features_head {
  text-align: center;
  margin-top: 5%;
}
.features_head span {
  color: #656363;
}
.features_pic {
  width: 100%;
  height: 40%;
  /*background: #42b983;*/
  text-align: center;
  margin-top: 6%;
}
.features_explain {
  width: 80%;
  margin-left: 10%;
  margin-top: 1%;
}
.features_explain p {
  font-size: 15px;
}
.features_pic img {
  width: 60%;
  height: 90%;
  background-color: white;
  margin-top: 2%;
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
