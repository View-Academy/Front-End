<template>
    <div class="mt-12">
        <!-- Loop through each unique type -->
        <div v-for="(type, index) in uniqueTypes" :key="index">
            <h3 class=" mx-5">{{ type }}</h3>
            <hr class="dropdown-divider" />
            <div class="row mx-5">
                <!-- Loop through cards with the current type -->
                <div class="col-md-3 mt-4" v-for="(input, cardIndex) in cardsByType(type)" :key="cardIndex">
                    <div class="card btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                        @click="openDialog(input, cardIndex)">
                        <div class="card-header p-3 pb-0">
                            <h6 class="mb-1">{{ input.type }}</h6>
                            <p class="text-sm mb-0">{{ input.front }}</p>
                        </div>
                        <div class="card-body p-3">
                            <ul class="text-muted ps-4 mb-0"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true" v-if="selectedCard">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">

                        <h5 class="modal-title" id="exampleModalLabel">{{ selectedCard ? selectedCard.type : '' }}</h5>
                        <button type="button" class="btn btn-primary" @click="toggleCardSide">{{ cardSide === 'front' ? 'Go Back' : 'Go Front' }}</button>
                    </div>
                    <div class="modal-body">
                        <p v-if="cardSide === 'front'">{{ selectedCard.front }}</p>
                        <p v-if="cardSide === 'back'">{{ selectedCard.back }}</p>













                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        <button type="button" class="btn btn-primary" @click="previousCard">Previous Card</button>
                        <button type="button" class="btn btn-primary" @click="nextCard">Next Card</button>

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
import { mapGetters } from "vuex";

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

            frontText: 'Front Text',
            backText: 'Back Text',
            cardIndex: 0,
            cardSide: 'front',

            selectedCard: null
        };
    },
    computed: {
        ...mapGetters(["getUserFlshCrad"]),
        uniqueTypes() {
            // Get an array of unique types
            return [...new Set(this.getUserFlshCrad.map(item => item.type))];
        },

    },


    mounted() {
        this.$store.dispatch("SetFlashcard");
    },

    created() {
        this.$store.dispatch("SetFlashcard");
    },



    methods: {
        cardsByType(type) {
            // Filter cards by type
            return this.getUserFlshCrad.filter(item => item.type === type);
        },

        openDialog(data, openDialog) {


            this.cardSide = "front"
            this.selectedCard = data;
            this.cardIndex = openDialog;

            console.log(this.selectedCard)
        },


        toggleCardSide() {
            // Toggle between 'front' and 'back' sides
            this.cardSide = this.cardSide === 'front' ? 'back' : 'front';
        },

        nextCard() {
            // Move to the next card in the list


            if (this.cardIndex < this.cardsByType(this.selectedCard.type).length - 1) {
                this.cardIndex++;
                this.selectedCard = this.cardsByType(this.selectedCard.type)[this.cardIndex];
                this.cardSide = 'front'; // Reset cardSide to 'front'
            }
        },

        previousCard() {
            if (this.cardIndex > 0) {
                this.cardIndex--;
                this.selectedCard = this.cardsByType(this.selectedCard.type)[this.cardIndex];
                this.cardSide = 'front'; // Reset cardSide to 'front'
            }
        }






    },
};
</script>

<style>
/* CSS for the divider */
.divider {
    border-top: 1px solid #ccc;
    margin: 16px 0;
}
</style>
  