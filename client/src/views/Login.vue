<template>
    <!-- login-modal -->
  <b-modal ref="loginModal" id="login-modal" title="Login" hide-footer>
    <b-form @submit="handleSubmit" class="w-100">
      <b-form-group id="form-uname-group" label="Username:" label-for="form-uname-input">
        <b-form-input id="form-uname-input"
              type="text"
              v-model="loginForm.username"
              placeholder="Enter Username">
                <span v-if="submitted && !$v.form.username.required"
                class="invalid-feedback">Username is required</span>
        </b-form-input>
      </b-form-group>
      <b-form-group id="form-password-group" label="Password:" label-for="form-password-input">
        <b-form-input id="form-password-input"
              type="password"
              v-model="loginForm.password"
              placeholder="Enter password">
                <span v-if="submitted && !$v.form.lastName.required"
                class="invalid-feedback">Password is required</span>
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
        <p v-if="showError" id="error">Username or Password is incorrect</p>
  </b-modal>
</template>

<script>
import { mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      submitted: false,
      showError: false,
    };
  },
  validations: {
    form: {
      username: { required },
      password: { required },
    },
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      // stop here if form is  invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      // eslint-disable-next-line no-alert
      alert(`success!:-)\n\n${JSON.stringify(this.user)}`);
    },
    ...mapActions(['LogIn']),
    async submit() {
      const User = new FormData();
      User.append('username', this.user.username);
      User.append('password', this.user.password);
      try {
        await this.LogIn(User);
        this.$router.push('/account');
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>
