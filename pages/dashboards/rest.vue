<template>
    <div class="card z-index-2 mt-5">
        <div class="p-3 pb-0 card-header">
            <h6>{{ title }}</h6>
        </div>
        <div class="table-responsive">
            <table class="table align-items-center mb-0">
                <thead>
                    <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Courses
                        </th>

                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>
                            <h4>Correct</h4>
                        </td>

                        <td>
                            <button class="btn btn-secondary" @click="RestCorect()"> Reset</button>
                        </td>

                    </tr>
                    <tr>

                        <td>
                            <h4>Omitted</h4>
                        </td>

                        <td>
                            <button class="btn btn-secondary" @click="RestOmitted()"> Reset</button>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <h4>Incorrect</h4>
                        </td>

                        <td>
                            <button class="btn btn-secondary" @click="RestIcorect()"> Reset</button>
                        </td>

                    </tr>
                    <tr>

                        <td>
                            <h4>Unused</h4>
                        </td>

                        <td>
                            <button class="btn btn-secondary" @click="RestUnused()"> Reset</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>Mark</h4>
                        </td>

                        <td>
                            <button class="btn btn-secondary" @click="RestMark()"> Reset</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {

    name: "reset",
    data() {
        return {
            title: "RESET PAGE",
            all: [],
            good: [],
            activeClass: "js-active position-relative",
            data: [],
            valueChecded: '',
            id: [],
            corectAnswer12: '',
            inputhalooo: [],
            array: [],
            input: [],
            correctAnswer: 0,
            incorrectAnswer: 0,
            navStore: "",
            totalSeconds: 0,
            startIntariver1: 0,
            titleq: "",
            coc: "",
            Note: "",
            explanation: "",
            correctAnswer3: "",
            labelId: "",
            questiontext: "",
            omitedte: 0,
            id2: Number,
            array: Array,
            array2: [],
            unused: 0,
            rusalut: 0,
            chartOptions: {

                chart: {
                    type: "donut",
                },
                colors: ["#2ecc71", "#3498db", "#f53939", "#2c3e50"],
                labels: ["Correct Answer", "Omitted Answer", "Incorrect Answer", "Unused Answer"],
                dataLabels: {
                    enabled: true,
                },
                legend: {
                    show: true,
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 780,
                            },
                        },
                    },
                ],
            },
            series: [],
            width: 500
        };
    },
    computed: {
        ...mapGetters(["getId"])
    },

    methods: {
        RestMark() {
            this.$swal({
                title: "Reset The Mark?",
                text: "Are you sure to RESET The Mark Qustions ?",
                showCancelButton: true,
                confirmButtonText: "Yes, Send it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
                customClass: {
                    confirmButton: "btn bg-gradient-success",
                    cancelButton: "btn bg-gradient-danger",
                },
                buttonsStyling: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/pullmark/' + this.getId, {
                        method: 'PUT',


                    }).then(res => {
                        this.$store.dispatch("SetNotes");
                        this.$swal({
                            title: "RESET successfully!",
                            text: "RESET successfully",
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
                        text: "This Request Has Been Cancelled",
                        icon: "error",
                        customClass: {
                            confirmButton: "btn bg-gradient-success",
                        },
                        buttonsStyling: false,
                    });
                }
            })
        },
        RestCorect() {
            this.$swal({
                title: "Reset The Correct?",
                text: "Are you sure to RESET The Correct Qustions ?",
                showCancelButton: true,
                confirmButtonText: "Yes, Send it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
                customClass: {
                    confirmButton: "btn bg-gradient-success",
                    cancelButton: "btn bg-gradient-danger",
                },
                buttonsStyling: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/pullcorrect/' + this.getId, {
                        method: 'PUT',


                    }).then(res => {
                        this.$store.dispatch("SetNotes");
                        this.$swal({
                            title: "RESET successfully!",
                            text: "RESET successfully",
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
                        text: "This Request Has Been Cancelled",
                        icon: "error",
                        customClass: {
                            confirmButton: "btn bg-gradient-success",
                        },
                        buttonsStyling: false,
                    });
                }
            })
        },
        RestUnused() {
            this.$swal({
                title: "Reset The Unused?",
                text: "Are you sure to RESET The Unused Qustions ?",
                showCancelButton: true,
                confirmButtonText: "Yes, Send it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
                customClass: {
                    confirmButton: "btn bg-gradient-success",
                    cancelButton: "btn bg-gradient-danger",
                },
                buttonsStyling: false,
            }).then((result) => {
                if (result.isConfirmed) {
             
                 
                        this.$swal({
                            title: "RESET successfully!",
                            text: "RESET successfully",
                            icon: "success",
                            customClass: {
                                confirmButton: "btn bg-gradient-success",
                            },
                            buttonsStyling: false,
                    
                    })
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === this.$swal.DismissReason.cancel
                ) {
                    this.$swal({
                        title: "Cancelled!",
                        text: "This Request Has Been Cancelled",
                        icon: "error",
                        customClass: {
                            confirmButton: "btn bg-gradient-success",
                        },
                        buttonsStyling: false,
                    });
                }
            })
        },
        RestIcorect() {
            this.$swal({
                title: "Reset The Incorrect?",
                text: "Are you sure to RESET The Incorrect Qustions ?",
                showCancelButton: true,
                confirmButtonText: "Yes, Send it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
                customClass: {
                    confirmButton: "btn bg-gradient-success",
                    cancelButton: "btn bg-gradient-danger",
                },
                buttonsStyling: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/pullincorrect/' + this.getId, {
                        method: 'PUT',


                    }).then(res => {
                        this.$store.dispatch("SetNotes");
                        this.$swal({
                            title: "RESET successfully!",
                            text: "RESET successfully",
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
                        text: "This Request Has Been Cancelled",
                        icon: "error",
                        customClass: {
                            confirmButton: "btn bg-gradient-success",
                        },
                        buttonsStyling: false,
                    });
                }
            })
        },
        RestOmitted() {
            this.$swal({
                title: "Reset The Omitted?",
                text: "Are you sure to RESET The Omitted Qustions ?",
                showCancelButton: true,
                confirmButtonText: "Yes, Send it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
                customClass: {
                    confirmButton: "btn bg-gradient-success",
                    cancelButton: "btn bg-gradient-danger",
                },
                buttonsStyling: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/pullomitted/' + this.getId, {
                        method: 'PUT',
                    }).then(res => {
                        this.$store.dispatch("SetNotes");
                        this.$swal({
                            title: "RESET successfully!",
                            text: "RESET successfully",
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
                        text: "This Request Has Been Cancelled",
                        icon: "error",
                        customClass: {
                            confirmButton: "btn bg-gradient-success",
                        },
                        buttonsStyling: false,
                    });
                }
            })
        }
    }
}

</script>
    