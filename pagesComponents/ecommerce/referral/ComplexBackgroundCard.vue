<template>
   <div class="col-lg-4 col-md-6 col-12">
      <div class="card text-center">
         <div class="overflow-hidden position-relative border-radius-lg bg-cover p-3"
            :style="{ backgroundImage: `url(${image})` }">
            <span class="mask bg-gradient-dark opacity-4"></span>
            <h3 class="price-color ">{{ name }}</h3>
          
            <div class="card-body position-relative z-index-1 d-flex flex-column mt-5">
               <h3 class="price-color font-weight-bolder">{{ price + ' ' + 'JD' }}</h3> 
               <p class="text-white font-weight-bolder">
                  {{ description }}
               </p>
               <a class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-4" :href="action.route">
                  {{ action.label }}
                  <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
               </a>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
defineProps({
   image: {
      type: String,
      default:
         "'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/window-desk.jpg'",
   },
   description: {
      type: String,
      default: "",
   },
   name: {
      type: String,
      default: "",
   },
   price: {
      type: Number,
      default: 0,
   },
   action: {
      type: Object,
      route: String,
      label: String,
      default: () => ({ route: "javascript:;", label: "read more" }),
   },
});
</script>
<style scoped>
.price-color{
   color: #f0b52b;

}
</style>
