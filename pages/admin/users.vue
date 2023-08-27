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
                                            EMAIL
                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">
                                            Name
                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">
                                            Enrolled Courses
                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">
                                            Admin
                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">
                                            number Phone
                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">
                                            password
                                        </th>
                                        <th :class="index >= 1 ? 'text-center ps-2' : ''"
                                            class="text-uppercase text-info  font-weight-bolder ">
                                            action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="mountain of getUsers" :key="mountain">
                                        <td>
                                            <div class="px-3 py-1 d-flex">
                                                <div class="d-flex flex-column justify-content-center">
                                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                                        {{ mountain.email }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="px-3 py-1 d-flex">
                                                <div class="d-flex flex-column justify-content-center">
                                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                                        {{ mountain.name }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-sm align-middle ">
                                            <div class="px-3 py-1 d-flex ">
                                                <div class="d-flex align-items-center qustion-1  "
                                                    v-for="data of mountain.myCourses" :key="data">
                                                    <strong>
                                                        {{ data }} +
                                                    </strong>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-sm align-middle">
                                            <div class="px-3 py-1 d-flex">
                                                <div class="d-flex flex-column justify-content-center">
                                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                                        {{ mountain.isAdmain }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-sm align-middle">
                                            <div class="px-3 py-1 d-flex">
                                                <div class="d-flex flex-column justify-content-center">
                                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                                        {{ mountain.phone }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="align-middle text-center">
                                            <div class="px-3 py-1 d-flex">
                                                <div class="d-flex flex-column justify-content-center">
                                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                                        {{ mountain.password }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="align-middle text-center">
                                            <div class="px-3 py-1 d-flex">
                                                <i class="fas fa-user-edit text-secondary p-1 button-actions"
                                                    @click="changeData(mountain)" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"></i>
                                                <i class="fas fa-trash text-secondary p-1     button-actions"
                                                    @click="delete1(mountain.id)"></i>
                                            </div>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">{{ email }}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="mb-3">
                                                    <label for="recipient-name" class="col-form-label">Name:</label>
                                                    <input type="text" class="form-control" id="name" :value="name">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="recipient-name" class="col-form-label">Email:</label>
                                                    <input type="text" class="form-control" :value="email" id="email">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="recipient-name" class="col-form-label">Password:</label>
                                                    <input type="text" class="form-control" :value="password" id="password">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="recipient-name" class="col-form-label">Phone:</label>
                                                    <input type="text" class="form-control" :value="phone" id="phone">
                                                </div>
                                                <div class="mb-3">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="flexSwitchCheckDefault">
                                                        <label class="form-check-label"
                                                            for="flexSwitchCheckDefault">Admin</label>
                                                    </div>
                                                </div>
                                                <div class="list-group mt-4" v-for="(input, index) of courses" :key="index">
                                                    <a href="#" class="list-group-item list-group-item-action"
                                                        @click="deleteCorsesToUser(input)" aria-current="true">
                                                        <div class="d-flex w-100 justify-content-between">
                                                            <h5 class="mb-1">{{ input }}</h5>
                                                        </div>
                                                        <small>Click To Delete</small>
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                                @click="editItem(id)">Update</button>
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
        ...mapGetters(["getUsers"]),
    },

    data() {
        return {
            mountains: Array,
            name: String,
            password: String,
            email: String,
            phone: String,
            id: '',
            courses: []
        };
    },

    methods: {
        cons(e) {
            var systems = document.getElementById('ddlViewBy').value
            console.log(systems);

        },
        changeData(data) {
            this.name = data.name
            this.id = data.id
            this.password = data.password
            this.email = data.email
            this.phone = data.phone
            this.courses = [],
                data.myCourses.forEach(element => {
                    this.courses.push(element)

                });

            console.log(this.courses)
        },
        editItem(id) {
            var name = document.getElementById('name').value
            var password = document.getElementById('password').value
            var email = document.getElementById('email').value
            var phone = document.getElementById('phone').value


            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/" + id, {
                method: "PUT",
                body: {
                    name: name,
                    password: password,
                    email: email,
                    phone: phone,

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

        delete1(data) {
            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/" + data, {
                method: "DELETE",
            }).then(res => {
                this.$swal({
                    icon: "success",
                    title: "Updated successfully!",
                    text: "You clicked the button!",
                });
            }).catch(e => {
                console.log(e);
            });
        },
        deleteCorsesToUser(data) {
            this.$swal({
                title: `${data}`,
                text: `${this.id}`,
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
                    $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/deletecours/" + this.id + "/" + data, {
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

    mounted() {
        this.$store.dispatch('SetUser')
        console.log(this.getUsers);




    },
};
</script>
<style scoped>
.courses {
    max-width: 200px;

    white-space: pre-line;
    line-height: 1
}

.button-actions {
    cursor: pointer;

}
</style>
 