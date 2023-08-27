import { createStore } from "vuex";
import { state } from "~~/stores/quizeData";
const store = createStore({
    state() {
        return {
            flashcard: [],
            types: Array,
            id: String,
            count: 1000,
            email: String,
            mycours: Array,
            mycours2: Array,
            noteQuiz: Array,
            name: String,
            Omitted: [],
            series: [],
            Mark: [],
            Incorrect: [],
            correct: [],
            printersList: [],
            courses: [],
            Notes: Array,
            phone: String,
            haloo: "",
            isSuperAdmain: Boolean,
            orderList: Array,
            users: Array,
            quizes: Array,
            previous: Array,
            omitted: 0,
            TotalQuestions: 0,
            correctAnswer: 0,
            incorrectAnswer: 0,
            yourScore: [],
        };
    },
    getters: {
        getUserFlshCrad: (state) => {
            return state.flashcard;
        },
        getUserInfo: (state) => {
            return state.printersList;
        },
        getUserTypes: (state) => {
            return state.types;
        },
        getUsers: (state) => {
            return state.users;
        },
        getUserName: (state) => {
            return state.name;
        },
        getPhone: (state) => {
            return state.phone;
        },
        getOmitted: (state) => {
            return state.omitted;
        },
        getOmittedArray: (state) => {
            return state.Omitted.length;
        },
        getMarkArray: (state) => {
            return state.Mark.length;
        },
        getIncorrectArray: (state) => {
            return state.Incorrect.length;
        },
        getCorrectArray: (state) => {
            return state.correct.length;
        },

        getSeries: (state) => {
            return state.series;
        },
        getCourses: (state) => {
            return state.courses;
        },
        getNoteQuiz: (state) => {
            return state.Notes;
        },
        getMyCourses: (state) => {
            return state.mycours;
        },
        getMyCourses2: (state) => {
            return state.mycours2;
        },
        getEmail: (state) => {
            return state.email;
        },
        getId: (state) => {
            return state.id;
        },
        getOrder: (state) => {
            return state.orderList;
        },
        getQuizes: (state) => {
            return state.quizes;
        },
        getPreviousQuizes: (state) => {
            return state.previous;
        },

        isAuthenticated(state) {
            return state.isSuperAdmain;
        },

        loggedInUser(state) {
            return state.auth.user;
        },
        toggleOne(state) {
            return state.toggleOne;
        },
        TotalQuestions(state) {
            return state.TotalQuestions;
        },
        TotalIncorrectAnswer(state) {
            return state.incorrectAnswer;
        },
        TotalCorrectAnswer(state) {
            return state.correctAnswer;
        },
        GetyourScore(state) {
            return state.yourScore;
        },
    },
    actions: {
        yourAction: ({ commit }, payload) => {
            commit("SET_MENU", payload);
        },
        SetCourses: ({ commit }) => {
            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/courses", {
                method: "GET",
            })
                .then((res) => {
                    console.log(res);
                    commit("SET_COURSES", res);
                })
                .catch((eroor) => {
                    console.log(eroor);
                });
        },

        SetFlashcard: ({ commit, state }) => {
            $fetch(
                "https://walrus-app-b8h5f.ondigitalocean.app/api/user/flashcard/" +
                    state.id,
                {
                    method: "GET",
                }
            )
                .then((res) => {
                    console.log(res);
                    commit("SET_FLASHCARD", res);
                })
                .catch((eroor) => {
                    console.log(eroor);
                });
        },
        SetTypes: ({ commit, state }) => {
            $fetch(
                "https://walrus-app-b8h5f.ondigitalocean.app/api/user/typesget/" +
                    state.id,
                {
                    method: "GET",
                }
            )
                .then((res) => {
                    console.log(res);
                    commit("SET_TYPES", res);
                })
                .catch((eroor) => {
                    console.log(eroor);
                });
        },
        SetOrder: ({ commit }) => {
            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/order", {
                method: "GET",
            })
                .then((res) => {
                    console.log(res);
                    commit("SET_ORDER", res);
                })
                .catch((eroor) => {
                    console.log(eroor);
                });
        },

        SetNotes: ({ commit, state }) => {
            $fetch(
                "https://walrus-app-b8h5f.ondigitalocean.app/api/user/note/" +
                    state.id,
                {
                    method: "GET",
                }
            )
                .then((res) => {
                    console.log(res);
                    commit("SET_NOTES", res);
                })
                .catch((eroor) => {
                    console.log(eroor);
                });
        },

        SetUser: ({ commit }) => {
            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/user", {
                method: "GET",
            })
                .then((res) => {
                    console.log(res);
                    commit("SET_USERS", res);
                })
                .catch((eroor) => {
                    console.log(eroor);
                });
        },
        SetUserCourses: ({ commit, state }) => {
            $fetch(
                "https://walrus-app-b8h5f.ondigitalocean.app/api/user/getcourses/" +
                    state.id,
                {
                    method: "GET",
                }
            )
                .then((res) => {
                    console.log(res);
                    commit("SET_USERS_COURSES", res);
                })
                .catch((eroor) => {
                    console.log(eroor);
                });
        },

        SetQuize: ({ commit }) => {
            $fetch("https://walrus-app-b8h5f.ondigitalocean.app/api/question", {
                method: "GET",
            })
                .then((res) => {
                    console.log(res);
                    commit("SET_QUIZE", res);
                })
                .catch((eroor) => {
                    console.log(eroor);
                });
        },

        SetPreviousQuize: ({ commit, state }) => {
            $fetch(
                "https://walrus-app-b8h5f.ondigitalocean.app/api/user/myquizes/" +
                    state.id,
                {
                    method: "GET",
                }
            )
                .then((res) => {
                    console.log(res);
                    commit("SET_PREVIOUS_QUIZE", res);
                })
                .catch((eroor) => {
                    console.log(eroor);
                });
        },
    },

    mutations: {
        SET_MENU(state, user) {
            state.email = user.email;
            state.Omitted = user.Omitted;
            state.Mark = user.Mark;
            state.Incorrect = user.Incorrect;
            state.correct = user.correct;
            state.phone = user.phone;
            state.id = user.id;
            state.name = user.name;
            state.isSuperAdmain = user.isSuperAdmain;
            state.mycours = user.myCourses;
            state.series = [
                state.Incorrect.length,
                state.correct.length,
                state.Mark.length,
            ];
        },

        SET_FLASHCARD(state, flashcard) {
            state.flashcard = flashcard;
        },
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_COURSES(state, courses) {
            state.courses = courses;
        },
        SET_TYPES(state, types) {
            state.types = types;
        },
        SET_NOTES(state, Notes) {
            state.Notes = Notes;
        },
        SET_ORDER(state, order) {
            state.orderList = order;
        },
        SET_QUIZE(state, quizes) {
            state.quizes = quizes;
        },
        SET_USERS_COURSES(state, courses2) {
            state.mycours2 = courses2;
        },

        SET_PREVIOUS_QUIZE(state, previous) {
            state.previous = previous;
            state.omitted = 0;
            state.correctAnswer = 0;
            state.incorrectAnswer = 0;
            previous.forEach((element) => {
                state.yourScore.push(element.yourScore);
                state.omitted += element.yourScore / 50;
                state.correctAnswer += element.correctAnswer;
                state.incorrectAnswer += element.incorrectAnswer;
            });
        },
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
