<template>
    <!-- registration-modal -->
	<b-modal ref="signupModal" id="signup-modal" title="Sign-Up" hide-footer>
		<b-form @submit="handleSubmit" @reset="onResetSignup" class="w-100">
			<b-form-group id="form-name-signup-group" label="Full Name:" label-for="form-name-signup-input">
				<b-form-input id="form-name-signup-input" 
							type="text"
							v-model="form.full_name" required
							:class="{'is-invalid': submitted && $v.form.full_name.$error}"
							placeholder="Enter Name">
    			<span v-if="submitted && !$v.form.full_name.required" class="invalid-feedback">Fullname is required</span>
				</b-form-input>
			</b-form-group>
			<b-form-group id="form-uname-signup-group" label="Desired Username:" label-for="form-uname-signup-input">
				<b-form-input id="form-uname-signup-input" 
							type="username"
							v-model="form.username" required
							placeholder="Enter Username">
    			<span v-if="submitted && !$v.form.username.required" class="invalid-feedback">Username is required</span>
				</b-form-input>
			</b-form-group>
			<b-form-group id="form-password-signup-group" label="Password:" label-for="form-password-signup-input">
				<b-form-input id="form-password-signup-input" 
							type="password"
							v-model="form.password" required
							placeholder="Enter password">
    			<span v-if="submitted && !$v.form.password.required" class="invalid-feedback">Password is required</span>
    			<span v-if="submitted && !$v.form.password.minLength" class="invalid-feedback">Minimum length of 6 characters</span>
				</b-form-input>
			</b-form-group>
			<b-form-group id="form-cpassword-signup-group" label="Confirm Password:" label-for="form-cpassword-signup-input">
				<b-form-input id="form-cpassword-signup-input" 
							type="password"
							v-model="form.confirmPassword" required
							placeholder="Confirm password">
    			<span v-if="submitted && !$v.form.confirmPassword.required" class="invalid-feedback">This field can't be left empty</span>
    			<span v-if="submitted && !$v.form.confirmPassword.sameAsPassword" class="invalid-feedback">Passwords do not match</span>
				</b-form-input>
			</b-form-group>
			<b-button type="submit" variant="primary">Submit</b-button>
			<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>
		<p v-if="showError" id="error">Username already exists</p>
	</b-modal>
</template>

<script>
import { required, minLength, sameAs} from "vuelidate/lib/validators"
import { mapActions } from "vuex";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
		full_name: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
      showError: false
    };
  },
  validations:{
        user:{
            full_name: {required},
            username: {required},
            password: {required, minLength: minLength(6)},
            confirmPassword: {required, sameAsPassword: sameAs('password')}
        }
    },
	methods: {
		...mapActions(["Register"]),
		async submit() {
			try {
				await this.Register(this.form);
				this.$router.push("/account");
				this.showError = false
			} catch (error) {
				this.showError = true
			}
		},
		handleSubmit(e){
            this.submitted = true
            // stop here if form is  invalid
            this.$v.$touch()
            if(this.$v.$invalid){
                return
            }
            alert('success!:-)\n\n' + JSON.stringify(this.user))
		},
		onReset(e) {
        	e.preventDefault()
        	this.$refs.addBookModal.hide()
        	this.initForm()
        },
	},
};

<style>

</style>