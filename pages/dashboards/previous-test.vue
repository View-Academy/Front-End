<template>
   <div class="container-fluid py-4">
      <div class="d-sm-flex justify-content-between">
         <div>
            <ArgonButton color="white" variant="outline">New order</ArgonButton>
         </div>
         <div class="d-flex">
            <div class="dropdown d-inline">
               <ArgonButton id="navbarDropdownMenuLink2" color="white" variant="outline" class="dropdown-toggle"
                  data-bs-toggle="dropdown" aria-expanded="false">Filters</ArgonButton>
               <ul class="dropdown-menu dropdown-menu-lg-start px-2 py-3" aria-labelledby="navbarDropdownMenuLink2" style>
                  <li>
                     <a class="dropdown-item border-radius-md" href="javascript:;">Status: Paid</a>
                  </li>
                  <li>
                     <a class="dropdown-item border-radius-md" href="javascript:;">Status: Refunded</a>
                  </li>
                  <li>
                     <a class="dropdown-item border-radius-md" href="javascript:;">Status: Canceled</a>
                  </li>
                  <li>
                     <hr class="horizontal dark my-2" />
                  </li>
                  <li>
                     <a class="dropdown-item border-radius-md text-danger" href="javascript:;">Remove Filter</a>
                  </li>
               </ul>
            </div>
            <ArgonButton class="btn-icon ms-2 export" size color="white" variant="outline" data-type="csv">
               <span class="btn-inner--icon">
                  <i class="ni ni-archive-2"></i>
               </span>
               <span class="btn-inner--text">Export CSV</span>
            </ArgonButton>
         </div>
      </div>
      <div class="row">
         <div class="col-12">
            <div class="card mt-4">
               <div class="table-responsive">
                  <table id="order-list" class="table table-flush">
                     <thead class="thead-light">
                        <tr>
                           <th>title</th>
                           <th>correct Answer</th>
                           <th>incorrect Answer</th>
                           <th>omitedte</th>
                           <th>date</th>
                           <th>action</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="data of getPreviousQuizes" :key="data"
                           :class="data.yourScore >= 50 ? 'green' : 'red'">
                           <td>
                              <div class="d-flex align-items-center">
                                 <p class="text-xs font-weight-bold ms-2 mb-0">{{ data.title }}</p>
                              </div>
                           </td>
                           <td class="font-weight-bold">
                              <div class="d-flex align-items-center">
                                 <ArgonButton color="success" variant="outline"
                                    class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center">
                                    <i class="fas fa-check" aria-hidden="true"></i>
                                 </ArgonButton>
                                 <span>{{ data.correctAnswer }}</span>
                              </div>
                           </td>
                           <td class="text-xs font-weight-bold">
                              <div class="d-flex align-items-center">
                                 <ArgonButton color="danger" variant="outline"
                                    class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center">
                                    <i class="fas fa-times" aria-hidden="true"></i>
                                 </ArgonButton>
                                 <span>{{ data.incorrectAnswer }}</span>
                              </div>
                           </td>
                           <td class="text-xs font-weight-bold">
                              <div class="d-flex align-items-center">
                                 <ArgonButton color="info" variant="outline"
                                    class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center">
                                    <i class="fas fa-undo" aria-hidden="true"></i>
                                 </ArgonButton>
                                 <span>{{ data.omitedte }}</span>
                              </div>
                           </td>
                           <td class="text-xs font-weight-bold">
                              <span class="my-2 text-xs">{{ data.data }}</span>
                           </td>
                           <td class="text-xs font-weight-bold">
                              <i class="fa fa-eye" aria-hidden="true"></i>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
  
<script>
import { DataTable } from "simple-datatables";
import img1 from "@/assets/img/team-2.jpg";
import img2 from "@/assets/img/team-1.jpg";
import img3 from "@/assets/img/team-3.jpg";
import img4 from "@/assets/img/team-4.jpg";
import img5 from "@/assets/img/team-5.jpg";
import img6 from "@/assets/img/ivana-squares.jpg";
import { mapGetters } from "vuex";

export default {
   name: "previous-test",
   data() {
      return {
         img1,
         img2,
         img3,
         img4,
         img5,
         img6,
      };
   },
   computed: {
      ...mapGetters(["getUserInfo", "getPreviousQuizes"]),
      // a computed getter

   },
   mounted() {
      var x = sessionStorage.getItem("info");
      this.$store.dispatch("yourAction", JSON.parse(x));
      this.$store.dispatch("SetPreviousQuize");


   },
};
</script>
<style  scoped>
.green {
   background-color: rgba(0, 255, 0, 0.123);
}

.red {
   background-color: rgba(255, 0, 0, 0.27);
}
</style>
  