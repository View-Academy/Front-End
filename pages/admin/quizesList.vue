<template>
    <div class="py-4 container-fluid">

        <div class="mt-4 row">
            <div class="col-12">
                <div class="card">
                    <form id="dropzone" action="/file-upload" class="form-control dropzone ">
                        <div class="fallback p-5">
                            <input name="file" type="file" multiple />
                        </div>
                    </form>
                    <div class="card-header">
                        <h5 class="mb-0">Quize List</h5>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-flush">
                            <thead class="thead-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Id</th>
                                    <th>Course</th>
                                    <th>Subject</th>
                                    <th>systems</th>
                                    <th>topic</th>
                                    <th>URL</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="" v-for="(data, index) of getQuizes" :key="index">
                                    <td class="text-sm font-weight-normal p-3 qustion-1" v-for="data2 of data.question"
                                        :key="data2">{{ data2.questiontext }}</td>
                                    <td class="text-sm font-weight-normal p-4 ">{{ data.id2 }}</td>
                                    <td class="text-sm font-weight-normal p-4 ">{{ data.courses }}</td>
                                    <td class="text-sm font-weight-normal p-4 ">{{ data.subject }}</td>
                                    <td class="text-sm font-weight-normal p-4">{{ data.systems }}</td>
                                    <td class="text-sm font-weight-normal p-4">{{ data.topic }}</td>
                                    <td class="text-sm font-weight-normal p-3 qustion-1" v-for="data2 of data.question"
                                        :key="data2">{{ data2.img }}</td>
                                    <td>
                                        <i class="fas fa-trash text-secondary button-actions "
                                            @click="deleteItem(data.id)"></i>
                                        <i class="fa fa-pencil text-secondary button-actions" @click="changeData(data)"
                                            data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{{ id2 }}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="mb-3">
                                                <label :for="courses" class="col-form-label">Courses:</label>
                                                <input type="text" class="form-control" :value="courses" id="courses">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="subject" class="col-form-label">subject:</label>
                                                <input type="text" class="form-control" :value="subject" id="subject">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="systems" class="col-form-label">systems:</label>
                                                <input type="text" class="form-control" :value="systems" id="systems">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="topic" class="col-form-label">topic:</label>
                                                <input type="text" class="form-control" :value="topic" id="topic">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="Answer" class="col-form-label">Answer:</label>
                                                <input type="text" class="form-control" :value="Answer" id="Answer">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="Answer1" class="col-form-label">Answer1:</label>
                                                <input type="text" class="form-control" :value="Answer1" id="Answer1">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="Answer2" class="col-form-label">Answer 2:</label>
                                                <input type="text" class="form-control" :value="Answer2" id="Answer2">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="Answer3" class="col-form-label">Answer3:</label>
                                                <input type="text" class="form-control" :value="Answer3" id="Answer3">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="Answer4" class="col-form-label">Answer4:</label>
                                                <input type="text" class="form-control" :value="Answer4" id="Answer4">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="Answer5" class="col-form-label">Answer5:</label>
                                                <input type="text" class="form-control" :value="Answer5" id="Answer5">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="Answer6" class="col-form-label">Answer6:</label>
                                                <input type="text" class="form-control" :value="Answer6" id="Answer6">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="Answer7" class="col-form-label">Answer7:</label>
                                                <input type="text" class="form-control" :value="Answer7" id="Answer7">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="Answer8" class="col-form-label">Answer8:</label>
                                                <input type="text" class="form-control" :value="Answer8" id="Answer8">
                                            </div>
                                            <div class="mb-3">
                                                <label :for="questiontext" class="col-form-label">questiontext:</label>
                                                <textarea type="text" rows="30" cols="50" class="form-control"
                                                    :value="questiontext" id="questiontext"></textarea>
                                            </div>
                                            <div class="mb-3">
                                                <label :for="explanation" class="col-form-label">explanation:</label>
                                                <textarea type="text" rows="15" cols="50" class="form-control"
                                                    :value="explanation" id="explanation"></textarea>
                                            </div>
                                            <div class="mb-3">
                                                <label :for="img" class="col-form-label">image:</label>
                                                <input type="text" class="form-control" :value="img" id="img">
                                            </div>



                                        </form>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary" @click="editItem(iduser)"
                                                data-bs-dismiss="modal">Update</button>
                                        </div>
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
import Choices from "choices.js";
import { Dropzone } from "dropzone";
import * as XLSX from 'xlsx';

export default {
    name: "edit-cuorses",
    data() {
        return {
            allcourses: Array,
            id2: Number,
            courses: '',
            subject: '',
            systems: '',
            topic: '',
            img: '',
            Answer: '',
            Answer1: '',
            Answer2: '',
            Answer3: '',
            Answer4: '',
            Answer5: '',
            Answer6: '',
            Answer7: '',
            Answer8: '',
            questiontext: '',
            explanation: '',
            iduser: ''
        }
    },

    computed: {
        ...mapGetters(["getQuizes"]),
    },
    mounted() {
        this.$store.dispatch("SetQuize")
        const qustin = [];
        const element = document.getElementById("choices-multiple-remove-button");
        if (element) {
            const example = new Choices(element, {
                removeItemButton: true,
            });

            example.setChoices(
                [
                    {
                        value: "One",
                        label: "Label One",
                        disabled: true,
                    },
                    {
                        value: "Two",
                        label: "Label Two",
                        selected: true,
                    },
                    {
                        value: "Three",
                        label: "Label Three",
                    },
                ],
                "value",
                "label",
                false
            );
        }

        Dropzone.autoDiscover = false;
        if (document.getElementById("dropzone")) {
            const drop = document.getElementById("dropzone");
            // eslint-disable-next-line no-new
            new Dropzone(drop, {
                paramName: "file",
                acceptedFiles: '.doc, .docx, .pdf, .xls, .xlsx',
                url: "/file/post",
                addRemoveLinks: true,
                timeout: 90000, /*milliseconds*/
                accept: function (file, done) {
                    var reader = new FileReader();
                    reader.addEventListener("loadend", function (event) {
                        var data = event.target.result;
                        var workbook = XLSX.read(data, {
                            type: 'binary'
                        });
                        workbook.SheetNames.forEach(function (sheetName) {
                            // Here is your object
                            var XL_row_object = XLSX.utils.sheet_to_row_object_array(
                                workbook.Sheets[sheetName]
                            );
                            var json_object = JSON.stringify(XL_row_object);
                            var insatrQuastion = JSON.parse(json_object);
                            insatrQuastion.forEach(element => {
                                let insatrQuastion = {
                                    id2: Math.floor((Math.random() * 100000) + 1),
                                    id3: Math.floor((Math.random() * 100000) + 1),
                                    id4: Math.floor((Math.random() * 100000) + 1),
                                    courses: element.courses,
                                    subject: element.subject,
                                    systems: element.systems,
                                    topic: element.topic,
                                    totalPoint: element.totalPoint,
                                    question: [{
                                        Answer1: element.Answer1,
                                        Answer2: element.Answer2,
                                        Answer3: element.Answer3,
                                        Answer4: element.Answer4,
                                        Answer5: element.Answer5,
                                        Answer6: element.Answer6,
                                        Answer7: element.Answer7,
                                        Answer8: element.Answer8,
                                        Answer: element.Answer,
                                        questiontext: element.questiontext,
                                        explanation: element.explanation,
                                        img: element.img,
                                    }]
                                }
                                qustin.push(insatrQuastion)

                            }
                            );
                            $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/question/insertMany', {
                                method: 'POST',
                                body: qustin
                            }).then(res => {
                                console.log(res);
                            })
                                .catch((error) => {
                                    console.log(error);
                                });
                        });
                    });
                    reader.readAsBinaryString(file);
                }
            });
        }





    },

    methods: {
        changeData(data, id) {
            this.courses = "",
                this.courses = data.courses,
                this.iduser = data.id
            this.id2 = data.id2
            this.subject = data.subject,
                this.systems = data.systems,
                this.topic = data.topic,
                this.img = data.question[0].img
            this.Answer = data.question[0].Answer
            this.Answer1 = data.question[0].Answer1
            this.Answer2 = data.question[0].Answer2
            this.Answer3 = data.question[0].Answer3
            this.Answer4 = data.question[0].Answer4
            this.Answer5 = data.question[0].Answer5
            this.Answer6 = data.question[0].Answer6
            this.Answer7 = data.question[0].Answer7
            this.Answer8 = data.question[0].Answer8
            this.questiontext = data.question[0].questiontext
            this.explanation = data.question[0].explanation
        },

        editItem(id) {
            var courses = document.getElementById('courses').value
            var subject = document.getElementById('subject').value
            var systems = document.getElementById('systems').value
            var topic = document.getElementById('topic').value
            var Answer = document.getElementById('Answer').value
            var Answer1 = document.getElementById('Answer1').value
            var Answer2 = document.getElementById('Answer2').value
            var Answer3 = document.getElementById('Answer3').value
            var Answer4 = document.getElementById('Answer4').value
            var Answer5 = document.getElementById('Answer5').value
            var Answer6 = document.getElementById('Answer6').value
            var Answer7 = document.getElementById('Answer7').value
            var Answer8 = document.getElementById('Answer8').value
            var questiontext = document.getElementById('questiontext').value
            var explanation = document.getElementById('explanation').value
            var img = document.getElementById('img').value

            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/question/" + id, {
                method: "PUT",
                body: {
                    courses: courses,
                    subject: subject,
                    systems: systems,
                    topic: topic,
                    question: [{
                        Answer1: Answer1,
                        Answer2: Answer2,
                        Answer3: Answer3,
                        Answer4: Answer4,
                        Answer5: Answer5,
                        Answer6: Answer6,
                        Answer7: Answer7,
                        Answer8: Answer8,
                        questiontext: questiontext,
                        explanation: explanation,
                        Answer: Answer,
                        img: img,
                    }]
                }

            }).then(res => {
                this.$swal({
                    icon: "success",
                    title: "Delete is successfully!",
                    text: "You clicked the button!",
                });
                console.log(data.id);
            }).catch(e => {
                console.log(e);
            });
        },

        deleteItem(id) {
            this.$swal({
                title: "Are you sure?",
                text: "You won Delete  this Quastions!",
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
                    $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/question/" + id, {
                        method: "DELETE",
                    }).then(res => {
                        this.$store.dispatch("SetQuize");
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

.qustion-1 {
    max-width: 200px;
    white-space: pre-line;
    line-height: 1;
    overflow: hidden;
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