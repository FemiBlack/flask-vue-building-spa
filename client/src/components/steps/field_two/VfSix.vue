<template>
  <fieldset>
    <h2>In-Use Conditions</h2>
    <table style="width: 100%;">
      <thead>
        <th>Field</th>
        <th>Response</th>
        <th>Remark</th>
      </thead>
      <tbody>
        <tr>
          <td>Addition/Alteration work</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.in_use_cond.addition.response.$error }">
            <input
              type="text"
              class="form-control"
              v-model.trim="in_use_cond.addition.response"
              @input="$v.in_use_cond.addition.response.$touch()"
            />
            <span 
              v-if="$v.in_use_cond.addition.response.$error
              && !$v.in_use_cond.addition.response.required"
              >Response is required</span
            >
          </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.in_use_cond.addition.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="in_use_cond.addition.remark"
                @input="$v.in_use_cond.addition.remark.$touch()"
              />
              <span 
                v-if="$v.in_use_cond.addition.remark.$error
                && !$v.in_use_cond.addition.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Overloading</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.in_use_cond.overloading.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="in_use_cond.overloading.response"
                @input="$v.in_use_cond.overloading.response.$touch()"
              />
              <span
                
                v-if="$v.in_use_cond.overloading.response.$error
                && !$v.in_use_cond.overloading.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.in_use_cond.overloading.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="in_use_cond.overloading.remark"
                @input="$v.in_use_cond.overloading.remark.$touch()"
              />
              <span
                
                v-if="$v.in_use_cond.overloading.remark.$error
                && !$v.in_use_cond.overloading.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Environment not properly kept</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.in_use_cond.not_kept.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="in_use_cond.not_kept.response"
                @input="$v.in_use_cond.not_kept.response.$touch()"
              />
              <span
                
                v-if="$v.in_use_cond.not_kept.response.$error
                && !$v.in_use_cond.not_kept.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.in_use_cond.not_kept.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="in_use_cond.not_kept.remark"
                @input="$v.in_use_cond.not_kept.remark.$touch()"
              />
              <span
                
                v-if="$v.in_use_cond.not_kept.remark.$error
                && !$v.in_use_cond.not_kept.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Vibration</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.in_use_cond.vibration.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="in_use_cond.vibration.response"
                @input="$v.in_use_cond.vibration.response.$touch()"
              />
              <span 
                v-if="$v.in_use_cond.vibration.response.$error
                && !$v.in_use_cond.vibration.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.in_use_cond.vibration.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="in_use_cond.vibration.remark"
                @input="$v.in_use_cond.vibration.remark.$touch()"
              />
              <span 
                v-if="$v.in_use_cond.vibration.remark.$error
                && !$v.in_use_cond.vibration.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Vandalism</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.in_use_cond.vandalism.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="in_use_cond.vandalism.response"
                @input="$v.in_use_cond.vandalism.response.$touch()"
              />
              <span 
                v-if="$v.in_use_cond.vandalism.response.$error
                && !$v.in_use_cond.vandalism.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.in_use_cond.vandalism.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="in_use_cond.vandalism.remark"
                @input="$v.in_use_cond.vandalism.remark.$touch()"
              />
              <span 
                v-if="$v.in_use_cond.vandalism.remark.$error
                && !$v.in_use_cond.vandalism.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Building used for residential purpose only</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.in_use_cond.residential_only.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="in_use_cond.residential_only.response"
                @input="$v.in_use_cond.residential_only.response.$touch()"
              />
              <span
                
                v-if="$v.in_use_cond.residential_only.response.$error
                && !$v.in_use_cond.residential_only.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.in_use_cond.residential_only.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="in_use_cond.residential_only.remark"
                @input="$v.in_use_cond.residential_only.remark.$touch()"
              />
              <span
                
                v-if="$v.in_use_cond.residential_only.remark.$error
                && !$v.in_use_cond.residential_only.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!--
     -->
  </fieldset>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      in_use_cond: {
        addition: { response: '', remark: '' },
        overloading: { response: '', remark: '' },
        not_kept: { response: '', remark: '' },
        vibration: { response: '', remark: '' },
        vandalism: { response: '', remark: '' },
        residential_only: { response: '', remark: '' },
      },
    };
  },
  validations: {
    in_use_cond: {
      addition: { response: { required }, remark: { required } },
      overloading: { response: { required }, remark: { required } },
      not_kept: { response: { required }, remark: { required } },
      vibration: { response: { required }, remark: { required } },
      vandalism: { response: { required }, remark: { required } },
      residential_only: { response: { required }, remark: { required } },
      form: [
        'in_use_cond.addition.response',
        'in_use_cond.addition.remark',
        'in_use_cond.overloading.response',
        'in_use_cond.overloading.remark',
        'in_use_cond.not_kept.response',
        'in_use_cond.not_kept.remark',
        'in_use_cond.vibration.response',
        'in_use_cond.vibration.remark',
        'in_use_cond.vandalism.response',
        'in_use_cond.vandalism.remark',
        'in_use_cond.residential_only.response',
        'in_use_cond.residential_only.remark',
      ],
    },
  },
  methods: {
    validate() {
      this.$v.in_use_cond.form.$touch();
      const isValid = !this.$v.in_use_cond.form.$invalid;
      this.$emit('on-validate', this.$data, isValid);
      return isValid;
    },
  },
};
</script>

<style>
.has-error, .invalid-feedback {
  color: red;
}
</style>
