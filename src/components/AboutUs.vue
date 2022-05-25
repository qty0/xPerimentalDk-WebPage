<template>
<div class="wrapper">

  <div class="about-section color-bg1">
  <h1>xPerimental Denmark</h1>
</div>
  <div class="custom-shape-divider-top-1653507721 ">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>



<img src="under_dev.png" alt="under development">
<h2>This website is under development</h2>
  <div class="legal">
    <table>
      <tr>
        <td>Legal Name:</td>
        <td>Experimental Denmark I/S</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>Nygade 7 st tv, Horsens, 8700 Denmark</td>
      </tr>
      <tr>
        <td>CVR / VAT no.:</td>
        <td>DK43198963</td>
      </tr>
      <tr>
        <td>Contact Emial:</td>
        <td><a href="mailto:peterszabototh@gmail.com"> peterszabototh@gmail.com </a> </td>
      </tr>
    </table>
  </div>
<!-- 
<div class="custom-shape-divider-bottom-1653508494">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg> -->
<!-- </div>
      <h2 class="color-bg1 team" >Team</h2>
<div class="row">
  <About-Card 
  name="Peter L S Toth"
  title="Software Engineer"
  email="peterszabototh@gmail.com"
  image="https://media-exp1.licdn.com/dms/image/C4D03AQHtrcQIihnFHA/profile-displayphoto-shrink_800_800/0/1626400439684?e=1658966400&v=beta&t=wjuSiLmK_j4PvedD8_wEMO2YdKB_Vlo41xbkuMREj2c"
  description="
  Lorem ipsum dolor sit amet met konderinge 
  "
  /> -->

<!-- </div> -->
    </div>
</template>
<script lang="ts">
import AboutCard from './AboutCard.vue';
export default {
  name: 'AboutUs',
  components: {
    AboutCard,
  },
}
</script>
<style scoped>

img {
  width: 20%;
  display: block;
  margin-left: auto;
  margin-right: auto;

}
table {
  margin-left: auto;
  margin-right: auto;
  color: #d4f0fc;
}
a {
  color: #d4f0fc;

}
h1 {
  font-size: 500%;
}

h2 {
  font-size: 300%;
  padding-bottom: 20px;
  text-align: center;
  color: #d4f0fc;
}
.team{
  text-align: center;
  height: 50px;
  color: #d4f0fc;
  margin: 0;
}
.color-bg1 {
  background-color: #02567aa5;
}
.wrapper {
   margin: 0;
    box-sizing: border-box;

}

*, *:before, *:after {
  box-sizing: inherit;
}


.about-section {
  padding: 20px;
  text-align: center;
  color: #d4f0fc;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}


/* Curves */
.custom-shape-divider-top-1653507721 {
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1653507721 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 140px;
}

.custom-shape-divider-top-1653507721 .shape-fill {
    fill: #02567aa5;
}


.custom-shape-divider-bottom-1653508494 {
  position: absolute;
  bottom: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1653508494 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 140px;
}

.custom-shape-divider-bottom-1653508494 .shape-fill {
    fill: #02567aa5;
}
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

</style>