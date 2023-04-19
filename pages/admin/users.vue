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
                                    <i class="fas fa-user-edit text-secondary p-1 button-actions"></i>
                                    <i class="fas fa-trash text-secondary p-1     button-actions"
                                       @click="delete1(mountain.id)"></i>
                                 </div>
                              </td>
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
         $fetch("https://goldfish-app-o7qzt.ondigitalocean.app/api/user/" + data, {
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

}
</style>
 