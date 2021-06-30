<template>
  <fieldset>
    <h2>Indoor Environment</h2>
    <table style="width: 100%;">
      <thead>
        <th>Field</th>
        <th>Response</th>
        <th>Remark</th>
      </thead>
      <tbody>
        <tr>
          <td>Moisture</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.indoor_env.moisture.response.$error }">
            <input
              type="text"
              class="form-control"
              v-model.trim="indoor_env.moisture.response"
              @input="$v.indoor_env.moisture.response.$touch()"
            />
            <span 
              v-if="$v.indoor_env.moisture.response.$error
              && !$v.indoor_env.moisture.response.required"
              >Response is required</span
            >
          </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.indoor_env.moisture.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="indoor_env.moisture.remark"
                @input="$v.indoor_env.moisture.remark.$touch()"
              />
              <span 
                v-if="$v.indoor_env.moisture.remark.$error
                && !$v.indoor_env.moisture.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.indoor_env.humidity.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="indoor_env.humidity.response"
                @input="$v.indoor_env.humidity.response.$touch()"
              />
              <span
                
                v-if="$v.indoor_env.humidity.response.$error
                && !$v.indoor_env.humidity.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.indoor_env.humidity.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="indoor_env.humidity.remark"
                @input="$v.indoor_env.humidity.remark.$touch()"
              />
              <span
                
                v-if="$v.indoor_env.humidity.remark.$error
                && !$v.indoor_env.humidity.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Vibration</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.indoor_env.vibration.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="indoor_env.vibration.response"
                @input="$v.indoor_env.vibration.response.$touch()"
              />
              <span
                
                v-if="$v.indoor_env.vibration.response.$error
                && !$v.indoor_env.vibration.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.indoor_env.vibration.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="indoor_env.vibration.remark"
                @input="$v.indoor_env.vibration.remark.$touch()"
              />
              <span
                
                v-if="$v.indoor_env.vibration.remark.$error
                && !$v.indoor_env.vibration.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Excessive Heat</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.indoor_env.excess_heat.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="indoor_env.excess_heat.response"
                @input="$v.indoor_env.excess_heat.response.$touch()"
              />
              <span 
                v-if="$v.indoor_env.excess_heat.response.$error
                && !$v.indoor_env.excess_heat.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.indoor_env.excess_heat.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="indoor_env.excess_heat.remark"
                @input="$v.indoor_env.excess_heat.remark.$touch()"
              />
              <span 
                v-if="$v.indoor_env.excess_heat.remark.$error
                && !$v.indoor_env.excess_heat.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Ventilation</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.indoor_env.ventilation.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="indoor_env.ventilation.response"
                @input="$v.indoor_env.ventilation.response.$touch()"
              />
              <span 
                v-if="$v.indoor_env.ventilation.response.$error
                && !$v.indoor_env.ventilation.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.indoor_env.ventilation.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="indoor_env.ventilation.remark"
                @input="$v.indoor_env.ventilation.remark.$touch()"
              />
              <span 
                v-if="$v.indoor_env.ventilation.remark.$error
                && !$v.indoor_env.ventilation.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Lighting</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.indoor_env.lighting.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="indoor_env.lighting.response"
                @input="$v.indoor_env.lighting.response.$touch()"
              />
              <span
                
                v-if="$v.indoor_env.lighting.response.$error
                && !$v.indoor_env.lighting.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.indoor_env.lighting.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="indoor_env.lighting.remark"
                @input="$v.indoor_env.lighting.remark.$touch()"
              />
              <span
                
                v-if="$v.indoor_env.lighting.remark.$error
                && !$v.indoor_env.lighting.remark.required"
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
      indoor_env: {
        moisture: { response: '', remark: '' },
        humidity: { response: '', remark: '' },
        vibration: { response: '', remark: '' },
        excess_heat: { response: '', remark: '' },
        ventilation: { response: '', remark: '' },
        lighting: { response: '', remark: '' },
      },
    };
  },
  validations: {
    indoor_env: {
      moisture: { response: { required }, remark: { required } },
      humidity: { response: { required }, remark: { required } },
      vibration: { response: { required }, remark: { required } },
      excess_heat: { response: { required }, remark: { required } },
      ventilation: { response: { required }, remark: { required } },
      lighting: { response: { required }, remark: { required } },
      form: [
        'indoor_env.moisture.response',
        'indoor_env.moisture.remark',
        'indoor_env.humidity.response',
        'indoor_env.humidity.remark',
        'indoor_env.vibration.response',
        'indoor_env.vibration.remark',
        'indoor_env.excess_heat.response',
        'indoor_env.excess_heat.remark',
        'indoor_env.ventilation.response',
        'indoor_env.ventilation.remark',
        'indoor_env.lighting.response',
        'indoor_env.lighting.remark',
      ],
    },
  },
  methods: {
    validate() {
      this.$v.indoor_env.form.$touch();
      const isValid = !this.$v.indoor_env.form.$invalid;
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
