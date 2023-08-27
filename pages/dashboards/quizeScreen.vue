<template class="templet1" ref="target">
    <aside id="sidenav-main" class="sidenav navbar navbar-vertical z-index-3 navbar-expand-xs border-3 navbarTop ">
        <ul class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <li v-for="(item, index) of input" :key="index" class="nav-item " role="presentation" :id="index + `haloo`">
                <i class="" aria-hidden="true"></i>
                <button class="nav-link w-100 " :class="index === 0 ? 'active tabme' : null" :id="`${item.name}-tab`"
                    data-bs-toggle="pill" :data-bs-target="`#${item.name}`" type="button" role="tab"
                    :aria-controls="`v-` + item.name" :aria-selected="index === 0">
                    {{ index + 1 }}
                </button>
            </li>
        </ul>
    </aside>
    <main class="main-content continer12">
        <div class="w-100">

        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                    aria-selected="true">Blode</button>
                                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                    aria-selected="false">Serum</button>
                                <button class="nav-link labValue" id="nav-contact-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                                    aria-selected="false">Cerebrospinal</button>
                                <button class="nav-link labValue " id="nav-contact-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                                    aria-selected="false">Urine and
                                    BMI</button>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                aria-labelledby="nav-home-tab">
                                ...</div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                ...
                            </div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                ...
                            </div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                ...
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="staticBackdrop" tabindex="-1" data-bs-backdrop="static"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen d-flex justify-content-center">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h5 class="modal-title text-center" id="exampleModalLabel"> {{ titleq }}</h5>
                    </div>
                    <div class="modal-body z-99999">
                        <OutlinedCounterCard prefix="%" :count="rusalut" :title="rusalut >= 50 ? 'Successful' : 'Fail'"
                            class="d-inline " />
                        <apexchart :width="width" :options="chartOptions" :series="series" class="cahrt1"></apexchart>
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                        <button type="button" class="btn btn-primary" @click="endQuize()" data-bs-dismiss="modal">Save
                            changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="staticBackdrop1" tabindex="-1" data-bs-backdrop="static"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl  d-flex justify-content-center">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">SI Reference Intervals</h5>
                    </div>
                    <div class="modal-body">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item   ml-5" role="presentation">
                                <button class="nav-link active " id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                    aria-selected="true">Blood</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link labValue" id="pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                    aria-selected="false">Serum</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                    aria-selected="false">Cerebrospinal</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-v-tab" data-bs-toggle="pill" data-bs-target="#pills-v"
                                    type="button" role="tab" aria-controls="pills-v" aria-selected="false">Urine and
                                    BMI</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active labValue" id="pills-home" role="tabpanel"
                                aria-labelledby="pills-home-tab">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Blood, Plasma, Serum</th>
                                            <th scope="col">Reference Range</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Erythrocyte count
                                                Male
                                                Female</td>
                                            <td>4.3-5.9 million/mm3
                                                3.5-5.5 million/mm3</td>
                                        </tr>
                                        <tr>
                                            <td>Erythrocyte sedimentation rate (Westergren)
                                                Male
                                                Female</td>
                                            <td>0-15 mm/h
                                                0-20 mm/h</td>
                                        </tr>
                                        <tr>
                                            <td>Hematocrit
                                                Male
                                                Female</td>
                                            <td>41%-53%
                                                36%-46%</td>
                                        </tr>
                                        <tr>
                                            <td>Amylase</td>
                                            <td>
                                                25-125 U/L</td>
                                        </tr>
                                        <tr>
                                            <td>Hemoglobin, blood
                                                Male
                                                Female</td>
                                            <td>
                                                13.5-17.5 g/dL
                                                12.0-16.0 g/dL </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade labValue" id="pills-profile" role="tabpanel"
                                aria-labelledby="pills-profile-tab">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Serum</th>
                                            <th scope="col">Reference Range</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Alanine aminotransferase (ALT)</td>
                                            <td>10-40 U/L</td>
                                        </tr>
                                        <tr>
                                            <td>Aspartate aminotransferase (AST)</td>
                                            <td>12-38 U/L</td>
                                        </tr>
                                        <tr>
                                            <td>Alkaline phosphatase</td>
                                            <td>25-100 U/L</td>
                                        </tr>
                                        <tr>
                                            <td>Amylase</td>
                                            <td>
                                                25-125 U/L</td>
                                        </tr>
                                        <tr>
                                            <td>Bilirubin
                                                Total
                                                Direct</td>
                                            <td> 0.1-1.0 mg/dL
                                                0.0-0.3 mg/dL </td>
                                        </tr>
                                        <tr>
                                            <td>Calcium</td>
                                            <td> 8.4-10.2 mg/dL</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade labValue" id="pills-contact" role="tabpanel"
                                aria-labelledby="pills-contact-tab">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Cerebrospinal Fluid</th>
                                            <th scope="col">Reference Range</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td>Cell count</td>
                                            <td>0-5/mm^3</td>
                                        </tr>
                                        <tr>
                                            <td>Chloride</td>
                                            <td>118-132 mEq/L</td>
                                        </tr>
                                        <tr>
                                            <td>Gamma globulin</td>
                                            <td>3%-12% of total proteins</td>
                                        </tr>
                                        <tr>
                                            <td>Glucose</td>
                                            <td>
                                                40-70 mg/dL</td>
                                        </tr>
                                        <tr>
                                            <td>Pressure</td>
                                            <td> 70-180 mm H2O</td>
                                        </tr>
                                        <tr>
                                            <td>Proteins, total</td>
                                            <td> less than 40 mg/dL</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade labValue" id="pills-v" role="tabpanel" aria-labelledby="pills-v-tab">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Urine</th>
                                            <th scope="col">Reference Range</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td>Calcium</td>
                                            <td>100-300 mg/24 h</td>
                                        </tr>
                                        <tr>
                                            <td>Creatine clearance
                                                Male
                                                Female</td>
                                            <td>97-137 mL/min
                                                88-128 mL/min</td>
                                        </tr>
                                        <tr>
                                            <td>Osmolality</td>
                                            <td>50-1200 mOsmol/kg H2O</td>
                                        </tr>
                                        <tr>
                                            <td>Oxalate</td>
                                            <td>8-40 μg/mL</td>
                                        </tr>
                                        <tr>
                                            <td>Proteins, total</td>
                                            <td> less than 150 mg/24 h </td>
                                        </tr>
                                        <tr>
                                            <td>17-Hydroxycorticosteroids
                                                Male
                                                Female</td>
                                            <td> 3.0-10.0 mg/24 h
                                                2.0-8.0 mg/24 h </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- <NavbarTransparent /> -->


        <div class="row">
            <div class="tab-content" id="pills-tabContent2">
                <div v-for="(item, index) of input" :key="index" class="tab-pane fade containt5"
                    :class="index === 0 ? 'show active ' : null" :id="item.name" role="tabpanel"
                    aria-labelledby="pills-home-tab">
                    <nav id="navbarBlur" class="bg-Navbar justify-content-between  navbar navbar-main">
                        <div class="text-center" @click="mark(item)">
                            <span>Item {{ index + 1 }} of {{ item.length1 }} </span>
                            <span class="d-block"><strong>Question Id</strong>:{{ item.id }}</span>

                        </div>
                        <ul class=" d-flex hedar4">
                            <li>
                                <div class="marked1" @click="mark(item, id)">
                                    <a class=" text-body">
                                        <i class="fa fa-flag-o   margin9"></i>
                                        <span class="text-blod m-2 margin9">Mark</span>
                                    </a>
                                </div>
                            </li>
                            <li class=" marked mx-3">
                                <div @click="previous(index)">
                                    <a class=" text-body d-flex ml-2  ">
                                        <i class="fa fa-chevron-left margin9  "></i>
                                    </a>
                                    <span class="text-sm">Previous</span>
                                </div>
                            </li>
                            <li class=" marked mx-3">
                                <div class="" @click="next(index)">
                                    <a class=" text-body d-flex ml-2  ">
                                        <i class="fa fa-chevron-right margin9  "></i>
                                    </a>
                                    <span class="text-sm">Next</span>
                                </div>
                            </li>
                            <li class=" marked mx-4">
                                <div @click="openFullscreen()">
                                    <a class=" text-body d-flex ml-2  ">
                                        <i class="fa fa-external-link  margin9  "></i>
                                    </a>
                                    <span class="text-sm">Full Screen</span>
                                </div>
                            </li>
                            <li class="flex-row marked mx-4">
                                <div @click="changeData(item)" data-bs-toggle="modal" data-bs-target="#exampleModal12"
                                    data-bs-whatever="@mdo">
                                    <a class=" text-body d-flex mx-2  ">
                                        <i class="fa fa-sticky-note-o  margin9  "></i>
                                    </a>
                                    <span class="text-sm mx-3 ">Note</span>
                                </div>
                            </li>
                            <li class="flex-row marked mx-6">
                                <div data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                                    <a class=" text-body d-flex ml-2">
                                        <i class="fa fa-thermometer-quarter margin9"></i>
                                    </a>
                                    <span class="text-sm">Lab Value</span>
                                </div>
                            </li>
                            <li class="flex-row marked mx-6">
                                <div @click="zoomOut()">
                                    <a class=" text-body d-flex ml-2  ">
                                        <i class="fa fa-search-minus  margin9  "></i>
                                    </a>
                                    <span class="text-sm">Zoom out</span>
                                </div>
                            </li>
                            <li class="flex-row marked mx-4">
                                <div @click="zoomI()">
                                    <a class=" text-body d-flex ml-2">
                                        <i class="fa fa-search-plus  margin9  "></i>
                                    </a>
                                    <span class="text-sm">Zoom in</span>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div class="row rowSecations">
                        <div class="col-md-9 mx-7 my-4 mb-6">
                            <pre id="qustion" class="text-qustion">{{ item.questiontext
                            }}</pre>
                        </div>

                        <div class=" col-md-5 ">
                            <div v-if="showMenu" class="custom-menu"
                                :style="{ top: menuTop + 'px', left: menuLeft + 'px' }">
                                <div class="row ">
                                    <ul class=" d-flex hedar4">
                                        <li>

                                            <button class=" m-0 buttonY">
                                                <div class="" @click="selecation()">
                                                    <i class="fa  fa-circle  dotColor  "></i>
                                                    <span class="text-blod mx-2 ">highlight</span>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button class="m-0 buttonY" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal12" data-bs-whatever="@mdo"
                                                @click="selectedNote()">
                                                <div>
                                                    <i class="fa fa-flag-o text-info "></i>
                                                    <span class="text-blod mx-2 ">Note</span>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button class=" m-0 buttonY" @click="flashCard">
                                                <div data-bs-target="#exampleModal13" data-bs-whatever="@mdo"
                                                    data-bs-toggle="modal">
                                                    <i class="fa fa-bolt text-warning "></i>
                                                    <span class="text-blod mx-2 ">Flash Card</span>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Additional menu items or actions -->
                            </div>
                            <div :id="item.questiontext" class="accordion" @click="(e) => checkIfCorecet(item, e.target)">
                                <ol type="A" id="a" class="qustion3 m-5 ">
                                    <li>
                                        <div class="form-check">
                                            <i class=""></i>
                                            <input class="form-check-input" type="radio" :name="item.questiontext"
                                                :id="item.q1" :value="item.q1">
                                            <label class="form-check-label" :id="item.q1" :for="item.questiontext">
                                                <strong>{{ item.q1 }} </strong>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <i class=""></i>
                                            <input class="form-check-input" type="radio" :name="item.questiontext"
                                                :id="item.q2" :value="item.q2">
                                            <label class="form-check-label" :id="item.q2" :for="item.questiontext">
                                                <strong>{{ item.q2 }}</strong>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <i class=""></i>
                                            <input class="form-check-input" type="radio" :name="item.questiontext"
                                                :id="item.q3" :value="item.q3">
                                            <label class="form-check-label" :id="item.q3" :for="item.questiontext">
                                                <strong>{{ item.q3 }} </strong>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <i class=""></i>
                                            <input class="form-check-input" type="radio" :name="item.questiontext"
                                                :id="item.q4" :value="item.q4">
                                            <label class="form-check-label" :id="item.q4" :for="item.q4">
                                                <strong> {{ item.q4 }}</strong>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-check ">
                                            <i class=""></i>
                                            <input class="form-check-input" type="radio" :name="item.questiontext"
                                                :id="item.q5" :value="item.q5">
                                            <label class="form-check-label" :id="item.q5" :for="item.q5">
                                                <strong> {{ item.q5 }}</strong>
                                            </label>
                                        </div>
                                    </li>
                                    <li v-if="!item.q6 == ''">
                                        <div class="form-check ">
                                            <i class=""></i>
                                            <input class="form-check-input" type="radio" :name="item.questiontext"
                                                :id="item.q6" :value="item.q6">
                                            <label class="form-check-label" :id="item.q6" :for="item.q6">
                                                <strong>{{ item.q6 }}</strong>
                                            </label>
                                        </div>
                                    </li>
                                    <li v-if="!item.q7 == ''">
                                        <div class="form-check ">
                                            <i class=""></i>
                                            <input class="form-check-input" type="radio" :name="item.questiontext"
                                                :id="item.q7" :value="item.q7">
                                            <label class="form-check-label" :id="item.q7" :for="item.q7">
                                                <strong>{{ item.q7 }}</strong>
                                            </label>
                                        </div>
                                    </li>
                                    <li v-if="!item.q8 == ''">
                                        <div class="form-check">
                                            <i class=""></i>
                                            <input class="form-check-input" type="radio" :name="item.questiontext"
                                                :id="item.q8" :value="item.q8">
                                            <label class="form-check-label" :id="item.q8" :for="item.q8">
                                                <strong>{{ item.q8 }}</strong>
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                                <button class="mb-0  submit m-5 mb-5 " :id="item.questiontext" type="button"
                                    @click=" showSwal(item)" title="Send">
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div class=" d-inline mx-5  my-4 col-md-4 image12  " v-if="!item.img == ''">
                            <img :src="item.img" width="800" alt="profile_image" class="shadow-sm  border-radius-lg" />
                        </div>
                        <div class=" col-md-8 mb-5 mt-5 text-bg-danger mx-5   " v-if="item.togeleexplanation">
                            <div class="card borderIncorect">
                                <div class="card-header contintIncorct">
                                    <h4 class="card-title text-danger">Incorrect Answer</h4>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Correct answer</p>
                                    <p class="card-text">{{ item.answer1 }}</p>
                                </div>
                            </div>
                        </div>
                        <div class=" col-md-12 mt-5 px-5" v-if="item.togeleexplanation">
                            <strong class="  mt-5 ">Explanation</strong>
                            <hr class="dropdown-divider" />
                        </div>
                        <div class=" col-md-12 mb-11 p-5 font-weight-bold" v-if="item.togeleexplanation">
                            <div class="row">
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-danger">{{ item.courses }}</h4>
                                    <div>Courses</div>
                                </span>
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-danger">{{ item.subject }}</h4>
                                    <div>Subject</div>
                                </span>
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-danger">{{ item.systems }}</h4>
                                    <div>Systems</div>
                                </span>
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-danger">{{ item.topic }}</h4>
                                    <div>Topic</div>
                                </span>

                            </div>
                            <hr class="dropdown-divider" />
                            <p v-html="replacedString(item.explanation)" class="mb-9">
                            </p>
                        </div>
                        <div class=" col-md-8 mb-5 mt-5 text-bg-danger mx-5 " v-if="item.togeleexplanationCorect">
                            <div class="card contintcorct">
                                <div class="card-header contintIncorct">
                                    <h4 class="card-title text-success">Answered Correctly </h4>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Correct answer</p>
                                    <p class="card-text">{{ item.answer1 }}</p>
                                </div>
                            </div>
                        </div>
                        <div class=" col-md-12 mt-5 px-5" v-if="item.togeleexplanationCorect">

                            <strong class="  mt-5 ">Explanation</strong>
                            <hr class="dropdown-divider" />
                        </div>
                        <div class="col-md-12 mb-11  p-5 font-weight-bold incorcerctSecations"
                            v-if="item.togeleexplanationCorect">
                            <div class="row">
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-success">{{ item.courses }}</h4>
                                    <div>Courses</div>
                                </span>
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-success">{{ item.subject }}</h4>
                                    <div>Subject</div>
                                </span>
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-success">{{ item.systems }}</h4>
                                    <div>Systems</div>
                                </span>
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-success">{{ item.topic }}</h4>
                                    <div>Topic</div>
                                </span>
                            </div>
                            <hr class="dropdown-divider" />
                            <p v-html="replacedString(item.explanation)" class="mb-9">
                            </p>
                        </div>
                        <div class=" col-md-8 mb-5   text-bg-danger mx-5" v-if="item.omitted">
                            <div class="card omitted2">
                                <div class="card-header contintIncorct">
                                    <h4 class="card-title text-info">Omitted Answer </h4>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Correct answer</p>
                                    <p class="card-text">{{ item.answer1 }}</p>
                                </div>
                            </div>
                        </div>
                        <div class=" col-md-12 mt-5 px-5" v-if="item.omitted">

                            <strong class="  mt-5 ">Explanation</strong>
                            <hr class="dropdown-divider" />
                        </div>
                        <div class="col-md-12 d-inline mb-12  px-5 font-weight-bold" id="omttid22" v-if="item.omitted">
                            <div class="row">
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-info">{{ item.courses }}</h4>
                                    <div>Courses</div>
                                </span>
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-info">{{ item.subject }}</h4>
                                    <div>Subject</div>
                                </span>
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-info">{{ item.systems }}</h4>
                                    <div>Systems</div>
                                </span>
                                <span class="d-inline col-md-3">
                                    <h4 class="d-inline text-info">{{ item.topic }}</h4>
                                    <div>Topic</div>
                                </span>
                            </div>
                            <hr class="dropdown-divider" />
                            <p v-html="replacedString(item.explanation)" class="mb-9">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal12" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Your Note</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Note:</label>
                                <textarea class="form-control" id="Note" rows="20" :value="Note"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="note()">Send
                            message</button>
                    </div>
                </div>

            </div>
        </div>

        <!-- FLASH CARD -->
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
                                        <textarea class="form-control" :value="back" rows="15"
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
        <!-- FLASH CARD -->
        <div class="modal fade" id="exampleModal15" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Card Name</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            data-bs-target="#exampleModal13" data-bs-whatever="@mdo" data-bs-toggle="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            data-bs-target="#exampleModal13" data-bs-whatever="@mdo" data-bs-toggle="modal">Save
                            changes</button>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footerA">
            <div class="timer   d-inline ">Block Time:</div>
            <div class="timer  d-inline " id="minutes">00</div>
            <div class="timer  d-inline ">:</div>
            <div class="timer  d-inline " id="seconds">00</div>
            <div class=" d-inline imageLogo ">
                <img src="@/assets/img/viw2.jpeg" width="130" alt="profile_image" class="shadow-sm  border-radius-lg" />
            </div>
            <div class="timer d-inline  mx-6 endQuiz " data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                @click="savequize()">
                <i class="fa fa-ban text-2xl " aria-hidden="true"> </i>
                <strong>End Quiz</strong>
            </div>
        </footer>
    </main>
</template>
<script>

import Sidenav from "~~/examples/Sidenav";
import SidenavList from "../../examples/Sidenav/SidenavList.vue";
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
import PricingCard from "@/pagesComponents/pages/pricing/PricingCard.vue";
import AppFooter from "~~/examples/Footer/Centered.vue";
import InfoCard from "~~/examples/cards/InfoCard.vue";
import AccordionItem from "@/pagesComponents/pages/pricing//AccordionItem.vue";
import TodoList from "@/pagesComponents/pages/projects/TodoList.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import Navbar from "~~/examples/Navbar";
import headerImg from "@/assets/img/pricing-header-bg.jpg";
import FooterCentered from "@/examples/Footer/Centered.vue";
import DefaultInfoCard from "~~/examples/cards/DefaultInfoCard.vue";
import MiniStatisticsCard from "~~/examples/cards/MiniStatisticsCard.vue";
import { useNavStore } from "~~/stores/NavStore";
import DoughnutChart from "~~/examples/charts/DoughnutChart.vue";
import OutlinedCounterCard from "~~/pagesComponents/ecommerce/referral/OutlinedCounterCard.vue";
import logo from "../../assets/img/viweAcadmy.png";
import CustomMenu from './CustomMenu.vue'
import { mapGetters } from "vuex";
import { QuillEditor } from "@vueup/vue-quill";

export default {
    name: "quizeScreen",
    components: { QuillEditor, CustomMenu, SidenavList, Sidenav, OutlinedCounterCard, DoughnutChart, MiniStatisticsCard, AccordionItem, AppFooter, PricingCard, NavbarTransparent, headerImg, TodoList, InfoCard, Navbar, FooterCentered, DefaultInfoCard },

    props: ["data1"],
    data() {
        return {
            content: '',
            editorOptions: {
                // Quill editor options here
            },
            typevlue: "",
            selectedItem: '',
            selectedValue: '',
            quillInstance: null,
            front: "",
            back: "",
            text: '',
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
            selectedText: '',
            showMenu: false,
            menuTop: 0,
            menuLeft: 0,
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
        ...mapGetters(["getUserInfo", "getId", "getMyCourses2","getUserTypes"]),

    },
    created() {
        // Check if getUserTypes array is not empty before setting the default selection
        // if (this.getUserTypes.length > 0) {
        //     this.selectedItem = this.getUserTypes[0]; // Set the default selected item to the first item in the list
        // }
    },

    methods: {
        // replacedString(item) {
        //     const originalString = `<pre  style="
        //     font-family: 'Open Sans';
        //     font-weight: bold;
        //     white-space: pre-wrap;

        // " class="col-md-10  "> ${item}</pre>`;
        //     const regex = /\[image src="(.*?)" width="(.*?)"\]/;
        //     const match = regex.exec(originalString);
        //     const imageUrl = match ? match[1] : '';// Replace with your dynamic image URL
        //     const width = match ? match[2] : '';
        //     const replacedString = originalString.replace(regex, `<hr class="dropdown-divider" /><div><img src="${imageUrl}"  alt="Image" width="${width}" style="
        //     /* margin-left: 30px; */
        //     margin-left:  527px;
        // "> </div>   <hr class="dropdown-divider" /><br>`);
        //     return replacedString;
        // },
        replacedString(str) {
            const regex = /\[image src="(.*?)" width="(.*?)"\]/g;
            const originalString = `<pre  style="
            font-family: 'Open Sans';
            font-weight: bold;
            white-space: pre-wrap;
        " class="col-md-10"> ${str}</pre>`;

            const replacedString = originalString.replace(regex, (match, imageUrl, width) => {
                // Call your function here passing the originalString and imageUrl

                return `<hr class="dropdown-divider" /><img src="${imageUrl}" alt="Image" style="
             margin-left: 30px; 
           margin-left:  527px;" width="${width}"> <hr class="dropdown-divider" /><br>`;
            });
            return replacedString;
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


        generateUniqueId() {
            const timestamp = new Date().getTime(); // Get current timestamp
            const random = Math.random().toString(36).substr(2, 9); // Generate a random string

            // Combine timestamp and random string to create a unique ID
            const uniqueId = `${timestamp}${random}`;

            return uniqueId;
        },


        onEditorReady(editorInstance) {
            this.quillInstance = editorInstance;
        },
        handleSelectionChange() {
            this.front = window.getSelection().toString();
        },
        handleSelection() {
            const selection = window.getSelection().getRangeAt(0);
            const { top, left } = selection.getBoundingClientRect();
            this.menuTop = top - 50; // Adjust the position as needed
            this.menuLeft = left;
            this.showMenu = true;


        },
        openFullscreen() {
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
        },
        covvv() {
            console.log("khaleed");
        },
        handleClick() {
            console.log(this.selectedText);
        },

        savequize() {
            this.unused = this.array.length - (this.incorrectAnswer + this.omitedte + this.correctAnswer)
            this.series.push(this.correctAnswer, this.omitedte, this.incorrectAnswer, this.unused);
            this.rusalut = (this.correctAnswer / this.array.length) * 100
        },

        endQuize() {
            console.log(this.array);
            const data = [];
            var today = new Date();
            let insatrQuastion = {
                arrayqustion: this.all,
                unsed: this.array.length - (this.correctAnswer + this.omitedte + this.incorrectAnswer),
                correctAnswer: this.correctAnswer,
                incorrectAnswer: this.incorrectAnswer,
                omitedte: this.omitedte,
                title: this.titleq,
                yourScore: (this.correctAnswer / this.array.length) * 100,
                qusationNumber: this.array.length,
                data: today.toLocaleString('en-GB', { timeZone: 'UTC' }),
                time: this.startIntariver1
            }
            clearInterval(this.startIntariver1)
            data.push(insatrQuastion)
            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/endquize/" + this.getId, {
                method: 'POST',
                body: data
            }).then(res => {
                navigateTo('/dashboards/default')
            })
        },
        handleMouseUp(event) {
            const selectedText = window.getSelection().toString();
            if (selectedText.length > 0) {
                this.showCustomMenu(event.pageX, event.pageY);
            } else {
                this.hideCustomMenu();
            }
        },
        showCustomMenu(x, y) {
            this.$refs.customMenu.showMenu = true;
            this.$refs.customMenu.menuPosition = { top: y, left: x };
        },
        hideCustomMenu() {
            this.$refs.customMenu.showMenu = false;
        },

        changeData(data, id) {
            this.Note = ""
            this.questiontext = data.questiontext
            this.explanation = data.explanation
            this.correctAnswer3 = data.answer1
            this.labelId = data.labelId
        },

        zoomI() {
            document.body.style.fontSize = 1.5 + "em";
        },

        zoomOut() {
            document.body.style.fontSize = 1 + "em";
        },

        note(res, note) {
            var Note = document.getElementById('Note').value
            var today = new Date();
            var data = {
                Note: Note,
                correctAnswer: this.correctAnswer3,
                explanation: this.explanation,
                questiontext: this.questiontext,
                labelId: this.labelId,
                Date: today.toLocaleString('en-GB', { timeZone: 'UTC' })
            }
            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/note/" + this.getId, {
                method: 'POST',
                body: data
            }).then(res => {
                this.Note = ""
                this.$swal({
                    title: "Saved successfully!",
                    text: "The Notes is Saved",
                    icon: "success",
                    customClass: {
                        confirmButton: "btn bg-gradient-success",
                    },
                    buttonsStyling: false,
                });
            })
            document.getElementById('Note').value = ""
        },
        Note11() {
            this.Note = ""
        },
        myTimer() {
            var minutesLabel = document.getElementById("minutes");
            var secondsLabel = document.getElementById("seconds");
            ++this.totalSeconds;
            secondsLabel.innerHTML = this.pad(this.totalSeconds % 60);
            minutesLabel.innerHTML = this.pad(parseInt(this.totalSeconds / 60));
        },

        pad(val) {
            var valString = val + "";
            if (valString.length < 2) {
                return "0" + valString;
            } else {
                return valString;
            }
        },
        next(index) {
            var el = document.getElementById(index + "haloo").nextSibling.lastElementChild;
            el.click();
        },
        previous(index) {
            var el = document.getElementById(index + "haloo").previousSibling.lastElementChild;
            el.click();
        },
        correctAnswer2(el, res) {
            const v = "";
            switch (el.value === res.answer1) {
                case true:
                    var ele12 = ele1[i].nextElementSibling;
                    v = ele12.classList.add("corectAnswer");
            }
            console.log(v);
        },
        mark(res) {


            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/matchmark/" + this.getId + "/" + res.id, {
                method: 'PUT',
            }).then(res => {
                console.log("res");
            }).catch(err => {
                console.log(err);

            })
            var element2 = document.getElementById(`${res.name}-tab`);
            element2.previousElementSibling.classList.add("spinner1")
            element2.previousElementSibling.classList.add("fa")
            element2.previousElementSibling.classList.add("fa-flag");
        },
        selectedNote() {
            this.Note = window.getSelection().toString();
        },
        flashCard() {
            this.front = window.getSelection().toString();
            this.back = window.getSelection().toString();
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
                    console.log(res);
                })

            }





            // Send the object (you can send it to an API endpoint using fetch or any other method)


        },
        selecation() {
            var range = window.getSelection().getRangeAt(0);
            let span = document.createElement("span");
            span.style.backgroundColor = "yellow";
            span.appendChild(range.extractContents());
            range.insertNode(span);
        },


        checkedVal(res) {
            var value;
            var ele1 = document.getElementsByName(res.questiontext);
            for (let index = 0; index < ele1.length; index++) {
                if (ele1[index].checked) {
                    value = "checed"
                } else {
                    value = "notcheced"
                }
            }
            return value
        },



        checkIfCorecet(res, e) {
            const h = res.answer1
            const h2 = e.value
            this.corectAnswer12 = h2
            this.valueChecded = h2
            console.log(this.corectAnswer12);
        },
        testFunction1() {
            console.log(window.getSelection().toString());
        },





        showSwal(res, e) {

            this.all.push(res)
            console.log(this.all);
            // document.getElementById(res.questiontext)
            var ele1 = document.getElementsByName(res.questiontext);
            ele1.disabled = true
            // Corect ///////////////////////////////////////////////////////////////
            if (res.answer1 === this.corectAnswer12) {
                this.correctAnswer++
                $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/matchcorrect/" + this.getId + "/" + res.id, {
                    method: 'PUT',
                }).then(res => {
                    console.log("res");

                }).catch(err => {
                    console.log(err);

                })

                ele1.forEach(element => {
                    element.setAttribute("disabled", "")
                    res.togeleexplanationCorect = true
                    element.disabled = true
                    if (this.corectAnswer12 === element.value) {
                        var element2 = document.getElementById(`${res.name}-tab`);
                        element2.previousElementSibling.classList.add("corectAnswer")
                        element2.previousElementSibling.classList.add("fa")
                        element2.previousElementSibling.classList.add("fa-check");
                        var ele12 = element.previousElementSibling;
                        ele12.classList.add("corectAnswer2");
                        ele12.classList.add("fa");
                        ele12.classList.add("fa-check");
                    }
                });
                // Omttid //////////////////////////////////////////////////////////////////////
            } else if (this.corectAnswer12 === '') {

                res.omitted = true
                this.omitedte++
                this.corectAnswer12 = res.answer1
                $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/matchomitted/" + this.getId + "/" + res.id, {
                    method: 'PUT',

                }).then(res => {
                    console.log(res);

                }).catch(err => {
                    console.log(err);

                })
                ele1.forEach(element => {
                    element.setAttribute("disabled", "")
                    element.disabled = true
                    if (this.corectAnswer12 === element.value) {
                        element.checked = true
                        var ele12 = element.previousElementSibling;
                        var element2 = document.getElementById(`${res.name}-tab`);
                        ele12.classList.add("corectAnswer2");
                        ele12.classList.add("fa");
                        ele12.classList.add("fa-check");
                        console.log("corect");
                    }
                });
                var element3 = document.getElementById(`${res.name}-tab`);
                element3.previousElementSibling.classList.add("omitted");
                element3.previousElementSibling.classList.add("fa");
                element3.previousElementSibling.classList.add("fa-minus-circle");
                // Not Corect //////////////////////////////////////////////////////////////
            } else {
                this.incorrectAnswer++
                this.corectAnswer12 = res.answer1
                res.togeleexplanation = true
                $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user/match/" + this.getId + "/" + res.id, {
                    method: 'PUT',

                }).then(res => {
                    console.log(res);

                }).catch(err => {
                    console.log(err);

                })
                ele1.forEach(element => {
                    element.setAttribute("disabled", "")
                    element.disabled = true
                    if (this.corectAnswer12 === element.value) {
                        var element3 = document.getElementById(`${res.name}-tab`);
                        element3.previousElementSibling.classList.add("fa");
                        element3.previousElementSibling.classList.add("fa-times");
                        element3.previousElementSibling.classList.add("notcorectAnswer");
                        var ele12 = element.previousElementSibling;
                        ele12.classList.add("corectAnswer2");
                        ele12.classList.add("fa");
                        ele12.classList.add("fa-check");
                    }
                    if (this.valueChecded === element.value) {
                        var ele12 = element.previousElementSibling;
                        ele12.classList.add("notcorectAnswer2");
                        ele12.classList.add("fa");
                        ele12.classList.add("fa-times")
                    }
                });
            }

        },
        getSelectedText() {
            var selectedText = "";

            if (window.getSelection) {
                selectedText = window.getSelection().toString();
            } else if (document.selection && document.selection.type != "Control") {
                selectedText = document.selection.createRange().text;
            }

            return selectedText;
        }


    },
    beforeDestroy() {
        document.removeEventListener('mouseup', this.handleSelection);

    },



    mounted() {

        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
        document.addEventListener('mouseup', this.handleSelection)

        // var myDiv = document.getElementById("myDiv");

        // myDiv.addEventListener("mouseup", function () {
        //     var selectedText = getSelectedText();
        //     console.log(selectedText);
        // });

        var x = sessionStorage.getItem("info");
        this.$store.dispatch("yourAction", JSON.parse(x));
        this.$store.dispatch("SetTypes");
        console.log(this.getId);
        this.startIntariver1 = 0
        this.startIntariver1 = clearTimeout(this.myTimer)
        this.startIntariver1 = setInterval(this.myTimer, 1000)
        this.navStore = useNavStore();
        this.array = JSON.parse(localStorage.getItem("authToken"));
        this.id = JSON.parse(sessionStorage.getItem("info"));
        this.titleq = localStorage.getItem("title");
        JSON.stringify(this.array)
        for (let index = 0; index < this.array.length; index++) {
            this.input.push({
                courses: this.array[index].courses,
                subject: this.array[index].subject,
                systems: this.array[index].systems,
                topic: this.array[index].topic,
                labelId: Math.floor((Math.random() * 100000) + 1),
                length1: this.array.length,
                togeleexplanation: false,
                togeleexplanationCorect: false,
                omitted: false,
                ido: this.array[index].id,
                id: this.array[index].id2,
                name: "Q" + (index + 1),
                questiontext: this.array[index].question[0].questiontext,
                q1: this.array[index].question[0].Answer1,
                q2: this.array[index].question[0].Answer2,
                q3: this.array[index].question[0].Answer3,
                q4: this.array[index].question[0].Answer4,
                q5: this.array[index].question[0].Answer5,
                q6: this.array[index].question[0].Answer6,
                q7: this.array[index].question[0].Answer7,
                q8: this.array[index].question[0].Answer8,
                img: this.array[index].question[0].img,
                answer1: this.array[index].question[0].Answer,
                explanation: this.array[index].question[0].explanation,
            })
        }
    }


}
definePageMeta({
    layout: false
});

</script>
<style scoped>
html {
    background-image: linear-gradient(#fcfcfc 0px, #d7dced 100%);
}

body {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}



.hedar4 {
    list-style-type: none;
}

.buttonY {
    border: none;
    background-color: #040403;
    color: #d7dced;
}

.buttonY:hover {
    background-color: #a3afd5;
}

.corectAnswer {
    color: rgb(34, 234, 3) !important;
    top: 6px;
    position: absolute;

}

.image12 {
    transition: all .2s ease-in-out;
}

.image12:hover {
    transform: scale(1.1);
}

.imageHover:hover {
    width: 500px;
    cursor: pointer;
}

.corectAnswer2 {
    color: green !important;
}

.endQuiz {
    cursor: pointer;
    padding: 10px;

}

.dotColor {
    color: #fbc531;
}

.sele {
    cursor: pointer;
    font-size: 12px;

}

.text-qustion {
    font-family: 'Open Sans';
    font-weight: bold;
    white-space: pre-wrap;
    font-size: large;
}

.custom-menu {
    color: #ebedf5;
    position: absolute;
    background: #040403;
    border: 1px solid rgb(176, 32, 32);
    margin: 0;

}

#customMenu {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    z-index: 1000;
}

#customMenu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

#customMenu li {
    cursor: pointer;
}

#customMenu li:hover {
    background-color: #ddd;
}

.menu-item {
    padding: 5px;
    cursor: pointer;
}

.menu-item:hover {
    background: #ccc;
}

.endQuiz:hover {
    background-color: #283294;

}

.notcorectAnswer {
    color: rgb(234, 3, 3) !important;
    top: 6px;
    position: absolute;

}

.mb-11 {
    margin-bottom: 27rem !important;
}

.notcorectAnswer2 {
    color: rgb(234, 3, 3) !important;
}

.skapid2 {
    background: linear-gradient(rgba(4, 9, 145, 0.4), rgb(34, 3, 234)) !important;
}

.nav-link {
    margin: 0 3px;
    padding: 2px 20px;
    font-weight: 500;

    font-weight: bold;
}

.navContiner {
    justify-content: space-around !important;
}

.nav-item:nth-child(even) {
    background-color: #ccc;
    position: relative;
}

.nav-item:nth-child(odd) {
    background-color: #ffffff;
    position: relative;
}

.nav-link {
    border-radius: 0 !important;
    margin: 0 !important;

}


.active {
    background-color: rgb(85, 144, 204) !important;

}

.labValue {
    background-color: #ffffff !important;
}

.borderIncorect {
    border-left: red 5px solid;
    border-radius: 0;
    box-shadow: -3px 1px 13px 0px rgba(0, 0, 0, 0.75);
    background-color: #ebedf5
}

.contintcorct {
    border-left: green 5px solid;
    border-radius: 0;
    box-shadow: -3px 1px 13px 0px rgba(0, 0, 0, 0.75);
    background-color: #ebedf5
}

.contintIncorct {
    background-color: #ebedf5
}

.timer {
    display: inline !important;
    color: white;
    margin-bottom: 50px;
}


.submit {
    background-color: #0067a9;
    color: white;
    font-weight: bold;

}

.margin9 {
    margin-left: 20px;
    color: #fcfcfc;
    cursor: pointer;
}

::selection {
    color: red !important;
    background: yellow !important;
}

.spinner1 {
    color: #d4e60b !important;
    top: 8px;
    position: absolute;

}

.submit1 {
    background-color: #15234d;
    color: white;
}

.ooo {
    background: linear-gradient(rgba(4, 9, 145, 0.4), rgb(34, 3, 234)) !important;
}

.rowSecations {
    margin-bottom: 100px;
    overflow: hidden;
}

.bg-Navbar {
    background-color: #3852a4;
    margin-left: 0;
    color: white;
    justify-content: space-around !important
}



.zoom {
    zoom: 2;
    -moz-transform: scale(2);
    -moz-transform-origin: 0 0;
}

.color4 {
    color: white;
}

.omitted {
    color: rgb(23, 201, 255);
    top: 6px;
    position: absolute;


}

.imageLogo {
    margin: 33%;
}

.omitted2 {
    border-left: rgb(23, 201, 255) 5px solid;
    border-radius: 0;
    box-shadow: -3px 1px 13px 0px rgba(0, 0, 0, 0.75);
    background-color: #ebedf5
}

.cahrt1 {
    margin-left: 30%;
    margin-top: 100px;
}

.infoCard {
    border-left: red 7px solid;
    border-radius: 0 !important;
    color: red;

}

.qustion3 {
    border: #5590cc solid 1px;
    border-bottom: solid 5px #5590cc;


}

.time {
    background-color: #f0b52b;
    color: #15234d;
    padding: 5px;
    border-radius: 20px;
}

.containt5 {
    background-image: linear-gradient(#fcfcfc 0px, #d7dced 100%) !important;

}

.navbarTop {
    width: 140px;
    position: fixed !important;
    bottom: 0;
    overflow: hidden;
    background-image: linear-gradient(#fcfcfc 0px, #d7dced 100%) !important;
    border: #717582 solid 1px;
    overflow: scroll;

}

.footerA {
    overflow: hidden;
    background-color: #3852a4;
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-top: 12px;
}

.continer12 {
    margin-left: 140px !important;
    background-image: linear-gradient(#fcfcfc 0px, #d7dced 100%) !important;
    height: 100%;
}


.stiker {
    height: 200px;
}

::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */


.marked {
    font-size: 17px;
    color: white;
}

.marked1 {
    font-size: 25px;
    cursor: pointer;

}

.marked1 :hover {
    background-color: #283294;

}

.marked :hover {
    background-color: #283294;

}
</style>


