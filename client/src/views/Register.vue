/* eslint-disable no-alert */
<template>
  <!-- registration-modal -->
  <div class="container">
    <h2>Register Here</h2>
    <!-- <b-alert v-if="showError" show variant="warning" id="error">Email or Username already exists</b-alert> -->
    <b-form @submit="handleSubmit" @reset="onResetSignup" class="w-100">
      <b-form-group
        id="form-name-signup-group"
        label="Email:"
        label-for="form-name-signup-input"
      >
        <b-form-input
          id="form-name-signup-input"
          type="text"
          :class="{ 'is-invalid': submitted && $v.form.email.$error }"
          v-model="form.email"
          placeholder="Enter Email"
        >
        </b-form-input>
        <span
          v-if="submitted && !$v.form.email.required"
          class="invalid-feedback"
          >Email is required</span
        >
        <span v-if="submitted && !$v.form.email.email" class="invalid-feedback"
          >Valid Email is required</span
        >
      </b-form-group>
      <b-form-group
        id="form-uname-signup-group"
        label="Desired Username:"
        label-for="form-uname-signup-input"
      >
        <b-form-input
          id="form-uname-signup-input"
          type="text"
          :class="{ 'is-invalid': submitted && $v.form.username.$error }"
          v-model="form.username"
          placeholder="Enter Username"
        >
        </b-form-input>
        <span
          v-if="submitted && !$v.form.username.required"
          class="invalid-feedback"
          >Username is required</span
        >
      </b-form-group>
      <b-form-group
        id="form-password-signup-group"
        label="Password:"
        label-for="form-password-signup-input"
      >
        <b-form-input
          id="form-password-signup-input"
          type="password"
          :class="{ 'is-invalid': submitted && $v.form.password.$error }"
          v-model="form.password"
          placeholder="Enter password"
        >
        </b-form-input>
        <span
          v-if="submitted && !$v.form.password.required"
          class="invalid-feedback"
          >Password is required</span
        >
        <span
          v-if="submitted && !$v.form.password.minLength"
          class="invalid-feedback"
          >Minimum length of 6 characters</span
        >
      </b-form-group>
      <b-form-group
        id="form-cpassword-signup-group"
        label="Confirm Password:"
        label-for="form-cpassword-signup-input"
      >
        <b-form-input
          id="form-cpassword-signup-input"
          type="password"
          :class="{ 'is-invalid': submitted && $v.form.confirmPassword.$error }"
          v-model="form.confirmPassword"
          placeholder="Confirm password"
        >
        </b-form-input>
        <span
          v-if="submitted && !$v.form.confirmPassword.required"
          class="invalid-feedback"
          >This field can't be left empty</span
        >
        <span
          v-if="submitted && !$v.form.confirmPassword.sameAsPassword"
          class="invalid-feedback"
          >Passwords do not match</span
        >
      </b-form-group>
      <b-button type="submit" variant="primary" class="mr-2">
        <b-spinner v-show="isSpinner" small></b-spinner>
        Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  title: 'SLDB - Signup Page',
  name: "Register",
  data() {
    return {
      form: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
      // showError: false,
      submitted: false,
      isSpinner: false,
    };
  },
  validations: {
    form: {
      email: { required, email },
      username: { required },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  methods: {
    ...mapActions(["Register"]),
    async submit(payload) {
      try {
        await this.Register(payload)
        // this.showError = false;
        this.isSpinner = false;
      } catch (error) {
        console.warn(error)
        // this.showError = false;
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
      this.isSpinner = false;
        return;
      }
      const payload = {
        email: this.form.email,
        username: this.form.username,
        password: this.form.password,
      };
      this.submit(payload);
    },
    initForm() {
      this.form.email = "";
      this.form.username = "";
      this.form.password = "";
      this.form.confirmPassword = "";
    },
    onResetSignup(e) {
      e.preventDefault();
      // this.$refs.signupModal.hide();
      this.initForm();
    },
  },
};
</script>

<style scoped>
</style>
