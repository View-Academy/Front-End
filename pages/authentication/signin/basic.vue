<template>
   <NuxtLayout name="authentication">

      <template #navbar>
         <!-- <NavbarTransparent
        is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
        btn-background="bg-gradient-success"
        :dark-mode="true"
      /> -->

      </template>

      <div class="page-header min-vh-100" style="
                                                  background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-basic.jpg');
                                                ">

         <span class="mask bg-gradient-dark opacity-6"></span>
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-4 col-md-7 mt-2">
                  <div class="card border-0 mb-0">
                     <div class="card-header bg-transparent">
                        <h5 class="text-dark text-center mt-2 mb-3">Sign in</h5>
                        <!-- <div class="btn-wrapper text-center">
                  <a
                    href="javascript:;"
                    class="btn btn-neutral btn-icon btn-sm mb-0 me-1"
                  >
                    <img class="w-30" src="@/assets/img/logos/github.svg" />
                    Github
                  </a>
                  <a
                    href="javascript:;"
                    class="btn btn-neutral btn-icon btn-sm mb-0"
                  >
                    <img class="w-30" src="@/assets/img/logos/google.svg" />
                    Google
                  </a>
                </div> -->
                     </div>
                     <div class="card-body px-lg-5 pt-0">
                        <div class="text-center text-muted mb-4">
                           <small>Or sign in with credentials</small>
                        </div>
                        <form role="form" class="text-start">
                           <div class="mb-3">
                              <ArgonInput id="email" type="email" placeholder="Email" aria-label="Email"
                                 v-model="userInfo.email" :value="userInfo.email" />
                           </div>
                           <div class="mb-3">
                              <ArgonInput id="password" type="password" placeholder="Password" aria-label="Password"
                                 v-model="userInfo.password" :value='userInfo.password' />
                           </div>

                           <!-- <ArgonSwitch id="rememberMe" name="rememberMe">
                    Remember me
                  </ArgonSwitch> -->
                           <div>
                              <button class="btn bg-success w-100 mb-0 toast-btn text-white" type="button"
                                 data-target="dangerToast" @click="login(userInfo)">
                                 sing in
                              </button>
                           </div>
                           <div class="mb-2 position-relative text-center">
                              <p
                                 class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                                 or
                              </p>
                           </div>
                           <div>
                              <button class="btn bg-info w-100 mb-0 toast-btn text-white" type="button"
                                 data-target="dangerToast" @click="navigateTo('/authentication/signup/basic')">
                                 Signup
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="position-fixed bottom-1 end-1 z-index-2">
            <ArgonSnackbar v-if="snackbar === 'danger'" title="Argon Dashboard" date="11 mins ago"
               description="الرجاء التاكد من الباسورد او الاميل"
               :icon="{ component: 'ni ni-notification-70', color: 'danger' }" color="danger"
               :close-handler="closeSnackbar" />
         </div>
      </div>
      <!-- <template #footer>
      <FooterCentered />
    </template> -->
   </NuxtLayout>
</template>
<script>
export default {
   data() {
      return {
         snackbar: null,
         userInfo: {
            email: "",
            password: "",
         },
      };

   },
   methods: {
      closeSnackbar() {
         this.snackbar = null;
      },
      Validation() {
         if (this.userInfo.email === '' || this.userInfo.password === '') {
            this.snackbar = 'danger'
            timerInterval = setInterval(() => {
               this.snackbar = 'null'
            }, 5000);
            clearInterval(timerInterval);
         }

      },
      async login(userInfo) {
         if (this.Validation()) {
         } else {
            await $fetch('https://goldfish-app-o7qzt.ondigitalocean.app/api/authorization', {
               method: 'POST',
               body: userInfo
            }).then(res => {
               sessionStorage.setItem("info" ,JSON.stringify(res))
               this.$store.dispatch("yourAction", res);
              
             
               navigateTo('/dashboards/default')
            })
               .catch((error) => {
                  this.snackbar = 'danger'
                  timerInterval = setInterval(() => {
                     this.snackbar = 'null'
                  }, 5000);
                  clearInterval(timerInterval);
               });
         }

      },


   },


};
definePageMeta({
   layout: false,

});

</script>
