<template>
   <div class="py-4 container-fluid">

      <div class="mt-4 row">
         <div class="col-12">
            <div class="card">
               <div class="card-header">
                  <h5 class="mb-0">Courses Search</h5>

               </div>
               <div class="table-responsive">
                  <table id="order-list" class="table table-flush">
                     <thead class="thead-light">
                        <tr>
                           <th>Name</th>
                           <th>price</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr class="" v-for="data of getCourses " :key="data">
                           <td class="text-sm font-weight-normal p-4 ">{{ data.name }}</td>
                           <td class="text-sm font-weight-normal p-4">{{ data.price }}</td>
                           <td>
                              <i class="fas fa-user-edit text-secondary pt-4 button-actions" @click="changeData(data)"
                                 data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                              <i class="fas fa-trash text-secondary pt-4     button-actions"
                                 @click="deleteItem(data.id)"></i>
                           </td>

                        </tr>
                     </tbody>
                  </table>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                     <div class="modal-dialog">
                        <div class="modal-content">
                           <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Update ({{ name }})</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                           <div class="modal-body">
                              <form>
                                 <div class="mb-3">
                                    <label for="name" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="name" :value="name">
                                 </div>
                                 <div class="mb-3">
                                    <label for="price" class="col-form-label">Price:</label>
                                    <input type="number" class="form-control" id="price" :value="price">
                                 </div>
                              </form>
                           </div>
                           <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                 @click="editItem(id)">Update</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </div>
</template>

<script>
import { all } from "deepmerge";
import { DataTable } from "simple-datatables";
import { mapGetters } from "vuex";

export default {
   name: "edit-cuorses",
   data() {
      return {
         allcourses: [],
         name: String,
         price: Number,
         id: String
      }
   },
   asyncData() {


   },
   mounted() {
      this.$store.dispatch("SetCourses");
   },
   computed: {
      ...mapGetters(["getCourses"]),
   },
   methods: {
      changeData(data) {
         this.name = data.name
         this.price = data.price
         this.id = data.id

      },
      editItem(id) {
         var name = document.getElementById('name').value
         var price = document.getElementById('price').value
         $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/courses/" + id, {
            method: "PUT",
            body: {
               name:name,
               price:price
            }
         }).then(res => {
            this.$swal({
               icon: "success",
               title: "Updated successfully!",
               text: "You clicked the button!",
            });
         }).catch(e => {
            console.log(e);
         });
      },

      deleteItem(id) {
         this.$swal({
            title: "Are you sure?",
            text: "You won Delete  this course!",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
            customClass: {
               confirmButton: "btn bg-gradient-success",
               cancelButton: "btn bg-gradient-danger",
            },
            buttonsStyling: false,
         }).then((result) => {
            if (result.isConfirmed) {
               $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/courses/" + id, {
                  method: "DELETE",
               }).then(res => {
                  this.$store.dispatch("SetCourses");
                  this.$swal({
                     title: "Deleted successfully!",
                     text: res,
                     icon: "success",
                     customClass: {
                        confirmButton: "btn bg-gradient-success",
                     },
                     buttonsStyling: false,
                  });

                  this.name = "",
                     this.price = 0,
                     this.quillContent = ""
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

      }


   },



};
</script>
<style scoped>
.button-actions {
   margin-right: 19px;
   cursor: pointer;
}
</style>

<!-- <template>
   <div>
      <div class="mt-4 row">
         <div class="col-12">
            <div class="card">
               <div class="card-header">
                  <h5 class="mb-0">Datatable Search</h5>
                  <p class="mb-0 text-sm">
                     A lightweight, extendable, dependency-free javascript HTML table
                     plugin.
                  </p>
               </div>
               <div class="table-responsive">
                  <table id="datatable-search" class="table table-flush">
                     <thead class="thead-light">
                        <tr>
                           <th>Name</th>
                           <th>Position</th>
                           <th>Office</th>
                           <th>Age</th>
                           <th>Start date</th>
                           <th>Salary</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td class="text-sm font-weight-normal">Tiger Nixon</td>
                           <td class="text-sm font-weight-normal">System Architect</td>
                           <td class="text-sm font-weight-normal">Edinburgh</td>
                           <td class="text-sm font-weight-normal">61</td>
                           <td class="text-sm font-weight-normal">2011/04/25</td>
                           <td class="text-sm font-weight-normal">$320,800</td>
                        </tr>
                        <tr>
                           <td class="text-sm font-weight-normal">Garrett Winters</td>
                           <td class="text-sm font-weight-normal">Accountant</td>
                           <td class="text-sm font-weight-normal">Tokyo</td>
                           <td class="text-sm font-weight-normal">63</td>
                           <td class="text-sm font-weight-normal">2011/07/25</td>
                           <td class="text-sm font-weight-normal">$170,750</td>
                        </tr>
                        
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
      
   </div>
</template> -->