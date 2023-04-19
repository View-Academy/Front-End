import { createStore } from "vuex";
import { state } from "~~/stores/quizeData";
const store = createStore({
   state() {
      return {
         id: String,
         count: 1000,
         email: String,
         mycours: Array,
         noteQuiz: Array,
         name: String,
         printersList: [],
         courses: [],
         Notes: Array,
         phone: String,
         haloo: "",
         isSuperAdmain: Boolean,
         orderList: Array,
         users: Array,
         quizes: Array,
         previous:Array,
         omitted:0,
         TotalQuestions:0,
         correctAnswer:0,
         incorrectAnswer:0,
         yourScore : []
         
      };
   },
   getters: {
      getUserInfo: (state) => {
         return state.printersList;
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
      getCourses: (state) => {
         return state.courses;
      },
      getNoteQuiz: (state) => {
         return state.Notes;
      },
      getMyCourses: (state) => {
         return state.mycours;
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
         $fetch("http://localhost:8000/api/courses", {
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
      SetOrder: ({ commit }) => {
         $fetch("http://localhost:8000/api/order", {
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
         $fetch("http://localhost:8000/api/user/note/" + state.id, {
            method: "GET",
         })
            .then((res) => {
               console.log(res);
               commit("SET_NOTES", res);
            })
            .catch((eroor) => {
               console.log(eroor);
            });
      },
      SetUser: ({ commit }) => {
         $fetch("http://localhost:8000/api/user", {
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
      SetQuize: ({ commit }) => {
         $fetch("http://localhost:8000/api/question", {
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
      SetPreviousQuize: ({ commit,state }) => {
         $fetch("http://localhost:8000/api/user/myquizes/" + state.id, {
            method: "GET",
         })
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
         state.phone = user.phone;
         state.id = user.id;
         state.name = user.name;
         state.isSuperAdmain = user.isSuperAdmain;
         state.mycours = user.myCourses;
     
      },

      SET_USERS(state, users) {
         state.users = users;
      },
      SET_COURSES(state, courses) {
         state.courses = courses;
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
   
      SET_PREVIOUS_QUIZE(state, previous) {
         state.previous = previous;
         state.omitted = 0
         state.correctAnswer = 0
         state.incorrectAnswer = 0
         previous.forEach(element => {
            state.yourScore.push(element.yourScore)
            state.omitted += (element.yourScore / 50)
            state.correctAnswer += element.correctAnswer
            state.incorrectAnswer += element.incorrectAnswer
            
         });
      },
   },
});

export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.use(store);
   // Install the store instance as a plugin
});
