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
                                            User EMAIL

                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">

                                            User Name
                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">

                                            Course Name
                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">

                                            price
                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">

                                            number Phone
                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">

                                            DATE
                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">

                                            action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="mountain of getOrder" :key="mountain">
                                        <td>
                                            <div class="px-3 py-1 d-flex">
                                                <div class="d-flex flex-column justify-content-center">
                                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                                        {{ mountain.userEmail }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="px-3 py-1 d-flex">
                                                <div class="d-flex flex-column justify-content-center">
                                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                                        {{ mountain.userName }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-sm align-middle">
                                            <div class="px-3 py-1 d-flex">
                                                <div class="d-flex flex-column justify-content-center">
                                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                                        {{ mountain.courseName }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-sm align-middle">
                                            <div class="px-3 py-1 d-flex">
                                                <div class="d-flex flex-column justify-content-center">
                                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                                        {{ mountain.price }} JD
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-sm align-middle">
                                            <div class="px-3 py-1 d-flex">
                                                <div class="d-flex flex-column justify-content-center">
                                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                                        {{ mountain.numberPhone }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="align-middle text-center">
                                            <div class="px-3 py-1 d-flex">
                                                <div class="d-flex flex-column justify-content-center">
                                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                                        {{ mountain.date }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="align-middle text-center">
                                            <div class="px-3 py-1 d-flex">
                                                <button type="button" class="btn mx-2 btn-secondary"
                                                    @click="accepet(mountain)">Accept</button>
                                                <button type="button" class="btn btn-primary"
                                                    @click="removeuser(mountain)">Deny</button>
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
        ...mapGetters(["getOrder"]),
    },

    data() {
        return {
            mountains: Array,


        };
    },
    async asyncData({ $fetch }) {
        $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/order", {
            method: "GET",
        })
            .then((res) => {
                this.mountains = res

            })
            .catch((eroor) => {
                console.log(eroor);
            })
    },
    methods: {
        accepet(data) {
            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/order/add/" + data.userID + "/" + data.courseName, {
                method: "PUT",

            }).then(res => {
                this.$swal({
                    icon: "success",
                    title: "Updated successfully!",
                    text: "You clicked the button!",
                });
                this.$store.dispatch('SetOrder')
            }).catch(e => {
                console.log(e);
            });
            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/order/" + data.id, {
                method: "DELETE",

            }).then(res => {
                this.$store.dispatch('SetOrder')

            }).catch(e => {
                console.log(e);
            });

        },
        removeuser(data) {
            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/order/" + data.id, {
                method: "DELETE",

            }).then(res => {
                this.$store.dispatch('SetOrder')

            }).catch(e => {
                console.log(e);
            });
        }


    },

    mounted() {
        this.$store.dispatch('SetOrder')




    },
};
</script>
 