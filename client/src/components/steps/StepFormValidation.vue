  <!-- vue-step-wizard -->
<template>
    <form-wizard @onComplete="onComplete">
        <tab-content title="About You" :selected="true">
            <div class="form-group">
                <label for="fullName">Full Name</label>
                <input type="text"
                    name="fullName"
                    class="form-control"
                    :class="hasError('fullName')? 'is-invalid' : ''"
                    placeholder="Enter your name"
                    v-model="formData.fullName">
                <div v-if="hasError('fullName')" class="invalid-feedback">
                    <div class="error" v-if="!$v.formData.fullName.required">
                    Please provide a valid name</div>
                </div>
            </div>
            <div class="form-group">
                <label for="email">Your Email</label>
                <input type="email"
                    name="email"
                    class="form-control"
                    :class="hasError('email')? 'is-invalid' : ''"
                    placeholder="Enter your email"
                    v-model="formData.email">
                <div v-if="hasError('email')" class="invalid-feedback">
                    <div class="error" v-if="!$v.formData.email.required">
                    Email field is required</div>
                    <div class="error" v-if="!$v.formData.email.email">
                    Should be in email format</div>
                </div>
            </div>
        </tab-content>
        <tab-content title="About your company">
            <div class="form-group">
                <label for="companyName">Full Name</label>
                <input type="text"
                    name="companyName"
                    class="form-control"
                    :class="hasError('companyName')? 'is-invalid' : ''"
                    placeholder="Enter your Company / Organization name"
                    v-model="formData.companyName">
                <div v-if="hasError('companyName')" class="invalid-feedback">
                    <div class="error" v-if="!$v.formData.companyName.required">
                    Please provide a valid company name</div>
                </div>
            </div>
            <div class="form-group">
                <label for="numberOfEmployees">Number of Employees</label>
                <input type="text"
                    name="numberOfEmployees"
                    class="form-control"
                    :class="hasError('numberOfEmployees')? 'is-invalid' : ''"
                    placeholder="Enter Total Number of Employees"
                    v-model="formData.numberOfEmployees">
                <div v-if="hasError('numberOfEmployees')" class="invalid-feedback">
                    <div class="error" v-if="!$v.formData.numberOfEmployees.required">
                    Please provide number of employees in your company</div>
                    <div class="error" v-if="!$v.formData.numberOfEmployees.numeric">
                    Should be a valid value</div>
                </div>
            </div>
        </tab-content>
        <tab-content title="Finishing Up">
            <div class="form-group">
                <label for="referral">From where did you hear about us?</label>
                <select
                    name="referral"
                    class="form-control"
                    :class="hasError('referral')? 'is-invalid' : ''"
                    v-model="formData.referral">
                    <option>Newspaper</option>
                    <option>Online Ad</option>
                    <option>Friend</option>
                    <option>Other</option>
                </select>
                <div v-if="hasError('referral')" class="invalid-feedback">
                    <div class="error" v-if="!$v.formData.referral.required">
                    Please select one of the fields.</div>
                </div>
            </div>
            <div class="form-group form-check">
                <input type="checkbox"
                    :class="hasError('terms') ? 'is-invalid' : ''"
                    class="form-check-input"
                    v-model="formData.terms">
                <label class="form-check-label">I accept the terms and conditions</label>
                <div v-if="hasError('terms')" class="invalid-feedback">
                    <div class="error" v-if="!$v.formData.terms.required">
                    Please select terms and conditions</div>
                </div>
            </div>
        </tab-content>
    </form-wizard>
</template>

<script>
import { FormWizard, TabContent, ValidationHelper } from 'vue-step-wizard';
import 'vue-step-wizard/dist/vue-step-wizard.css';
import { required, email, numeric } from 'vuelidate/lib/validators';// or import each {single}

export default {
  name: 'StepFormValidation',
  components: {
    FormWizard,
    TabContent,
  },
  mixins: [ValidationHelper],
  data() {
    return {
      formData: {
        fullName: '',
        email: null,
      },
      validationRules: [
        { fullName: { required }, email: { required, email } },
        { companyName: { required }, numberOfEmployees: { required, numeric } },
        { referral: { required }, terms: { required } },
      ],
    };
  },
  methods: {
    onComplete() {
      // eslint-disable-next-line
      alert('Submitting Form!');
    },
  },
};
</script>

<style>

</style>
