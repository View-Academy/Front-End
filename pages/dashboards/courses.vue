<template>
    <main class="main-content  position-relative max-height-vh-100 h-100">

        <div class="page-header position-relative" :style="{
            backgroundImage: 'url(' + headerImg + ')',
            backgroundSize: 'cover',
        }">
            <span class="mask bg-color opacity-8" @click="back()">
                <i class="fa fa-long-arrow-left back-arow"></i> </span>
            <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
                <div class="row">
                    <div class="mx-auto text-center col-md-6 mt-4">
                        <h2 class="text-white">Quizes Store</h2>
                        <h5 class="text-white">
                            Choose what your needs of quizzes catalog
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-n4" v-if="getMyCourses !== getCourses.name">
            <div class="container bg-black">
                <div class="tab-content tab-space">
                    <div class="tab-pane active">
                        <div class="row">
                            <div class="row mt-4">
                                <ComplexBackgroundCard v-for="corse of getCourses" :key="corse"
                                    image="https://media.publit.io/file/MutahUniversity/1stYear/2ndSemester/-32.png"
                                    :description="corse.discrption" :price=corse.price :name="corse.name" class="mt-5"
                                    @click="cl(corse)" />
                            </div>
                        </div>
                    </div>
                    <div id="annual" class="tab-pane">
                        <div class="row">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>
<script>
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
import PricingCard from "@/pagesComponents/pages/pricing/PricingCard.vue";
import AppFooter from "~~/examples/Footer/Centered.vue";
import AccordionItem from "@/pagesComponents/pages/pricing//AccordionItem.vue";
import ComplexBackgroundCard from "~~/pagesComponents/ecommerce/referral/ComplexBackgroundCard.vue";
import { mapGetters } from "vuex";

import headerImg from "@/assets/img/pricing-header-bg.jpg";
export default {
    name: "courses",
    components: { NavbarTransparent, PricingCard, AppFooter, AccordionItem, ComplexBackgroundCard, headerImg },
    data() {
        return {

        }
    },
    methods: {
        back() {
            navigateTo('/dashboards/default')
        },
        async cl(corse) {
            var today = new Date();
            var data = {
                userEmail: this.getEmail,
                userName: this.getUserName,
                userID: this.getId,
                courseName: corse.name,
                price: corse.price,
                numberPhone: this.getPhone,
                date: today.toLocaleString('en-GB', { timeZone: 'UTC' })
                // numberPhone:
            }
            this.$swal({
                title: "Are you sure?",
                text: "Are you sure to send a request to purchase this course?",
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
                    $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/order/', {
                        method: 'POST',
                        body: data

                    }).then(res => {
                        this.$store.dispatch("SetNotes");
                        this.$swal({
                            title: "Send successfully!",
                            text: "Sended successfully",
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

    },

    computed: {
        ...mapGetters(["getUserInfo", "getCourses", "getId", "getEmail", "getId", "getPhone", "getUserName", "getMyCourses"]),
    },
    mounted() {

        this.$store.dispatch("SetCourses");
        var x = sessionStorage.getItem("info");
        this.$store.dispatch("yourAction", JSON.parse(x));
        console.log(this.getId);
    },

}

definePageMeta({
    layout: false,
});

</script>
<style scoped>
.bg-color {
    background: rgb(8, 7, 73);
}

.back-arow {
    font-size: 60px;
    background-color: linear-gradient(rgba(57, 2, 2, 0.4), rgb(83, 72, 72)) !important;
    margin-left: 10px;
    cursor: pointer;
    animation-duration: 20s;
    color: black;
}
</style>
  