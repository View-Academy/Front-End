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
            <MiniStatisticsCard title="Total Tests" value="930" :percentage="{ value: '+55%', color: 'success' }" :icon="{
               component: 'ni ni-circle-08',
               background: 'bg-gradient-dark',
            }" />
         </div>
         <div class="mb-4 col-xl-3 col-sm-6 mb-xl-0">
            <MiniStatisticsCard title="Total Correct" value="744" :percentage="{ value: '+3%', color: 'success' }" :icon="{
               component: 'ni ni-world',
               background: 'bg-gradient-dark',
            }" />
         </div>
         <div class="mb-4 col-xl-3 col-sm-6 mb-xl-0">
            <MiniStatisticsCard title="Total Incorrect" value="1,414" :percentage="{ value: '-2%', color: 'danger' }" :icon="{
               component: 'ni ni-watch-time',
               background: 'bg-gradient-dark',
            }" />
         </div>
         <div class="col-xl-3 col-sm-6">
            <MiniStatisticsCard title="Total Incorrect" value="1.76" :percentage="{ value: '+5%', color: 'success' }" :icon="{
               component: 'ni ni-image',
               background: 'bg-gradient-dark',
            }" />
         </div>
      </div>

   </div>
</template>
<script>
import MiniStatisticsCard from "@/examples/cards/MiniStatisticsCard.vue";
import OutlinedCounterCard from "~~/pagesComponents/ecommerce/referral/OutlinedCounterCard.vue";
import TransparentInfoCard from "~~/pagesComponents/ecommerce/referral/TransparentInfoCard.vue";
import ComplexBackgroundCard from "~~/pagesComponents/ecommerce/referral/ComplexBackgroundCard.vue";
import OrdersListCard from "@/examples/cards/OrdersListCard.vue";

export default {
   name: "overall-performance",
   components: {
      OutlinedCounterCard,
      TransparentInfoCard,
      ComplexBackgroundCard,
      OrdersListCard,
      MiniStatisticsCard
   },
   data() {
      return {
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
};
</script>
  