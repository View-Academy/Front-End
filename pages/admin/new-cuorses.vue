<template>
   <div class="py-4 container-fluid">
      <div class="row">
         <div class="col-lg-6">
            <h4 class="text-white">Add New Prodeuct</h4>
            <p class="text-white">
               We’re constantly trying to express ourselves and actualize our dreams.
               If you have the opportunity to play.
            </p>
         </div>
         <div class="text-right col-lg-6 d-flex flex-column justify-content-center">
            <button type="button" class="mt-2 mb-0 btn btn-outline-white ms-lg-auto me-lg-0 me-auto mt-lg-0"
               @click="confarmation()">
               Save
            </button>
         </div>
      </div>
      <div class="mt-4 row">

         <div class="mt-4 col-lg-12 mt-lg-0">
            <div class="card">
               <div class="card-body">
                  <h5 class="font-weight-bolder">Product Information</h5>
                  <div class="row">
                     <div class="col-12 col-sm-12">
                        <label>Name</label>
                        <input class="form-control p-3" type="text" v-model="name" />
                     </div>

                  </div>
                  <div class="row">

                     <div class="col-12">
                        <label class="mt-4">Price</label>
                        <input class="form-control p-3" type="text" v-model="price" />
                     </div>

                  </div>
          
               </div>
            </div>
         </div>
      </div>

   </div>
</template>
 
<script>
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { QuillEditor } from "@vueup/vue-quill";
import Choices from "choices.js";

export default {
   components: { QuillEditor },
   data() {
      return {
         
         name: "",
         price: 0,
         discrption: "",
      };
   },
   mounted() {
      this.getChoices("choices-category-edit");
      this.getChoices("choices-color-edit");
      this.getChoices("choices-currency-edit");

      const tags = document.getElementById("choices-tags-edit");
      if (tags) {
         const examples = new Choices(tags, {
            removeItemButton: true,
         });

         examples.setChoices(
            [
               {
                  value: "One",
                  label: "Expired",
                  disabled: true,
               },
               {
                  value: "Two",
                  label: "Out of Stock",
                  selected: true,
               },
            ],
            "value",
            "label",
            false
         );
      }
   },
   methods: {
      confarmation() {
         this.$swal({
            title: "Are you sure?",
            text: "You won'to save this course!",
            showCancelButton: true,
            confirmButtonText: "Yes, Save it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
            customClass: {
               confirmButton: "btn bg-gradient-success",
               cancelButton: "btn bg-gradient-danger",
            },
            buttonsStyling: false,
         }).then((result) => {
            if (result.isConfirmed) {

               var data = {
                  name: this.name,
                  price: this.price,
                
               }
               $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/courses', {
                  method: 'POST',
                  body: data
               }).then(res => {
                  this.$swal({
                     title: "Saved successfully!",
                     text: res,
                     icon: "success",
                     customClass: {
                        confirmButton: "btn bg-gradient-success",
                     },
                     buttonsStyling: false,
                  });

                  this.name = "",
                     this.price = 0
                  
               })



            } else if (
               /* Read more about handling dismissals below */
               result.dismiss === this.$swal.DismissReason.cancel
            ) {
               this.$swal({
                  title: "Cancelled!",
                  text: "Your imaginary file is safe :)",
                  icon: "error",
                  customClass: {
                     confirmButton: "btn bg-gradient-success",
                  },
                  buttonsStyling: false,
               });
            }
         });
      },

      getChoices(id) {
         const element = document.getElementById(id);
         if (element) {
            return new Choices(element, {
               searchEnabled: false,
               allowHTML: true,
            });
         }
      },
   },
};
</script>
 