<template>
   <div class="col-lg-4 col-md-6 col-12">
      <div class="card text-center">
         <div class="overflow-hidden position-relative border-radius-lg bg-cover p-3"
            :style="{ backgroundImage: `url(${image})` }">
            <span class="mask bg-gradient-dark opacity-1"></span>
       
          
            <div class="card-body position-relative z-index-1 d-flex flex-column mt-7">
               <h3 class="price-color  ">{{ name }}</h3>
               <h3 class="price-color1 font-weight-bolder">{{ price + ' ' + 'JD' }}</h3> 
            
               <a class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-1" :href="action.route">
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
         "'https://drive.google.com/file/d/1JqE3YQfdHwhqVWz9N5uHch6jcpsObItN/view'",
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
      default: () => ({ route: "javascript:;", label: "Buy Now" }),
   },
});
</script>
<style scoped>
.price-color{
   color: #fffffe;
   padding-top: 20px;

}
.price-color1{
   color: #FFAE1F;
}
</style>
