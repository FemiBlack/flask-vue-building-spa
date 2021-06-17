<template>
  <!-- login-modal -->
  <b-modal
    hide-backdrop
    content-class="shadow"
    ref="loginModal"
    id="login-modal"
    title="Login"
    hide-footer
  >
    <b-form @submit="handleSubmit" class="w-100">
      <b-form-group
        id="form-uname-group"
        label="Email:"
        label-for="form-uname-input"
      >
        <b-form-input
          id="form-uname-input"
          type="text"
          :class="{ 'is-invalid': submitted && $v.loginForm.email.$error }"
          v-model="loginForm.email"
          placeholder="Enter Email"
        >
        </b-form-input>
        <span
          v-if="submitted && !$v.loginForm.email.required"
          style="color: red"
          >Email is required</span
        >
        <span v-if="submitted && !$v.loginForm.email.email" style="color: red"
          >Valid Email is required</span
        >
      </b-form-group>
      <b-form-group
        id="form-password-group"
        label="Password:"
        label-for="form-password-input"
      >
        <b-form-input
          id="form-password-input"
          type="password"
          :class="{ 'is-invalid': submitted && $v.loginForm.password.$error }"
          v-model="loginForm.password"
          placeholder="Enter password"
        >
        </b-form-input>
        <span
          v-if="submitted && !$v.loginForm.password.required"
          style="color: red"
          >Password is required</span
        >
      </b-form-group>
      <b-button type="submit" variant="primary">
        <b-spinner v-show="isSpinner" small></b-spinner>
        Login
      </b-button>
    </b-form>
    <b-alert v-if="showError" variant="danger" class="mt-2" show
      >Username or Password is incorrect</b-alert
    >
  </b-modal>
</template>

<script>
// import { TweenMax, Power4 } from 'gsap';
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      submitted: false,
      showError: false,
      isSpinner: false,
    };
  },
  validations: {
    loginForm: {
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = {
        email: this.loginForm.email,
        password: this.loginForm.password,
      };
      try {
        await this.LogIn(User);
        this.$router.push("/account");
        this.showError = false;
        this.isSpinner = false;
        this.$refs.loginModal.hide();
      } catch (error) {
        this.showError = true;
        console.log(error); //debug for server message
        this.isSpinner = false;
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      this.submitted = true;
      this.isSpinner = true;
      // stop here if form is  invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.submit();
    },
    // enter(el, done) {
    //   TweenMax.fromTo(
    //     el,
    //     0.5,
    //     {
    //       alpha: 0,
    //     },
    //     {
    //       alpha: 1,
    //       ease: Power4.easeOut,
    //     },
    //   );
    // },
    // leave(el, done) {
    //   TweenMax.to(el, 0.5, {
    //     alpha: 0,
    //     ease: Power4.easeOut,
    //     onComplete: done,
    //   });
    // },
    // handleClose() {
    //   this.$router.go(-1);
    // },
  },
};
</script>
