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
                           <th>Question</th>
                           <th>Answer</th>
                           <th>Note</th>
                           <th>Date</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="note of getNoteQuiz " :key="note">
                           <td class="">
                              <div class="d-flex align-items-center qustion-1">
                                 <p class="text-xs font-weight-bold ms-2 mb-0 "><strong>{{ note.questiontext }}</strong>
                                 </p>
                              </div>
                           </td>
                           <td class="">
                              <div class="d-flex align-items-center qustion-1">
                                 <p class="text-xs font-weight-bold ms-2 mb-0 "><strong>{{ note.correctAnswer }}</strong>
                                 </p>
                              </div>
                           </td>
                           <td class="text-xs font-weight-bold">
                              <div class="d-flex align-items-center qustion-1 ">
                                 <ArgonButton color="success" variant="outline"
                                    class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center">
                                    <i class="fas fa-check" aria-hidden="true"></i>
                                 </ArgonButton>
                                 <span>{{ note.Note }}</span>
                              </div>
                           </td>
                           <td class="text-xs font-weight-bold">
                              <div class="d-flex align-items-center">
                                 <span>{{ note.Date }}</span>
                              </div>
                           </td>
                           <td class="text-xs font-weight-bold">
                              <i class="fas fa-user-edit text-secondary  button-actions" data-bs-toggle="modal"
                                 :data-bs-target="`#` + note.labelId" data-bs-whatever="@mdo"></i>
                              <i class="fas fa-trash text-secondary    button-actions"
                                 @click="deleteItem(note.labelId)"></i>
                           </td>
                           <div class="modal fade" :id="note.labelId" tabindex="-1" aria-labelledby="exampleModalLabel"
                              aria-hidden="true">
                              <div class="modal-dialog  modal-xl">
                                 <div class="modal-content">
                                    <div class="modal-header">

                                       <h5 class="modal-title " id="exampleModalLabel">{{ note.Date }}</h5>
                                    </div>

                                    <div class="modal-header">

                                       <h5 class="modal-title " id="exampleModalLabel">{{ note.questiontext }}</h5>
                                       <button type="button" class="btn-close" data-bs-dismiss="modal"
                                          aria-label="Close"></button>
                                    </div>
                                    <div class="card">

                                       <div class="card-header text-warning">
                                          <h5 class="card-title text-bg-info">YOUR NOTE</h5>
                                          {{ note.Note }}
                                       </div>
                                       <hr class="my-3 horizontal py-1 dark" />
                                       <div class="card-body">

                                          <h5 class="card-title text-bg-info"> Correct Answer</h5>
                                          <p class="card-text text-success ">{{ note.correctAnswer }}</p>

                                       </div>
                                       <div class="card-body">

                                          <h5 class="card-title"> Explanation</h5>
                                          <h5 class="card-text text-primary">{{ note.explanation }}</h5>

                                       </div>
                                    </div>
                                    <div class="modal-footer">
                                       <button type="button" class="btn btn-secondary "
                                          data-bs-dismiss="modal">Close</button>
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
</template>
<script>
import { mapGetters } from "vuex";
import { DataTable } from "simple-datatables";
import img1 from "@/assets/img/team-2.jpg";
import img2 from "@/assets/img/team-1.jpg";
import img3 from "@/assets/img/team-3.jpg";
import img4 from "@/assets/img/team-4.jpg";
import img5 from "@/assets/img/team-5.jpg";
import img6 from "@/assets/img/ivana-squares.jpg";

export default {
   name: "notes",
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
      ...mapGetters(["getNoteQuiz", "getId"]),
   },
   methods: {

      deleteItem(id) {
         this.$swal({
            title: "Are you sure?",
            text: "You won Delete  this Note!",
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
               $fetch("https://goldfish-app-o7qzt.ondigitalocean.app/api/user/note/" + this.getId + "/" + id, {
                  method: 'PUT',

               }).then(res => {
                  this.$store.dispatch("SetNotes");
                  this.$swal({
                     title: "Saved successfully!",
                     text: "The Notes is Deleted",
                     icon: "success",
                     customClass: {
                        confirmButton: "btn bg-gradient-success",
                     },
                     buttonsStyling: false,
                  });
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
         })
      }
   },
   mounted() {

      // if (document.getElementById("order-list")) {
      //    const dataTableSearch = new DataTable("#order-list", {
      //       searchable: true,
      //       fixedHeight: false,
      //       perPageSelect: false,
      //    });

      //    document.querySelectorAll(".export").forEach(function (el) {
      //       el.addEventListener("click", function (el) {
      //          const type = el.dataset.type;

      //          const data = {
      //             type,
      //             filename: "soft-ui-" + type,
      //          };

      //          if (type === "csv") {
      //             data.columnDelimiter = "|";
      //          }

      //          dataTableSearch.export(data);
      //       });
      //    });
      // }

      // the sseeeion Storg is form (id ................ to send the vuex)
      var x = sessionStorage.getItem("info");
      this.$store.dispatch("yourAction", JSON.parse(x));
      this.$store.dispatch("SetNotes");
      console.log(this.getNoteQuiz);
   },
};
</script>
<style scoped>
.qustion-1 {
   max-width: 200px;

   white-space: pre-line;
   line-height: 1;

   overflow: hidden;
}

.button-actions {
   margin-right: 19px;
   cursor: pointer;

}
</style>

  