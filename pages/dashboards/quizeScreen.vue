<template class="templet1">
   <aside id="sidenav-main" class="sidenav navbar navbar-vertical z-index-3 navbar-expand-xs border-3 navbarTop ">
      <ul class="nav flex-column nav-pills " id="v-pills-tab " role="tablist" aria-orientation="vertical">
         <li v-for="(item, index) of input" :key="index" class="nav-item " role="presentation">
            <i class="" aria-hidden="true"></i>
            <button class="nav-link w-100" :class="index === 0 ? 'active tab1' : null" :id="`${item.name}-tab`"
               data-bs-toggle="pill" :data-bs-target="`#${item.name}`" type="button" role="tab"
               :aria-controls="`v-` + item.name" :aria-selected="index === 0">
               {{ index + 1 }}
            </button>
         </li>
      </ul>
   </aside>
   <main class="main-content continer12">
      <div class="w-100">

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
               <div class="modal-body z-99999">
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
         <div class="modal-dialog modal-xl text-bg-info d-flex justify-content-center">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">SI Reference Intervals</h5>
               </div>
               <div class="modal-body">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                     <li class="nav-item ml-5" role="presentation">
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

      <!-- <NavbarTransparent /> -->

      <div class="">
         <div class="row">
            <div class="tab-content " id="pills-tabContent">
               <div v-for="(item, index) of input" :key="index" class="tab-pane fade containt5"
                  :class="index === 0 ? 'show active ' : null" :id="item.name" role="tabpanel"
                  aria-labelledby="pills-home-tab">
                  <nav id="navbarBlur" class="bg-Navbar justify-content-between  navbar navbar-main">
                     <div class="text-center" @click="mark(item, id)">
                        <span>Item {{ index + 1 }} of {{ item.length1 }} </span>
                        <span class="d-block"><strong>Question Id</strong>:{{ item.id }}</span>

                     </div>
                     <ul class=" d-flex hedar4">
                        <li>
                           <div class="marked1" @click="mark(item, id)">
                              <a class=" text-body">
                                 <i class="fa fa-flag-o   margin9"></i>
                                 <span class="text-blod m-2 margin9">Mark</span>
                              </a>
                           </div>
                        </li>
                        <li class=" marked mx-3">
                           <div>
                              <a class=" text-body d-flex ml-2  ">
                                 <i class="fa fa-chevron-left margin9  "></i>
                              </a>
                              <span class="text-sm">Previous</span>

                           </div>

                        </li>
                        <li class=" marked mx-3">
                           <div class="">
                              <a class=" text-body d-flex ml-2  ">
                                 <i class="fa fa-chevron-right margin9  "></i>
                              </a>
                              <span class="text-sm">Next</span>

                           </div>
                        </li>
                        <li class=" marked mx-6">
                           <div @click="openFullscreen()">
                              <a class=" text-body d-flex ml-2  ">
                                 <i class="fa fa-external-link  margin9  "></i>
                              </a>
                              <span class="text-sm">Full Screen</span>
                           </div>

                        </li>
                        <li class="flex-row marked mx-4">
                           <div>
                              <a class=" text-body d-flex mx-2  ">
                                 <i class="fa fa-sticky-note-o  margin9  "></i>
                              </a>
                              <span class="text-sm mx-3 ">Note</span>
                           </div>

                        </li>
                        <li class="flex-row marked mx-6">
                           <div data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                              <a class=" text-body d-flex ml-2">
                                 <i class="fa fa-thermometer-quarter margin9"></i>
                              </a>
                              <span class="text-sm">Lab Value</span>
                           </div>

                        </li>
                        <li class="flex-row marked mx-6">
                           <div @click="zoomOut()">
                              <a class=" text-body d-flex ml-2  ">
                                 <i class="fa fa-search-minus  margin9  "></i>
                              </a>
                              <span class="text-sm">Zoom out</span>

                           </div>

                        </li>
                        <li class="flex-row marked mx-6">
                           <div @click="zoomI()">
                              <a class=" text-body d-flex ml-2">
                                 <i class="fa fa-search-plus  margin9  "></i>
                              </a>
                              <span class="text-sm">Zoom in</span>
                           </div>

                        </li>
                     </ul>
                  </nav>
                  <div class="row rowSecations">
                     <div class="col-md-8 mx-5 my-4 ">
                        <strong id="qustion" class="">{{ item.questiontext }}</strong>
                     </div>

                     <div class=" col-md-4 ">  
                     
                        <div id="accordionRental" class="accordion">

                           <ol type="A" id="a" class="qustion3 m-5 ">
                              <li>
                                 <div class="form-check">
                                    <i class=""></i>
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q1"
                                       :value="item.q1">
                                    <label class="form-check-label" :id="item.q1" :for="item.questiontext">
                                       <strong>{{ item.q1 }} </strong>
                                    </label>
                                 </div>
                              </li>
                              <li>
                                 <div class="form-check">
                                    <i class=""></i>
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q2"
                                       :value="item.q2">
                                    <label class="form-check-label" :id="item.q2" :for="item.questiontext">
                                       <strong>{{ item.q2 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <li>

                                 <div class="form-check">
                                    <i class=""></i>
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q3"
                                       :value="item.q3">
                                    <label class="form-check-label" :id="item.q3" :for="item.questiontext">
                                       <strong>{{ item.q3 }} </strong>
                                    </label>

                                 </div>
                              </li>
                              <li>
                                 <div class="form-check">
                                    <i class=""></i>
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q4"
                                       :value="item.q4">
                                    <label class="form-check-label" :id="item.q4" :for="item.questiontext">
                                       <strong> {{ item.q4 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <li>
                                 <div class="form-check ">
                                    <i class=""></i>
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q5"
                                       :value="item.q5">
                                    <label class="form-check-label" :id="item.q5" :for="item.questiontext">
                                       <strong> {{ item.q5 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <li v-if="!item.q6 === ''">
                                 <i class=""></i>
                                 <div class="form-check ">
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q6"
                                       :value="item.q6">
                                    <label class="form-check-label" :id="item.q6" :for="item.questiontext">
                                       <strong>{{ item.q6 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <li v-if="!item.q7 === ''">
                                 <i class=""></i>
                                 <div class="form-check ">
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q7"
                                       :value="item.q7">
                                    <label class="form-check-label" :id="item.q7" :for="item.questiontext">
                                       <strong>{{ item.q7 }}</strong>
                                    </label>
                                 </div>
                              </li>
                              <li v-if="!item.q8 == ''">

                                 <div class="form-check">
                                    <i class=""></i>
                                    <input class="form-check-input" type="radio" :name="item.questiontext" :id="item.q8"
                                       :value="item.q8">

                                    <label class="form-check-label" :id="item.q8" :for="item.questiontext">
                                       <strong>{{ item.q8 }}</strong><i class="fa fa-check" aria-hidden="true"></i>
                                    </label>
                                 </div>
                              </li>


                           </ol>
                           <button class="mb-0  submit m-5 mb-5 " :id="item.questiontext" type="button"
                              @click="showSwal(item)" title="Send">
                              Submit
                           </button>
                        </div>
                     </div>
                     <div class=" d-inline mx-5  my-4 col-md-4 image12  " v-if="!item.img == ''">
                        <img :src="item.img" width="800" alt="profile_image"
                           class="shadow-sm  border-radius-lg" />
                     </div>
                     <div class=" col-md-8 mb-5 mt-5 text-bg-danger mx-5   " v-if="item.togeleexplanation">
                        <div class="card borderIncorect">
                           <div class="card-header contintIncorct">
                              <h4 class="card-title text-danger">Incorrect Answer</h4>
                           </div>
                           <div class="card-body">
                              <p class="card-text">Correct answer</p>
                              <p class="card-text">{{ item.answer1 }}</p>
                           </div>
                        </div>
                     </div>
                     <div class=" col-md-12 mt-5 px-5" v-if="item.togeleexplanation">
                        <strong class="  mt-5 ">Explanation</strong>
                        <hr class="dropdown-divider" />
                     </div>
                     <div class=" col-md-12 mb-11 p-5 font-weight-bold" v-if="item.togeleexplanation">
                        {{ item.explanation }}
                     </div>
                     <div class=" col-md-8 mb-5 mt-5 text-bg-danger mx-5   " v-if="item.togeleexplanationCorect">
                        <div class="card contintcorct">
                           <div class="card-header contintIncorct">
                              <h4 class="card-title text-success">Answered Correctly </h4>
                           </div>
                           <div class="card-body">
                              <p class="card-text">Correct answer</p>
                              <p class="card-text">{{ item.answer1 }}</p>
                           </div>
                        </div>
                     </div>
                     <div class=" col-md-12 mt-5 px-5" v-if="item.togeleexplanationCorect">

                        <strong class="  mt-5 ">Explanation</strong>
                        <hr class="dropdown-divider" />
                     </div>
                     <div class="col-md-12  p-5 font-weight-bold incorcerctSecations" v-if="item.togeleexplanationCorect">
                        {{ item.explanation }}
                     </div>
                     <div class=" col-md-8 mb-5 mt-5 text-bg-danger mx-5   " v-if="item.omitted">
                        <div class="card omitted2">
                           <div class="card-header contintIncorct">
                              <h4 class="card-title text-info">Omitted Answer </h4>
                           </div>
                           <div class="card-body">
                              <p class="card-text">Correct answer</p>
                              <p class="card-text">{{ item.answer1 }}</p>
                           </div>
                        </div>
                     </div>
                     <div class=" col-md-12 mt-5 px-5" v-if="item.omitted">

                        <strong class="  mt-5 ">Explanation</strong>
                        <hr class="dropdown-divider" />
                     </div>
                     <div class="col-md-12 mb-10  p-5 font-weight-bold" v-if="item.omitted">
                        {{ item.explanation }}
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
      <footer class="footerA">
         <div class="timer   d-inline ">Block Time:</div>
         <div class="timer  d-inline " id="minutes">00</div>
         <div class="timer  d-inline ">:</div>
         <div class="timer  d-inline " id="seconds">00</div>
         <div class=" d-inline imageLogo   ">
            <img src="@/assets/img/viw2.jpeg" width="130" alt="profile_image" class="shadow-sm  border-radius-lg" />
         </div>
         <div class="timer d-inline  mx-6 endQuiz " data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            @click="savequize()">
            <i class="fa fa-ban text-2xl mx-2" aria-hidden="true"> </i>
            <strong>End Quiz</strong>

         </div>


      </footer>
   </main>
</template>
<script>
// function disableBack() { window.history.forward(); }
// setTimeout(disableBack(), 0);
// window.onunload = function () { null };
import Sidenav from "~~/examples/Sidenav";
import SidenavList from "../../examples/Sidenav/SidenavList.vue";

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
import logo from "../../assets/img/viweAcadmy.png";
import { mapGetters } from "vuex";



export default {
   name: "quizeScreen",
   components: { SidenavList, Sidenav, OutlinedCounterCard, DoughnutChart, MiniStatisticsCard, AccordionItem, AppFooter, PricingCard, NavbarTransparent, headerImg, TodoList, InfoCard, Navbar, FooterCentered, DefaultInfoCard },

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
            labels: ["Correct Answer", "Omitted", "Incorrect Answer"],
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
      openFullscreen() {
         var elem = document.documentElement;
         if (elem.requestFullscreen) {
            elem.requestFullscreen();
         } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
         } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
         }
      },

      savequize() {
         this.series.push(this.correctAnswer, this.omitedte, this.incorrectAnswer);
         this.rusalut = (this.correctAnswer / this.array.length) * 100
      },
      endQuize() {
         const data = [];
         var today = new Date();
         let insatrQuastion = {
            correctAnswer: this.correctAnswer,
            incorrectAnswer: this.incorrectAnswer,
            omitedte: this.omitedte,
            title: this.titleq,
            yourScore: (this.correctAnswer / this.array.length) * 100,
            qusationNumber: this.array.length,
            data: today.toLocaleString('en-GB', { timeZone: 'UTC' }),
            time: this.startIntariver1
         }
         clearInterval(this.startIntariver1)
         data.push(insatrQuastion)
         $fetch("https://goldfish-app-o7qzt.ondigitalocean.app/api/user/endquize/" + this.getId, {
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
         $fetch("https://goldfish-app-o7qzt.ondigitalocean.app/api/user/note/" + this.id.id, {
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
      mark(res) {
         var element2 = document.getElementById(`${res.name}-tab`);
         element2.previousElementSibling.style.className = '';
         element2.previousElementSibling.classList.add("spinner1");
         element2.previousElementSibling.classList.add("fa");
         element2.previousElementSibling.classList.add("fa-flag");
         console.log(element2);
      },
      showSwal(res) {
         var ele1 = document.getElementsByName(res.questiontext);
         for (let i = 0; i < ele1.length; i++) {
            // document.getElementById(res.questiontext).disabled = true;
            ele1[i].setAttribute("disabled", "")
            if (ele1[i].checked) {



               if (ele1[i].value === res.answer1) {
                  var ele12 = ele1[i].previousElementSibling;
                  var element2 = document.getElementById(`${res.name}-tab`);
                  element2.previousElementSibling.classList.add("corectAnswer");
                  element2.previousElementSibling.classList.add("fa");
                  element2.previousElementSibling.classList.remove("spinner1");
                  element2.previousElementSibling.classList.remove("fa-flag");
                  element2.previousElementSibling.classList.add("fa-check");
                  ele12.classList.add("corectAnswer2");
                  ele12.classList.add("fa");
                  ele12.classList.add("fa-check");
                  this.correctAnswer++;
                  res.togeleexplanationCorect = true

               } else if (!(ele1[i].value === res.answer1)) {
                  ele1[i].setAttribute("disabled", "")
                  var element3 = document.getElementById(`${res.name}-tab`);
                  var name = ele1[i].previousElementSibling;
                  name.classList.add("notcorectAnswer2");
                  name.classList.add("fa");
                  name.classList.add("fa-times");
                  element3.style.className = '';
                  element3.previousElementSibling.classList.remove("spinner1");
                  element3.previousElementSibling.classList.remove("fa-flag");
                  element3.previousElementSibling.classList.add("fa");
                  element3.previousElementSibling.classList.add("fa-times");
                  element3.previousElementSibling.classList.add("notcorectAnswer");
                  this.incorrectAnswer++;
                  this.omitedte -= 1
                  res.togeleexplanation = true;

               } else {


               }
            } else {

               if (ele1[i].value === res.answer1) {
                  res.omitted = true;
                  this.omitedte += 1
                  var element3 = document.getElementById(`${res.name}-tab`);
                  element3.previousElementSibling.classList.add("omitted");
                  element3.previousElementSibling.classList.add("fa");
                  element3.previousElementSibling.classList.add("fa-minus-circle");
                  var ele12 = ele1[i].previousElementSibling;
                  console.log(ele12);
                  ele12.classList.add("corectAnswer2");
                  ele12.classList.add("fa");
                  ele12.classList.add("fa-check");


               }
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
            length1: this.array.length,
            togeleexplanation: false,
            togeleexplanationCorect: false,
            omitted: false,
            id: this.array[index].id2,
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
            img: this.array[index].question[0].img,
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
<style scoped>
html {
   background-image: linear-gradient(#fcfcfc 0px, #d7dced 100%);
}

.templet1 {
   background-image: linear-gradient(#fcfcfc 0px, #d7dced 100%) !important;

}

.hedar4 {
   list-style-type: none;
}

.corectAnswer {
   color: rgb(34, 234, 3) !important;
   top: 6px;
   position: absolute;
   left: 56px;
}
.image12{
   transition: all .2s ease-in-out;
}
.image12:hover{
   transform: scale(1.1);
}


.corectAnswer2 {
   color: green !important;
}

.endQuiz {
   cursor: pointer;
   padding: 10px;

}

.endQuiz:hover {
   background-color: #283294;

}

.notcorectAnswer {
   color: rgb(234, 3, 3) !important;
   top: 6px;
   position: absolute;
   left: 56px;
}
.mb-11 {
    margin-bottom: 27rem !important;
}

.notcorectAnswer2 {
   color: rgb(234, 3, 3) !important;
}

.skapid2 {
   background: linear-gradient(rgba(4, 9, 145, 0.4), rgb(34, 3, 234)) !important;
}

.nav-link {
   margin: 0 3px;
   padding: 2px 20px;
   font-weight: 500;
}

.navContiner {
   justify-content: space-around !important;
}

.nav-item:nth-child(even) {
   background-color: #ccc;
   position: relative;
}

.nav-item:nth-child(odd) {
   background-color: #ffffff;
   position: relative;
}

.nav-link {
   border-radius: 0 !important;
   margin: 0 !important;

}


.active {
   background-color: rgb(85, 144, 204) !important;

}

.borderIncorect {
   border-left: red 5px solid;
   border-radius: 0;
   box-shadow: -3px 1px 13px 0px rgba(0, 0, 0, 0.75);
   background-color: #ebedf5
}

.contintcorct {
   border-left: green 5px solid;
   border-radius: 0;
   box-shadow: -3px 1px 13px 0px rgba(0, 0, 0, 0.75);
   background-color: #ebedf5
}

.contintIncorct {
   background-color: #ebedf5
}

.timer {
   display: inline !important;
   color: white;
   margin-bottom: 50px;
}


.submit {
   background-color: #0067a9;
   color: white;
   font-weight: bold;

}

.margin9 {
   margin-left: 20px;
   color: #fcfcfc;
   cursor: pointer;
}

.spinner1 {
   color: #d4e60b !important;
   top: 8px;
   position: absolute;
   left: 50px;
}

.submit1 {
   background-color: #15234d;
   color: white;
}

.ooo {
   background: linear-gradient(rgba(4, 9, 145, 0.4), rgb(34, 3, 234)) !important;
}

.rowSecations {
   max-height: 1700px;
   overflow: hidden;
}

.bg-Navbar {
   background-color: #3852a4;
   margin-left: 0;
   color: white;
   justify-content: space-around !important
}

.navbarTop {
   width: 168px;
   position: fixed !important;
   bottom: 0;
   overflow: hidden;
   background-image: linear-gradient(#fcfcfc 0px, #d7dced 100%) !important;
   border: #717582 solid 1px;

}

.zoom {
   zoom: 2;
   -moz-transform: scale(2);
   -moz-transform-origin: 0 0;
}

.color4 {
   color: white;
}

.omitted {
   color: rgb(23, 201, 255);
   top: 6px;
   position: absolute;
   left: 56px;

}

.imageLogo {
   margin: 33%;
}

.omitted2 {
   border-left: rgb(23, 201, 255) 5px solid;
   border-radius: 0;
   box-shadow: -3px 1px 13px 0px rgba(0, 0, 0, 0.75);
   background-color: #ebedf5
}

.cahrt1 {
   margin-left: 30%;
   margin-top: 100px;
}

.infoCard {
   border-left: red 7px solid;
   border-radius: 0 !important;
   color: red;

}

.qustion3 {
   border: #5590cc solid 1px;
   border-bottom: solid 5px #5590cc;


}

.time {
   background-color: #f0b52b;
   color: #15234d;
   padding: 5px;
   border-radius: 20px;


}

.containt5 {
   background-image: linear-gradient(#fcfcfc 0px, #d7dced 100%) !important;

}

.footerA {
   overflow: hidden;
   background-color: #3852a4;
   position: fixed;
   bottom: 0;
   width: 100%;
}

.continer12 {
   margin-left: 168px !important;
   background-image: linear-gradient(#fcfcfc 0px, #d7dced 100%) !important;
   height: 100%;
}


.stiker {

   height: 200px;
}

.marked {
   font-size: 17px;
   color: white;
}

.marked1 {
   font-size: 25px;
   cursor: pointer;

}

.marked1 :hover {
   background-color: #283294;

}

.marked :hover {
   background-color: #283294;

}
</style>


