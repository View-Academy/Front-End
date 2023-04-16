<template onLoad="noBack();" onpageshow="if (event.persisted) noBack();" onUnload="">
   <main class="main-content position-relative max-height-vh-100 h-100 ">
      <div class="mt-2">
         <nav id="navbarBlur" :class="
            navStore.navFixed
               ? `navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none position-sticky left-auto top-2 z-index-sticky ${navStore.darkMode ? 'bg-default' : 'bg-white'
               }`
               : `navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none`
         " v-bind="$attrs" data-scroll="true" class="bg-Navbar justify-content-center ">
            <div class="px-3 py-2 container-fluid  ">
               <div class="display-6 display-inline " id="minutes">00</div>
               <div class="display-6  ">:</div>
               <div class="display-6 display-inline " id="seconds">00</div>
               <div id="navbar" class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4">
                  <div class="pe-md-3 d-flex  ms-md-auto">
                  </div>
                  <ul class="navbar-nav">
                     <li class=" nav-item d-flex align-items-center marked">
                        <a class="p-0 nav-link " data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                           <i class="fa fa-thermometer-empty cursor-pointer fixed-plugin-button-nav marked"> <span
                                 class="d-sm-inline d-none px-2 marked">Lab Values</span></i>
                        </a>
                     </li>
                     <li class=" nav-item d-flex align-items-center marked">
                        <a class="p-0 nav-link " type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                           @click="savequize()">
                           <i class="fa fa-ban cursor-pointer fixed-plugin-button-nav marked"> <span
                                 class="d-sm-inline d-none px-2 marked">End Quiz</span></i>
                        </a>
                     </li>
                     <li class="nav-item dropdown d-flex align-items-center pe-2 marked">
                        <a id="dropdownMenuButton" href="#" :class="`p-0 nav-link text-white ${showMenu ? 'show' : ''}`"
                           data-bs-toggle="dropdown" aria-expanded="false" @click="showMenu = !showMenu">
                           <i class="fa fa-search-plus  " @click="zoomI()" :class="
                              navStore.darkMode || !navStore.navFixed
                                 ? 'text-white'
                                 : 'text-dark opacity-8'
                           "> <span class="d-sm-inline d-none px-2">Zoom In</span></i>
                        </a>
                     </li>
                     <li class="nav-item dropdown d-flex align-items-center pe-2 marked">
                        <a id="dropdownMenuButton" href="#" :class="`p-0 nav-link text-white ${showMenu ? 'show' : ''}`"
                           data-bs-toggle="dropdown" aria-expanded="false" @click="showMenu = !showMenu">
                           <i class="fa fa-search-minus  " @click="zoomOut()" :class="
                              navStore.darkMode || !navStore.navFixed
                                 ? 'text-white'
                                 : 'text-dark opacity-8'
                           "> <span class="d-sm-inline d-none px-2">Zoom Out</span></i>
                        </a>
                     </li>

                  </ul>
               </div>
            </div>
         </nav>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <nav>
                     <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                           type="button" role="tab" aria-controls="nav-home" aria-selected="true">Blode</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                           type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Serum</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                           type="button" role="tab" aria-controls="nav-contact"
                           aria-selected="false">Cerebrospinal</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                           type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Urine and
                           BMI</button>
                     </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent">
                     <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        ...</div>
                     <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...
                     </div>
                     <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...
                     </div>
                     <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...
                     </div>
                  </div>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
               </div>
            </div>
         </div>
      </div>

      <div class="modal fade" id="staticBackdrop" tabindex="-1" data-bs-backdrop="static"
         aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-fullscreen d-flex justify-content-center">
            <div class="modal-content">
               <div class="modal-header text-center">
                  <h5 class="modal-title text-center" id="exampleModalLabel"> {{ titleq }}</h5>
               </div>
               <div class="modal-body">
                  <OutlinedCounterCard prefix="%" :count="rusalut" :title="rusalut >= 50 ? 'Successful' : 'Fail'"
                     class="d-inline " />


                  <apexchart :width="width" :options="chartOptions" :series="series" class="cahrt1"></apexchart>
               </div>
               <div class="modal-footer">
                  <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                  <button type="button" class="btn btn-primary" @click="endQuize()" data-bs-dismiss="modal">Save
                     changes</button>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="staticBackdrop1" tabindex="-1" data-bs-backdrop="static"
         aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl d-flex justify-content-center">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">SI Reference Intervals</h5>
               </div>
               <div class="modal-body">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                     <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                           data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                           aria-selected="true">Blood</button>
                     </li>
                     <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                           data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                           aria-selected="false">Serum</button>
                     </li>
                     <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                           data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                           aria-selected="false">Cerebrospinal</button>
                     </li>
                     <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-v-tab" data-bs-toggle="pill" data-bs-target="#pills-v"
                           type="button" role="tab" aria-controls="pills-v" aria-selected="false">Urine and BMI</button>
                     </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                     <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab">
                        <table class="table">
                           <thead>
                              <tr>
                                 <th scope="col">Blood, Plasma, Serum</th>
                                 <th scope="col">Reference Range</th>

                              </tr>
                           </thead>
                           <tbody>
                              <tr>

                                 <td>Erythrocyte count
                                    Male
                                    Female</td>
                                 <td>4.3-5.9 million/mm3
                                    3.5-5.5 million/mm3</td>
                              </tr>
                              <tr>
                                 <td>Erythrocyte sedimentation rate (Westergren)
                                    Male
                                    Female</td>
                                 <td>0-15 mm/h
                                    0-20 mm/h</td>
                              </tr>
                              <tr>
                                 <td>Hematocrit
                                    Male
                                    Female</td>
                                 <td>41%-53%
                                    36%-46%</td>
                              </tr>
                              <tr>
                                 <td>Amylase</td>
                                 <td>
                                    25-125 U/L</td>
                              </tr>
                              <tr>
                                 <td>Hemoglobin, blood
                                    Male
                                    Female</td>
                                 <td>
                                    13.5-17.5 g/dL
                                    12.0-16.0 g/dL </td>
                              </tr>


                           </tbody>
                        </table>
                     </div>
                     <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <table class="table">
                           <thead>
                              <tr>
                                 <th scope="col">Serum</th>
                                 <th scope="col">Reference Range</th>

                              </tr>
                           </thead>
                           <tbody>
                              <tr>

                                 <td>Alanine aminotransferase (ALT)</td>
                                 <td>10-40 U/L</td>
                              </tr>
                              <tr>
                                 <td>Aspartate aminotransferase (AST)</td>
                                 <td>12-38 U/L</td>
                              </tr>
                              <tr>
                                 <td>Alkaline phosphatase</td>
                                 <td>25-100 U/L</td>
                              </tr>
                              <tr>
                                 <td>Amylase</td>
                                 <td>
                                    25-125 U/L</td>
                              </tr>
                              <tr>
                                 <td>Bilirubin
                                    Total
                                    Direct</td>
                                 <td> 0.1-1.0 mg/dL
                                    0.0-0.3 mg/dL </td>
                              </tr>
                              <tr>
                                 <td>Calcium</td>
                                 <td> 8.4-10.2 mg/dL</td>
                              </tr>

                           </tbody>
                        </table>
                     </div>
                     <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <table class="table">
                           <thead>
                              <tr>
                                 <th scope="col">Cerebrospinal Fluid</th>
                                 <th scope="col">Reference Range</th>

                              </tr>
                           </thead>
                           <tbody>
                              <tr>

                                 <td>Cell count</td>
                                 <td>0-5/mm^3</td>
                              </tr>
                              <tr>
                                 <td>Chloride</td>
                                 <td>118-132 mEq/L</td>
                              </tr>
                              <tr>
                                 <td>Gamma globulin</td>
                                 <td>3%-12% of total proteins</td>
                              </tr>
                              <tr>
                                 <td>Glucose</td>
                                 <td>
                                    40-70 mg/dL</td>
                              </tr>
                              <tr>
                                 <td>Pressure</td>
                                 <td> 70-180 mm H2O</td>
                              </tr>
                              <tr>
                                 <td>Proteins, total</td>
                                 <td> less than 40 mg/dL</td>
                              </tr>

                           </tbody>
                        </table>
                     </div>
                     <div class="tab-pane fade" id="pills-v" role="tabpanel" aria-labelledby="pills-v-tab">
                        <table class="table">
                           <thead>
                              <tr>
                                 <th scope="col">Urine</th>
                                 <th scope="col">Reference Range</th>

                              </tr>
                           </thead>
                           <tbody>
                              <tr>

                                 <td>Calcium</td>
                                 <td>100-300 mg/24 h</td>
                              </tr>
                              <tr>
                                 <td>Creatine clearance
                                    Male
                                    Female</td>
                                 <td>97-137 mL/min
                                    88-128 mL/min</td>
                              </tr>
                              <tr>
                                 <td>Osmolality</td>
                                 <td>50-1200 mOsmol/kg H2O</td>
                              </tr>
                              <tr>
                                 <td>Oxalate</td>
                                 <td>8-40 μg/mL</td>
                              </tr>
                              <tr>
                                 <td>Proteins, total</td>
                                 <td> less than 150 mg/24 h </td>
                              </tr>
                              <tr>
                                 <td>17-Hydroxycorticosteroids
                                    Male
                                    Female</td>
                                 <td> 3.0-10.0 mg/24 h
                                    2.0-8.0 mg/24 h </td>
                              </tr>

                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
               <div class="modal-footer">
                  <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
               </div>
            </div>
         </div>
      </div>
      <div class="d-flex justify-content-between align-items-center mt-2">
         <div class="mt-4 col-lg-3 col-md-6 col-12 mt-md-0 mx-4 right-auto">
            <MiniStatisticsCard class="bg-success" :title="{ text: 'Correct Answer', color: 'text-white' }"
               :value="{ text: correctAnswer, color: 'text-white' }" :icon="{
                  component: '',
                  background: 'bg-success',
                  shape: 'rounded-circle',
               }" />
         </div>
         <div class="mt-4 col-lg-3 col-md-6 col-12 mt-md-0 mx-4">
            <MiniStatisticsCard class="bg-info" :title="{ text: ' Omitted', color: ' text-white' }"
               :value="{ text: omitedte, color: 'text-white' }" :icon="{
                  component: '',
                  background: 'bg-info',
                  shape: 'rounded-circle',
               }" />
         </div>
         <div class="mt-4 col-lg-3 col-md-6 col-12 mt-md-0 mx-4">
            <MiniStatisticsCard class="bg-danger" :title="{ text: 'Incorrect Answer', color: ' text-white' }"
               :value="{ text: incorrectAnswer, color: 'text-white' }" :icon="{
                  component: '',
                  background: 'bg-danger',
                  shape: 'rounded-circle',
               }" />
         </div>
      </div>
      <!-- <NavbarTransparent /> -->
      <div class="mt-2 row">

         <div class="mx-auto text-center col-md-6">
            <h2>{{ titleq }}</h2>
         </div>
      </div>
      <div class="container-fluid">
         <div class=" row">
            <ul class="nav nav-tabs" id="pills-tab" role="tablist">
               <li v-for="(item, index) of input" :key="index" class="nav-item " role="presentation">
                  <button class="nav-link mb-2" :class="index === 0 ? 'active' : null" :id="`${item.name}-tab`"
                     data-bs-toggle="pill" :data-bs-target="`#${item.name}`" type="button" role="tab"
                     :aria-controls="item.name" :aria-selected="index === 0">
                     {{ item.name }}
                  </button>
               </li>
            </ul>
            <div class="tab-content mt-2" id="pills-tabContent">
               <div v-for="(item, index) of input" :key="index" class="tab-pane fade"
                  :class="index === 0 ? 'show active' : null" :id="item.name" role="tabpanel"
                  aria-labelledby="pills-home-tab">
                  <div class="row">
                     <div class=" col-md-12">
                        <div id="accordionRental" class="accordion">
                           <strong id="qustion" class="mt-5">{{ item.questiontext }}</strong>
                           <ol type="A" id="a">
                              <li>
                                 <div class="form-check mt-5 ">
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q1"
                                       :value="item.q1">
                                    <label class="form-check-label" :id="item.q1" :for="item.questiontext">
                                       <strong>{{ item.q1 }} </strong>
                                    </label>
                                 </div>
                              </li>
                              <li>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q2"
                                       :value="item.q2">
                                    <label class="form-check-label" :id="item.q2" :for="item.questiontext">
                                       <strong>{{ item.q2 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <li>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q3"
                                       :value="item.q3">
                                    <label class="form-check-label" :id="item.q3" :for="item.questiontext">
                                       <strong>{{ item.q3 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <li>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q4"
                                       :value="item.q4">
                                    <label class="form-check-label" :id="item.q4" :for="item.questiontext">
                                       <strong> {{ item.q4 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <li>
                                 <div class="form-check ">
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q5"
                                       :value="item.q5">
                                    <label class="form-check-label" :id="item.q5" :for="item.questiontext">
                                       <strong> {{ item.q5 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <li v-if="!item.q6 == ''">
                                 <div class="form-check ">
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q6"
                                       :value="item.q6">
                                    <label class="form-check-label" :id="item.q6" :for="item.questiontext">
                                       <strong>{{ item.q6 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <li v-if="!item.q7 == ''">
                                 <div class="form-check ">
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q7"
                                       :value="item.q7">
                                    <label class="form-check-label" :id="item.q6" :for="item.questiontext">
                                       <strong>{{ item.q7 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <li v-if="!item.q8 == ''">
                                 <div class="form-check ">
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q8"
                                       :value="item.q8">
                                    <label class="form-check-label" :id="item.q8" :for="item.questiontext">
                                       <strong>{{ item.q8 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <button class="mb-0 btn submit  ms-auto mb-3" :id="item.questiontext" type="button"
                                 @click="showSwal(item)" title="Send">
                                 Submit
                              </button>
                              <div class="input-group mb-3">
                                 <span class="input-group-text">YOUR NOTE</span>
                                 <textarea class="form-control" v-model="Note" placeholder="Leave a comment here"
                                    id="floatingTextarea2" style="height: 100px"></textarea>
                              </div>

                              <div class="mt-4 button-row d-flex col-12">
                                 <button class="mb-0 btn submit1 js-btn-prev" @click="note(item, Note)">
                                    Save The Note
                                 </button>
                              </div>
                           </ol>
                        </div>
                     </div>
                     <div class=" col-md-12" v-if="item.togeleexplanation">
                        <InfoCard title="Explanation" :description="item.explanation"
                           :badge="{ text: ` ${item.answer1} `, }" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <footer class=" footerA">


         <div class="row">
            <div class="mx-auto  text-center col-8">
               <p class="color4">
                  Copyright © {{ new Date().getFullYear() }} Viwe Acadmy
               </p>
            </div>

         </div>
      </footer>


   </main>
</template>
<script>
// function disableBack() { window.history.forward(); }
// setTimeout(disableBack(), 0);
// window.onunload = function () { null };
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
import PricingCard from "@/pagesComponents/pages/pricing/PricingCard.vue";
import AppFooter from "~~/examples/Footer/Centered.vue";
import InfoCard from "~~/examples/cards/InfoCard.vue";
import AccordionItem from "@/pagesComponents/pages/pricing//AccordionItem.vue";
import TodoList from "@/pagesComponents/pages/projects/TodoList.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import Navbar from "~~/examples/Navbar";
import headerImg from "@/assets/img/pricing-header-bg.jpg";
import FooterCentered from "@/examples/Footer/Centered.vue";
import DefaultInfoCard from "~~/examples/cards/DefaultInfoCard.vue";
import MiniStatisticsCard from "~~/examples/cards/MiniStatisticsCard.vue";
import { useNavStore } from "~~/stores/NavStore";
import DoughnutChart from "~~/examples/charts/DoughnutChart.vue";
import OutlinedCounterCard from "~~/pagesComponents/ecommerce/referral/OutlinedCounterCard.vue";
import { mapGetters } from "vuex";



export default {
   name: "quizeScreen",
   components: { OutlinedCounterCard, DoughnutChart, MiniStatisticsCard, AccordionItem, AppFooter, PricingCard, NavbarTransparent, headerImg, TodoList, InfoCard, Navbar, FooterCentered, DefaultInfoCard },

   props: ["data1"],
   data() {
      return {
         activeClass: "js-active position-relative",
         data: [],
         id: [],
         inputhalooo: [],
         array: [],
         input: [],
         correctAnswer: 0,
         incorrectAnswer: 0,
         navStore: "",
         totalSeconds: 0,
         startIntariver1: 0,
         titleq: "",
         coc: "",
         Note: "",
         omitedte: 0,
         array: Array,
         array2: [],
         rusalut: 0,
         chartOptions: {

            chart: {
               type: "donut",
            },
            colors: ["#2ecc71", "#3498db", "#f53939"],
            labels: ["Correct Answer", "Omitedte", "Incorrect Answer"],
            dataLabels: {
               enabled: true,
            },
            legend: {
               show: true,
            },
            responsive: [
               {
                  breakpoint: 480,
                  options: {
                     chart: {
                        width: 780,
                     },
                  },
               },
            ],

         },
         series: [],
         width: 700


      };
   },

   computed: {
      ...mapGetters(["getUserInfo", "getId"])
   },
   methods: {
      savequize() {
         this.series.push(this.correctAnswer, this.omitedte, this.incorrectAnswer);
         this.rusalut = (this.correctAnswer / this.array.length) * 100

      },
      endQuize() {

         const data = [];
         var today = new Date();
         let insatrQuastion = {
            correctAnswer: this.correctAnswer,
            omitedte: this.omitedte,
            incorrectAnswer: this.incorrectAnswer,
            title: this.titleq,
            yourScore: (this.correctAnswer / this.array.length) * 100,
            qusationNumber: this.array.length,
            data: today.toLocaleString('en-GB', { timeZone: 'UTC' }),
            time: this.startIntariver1




         }
         clearInterval(this.startIntariver1)
         data.push(insatrQuastion)
         $fetch("http://localhost:8000/api/user/endquize/" + this.getId, {
            method: 'POST',
            body: data
         }).then(res => {

            navigateTo('/dashboards/default')



         })

      },
      zoomI() {

         document.body.style.fontSize = 1.5 + "em";
      },
      zoomOut() {
         document.body.style.fontSize = 1 + "em";
      },
      note(res, note) {
         console.log(note);
         var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

         var today = new Date();
         var data = {
            Note: note,
            labelId: res.labelId,
            questiontext: res.questiontext,
            explanation: res.explanation,
            correctAnswer: res.answer1,
            Date: today.toLocaleString('en-GB', { timeZone: 'UTC' })
         }
         $fetch("http://localhost:8000/api/user/note/" + this.id.id, {
            method: 'POST',
            body: data
         }).then(res => {
            this.Note = ""


            this.$swal({
               title: "Saved successfully!",
               text: "The Notes is Saved",
               icon: "success",

               customClass: {
                  confirmButton: "btn bg-gradient-success",
               },
               buttonsStyling: false,


            });


         })
      },
      myTimer() {
         var minutesLabel = document.getElementById("minutes");
         var secondsLabel = document.getElementById("seconds");
         ++this.totalSeconds;
         secondsLabel.innerHTML = this.pad(this.totalSeconds % 60);
         minutesLabel.innerHTML = this.pad(parseInt(this.totalSeconds / 60));
      },
      pad(val) {
         var valString = val + "";
         if (valString.length < 2) {
            return "0" + valString;
         } else {
            return valString;
         }
      },
      correctAnswer2(el, res) {
         const v = "";
         switch (el.value === res.answer1) {
            case true:
               var ele12 = ele1[i].nextElementSibling;
               v = ele12.classList.add("corectAnswer");
         }
         console.log(v);
      },
      showSwal(res) {
         var ele1 = document.getElementsByName(res.questiontext);
         for (let i = 0; i < ele1.length; i++) {
            document.getElementById(res.questiontext).disabled = true;
            ele1[i].setAttribute("disabled", "")
            if (ele1[i].checked) {
               switch (ele1[i].checked) {
                  case true:
                     switch (ele1[i].value === res.answer1) {
                        case true:
                           var ele12 = ele1[i].nextElementSibling;
                           var element2 = document.getElementById(`${res.name}-tab`);
                           element2.classList.add("corectAnswer");
                           ele12.classList.add("corectAnswer");
                           this.correctAnswer++;
                           break;
                        case false:
                           var name = ele1[i].nextElementSibling;
                           name.classList.add("notcorectAnswer");
                           var element3 = document.getElementById(`${res.name}-tab`);
                           element3.classList.add("notcorectAnswer");
                           this.incorrectAnswer++;
                           this.omitedte -= 1
                           res.togeleexplanation = true;
                           break;
                        default:
                     }
                     break;
                  // case false:
                  // var element3 = document.getElementById(`${res.name}-tab`);
                  // element3.classList.add("skapid2");
                  // console.log(element3);
                  // break;
                  default:


               }

            } else if (ele1[i].value === res.answer1) {
               this.omitedte += 1
               res.togeleexplanation = true;
               var ele12 = ele1[i].nextElementSibling;
               ele12.classList.add("corectAnswer");

            } else {

            }
         }
         // if (!ele1.checked) {
         // }
      },
   },


   mounted() {
      var x = sessionStorage.getItem("info");
      this.$store.dispatch("yourAction", JSON.parse(x));
      console.log(this.getId);
      this.startIntariver1 = 0
      this.startIntariver1 = clearTimeout(this.myTimer)
      this.startIntariver1 = setInterval(this.myTimer, 1000)
      this.navStore = useNavStore();
      this.array = JSON.parse(localStorage.getItem("authToken"));
      this.id = JSON.parse(sessionStorage.getItem("info"));
      this.titleq = localStorage.getItem("title");

      JSON.stringify(this.array)
      for (let index = 0; index < this.array.length; index++) {
         this.input.push({
            labelId: "Q" + Date.now(),
            togeleexplanation: false,
            id: "Q" + index,
            name: "Q" + (index + 1),
            questiontext: this.array[index].question[0].questiontext,
            q1: this.array[index].question[0].Answer1,
            q2: this.array[index].question[0].Answer2,
            q3: this.array[index].question[0].Answer3,
            q4: this.array[index].question[0].Answer4,
            q5: this.array[index].question[0].Answer5,
            q6: this.array[index].question[0].Answer6,
            q7: this.array[index].question[0].Answer7,
            q8: this.array[index].question[0].Answer8,
            answer1: this.array[index].question[0].Answer,
            explanation: this.array[index].question[0].explanation,
         })
      }
   }


}
definePageMeta({
   layout: false
});

</script>
<style>
.corectAnswer {
   background: linear-gradient(rgba(33, 220, 12, 0.4), rgb(34, 234, 3)) !important;
}

.notcorectAnswer {
   background: linear-gradient(rgba(57, 2, 2, 0.4), rgb(234, 3, 3)) !important;
}

.skapid2 {
   background: linear-gradient(rgba(4, 9, 145, 0.4), rgb(34, 3, 234)) !important;
}

.nav-link {
   margin: 0 6px;
   padding: 5px 20px;
}

.submit {
   background-color: #f0b52b;
   color: white;
}

.spinner1 {
   color: #f0b52b;
}

.submit1 {
   background-color: #15234d;
   color: white;
}

.ooo {
   background: linear-gradient(rgba(4, 9, 145, 0.4), rgb(34, 3, 234)) !important;
}

.bg-Navbar {
   background-color: #435ec7;
   border-radius: 9px;
   color: white;

}

.zoom {
   zoom: 2;
   -moz-transform: scale(2);
   -moz-transform-origin: 0 0;
}
.color4{
   color: white;
}

.cahrt1 {
   margin-left: 30%;
   margin-top: 100px;
}

.time {
   background-color: #f0b52b;
   color: #15234d;
   padding: 5px;
   border-radius: 20px;


}

.footerA {
   background-color: #435ec7;
   height: 30px;
   width: 100%;
   margin: auto;
   position: absolute;


}



.stiker {

   height: 200px;
}

.marked {
   font-size: 30px;
   color: white;
}

.marked :hover {
   color: #f0b52b;
}

.active {

   color: #15234d;
}
</style>


