<template>
    <div>
        <div class="addFlashcard  ">
            <button class=" btn bg-info">
                <div data-bs-target="#exampleModal13" data-bs-whatever="@mdo" data-bs-toggle="modal">
                    <i class="fa fa-bolt text-warning "></i>
                    <span class="text-blod mx-2 ">Add Flash Card</span>
                </div>
            </button>
        </div>
        <div class="mt-12">
            <!-- Loop through each unique type -->
            <div v-for="(type, index2) in uniqueTypes" :key="index2">
                <hr class="dropdown-divider" />
                <div class=" d-flex justify-content-between">
                    <h3 class=" mx-5">{{ type }}</h3>
                    <i @click="deleteType(type)" class="fa fa-trash-o deleteType mx-5" aria-hidden="true"></i>
                </div>
                <hr class="dropdown-divider" />
                <div class="row mx-5">
                    <!-- Loop through cards with the current type -->
                    <div class="col-md-3 mt-4" v-for="(input, cardIndex) in cardsByType(type)" :key="cardIndex">
                        <i @click="deleteCard(input)" class="fa fa-trash-o deleteType mx-5" aria-hidden="true"></i>
                        <div class="card-header p-3 pb-0">
                            <div class="card btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                @click="openDialog(input, cardIndex, index2)">
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
                            <button type="button" class="btn btn-primary" @click="toggleCardSide">{{ cardSide === 'front' ?
                                'Go Back' : 'Go Front' }}</button>
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
        <div class="modal fade" id="exampleModal135" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Secation Name</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name"
                            v-model="typevlue">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            data-bs-target="#exampleModal13" data-bs-whatever="@mdo" data-bs-toggle="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            data-bs-target="#exampleModal13" @click="addType()" data-bs-whatever="@mdo"
                            data-bs-toggle="modal">Save
                            changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal13" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
            tabindex="-1">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel">Flash Card</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-title px-2 " id="exampleModalToggleLabel">
                            <button type="button" class="btn btn-primary btn-sm mt-5" data-bs-target="#exampleModal135"
                                data-bs-whatever="@mdo" data-bs-toggle="modal">Add Secation</button>
                        </div>
                        <div class="modal-title" id="exampleModalToggleLabel">
                            <h5 for="dropdown">Select an Secation</h5>
                            <select id="dropdown" v-model="selectedItem">
                                <option v-for="(input, index) of getUserTypes" :key="index" :value="input">{{ input }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                        </div>
                        <form>
                            <div class="row">
                                <div class="mb-3 col-6">
                                    <label for="exampleInputEmail1" class="form-label">Fornt </label>
                                    <div id="editor">
                                        <textarea class="form-control" v-model="front" rows="15"
                                            placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    </div>
                                    <div class="form-text"><strong> Keyboard Shortcuts: Copy </strong> -> CTRL + C and Paste
                                        -> CTRL + V</div>
                                </div>
                                <div class="mb-3 col-6">
                                    <label for="exampleInputPassword1" class="form-label">Back</label>
                                    <div id="editor">
                                        <textarea class="form-control" v-model="back" rows="15"
                                            placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" @click="addflashCard" data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal" data-bs-dismiss="modal">Save</button>
                        <button class="btn btn-info" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"
                            data-bs-dismiss="modal">Close</button>
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
            front: '',
            back: '',
            typevlue: '',
            frontText: 'Front Text',
            backText: 'Back Text',
            cardIndex: 0,
            cardSide: 'front',
            selectedItem: '',

            selectedCard: null
        };
    },
    computed: {
        ...mapGetters(["getUserFlshCrad", "getId", "getUserTypes"]),
        uniqueTypes() {
            // Get an array of unique types
            return [...new Set(this.getUserFlshCrad.map(item => item.type))];
        },

    },


    mounted() {
        this.$store.dispatch("SetTypes");
        this.$store.dispatch("SetFlashcard");
    },

    created() {
        this.$store.dispatch("SetFlashcard");
        this.$store.dispatch("SetTypes");

    },



    methods: {
        cardsByType(type) {
            // Filter cards by type
            return this.getUserFlshCrad.filter(item => item.type === type);
        },

        openDialog(data, openDialog, o) {
            this.cardSide = "front"
            this.selectedCard = data;
            this.cardIndex = openDialog;

            console.log(this.selectedCard)
            console.log(o)
            console.log(openDialog)
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
        },
        deleteType(type) {
            this.$swal({
                title: "Delete This Type?",
                text: "Are you sure to Delete This Type Qustions ?",
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
                    $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/deleteType/" + this.getId + "/" + type, {
                        method: 'PUT',
                    }).then(res => {
                        this.$swal({
                            title: "Delete successfully!",
                            text: "A suit will remain there unless the cards are cleared. Please clear all cards related to that suit",
                            icon: "success",
                            customClass: {
                                confirmButton: "btn bg-gradient-success",
                            },
                            buttonsStyling: false,
                        });
                        this.$store.dispatch("SetTypes");

                    }).catch(err => {
                        console.log(err);

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
        generateUniqueId() {
            const timestamp = new Date().getTime(); // Get current timestamp
            const random = Math.random().toString(36).substr(2, 9); // Generate a random string

            // Combine timestamp and random string to create a unique ID
            const uniqueId = `${timestamp}${random}`;

            return uniqueId;
        },

        addflashCard() {
            const data = {
                front: this.front, // قم بتعيين this.front بالقيمة المناسبة
                back: this.back,
                unqie: this.generateUniqueId(),
                type: this.selectedItem // قم بتعيين this.back بالقيمة المناسبة
            };


            if (data.type === "") {
                this.$swal({
                    icon: "info",
                    title: "<strong>You Must To Select Or Add -   <u> Type</u></strong>",
                    focusConfirm: false,
                    confirmButtonAriaLabel: "Thumbs up, great!",
                    cancelButtonAriaLabel: "Thumbs down",
                    customClass: {
                        confirmButton: "btn bg-gradient-success",
                        cancelButton: "btn bg-gradient-danger",
                    },
                    buttonsStyling: false,
                });

            } else {

                $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/flashCard/" + this.getId, {
                    method: 'POST',
                    body: data
                }).then(res => {
                    this.$store.dispatch("SetFlashcard");
                    console.log(res);
                })

            }





            // Send the object (you can send it to an API endpoint using fetch or any other method)


        },
        addType() {
            if (this.typevlue == "") {

                this.$swal({
                    icon: "info",
                    title: "<strong>You cannot leave the field empty</strong>",


                    focusConfirm: false,

                    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
                    cancelButtonAriaLabel: "Thumbs down",
                    customClass: {
                        confirmButton: "btn bg-gradient-success",
                        cancelButton: "btn bg-gradient-danger",
                    },
                    buttonsStyling: false,
                });

            } else {

                $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/types/" + this.getId + "/" + this.typevlue, {
                    method: "POST",
                }).then(res => {
                    this.$swal({
                        icon: "success",
                        title: "Updated successfully!",
                        text: "You clicked the button!",
                    });
                    this.$store.dispatch("SetTypes");

                }).catch(e => {
                    console.log(e);
                });

            }

        },

        deleteCard(data) {
            this.$swal({
                title: "Delete This FlashCard?",
                text: "Are you sure to Delete This FlashCard Qustions ?",
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
                    $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/flashcard2/" + this.getId + "/" + data.unqie, {
                        method: 'PUT',
                    }).then(res => {
                        this.$swal({
                            title: "Delete successfully!",
                            text: "Delete successfully",
                            icon: "success",
                            customClass: {
                                confirmButton: "btn bg-gradient-success",
                            },
                            buttonsStyling: false,
                        });
                        this.$store.dispatch("SetFlashcard");

                    }).catch(err => {
                        console.log(err);

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


            // console.log(data.front)
            // console.log(this.getId)

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


.deleteType {
    color: red;
    font-size: 20px;
    cursor: pointer;
}

.addFlashcard {
    position: absolute;
    right: 5px;
    top: 242px;

}
</style>
  