<template>
    <div class="py-4 container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    <div v-for="{
                        title,
                        value,
                        description,
                        icon: { component, background, shape },
                    } of cardData" :key="title" class="col-lg-4 col-md-6 col-12">
                        <MiniStatisticsCard :title="title" :value="value" :description="description" :icon="{
                            component: component,
                            background: background,
                            shape: shape,
                        }" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7 mb-lg">
                        <div class="card z-index-2">
                            <div class="mb-0 pb-0 card-header">
                                <h6>Progress Graph </h6>
                                <p class="text-sm">
                                    <i class="fa fa-arrow-up text-success"></i>
                                    <!-- <span class="font-weight-bold ms-1">4% more</span> in 2021 -->
                                </p>
                            </div>
                            <div class="p-0 card-body">
                                <div class="chart">
                                    <GradientLineChart :chart-options="{
                                        chart: {
                                            type: 'area',
                                        },
                                        colors: ['#f0b52b'],
                                        labels: [
                                            'Apr',
                                            'May',
                                            'Jun',
                                            'Jul',
                                            'Aug',
                                            'Sep',
                                            'Oct',
                                            'Nov',
                                            'Dec',
                                        ],
                                        dataLabels: {
                                            enabled: false,
                                        },
                                        stroke: {
                                            curve: 'smooth',
                                        },
                                        legend: {
                                            show: false,
                                        },
                                    }" :series=Progress />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="card h-100">
                            <div class="p-3 pb-0 card-header">
                                <div class="d-flex justify-content-between justify-content-center">
                                    <h6 class="mb-0">QBank Usage</h6>
                                    <button type="button"
                                        class="mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center"
                                        data-bs-toggle="tooltip" data-bs-placement="bottom" title
                                        data-bs-original-title="See traffic channels">
                                        <i class="fas fa-info" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="p-3 pb-0 mt-4 card-body">
                                <div class="row">
                                    <div class="col-7 text-start">
                                        <div class="chart d-flex justify-content-center">
                                            <PieChart :chart-options="{
                                                colors: ['#17c1e8', '#4BB543', '#3A416F',],
                                                labels: ['Total Questions', 'Used Questions', 'Unused Questions',],
                                                legend: {
                                                    show: false,
                                                },
                                                dataLabels: {
                                                    enabled: false,
                                                },
                                                responsive: [
                                                    {
                                                        breakpoint: 480,
                                                        options: {
                                                            chart: {
                                                                width: 200,
                                                            },
                                                            legend: {
                                                                position: 'bottom',
                                                            },
                                                        },
                                                    },
                                                ],
                                            }" :series="series2" width="250" />
                                        </div>
                                    </div>
                                    <div class="my-auto mx-auto col-5">
                                        <span class="badge badge-md badge-dot me-4 d-block text-start">
                                            <i class="bg-info"></i>
                                            <span class="text-xs text-dark">Total Questions</span>
                                        </span>
                                        <span class="badge badge-md badge-dot me-4 d-block text-start">
                                            <i class="bg-success"></i>
                                            <span class="text-xs text-dark">Used Questions</span>
                                        </span>
                                        <span class="badge badge-md badge-dot me-4 d-block text-start">
                                            <i class="bg-dark"></i>
                                            <span class="text-xs text-dark">Unused Questions</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-4 col-sm-6">

                    </div>


                </div>
                <div class="card">
                    <div class=" pb-0 card-header">
                        <div class="d-flex justify-content-between">
                            <h6 class="mb-0">Your Performance</h6>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="chart">
                            <apexchart :height="90" :key="data" :options="chartOptions" :series="series"
                                :xaxis="categories">
                            </apexchart>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">

                </div>
                <div class="row mt-4">
                    <div class="col-lg-12 col-md-8 mb-4 mb-md-0">

                    </div>
                    <div class="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>



import MiniStatisticsCard from "~~/examples/cards/MiniStatisticsCard.vue";
import GradientLineChart from "~~/examples/charts/GradientLineChart.vue";
import BarChartHorizontal from "~~/examples/charts/BarChartHorizontal.vue";
import TodoList from "~~/pagesComponents/dashboards/default/TodoList.vue";
import PieChart from "~~/examples/charts/PieChart.vue";
import { mapGetters } from "vuex";
import { map } from 'leaflet';
export default {
    name: "default",
    components: { BarChartHorizontal, GradientLineChart, MiniStatisticsCard, TodoList, PieChart },
    data() {
        return {
            series2: [0],
            Progress: [
                {
                    name: 'Progress Graph ',
                    data: [0],
                },
            ],

            chartOptions: {

                chart: {
                    height: 300,
                    type: "bar",
                },
                colors: ["#f0b52b"],
                fill: {
                    type: "solid",
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    },
                },
                dataLabels: {
                    enabled: true,
                },
                xaxis: {
                    categories: [""],
                },

            },
            series: [
                {
                    name: "Your Perfomance",
                    data: [],
                },
            ],




            cardData: [
                {
                    title: "Enrolled Courses",
                    value: "0",
                    description: '',
                    icon: {
                        component: "ni ni-world",
                        background: "bg-gradient-danger",
                        shape: "rounded-circle",
                    },
                },
                {
                    title: "Completed Courses",
                    value: "0",
                    description: '',
                    icon: {
                        component: "ni ni-paper-diploma",
                        background: "bg-gradient-success",
                        shape: "rounded-circle",
                    },
                },
                {
                    title: "InCompleted Courses",
                    value: "0",
                    description: ``,
                    icon: {
                        component: "ni ni-cart",
                        background: "bg-gradient-warning",
                        shape: "rounded-circle",
                    },
                },
            ],
            categories: [],
            dash: 0



        };
    },
    computed: {
        ...mapGetters(["GetyourScore", "getMyCourses", "getPreviousQuizes", "getOmitted", "getQuizes", "TotalIncorrectAnswer", "TotalCorrectAnswer"]),
    },

    methods: {




    },
    asyncData() {

    },

    mounted() {
        var x1 = sessionStorage.getItem("info");
        this.$store.dispatch("yourAction", JSON.parse(x1));
        this.$store.dispatch("SetPreviousQuize");
        this.$store.dispatch("SetQuize");

        console.log(typeof this.GetyourScore);
        const UsedQuastions = this.TotalIncorrectAnswer + this.TotalCorrectAnswer;
        const UnusedQuastions = this.getQuizes.length - (this.TotalIncorrectAnswer + this.TotalCorrectAnswer);

        this.series2.push(this.getQuizes.length)
        this.series2.push(UsedQuastions)
        this.series2.push(UnusedQuastions)

        this.series[0].data.push(this.getOmitted)
        this.cardData[0].value = `${this.getMyCourses.length}`
        this.Progress[0].data.push(this.GetyourScore[0])
        this.Progress[0].data.push(this.GetyourScore[1])
        this.Progress[0].data.push(this.GetyourScore[3])
        const obj = this.GetyourScore;
    }



}
definePageMeta({
    layout: "default"
});




// Notes: computed(() => store.getters.getNoteQuiz);

// const series = [
//    {
//       name: "hi",
//       data: [15, 20, 12, 60, 20, 15],
//    },
// ];


// const sales = {
//    us: {
//       country: "United States",
//       sale: 2500,
//       value: "$230,900",
//       bounce: "29.9%",
//       flag: US,
//    },
//    germany: {
//       country: "Germany",
//       sale: "3.900",
//       value: "$440,000",
//       bounce: "40.22%",
//       flag: DE,
//    },
//    britain: {
//       country: "Great Britain",
//       sale: "1.400",
//       value: "$190,700",
//       bounce: "23.44%",
//       flag: GB,
//    },
//    brasil: {
//       country: "Brasil",
//       sale: "562",
//       value: "$143,960",
//       bounce: "32.14%",
//       flag: BR,
//    },
// };
</script>
