<template>
   <apexchart :height="height" :options="chartOptions" :series="series" :xaxis="categories"></apexchart>
</template>
<script setup>
defineProps({
   height: {
      type: [Number, String],
      default: 300,
   },
   chartOptions: {
      type: Object,
      default: () => ({
         chart: {
            type: "bar",
         },
         colors: ["#f0b52b"],
         fill: {
            type: "solid",
         },
         plotOptions: {
            bar: {
               borderRadius: 4,
               horizontal: true,
            },
         },
         dataLabels: {
            enabled: true,
         },
         xaxis: {

            categories: ["Microbiology", "Embryology", "Pathology", "Behavioral science", "OBGYN", "Surgery", "Immunology", "Anatomy & Histology", "Surgery"],
         },
      }),
   },
   series: {
      type: Array,
      default: () => [
         {
            name: "Sales by age",
            data: [15, 20, 12, 60, 20, 15],
         },
      ],
   },
});
onMounted(() => {
   nextTick(() => {
      window.dispatchEvent(new Event("resize"));
   });
});
</script>
