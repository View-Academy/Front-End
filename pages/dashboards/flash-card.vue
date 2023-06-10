<template>
    <div class="mt-12">
        <div class="row">
            <div class="col-md-3 mt-4">
                <div class="card btn">
                    <div class="card-header p-3 pb-0">
                        <h6 class="mb-1">Password requirements</h6>
                        <p class="text-sm mb-0">
                            Please follow this guide for a strong password:
                        </p>
                    </div>
                    <div class="card-body p-3">
                        <ul class="text-muted ps-4 mb-0">
                        </ul>
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

// images
import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";
import AU from "@/assets/img/icons/flags/AU.png";

export default {
    name: "flash-card",
    components: {
        ChannelsCard,
        RevenueCard,
        BarChartHorizontal,
        OrdersListCard,
        DefaultStatisticsCard,
    },
    data() {
        return {
            products: [
                {
                    title: "Nike v22 Running",
                    order: "12.821",
                    values: ["$130.992", "$9.500", "13"],
                    info: "Refund rate is lower with 97% than other products",
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "Nike v22 Running",
                    order: "12.821",
                    values: ["$130.992", "$9.500", "13"],
                    info: "Refund rate is lower with 97% than other products",
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "Nike v22 Running",
                    order: "12.821",
                    values: ["$130.992", "$9.500", "13"],
                    info: "Refund rate is lower with 97% than other products",
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "Nike v22 Running",
                    order: "12.821",
                    values: ["$130.992", "$9.500", "13"],
                    info: "Refund rate is lower with 97% than other products",
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "Nike v22 Running",
                    order: "12.821",
                    values: ["$130.992", "$9.500", "13"],
                    info: "Refund rate is lower with 97% than other products",
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "Nike v22 Running",
                    order: "12.821",
                    values: ["$130.992", "$9.500", "13"],
                    info: "Refund rate is lower with 97% than other products",
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "Nike v22 Running",
                    order: "12.821",
                    values: ["$130.992", "$9.500", "13"],
                    info: "Refund rate is lower with 97% than other products",
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "Nike v22 Running",
                    order: "12.821",
                    values: ["$130.992", "$9.500", "13"],
                    info: "Refund rate is lower with 97% than other products",
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "Business Kit (Mug + Notebook)",
                    order: "8.232",
                    values: ["$80.250", "$4.200", "40"],
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-mug.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "Black Chair",
                    order: "2.421",
                    values: ["$40.600", "$9.430", "54"],
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg",
                    icon: "bold-up text-danger",
                },
                {
                    title: "Wireless Charger",
                    order: "5.921",
                    values: ["$91.300", "$7.364", "5"],
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/bang-sound.jpg",
                    icon: "bold-down text-success",
                },
                {
                    title: "Mountain Trip Kit (Camera + Backpack)",
                    order: "921",
                    values: ["$140.925", "$20.531", "121"],
                    info: "Refund rate is higher with 70% than other products",
                    image:
                        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/photo-tools.jpg",
                    icon: "bold-up text-danger",
                },
            ],
            sales: {
                us: {
                    country: "United States",
                    sale: 2500,
                    bounce: "29.9%",
                    flag: US,
                },
                germany: {
                    country: "Germany",
                    sale: "3.900",
                    bounce: "40.22%",
                    flag: DE,
                },
                britain: {
                    country: "Great Britain",
                    sale: "1.400",
                    bounce: "23.44%",
                    flag: GB,
                },
                brasil: {
                    country: "Brasil",
                    sale: "562",
                    bounce: "32.14%",
                    flag: BR,
                },
                australia: {
                    country: "Australia",
                    sale: "400",
                    bounce: "56.83%",
                    flag: AU,
                },
            },
        };
    },
};
</script>
  