<template>
   <div class="py-4 container-fluid">
      <div class="row">
         <div class="col-lg-6 col-12 d-flex ms-auto">
            <a href="javascript:;" class="btn btn-icon btn-outline-white ms-auto">
               <span class="btn-inner--text"></span>
               <span class="btn-inner--icon ms-2">
               </span>
            </a>
            <div class="dropleft ms-3">
            </div>
         </div>
      </div>
      <div class="row">
         <div class="mb-4 col-xl-3 col-sm-6 mb-xl-0">
            <MiniStatisticsCard title="Total Tests" :value="`${length}`" :percentage="{ value: '+55%', color: 'success' }"
               :icon="{
                  component: 'ni ni-circle-08',
                  background: 'bg-gradient-dark',
               }" />
         </div>
         <div class="mb-4 col-xl-3 col-sm-6 mb-xl-0">
            <MiniStatisticsCard title="Total Correct" :value="`${corect }`" :percentage="{ value: '+3%', color: 'success' }" :icon="{
               component: 'ni ni-world',
               background: 'bg-gradient-dark',
            }" />
         </div>
         <div class="mb-4 col-xl-3 col-sm-6 mb-xl-0">
            <MiniStatisticsCard title="Total Incorrect" :value="`${Incorectcorect}`" :percentage="{ value: '-2%', color: 'danger' }"
               :icon="{
                  component: 'ni ni-watch-time',
                  background: 'bg-gradient-dark',
               }" />
         </div>
         <div class="col-xl-3 col-sm-6">
            <MiniStatisticsCard title="Total Omitted" :value="`${omttid}`" :percentage="{ value: '+5%', color: 'success' }" :icon="{
               component: 'ni ni-image',
               background: 'bg-gradient-dark',
            }" />
         </div>
      </div>
      <div class="row">
         <div class="col-4">
            <div class="mt-4 overflow-hidden card corect">
               <div class="p-3 card-body ">
                  <div class="ms-3">
                     <h5 class="mb-0 font-weight-bolder"> Total Correct</h5>
                  </div>
                  <div class="ms-3">
                     <h5 class="mb-0 font-weight-bolder"> {{corect}}</h5>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-4">
            <div class="mt-4 overflow-hidden card incorect">
               <div class="p-3 card-body">
                  <div class="ms-3">

                     <h5 class="mb-0 font-weight-bolder"> Total Incorrect</h5>
                  </div>
                  <div class="ms-3">

                     <h5 class="mb-0 font-weight-bolder"> {{ Incorectcorect }}</h5>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-4">
            <div class="mt-4 overflow-hidden card  omttid">
               <div class="p-3 card-body">
                  <div class="ms-3">

                     <h5 class="mb-0 font-weight-bolder"> Total Omitted</h5>
                  </div>
                  <div class="ms-3">

                     <h5 class="mb-0 font-weight-bolder"> {{ omttid  }}</h5>
                  </div>
               </div>
            </div>
         </div>

      </div>



   </div>
</template>
<script>
import ProgressDoughnutChart from "@/pagesComponents/pages/projects/ProgressDoughnutChart.vue";
import MiniStatisticsCard from "@/examples/cards/MiniStatisticsCard.vue";
import OutlinedCounterCard from "~~/pagesComponents/ecommerce/referral/OutlinedCounterCard.vue";
import TransparentInfoCard from "~~/pagesComponents/ecommerce/referral/TransparentInfoCard.vue";
import ComplexBackgroundCard from "~~/pagesComponents/ecommerce/referral/ComplexBackgroundCard.vue";
import OrdersListCard from "@/examples/cards/OrdersListCard.vue";
import { mapGetters } from "vuex";

export default {
   name: "overall-performance",
   components: {
      OutlinedCounterCard,
      TransparentInfoCard,
      ComplexBackgroundCard,
      OrdersListCard,
      MiniStatisticsCard,
      ProgressDoughnutChart
   },
   data() {
      return {
         length: 0,
         corect: 0,
         Incorectcorect:0,
         omttid:0,
         users: [
            {
               title: "Alice Vinget",
               order: "8.232",
               values: ["$130.992", "$9.500", "13"],
               info: "Refund rate is lower with 97% than other products",
               image:
                  "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/team-1.jpg",
               icon: "bold-down text-success",
            },
            {
               title: "John Alura",
               order: "12.821",
               values: ["$80.250", "$4.200", "40"],
               image:
                  "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-2.jpg",
               icon: "bold-down text-success",
            },
            {
               title: "Andrew Sian",
               order: "2.421",
               values: ["$40.600", "$9.430", "54"],
               image:
                  "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-3.jpg",
               icon: "bold-up text-danger",
            },
            {
               title: "Luca Willaim",
               order: "5.921",
               values: ["$91.300", "$7.364", "5"],
               image:
                  "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-4.jpg",
               icon: "bold-down text-success",
            },

            {
               title: "Richel Manuel",
               order: "921",
               values: ["$140.925", "$20.531", "121"],
               info: "Refund rate is higher with 70% than other products",
               image:
                  "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-5.jpg",
               icon: "bold-up text-danger",
            },
         ],
      };
   },
   methods: {

   },
   computed: {
      ...mapGetters(["getUserInfo", "getPreviousQuizes"]),
      // a computed getter

   },

   mounted() {
      var x = sessionStorage.getItem("info");
      this.$store.dispatch("yourAction", JSON.parse(x));
      this.$store.dispatch("SetPreviousQuize");
      this.length = this.getPreviousQuizes.length
      this.getPreviousQuizes.forEach(element => {
         console.log(element);
         this.corect += element.correctAnswer
         this.Incorectcorect += element.incorrectAnswer
         this.omttid += element.omitedte
         
      });
 

   },
};
</script>
<style scoped>
.incorect {
   background-color: #e74c3c;
}

.omttid {
   background-color: #3498db;
}

.corect {
   background-color: #2ecc71;
}
</style>
  