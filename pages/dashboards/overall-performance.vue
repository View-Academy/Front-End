<template>
    <div class="container-fluid py-4">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header p-3">
                        <h5 class="mb-2">Referral Program</h5>
                        <p class="mb-0">
                            Track and find all the details about our referral program, your
                            stats and revenues.
                        </p>
                    </div>
                    <div class="card-body p-3">
                        <div class="row">
                            <OutlinedCounterCard :duration="2500" prefix="$" :count="23980" title="Earning" />
                            <OutlinedCounterCard prefix="$" :count="2400" title="Customers" />
                            <OutlinedCounterCard class="mt-4 mt-lg-0" prefix="$" :count="48" title="Avg. Value" />
                            <OutlinedCounterCard :duration="3000" class="mt-4 mt-lg-0" suffix="%" :count="4"
                                title="Refund Rate" />
                        </div>
                        <hr class="horizontal dark" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
import OutlinedCounterCard from "~~/pagesComponents/ecommerce/referral/OutlinedCounterCard.vue";
import TransparentInfoCard from "~~/pagesComponents/ecommerce/referral/TransparentInfoCard.vue";
import ComplexBackgroundCard from "~~/pagesComponents/ecommerce/referral/ComplexBackgroundCard.vue";
import OrdersListCard from "@/examples/cards/OrdersListCard.vue";

export default {
    name: "overall-performance",
    components: {
        OutlinedCounterCard,
        TransparentInfoCard,
        ComplexBackgroundCard,
        OrdersListCard,
    },
    data() {
        return {
            users: [
                {
                    title: "Alice Vinget",
                    order: "8.232",
                    values: ["$130.992", "$9.500", "13"],
                    info: "Refund rate is lower with 97% than other products",
                    image:
                        "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/team-1.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "John Alura",
                    order: "12.821",
                    values: ["$80.250", "$4.200", "40"],
                    image:
                        "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-2.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "Andrew Sian",
                    order: "2.421",
                    values: ["$40.600", "$9.430", "54"],
                    image:
                        "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-3.jpg",
                    icon: "bold-up text-danger",
                },
                {
                    title: "Luca Willaim",
                    order: "5.921",
                    values: ["$91.300", "$7.364", "5"],
                    image:
                        "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-4.jpg",
                    icon: "bold-down text-success",
                },

                {
                    title: "Richel Manuel",
                    order: "921",
                    values: ["$140.925", "$20.531", "121"],
                    info: "Refund rate is higher with 70% than other products",
                    image:
                        "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-5.jpg",
                    icon: "bold-up text-danger",
                },
            ],
        };
    },
};
</script>
  