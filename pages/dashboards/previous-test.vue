<template>
    <div class="container-fluid py-4">
        <div class="d-sm-flex justify-content-between">
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card mt-4">
                    <div class="card-body">
                        <div class="card-title">
                            <h5>Data Table</h5>
                        </div>
                        <div class="table-responsive" v-for="(data, index) of getPreviousQuizes" :key="index">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            {{ data.title }}
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <table id="order-list" class="table table-flush">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th>correct Answer</th>
                                                        <th>incorrect Answer</th>
                                                        <th>Omitted</th>
                                                        <th>Unused</th>
                                                        <th>date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr :class="data.yourScore >= 50 ? 'green' : 'red'">
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
                                                            <div class="d-flex align-items-center">
                                                                <ArgonButton color="warng" variant="outline"
                                                                    class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center">
                                                                    <i class="fa fa-hand-rock-o" aria-hidden="true"></i>
                                                                </ArgonButton>
                                                                <span>{{ data.unsed }}</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-xs font-weight-bold">
                                                            <span class="my-2 text-xs">{{ data.data }}</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="row">
                                                <div class="col-12">
                                                    <table id="order-list" class="table table-flush">
                                                        <tr>
                                                            <thead class="thead-light">
                                                                <tr>
                                                                    <th>Quastion</th>
                                                                    <th class="px-5">Courses</th>
                                                                    <th class="px-5">Subject</th>
                                                                    <th class="px-5">System</th>
                                                                    <th class="px-5">Topic</th>
                                                                    <th class="px-5">id</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr  v-for="data2 of data.arrayqustion" :key="data2">
                                                                    <td class="text-xs font-weight-bold ">
                                                                        <div class="d-flex  align-items-center">
                                                                            <span>{{ data2.questiontext }}</span>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-xs font-weight-bold px-5">
                                                                        <div class="d-flex align-items-center">
                                                                            <span>{{ data2.courses }}</span>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-xs font-weight-bold px-5">
                                                                        <div class="d-flex align-items-center">
                                                                            <span>{{ data2.subject }}</span>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-xs font-weight-bold px-5">
                                                                        <div class="d-flex align-items-center">
                                                                            <span>{{ data2.systems }}</span>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-xs font-weight-bold px-5">
                                                                        <div class="d-flex align-items-center">
                                                                            <span>{{ data2.topic }}</span>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-xs font-weight-bold px-5">
                                                                        <div class="d-flex align-items-center">
                                                                            <span>{{ data2.id }}</span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </tr>
                                                    </table>
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
        </div>
    </div>
</template>
  
<script>
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
    methods:{
        colorChange(data){
            if (data.correctAnswer >0) {
                return 'green'
            } else {
                return 'blue'
            }
            
        }
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
.blue{
    background-color: rgba(0, 208, 255, 0.27);
}
</style>
  