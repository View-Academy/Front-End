<template>
   <div class="py-4 container-fluid">
      <div class="mt-4 row">
         <div class="col-12">
            <div class="mb-4 card">
               <div class="pb-0 card-header">
               </div>
               <div class="px-0 pt-0 pb-2 card-body">
                  <div class="p-0 table-responsive">
                     <table id="order-list" class="table mb-0 align-items-center">
                        <thead>
                           <tr>
                              <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                 class="text-uppercase text-info  font-weight-bolder">
                                 EMAIL
                              </th>
                              <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                 class="text-uppercase text-info  font-weight-bolder ">
                                 Name
                              </th>
                              <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                 class="text-uppercase text-info  font-weight-bolder ">
                                 Enrolled Courses
                              </th>
                              <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                 class="text-uppercase text-info  font-weight-bolder ">
                                 Admin
                              </th>
                              <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                 class="text-uppercase text-info  font-weight-bolder ">
                                 number Phone
                              </th>
                              <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                 class="text-uppercase text-info  font-weight-bolder ">
                                 password
                              </th>
                              <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                 class="text-uppercase text-info  font-weight-bolder ">
                                 action
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr v-for="mountain of getUsers" :key="mountain">
                              <td>
                                 <div class="px-3 py-1 d-flex">
                                    <div class="d-flex flex-column justify-content-center">
                                       <p class="mb-0 text-sm font-weight-bold text-secondary">
                                          {{ mountain.email }}
                                       </p>
                                    </div>
                                 </div>
                              </td>
                              <td>
                                 <div class="px-3 py-1 d-flex">
                                    <div class="d-flex flex-column justify-content-center">
                                       <p class="mb-0 text-sm font-weight-bold text-secondary">
                                          {{ mountain.name }}
                                       </p>
                                    </div>
                                 </div>
                              </td>
                              <td class="text-sm align-middle ">
                                 <div class="px-3 py-1 d-flex ">
                                    <div class="d-flex align-items-center qustion-1  " v-for="data of mountain.myCourses"
                                       :key="data">
                                       <strong>
                                          {{ data }} +
                                       </strong>
                                    </div>
                                 </div>
                              </td>
                              <td class="text-sm align-middle">
                                 <div class="px-3 py-1 d-flex">
                                    <div class="d-flex flex-column justify-content-center">
                                       <p class="mb-0 text-sm font-weight-bold text-secondary">
                                          {{ mountain.isAdmain }}
                                       </p>
                                    </div>
                                 </div>
                              </td>
                              <td class="text-sm align-middle">
                                 <div class="px-3 py-1 d-flex">
                                    <div class="d-flex flex-column justify-content-center">
                                       <p class="mb-0 text-sm font-weight-bold text-secondary">
                                          {{ mountain.phone }}
                                       </p>
                                    </div>
                                 </div>
                              </td>
                              <td class="align-middle text-center">
                                 <div class="px-3 py-1 d-flex">
                                    <div class="d-flex flex-column justify-content-center">
                                       <p class="mb-0 text-sm font-weight-bold text-secondary">
                                          {{ mountain.password }}
                                       </p>
                                    </div>
                                 </div>
                              </td>
                              <td class="align-middle text-center">
                                 <div class="px-3 py-1 d-flex">
                                    <i class="fas fa-user-edit text-secondary p-1 button-actions" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"></i>
                                    <i class="fas fa-trash text-secondary p-1     button-actions"
                                       @click="delete1(mountain.id)"></i>
                                 </div>
                              </td>
                              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                 aria-hidden="true">
                                 <div class="modal-dialog">
                                    <div class="modal-content">
                                       <div class="modal-header">
                                          <h5 class="modal-title" id="exampleModalLabel">{{ mountain.name }}</h5>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal"
                                             aria-label="Close"></button>
                                       </div>
                                       <div class="modal-body">
                                          <form>
                                             <div class="mb-3">
                                                <label for="recipient-name" class="col-form-label">Name:</label>
                                                <input type="text" class="form-control" id="recipient-name"
                                                   v-model="mountain.name">
                                             </div>
                                             <div class="mb-3">
                                                <label for="recipient-name" class="col-form-label">Price:</label>
                                                <input type="text" class="form-control" id="recipient-name"
                                                   v-model="mountain.phone">
                                             </div>
                                             <div class="mb-3">
                                                <div class="form-check form-switch">
                                                   <input class="form-check-input" type="checkbox"
                                                      id="flexSwitchCheckDefault">
                                                   <label class="form-check-label" for="flexSwitchCheckDefault">Admin</label>
                                                </div>
                                                <div class="form-check form-switch">
                                                   <input class="form-check-input" type="checkbox"
                                                      id="flexSwitchCheckChecked">
                                                   <label class="form-check-label" for="flexSwitchCheckChecked">Super Admain</label>
                                                </div>

                                             </div>
                                          </form>
                                       </div>
                                       <div class="modal-footer">
                                          <button type="button" class="btn btn-secondary"
                                             data-bs-dismiss="modal">Close</button>
                                          <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                             @click="editItem(data)">Update</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
 
<script>
import ChannelsCard from "~~/pagesComponents/ecommerce/overview/ChannelsCard.vue";
import RevenueCard from "~~/pagesComponents/ecommerce/overview/RevenueCard.vue";
import BarChartHorizontal from "~~/examples/charts/BarChartHorizontal.vue";
import OrdersListCard from "@/examples/cards/OrdersListCard.vue";
import DefaultStatisticsCard from "~~/pagesComponents/ecommerce/overview/DefaultStatisticsCard.vue";
import { DataTable } from "simple-datatables";
import { mapGetters } from 'vuex'
import { useStore } from 'vuex'


export default {
   name: "Overview",
   components: {
      ChannelsCard,
      RevenueCard,
      BarChartHorizontal,
      OrdersListCard,
      DefaultStatisticsCard,
   },
   computed: {
      ...mapGetters(["getUsers"]),
   },

   data() {
      return {
         mountains: Array,
      };
   },

   methods: {
      delete1(data) {
         $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/" + data, {
            method: "DELETE",

         }).then(res => {
            this.$swal({
               icon: "success",
               title: "Updated successfully!",
               text: "You clicked the button!",
            });
         }).catch(e => {
            console.log(e);
         });
      }
   },

   mounted() {
      this.$store.dispatch('SetUser')




   },
};
</script>
<style scoped>
.courses {
   max-width: 200px;

   white-space: pre-line;
   line-height: 1
}

.button-actions {
   cursor: pointer;

}</style>
 