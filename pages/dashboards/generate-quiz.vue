<template>
    <div class="py-4 h-100 container-fluid">
        <div class="row">
            <div class="text-center col-12">
                <h3 class="mt-5 text-white">Generate Your Quiz</h3>
                <h5 class="text-white font-weight-normal">
                    Create Your Own Customize Quiz
                </h5>
                <div class="mb-5 multisteps-form">
                    <div class="row mt-5">
                        <div class="mx-auto my-5 col-12 col-lg-8">
                            <div class="multisteps-form__progress">
                                <button class="multisteps-form__progress-btn js-active" type="button" title="User Info"
                                    :class="activeStep >= 0 ? activeClass : ''" @click="activeStep = 0">
                                    <span> Course</span>
                                </button>
                                <button class="multisteps-form__progress-btn" type="button" title="Address"
                                    :class="activeStep >= 1 ? activeClass : ''" @click="activeStep = 1">
                                    Subjects
                                </button>
                                <button class="multisteps-form__progress-btn" type="button" title="Socials"
                                    :class="activeStep >= 2 ? activeClass : ''" @click="activeStep = 2">
                                    Systems
                                </button>
                                <button class="multisteps-form__progress-btn" type="button" title="Profile"
                                    :class="activeStep >= 3 ? activeClass : ''" @click="activeStep = 3">
                                    Topics
                                </button>
                            </div>
                        </div>
                    </div>
                    <!--form panels-->
                    <div class="row text-start">
                        <div class="m-auto col-12 col-lg-8">
                            <form class="multisteps-form__form">
                                <div class="p-3 bg-white card multisteps-form__panel border-radius-xl js-active position-relative"
                                    data-animation="FadeIn" v-if="activeStep === 0">
                                    <div class="multisteps-form__content js-active position-relative"
                                        data-animation="FadeIn">
                                        <div class="mx-auto col-10">
                                            <h5 class="font-weight-normal">
                                                Select the Course
                                            </h5>
                                            <p>
                                            </p>
                                        </div>
                                        <div class="m-3 row text-start">
                                            <div class="form-check">
                                                <div class="row text-start">
                                                    <div class="mt-3 col-lg-4 col-md-5  text-start "
                                                        v-for="choice in getMyCourses2" :key="choice">
                                                        <input type="radio" :id="choice" @change="(e) => onChange(e)"
                                                            v-model="Courses" name="getMyCourses" :value="choice">
                                                        <label class="form-check-label font-weight-bolder" :for="choice">
                                                            {{ choice }}
                                                        </label>
                                                    </div>
                                                </div>
                                                <hr class="my-3 horizontal py-1 dark" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mx-auto col-10">
                                        <h5 class="font-weight-normal">
                                            Question Types
                                        </h5>
                                        <p>
                                        </p>
                                    </div>
                                    <div class="m-3 row text-start">
                                        <div class="form-check">
                                            <div class="row text-start">
                                                <div class="mt-3 col-lg-3 col-md-5  text-start">
                                                    <input type="checkbox" id="choice" @change="unck()" value="unused"
                                                        class="form-check-input">
                                                    <label class="form-check-label font-weight-bold " :for="choice">
                                                        Unused Questions
                                                    </label>
                                                </div>
                                                <div class="mt-3 col-lg-3 col-md-5  text-start">
                                                    <input type="checkbox" id="choice" @change="unck()" value="correct"
                                                        class="form-check-input" v-model="TypeQustion">
                                                    <label class="form-check-label font-weight-bold " :for="choice">
                                                        Correct Questions
                                                    </label>
                                                </div>
                                                <div class="mt-3 col-lg-3 col-md-5  text-start">
                                                    <input type="checkbox" id="choice" @change="unck()" value="Omitted"
                                                        class="form-check-input" v-model="TypeQustion">
                                                    <label class="form-check-label font-weight-bold   " :for="choice">
                                                        Omitted Questions
                                                    </label>
                                                </div>

                                                <div class="mt-3 col-lg-3 col-md-5  text-start">
                                                    <input type="checkbox" id="choice" @change="unck()" value="Incorrect"
                                                        class="form-check-input" v-model="TypeQustion">
                                                    <label class="form-check-label font-weight-bold " :for="choice">
                                                        Incorrect Questions
                                                    </label>
                                                </div>
                                                <div class="mt-3 col-lg-3 col-md-5  text-start">
                                                    <input type="checkbox" id="choice" @change="unck()" value="Mark"
                                                        class="form-check-input" v-model="TypeQustion">
                                                    <label class="form-check-label font-weight-bold " :for="choice">
                                                        Mark Questions
                                                    </label>
                                                </div>
                                                <div class="mt-3 col-lg-3 col-md-5  text-start">
                                                    <input type="checkbox" id="choice" @change="unck()" value="All"
                                                        class="form-check-input" v-model="TypeQustion">
                                                    <label class="form-check-label font-weight-bold " :for="choice">
                                                        All Questions
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="mt-4 button-row d-flex col-12">
                                        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button"
                                            title="Next" @click="nextStep()">
                                            Next
                                        </button>
                                    </div>
                                </div>

                                <div class="p-3 bg-white card border-radius-xl" data-animation="FadeIn"
                                    v-if="activeStep === 1">
                                    <div class="text-center row">
                                        <div class="mx-auto col-10">
                                            <h5 class="font-weight-normal">Subjects </h5>
                                            <p>
                                                <span class="text-info text-bold">Notes</span> : All will be selected
                                                automatically if
                                                nothing is
                                                selected
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-4 row">
                                        <div class="col-sm-3" v-for="subject in subjects" :key="subject.id">
                                            <input :id="subject" type="checkbox" class="btn-check"
                                                @change="(e) => onCangeSubject(e)" v-model="Subjects" :value="subject"
                                                :name="subject" />
                                            <label class="px-6 py-5 border-2 btn btn-lg btn-outline-secondary"
                                                :for="subject">
                                                <svg class="text-dark" width="20px" height="20px" viewBox="0 0 42 42"
                                                    version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <title>box-3d-40</title>
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF"
                                                            fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g transform="translate(603.000000, 0.000000)">
                                                                    <path class="color-background"
                                                                        d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z">
                                                                    </path>
                                                                    <path class="color-background"
                                                                        d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
                                                                        opacity="0.7"></path>
                                                                    <path class="color-background"
                                                                        d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
                                                                        opacity="0.7"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </label>
                                            <h6>{{ subject }}</h6>
                                        </div>
                                    </div>
                                    <div class="mt-4 button-row d-flex">
                                        <button class="mb-0 btn bg-gradient-light js-btn-prev" type="button" title="Prev"
                                            @click="activeStep -= 1">
                                            Prev
                                        </button>
                                        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button"
                                            title="Next" @click="nextStep()">
                                            Next
                                        </button>
                                    </div>
                                </div>
                                <!--single form panel /////////////////////////////////////////////////////////////////////-->
                                <div class="p-3 bg-white card  border-radius-xl" data-animation="FadeIn"
                                    v-if="activeStep === 2">
                                    <div class="text-center row">
                                        <div class="mx-auto col-10">
                                            <h5 class="font-weight-normal">System </h5>
                                            <p>
                                                <span class="text-info text-bold">System</span> : All will be selected
                                                automatically if
                                                nothing is
                                                selected
                                            </p>
                                        </div>
                                    </div>
                                    <div class="multisteps-form__content">
                                        <div class="row text-start">
                                            <div class="mt-3 col-lg-3 col-md-5  text-start my-auto form-check"
                                                v-for="system in systems" :key="system.id">
                                                <input :id="system.id" @change="(e) => onCangeSystems(e)"
                                                    class="form-check-input" type="checkbox" :name="system" :value="system"
                                                    v-model="Systems" />{{ system }}
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mt-4 button-row d-flex col-12">
                                                <button class="mb-0 btn bg-gradient-light js-btn-prev" type="button"
                                                    title="Prev" @click="activeStep -= 1">
                                                    Prev
                                                </button>
                                                <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button"
                                                    title="Next" @click="nextStep()">
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--single form panel /////////////////////////////////////////////////////////////////////-->
                                <div class="p-3 bg-white card  border-radius-xl" data-animation="FadeIn"
                                    v-if="activeStep === 3">
                                    <div class="text-center row">
                                        <div class="mx-auto col-10">
                                            <h5 class="font-weight-normal">Topics</h5>
                                            <p>
                                                <span class="text-info text-bold">Topics</span> : All will be selected
                                                automatically if
                                                nothing is
                                                selected
                                            </p>
                                        </div>
                                    </div>
                                    <div class="multisteps-form__content">
                                        <div class="row text-start">
                                            <div class="mt-3 col-lg-3 col-md-5  text-start my-auto form-check"
                                                v-for="topic in topics" :key="topic.id">
                                                <input :id="topic.id" class="form-check-input m-2" type="checkbox"
                                                    @change="(e) => onCangeTopics(e)" :name="topic" :value="topic"
                                                    v-model="Topics" />{{
                                                        topic }}
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mt-4 button-row d-flex col-12">
                                                <button class="mb-0 btn bg-gradient-light js-btn-prev" type="button"
                                                    title="Prev" @click="activeStep -= 1">
                                                    Prev
                                                </button>
                                                <button class="mb-0 btn bg-gradient-dark ms-auto" type="button"
                                                    @click="GenerateQuize()" title="Send">
                                                    Generate Quiz
                                                </button>
                                            </div>
                                        </div>
                                        <hr class="my-3 horizontal py-1 dark" />
                                        <div class="row">
                                            <div class="col-12 col-sm-6">
                                                <label>Questions Title</label>
                                                <input class="multisteps-form__input form-control" type="text"
                                                    v-model="QuestionsTitle" placeholder="Questions Title" />
                                            </div>
                                            <div class="col-12 col-sm-6">
                                                <label>Questions Number</label>
                                                <input class="multisteps-form__input form-control" type="text"
                                                    v-model="numberOfQuastions" placeholder="Questions Title" />
                                            </div>

                                            <div class=" button-row d-flex ">
                                                <!-- <input v-model="numberOfQuastions" /> -->
                                                <label class="form-check-label">
                                                    <h6>Questions :</h6>
                                                </label>
                                                <label class="form-check-label">
                                                    <h6>{{ questionsArray.length }}</h6>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import About from "~~/pagesComponents/applications/wizard/About.vue";
import Account from "~~/pagesComponents/applications/wizard/Account.vue";
import WizardAddress from "~~/pagesComponents/applications/wizard/Address.vue";
import QuizeScreen from "./quizeScreen.vue";
import { mapGetters } from "vuex";





export default {
    name: "generate-quiz",
    components: { About, Account, WizardAddress, QuizeScreen },
    props: {
        light: ["sdsdsd"],
    },
    data() {
        return {

            activeClass: "js-active position-relative",
            activeStep: 0,
            formSteps: 4,
            user: {
                email: 'test@test.com',
                roles2: [{ id: 1, name: 'Client' }]
            },
            QuestionsTitle: new Date(),
            display: false,
            display2: true,
            mChoice: null,
            sel: null,
            subjects: [],
            systems: [],
            topics: [],
            noOfPersons: 2,
            selected: '',
            choices: ["Anatomy mid", "Anatomy Final", "Histology mid", "Histology Final", "Physiology Final", "Physiology mid"],
            questionsArray: [],
            insatrQuastion: [],
            Subjects: [],
            Systems: [],
            Topics: [],
            TypeQustion: [],
            TypeQustionNumber: [],
            Courses: [],
            filtring: {},
            data1: [],
            numberOfQuastions: 2,
            quare1: ["Past Questions"]




        };
    },
    computed: {
        ...mapGetters(["getUserInfo", "getMyCourses", "isAuthenticated", "getEmail", "getId", "getMyCourses2"]),
    },

    created() {

        this.$store.dispatch("SetUserCourses");

    },

    mounted() {

        var x = sessionStorage.getItem("info");
        this.$store.dispatch("yourAction", JSON.parse(x));
        this.$store.dispatch("SetUserCourses");
        console.log(this.getMyCourses2);
        console.log(this.isAuthenticated);
        console.log(this.getEmail);
        console.log(this.getId);
    },

    methods: {
        filtringDATA(data) {
            if (!this.Systems.length == 0) {
                this.filtring.systems = { $in: this.Systems }
            }
        },
        getMultipleRandom(arr, num) {
            const shuffled = [...arr].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, num);
        },
        unck() {
            this.subjects = [];
            this.systems = [];
            this.topics = [];
            var get = document.getElementsByName('getMyCourses');
            for (var i = 0; i < get.length; i++) {
                get[i].checked = false;
            }
        },

        async GenerateQuize() {
            if (this.TypeQustion.length != 0) {
                localStorage.clear();
                // console.log(res2);
                let res2 = this.getMultipleRandom(this.TypeQustionNumber, this.numberOfQuastions)
                localStorage.setItem("authToken", JSON.stringify(res2));
                localStorage.setItem("title", this.QuestionsTitle);
                localStorage.setItem("yourCours", this.Courses);
                let timerInterval;
                this.$swal({
                    title: "<strong class='spinner1' role='status'>Loading</strong>",
                    html: "<div class='spinner-grow spinner1' role='status'>  <span class='visually-hidden'></span></div>",
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    didOpen: () => {
                        // this.$swal.showLoading();
                        // const b = this.$swal.getHtmlContainer().querySelector("b");
                        timerInterval = setInterval(() => {
                        }, 1000);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                        navigateTo('./quizeScreen')
                    },
                });

            } else {
                await $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/question/findone', {
                    method: 'POST',
                    body: this.filtring
                }).then(res => {
                    let res2 = this.getMultipleRandom(res, this.numberOfQuastions)
                    localStorage.clear();
                    // console.log(res2);
                    localStorage.setItem("authToken", JSON.stringify(res2));
                    localStorage.setItem("title", this.QuestionsTitle);
                    localStorage.setItem("yourCours", this.Courses);
                    let timerInterval;
                    this.$swal({
                        title: "<strong class='spinner1' role='status'>Loading</strong>",
                        html: "<div class='spinner-grow spinner1' role='status'>  <span class='visually-hidden'></span></div>",
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        didOpen: () => {
                            // this.$swal.showLoading();
                            // const b = this.$swal.getHtmlContainer().querySelector("b");
                            timerInterval = setInterval(() => {
                            }, 1000);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                            navigateTo('./quizeScreen')
                        },
                    });
                })
                    .catch((error) => {
                        console.log(error);
                    });

            }

        },

        async onChange(e) {
            this.filtring.courses = e.target.value
            this.TypeQustionNumber = []
            this.subjects = [];
            this.systems = [];
            this.topics = [];
            if (this.TypeQustion.length != 0) {
                this.TypeQustion.forEach(element => {
                    if (element === 'Incorrect') {
                        console.log("Incorrect Here");
                        console.log("correct Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionincorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.subjects.includes(element.subject)) {
                                        this.subjects.push(element.subject);
                                    }
                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    } if (element === "Omitted") {
                        console.log("Omitted Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionomitted/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.subjects.includes(element.subject)) {
                                        this.subjects.push(element.subject);
                                    }
                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                            }
                            console.log("Omitted");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })


                    } if (element === "correct") {
                        console.log("correct Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustioncorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.subjects.includes(element.subject)) {
                                        this.subjects.push(element.subject);
                                    }
                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                                console.log("correct");
                                console.log(this.TypeQustionNumber);
                            }
                            console.log("corect");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                    if (element === "unused") {
                        console.log("unused Here");
                        console.log(this.filtring);
                    }
                    if (element === "Mark") {
                        console.log("Mark Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionmark/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.subjects.includes(element.subject)) {
                                        this.subjects.push(element.subject);
                                    }
                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                    if (element === "All") {
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionomitted/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.subjects.includes(element.subject)) {
                                        this.subjects.push(element.subject);
                                    }
                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                            console.log("Omitted");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustioncorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });

                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.subjects.includes(element.subject)) {
                                        this.subjects.push(element.subject);
                                    }
                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                                console.log("correct");
                                console.log(this.TypeQustionNumber);
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                        console.log("Mark Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionmark/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.subjects.includes(element.subject)) {
                                        this.subjects.push(element.subject);
                                    }
                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                            }


                        }).catch(err => {
                            console.log(err);
                        })
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionincorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.subjects.includes(element.subject)) {
                                        this.subjects.push(element.subject);
                                    }
                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                });

            } else {
                console.log(this.TypeQustion);
                console.log(e.target.value);
                this.subjects = [];
                this.systems = [];
                this.topics = [];

                await $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/question/findone/', {
                    method: 'POST',
                    body: this.filtring
                }).then(res => {
                    this.questionsArray = []
                    this.questionsArray = res
                    this.numberOfQuastions = this.questionsArray.length
                    console.log(res);
                })
                    .catch((error) => {
                        console.log(error);
                    });
                this.questionsArray.forEach(element => {
                    if (!this.subjects.includes(element.subject)) {
                        this.subjects.push(element.subject);
                    }
                    if (!this.systems.includes(element.systems)) {
                        this.systems.push(element.systems);
                    }
                    if (!this.topics.includes(element.topic)) {
                        this.topics.push(element.topic);
                    }
                });

            }
        },

        async onCangeSubject(e) {
            this.filtring.subject = e.target.value
            this.TypeQustionNumber = []
            this.systems = [];
            this.topics = [];
            if (this.TypeQustion.length != 0) {
                this.TypeQustion.forEach(element => {
                    if (element === 'Incorrect') {
                        console.log("Incorrect Here");
                        console.log("correct Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionincorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                            this.TypeQustionNumber.forEach(element => {

                                if (!this.systems.includes(element.systems)) {
                                    this.systems.push(element.systems);
                                }
                                if (!this.topics.includes(element.topic)) {
                                    this.topics.push(element.topic);
                                }
                            });
                            this.numberOfQuastions = this.TypeQustionNumber.length
                        }).catch(err => {
                            console.log(err);
                        })
                    } if (element === "Omitted") {
                        console.log("Omitted Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionomitted/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                                this.TypeQustionNumber.forEach(element => {

                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                            }


                        }).catch(err => {
                            console.log(err);
                        })


                    } if (element === "correct") {
                        console.log("correct Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustioncorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("correct");
                                console.log(this.TypeQustionNumber);
                            }
                            console.log("corect");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                    if (element === "unused") {
                        console.log("unused Here");
                        console.log(this.filtring);
                    }
                    if (element === "Mark") {
                        console.log("Mark Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionmark/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                                this.TypeQustionNumber.forEach(element => {

                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                            }


                        }).catch(err => {
                            console.log(err);
                        })


                    }
                    if (element === "All") {
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionomitted/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {

                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                            console.log("Omitted");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustioncorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                            console.log("corect");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionincorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {

                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                });
            } else {
                if (!this.Subjects.length == 0) {
                    this.filtring.subject = this.Subjects,
                        //Return TRUE if the array is empty
                        await $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/question/findone/', {
                            method: 'POST',
                            body: this.filtring,
                        }).then(res => {
                            this.questionsArray = []
                            this.questionsArray = res
                            this.numberOfQuastions = this.questionsArray.length
                            this.questionsArray.forEach(element => {
                                if (!this.subjects.includes(element.subject)) {
                                    this.subjects.push(element.subject);
                                }
                                if (!this.systems.includes(element.systems)) {
                                    this.systems.push(element.systems);
                                }
                                if (!this.topics.includes(element.topic)) {
                                    this.topics.push(element.topic);
                                }
                            });
                            console.log(this.filtring)
                        })
                            .catch((error) => {
                                console.log(error);
                            });
                } else {
                    if (this.Subjects.length == 0) {
                        //Return TRUE if the array is empty
                        delete this.filtring.subject
                    }
                    await $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/question/findone/', {
                        method: 'POST',
                        body: this.filtring
                    }).then(res => {
                        this.questionsArray = []
                        this.questionsArray = res
                        this.numberOfQuastions = this.questionsArray.length
                    })
                        .catch((error) => {
                            console.log(error);
                        });
                }
                this.questionsArray.forEach(element => {
                    if (!this.subjects.includes(element.subject)) {
                        this.subjects.push(element.subject);
                    }
                    if (!this.systems.includes(element.systems)) {
                        this.systems.push(element.systems);
                    }
                    if (!this.topics.includes(element.topic)) {
                        this.topics.push(element.topic);
                    }
                });
                console.log(this.filtring)
                console.log(this.questionsArray);
            }
        },

        async onCangeSystems(e) {
            this.topics = [];
            if (this.TypeQustion.length != 0) {
                this.TypeQustion.forEach(element => {
                    if (element === 'Incorrect') {
                        console.log("Incorrect Here");
                        console.log("correct Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionincorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    }

                    if (element === "Omitted") {
                        console.log("Omitted Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionomitted/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                            }
                            console.log("Omitted");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                    }

                    if (element === "correct") {
                        console.log("correct Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustioncorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("correct");
                                console.log(this.TypeQustionNumber);
                            }
                            console.log("corect");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                    }

                    if (element === "unused") {
                        console.log("unused Here");
                        console.log(this.filtring);
                    }
                    if (element === "Mark") {
                        console.log("Mark Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionmark/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                                this.TypeQustionNumber.forEach(element => {

                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                            }


                        }).catch(err => {
                            console.log(err);
                        })


                    }
                    if (element === "All") {
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionomitted/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                            console.log("Omitted");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustioncorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                            console.log("corect");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionincorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                });
            } else {
                if (!this.Systems.length == 0) {
                    this.filtring.systems = this.Systems,
                        //Return TRUE if the array is empty
                        await $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/question/findone/', {
                            method: 'POST',
                            body: this.filtring,
                        }).then(res => {
                            this.questionsArray = res
                            this.numberOfQuastions = this.questionsArray.length
                            console.log(res);
                        })
                            .catch((error) => {
                                console.log(error);
                            });
                    this.questionsArray.forEach(element => {
                        if (!this.topics.includes(element.topic)) {
                            this.topics.push(element.topic);
                        }
                    });
                } else {
                    if (this.Systems.length == 0) {
                        //Return TRUE if the array is empty
                        delete this.filtring.systems
                    }
                    await $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/question/findone/', {
                        method: 'POST',
                        body: this.filtring,
                    }).then(res => {
                        this.questionsArray = res
                        this.numberOfQuastions = this.questionsArray.length
                        console.log(res);
                    })
                        .catch((error) => {
                            console.log(error);
                        });
                }
                console.log(this.Systems);
                this.questionsArray.forEach(element => {
                    if (!this.topics.includes(element.topic)) {
                        this.topics.push(element.topic);
                    }
                });
            }
        },

        async onCangeTopics(e) {
            if (this.TypeQustion.length != 0) {
                this.TypeQustion.forEach(element => {
                    if (element === 'Incorrect') {
                        console.log("Incorrect Here");
                        console.log("correct Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionincorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                            }
                        }).catch(err => {
                            console.log(err);
                        })

                    } if (element === "Omitted") {
                        console.log("Omitted Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionomitted/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {


                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                            }
                            console.log("Omitted");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                    } if (element === "correct") {
                        console.log("correct Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustioncorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("correct");
                                console.log(this.TypeQustionNumber);
                            }
                            console.log("corect");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                    if (element === "unused") {
                        console.log("unused Here");
                        console.log(this.filtring);
                    }
                    if (element === "Mark") {
                        console.log("Mark Here");
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionmark/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.numberOfQuastions = this.TypeQustionNumber.length
                                this.TypeQustionNumber.forEach(element => {

                                    if (!this.systems.includes(element.systems)) {
                                        this.systems.push(element.systems);
                                    }
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                            }


                        }).catch(err => {
                            console.log(err);
                        })


                    }
                    if (element === "All") {
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionomitted/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                            console.log("Omitted");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustioncorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                            console.log("corect");
                            console.log(this.TypeQustionNumber);
                        }).catch(err => {
                            console.log(err);
                        })
                        $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/user/findQustionincorrect/' + this.getId, {
                            method: 'POST',
                            body: this.filtring
                        }).then(res => {
                            if (res.length == 0) {
                                console.log("isempty");
                            } else {
                                res.forEach(element => {
                                    this.TypeQustionNumber.push(element)
                                });
                                this.TypeQustionNumber.forEach(element => {
                                    if (!this.topics.includes(element.topic)) {
                                        this.topics.push(element.topic);
                                    }
                                });
                                console.log("Incorect");
                                console.log(this.TypeQustionNumber);
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                });
            } else {
                if (!this.Topics.length == 0) {
                    this.filtring.topic = this.Topics,
                        //Return TRUE if the array is empty
                        await $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/question/findone/', {
                            method: 'POST',
                            body: this.filtring,
                        }).then(res => {
                            this.questionsArray = res
                            this.numberOfQuastions = this.questionsArray.length
                            console.log(res);
                        })
                            .catch((error) => {
                                console.log(error);
                            });
                    this.questionsArray.forEach(element => {
                        if (!this.topics.includes(element.topic)) {
                            this.topics.push(element.topic);
                        }
                    });
                } else {
                    if (this.Topics.length == 0) {
                        //Return TRUE if the array is empty
                        delete this.filtring.topic
                    }
                    await $fetch('https://walrus-app-b8h5f.ondigitalocean.app/api/question/findone/', {
                        method: 'POST',
                        body: this.filtring,
                    }).then(res => {
                        this.questionsArray = res
                        this.numberOfQuastions = this.questionsArray.length
                        console.log(res);
                    })
                        .catch((error) => {
                            console.log(error);
                        });
                }
                console.log(this.Systems);
                this.questionsArray.forEach(element => {
                    if (!this.topics.includes(element.topic)) {
                        this.topics.push(element.topic);
                    }
                });
            }
        },

        nextStep() {
            if (this.activeStep < this.formSteps) {
                this.activeStep += 1;
            } else {
                this.activeStep -= 1;
            }
        },
        prevStep() {
            if (this.activeStep > 0) {
                this.activeStep -= 1;
            }
        },
    },
};
</script>
<style scoped>
.spinner1 {
    color: #f0b52b;
}
</style>
