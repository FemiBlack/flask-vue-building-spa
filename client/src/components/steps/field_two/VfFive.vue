<template>
  <fieldset>
    <h2>Outdoor Environment</h2>
    <table style="width: 100%;">
      <thead>
        <th>Field</th>
        <th>Response</th>
        <th>Remark</th>
      </thead>
      <tbody>
        <tr>
          <td>Drainage Issue</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.drainage_issue.response.$error }">
            <input
              type="text"
              class="form-control"
              v-model.trim="outdoor_env.drainage_issue.response"
              @input="$v.outdoor_env.drainage_issue.response.$touch()"
            />
            <span 
              v-if="$v.outdoor_env.drainage_issue.response.$error
              && !$v.outdoor_env.drainage_issue.response.required"
              >Response is required</span
            >
          </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.drainage_issue.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.drainage_issue.remark"
                @input="$v.outdoor_env.drainage_issue.remark.$touch()"
              />
              <span 
                v-if="$v.outdoor_env.drainage_issue.remark.$error
                && !$v.outdoor_env.drainage_issue.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Flood Issue</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.outdoor_env.flood_issue.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.flood_issue.response"
                @input="$v.outdoor_env.flood_issue.response.$touch()"
              />
              <span
                
                v-if="$v.outdoor_env.flood_issue.response.$error
                && !$v.outdoor_env.flood_issue.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.outdoor_env.flood_issue.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.flood_issue.remark"
                @input="$v.outdoor_env.flood_issue.remark.$touch()"
              />
              <span
                
                v-if="$v.outdoor_env.flood_issue.remark.$error
                && !$v.outdoor_env.flood_issue.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Fire/ Heat</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.heat.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.heat.response"
                @input="$v.outdoor_env.heat.response.$touch()"
              />
              <span
                
                v-if="$v.outdoor_env.heat.response.$error
                && !$v.outdoor_env.heat.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.heat.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.heat.remark"
                @input="$v.outdoor_env.heat.remark.$touch()"
              />
              <span
                
                v-if="$v.outdoor_env.heat.remark.$error
                && !$v.outdoor_env.heat.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Traffic Issue</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.traffic_issue.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.traffic_issue.response"
                @input="$v.outdoor_env.traffic_issue.response.$touch()"
              />
              <span 
                v-if="$v.outdoor_env.traffic_issue.response.$error
                && !$v.outdoor_env.traffic_issue.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.traffic_issue.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.traffic_issue.remark"
                @input="$v.outdoor_env.traffic_issue.remark.$touch()"
              />
              <span 
                v-if="$v.outdoor_env.traffic_issue.remark.$error
                && !$v.outdoor_env.traffic_issue.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Driving Rain</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.outdoor_env.drv_rain.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.drv_rain.response"
                @input="$v.outdoor_env.drv_rain.response.$touch()"
              />
              <span 
                v-if="$v.outdoor_env.drv_rain.response.$error
                && !$v.outdoor_env.drv_rain.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.outdoor_env.drv_rain.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.drv_rain.remark"
                @input="$v.outdoor_env.drv_rain.remark.$touch()"
              />
              <span 
                v-if="$v.outdoor_env.drv_rain.remark.$error
                && !$v.outdoor_env.drv_rain.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Dirty/Unkept</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.unkempt.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.unkempt.response"
                @input="$v.outdoor_env.unkempt.response.$touch()"
              />
              <span
                
                v-if="$v.outdoor_env.unkempt.response.$error
                && !$v.outdoor_env.unkempt.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.unkempt.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.unkempt.remark"
                @input="$v.outdoor_env.unkempt.remark.$touch()"
              />
              <span
                
                v-if="$v.outdoor_env.unkempt.remark.$error
                && !$v.outdoor_env.unkempt.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Aggressive Chemicals/polution</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.outdoor_env.pollution.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.pollution.response"
                @input="$v.outdoor_env.pollution.response.$touch()"
              />
              <span
                
                v-if="$v.outdoor_env.pollution.response.$error
                && !$v.outdoor_env.pollution.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.outdoor_env.pollution.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.pollution.remark"
                @input="$v.outdoor_env.pollution.remark.$touch()"
              />
              <span                
                v-if="$v.outdoor_env.pollution.remark.$error
                && !$v.outdoor_env.pollution.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Extreme Temperature</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.extreme_temp.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.extreme_temp.response"
                @input="$v.outdoor_env.extreme_temp.response.$touch()"
              />
              <span
                
                v-if="$v.outdoor_env.extreme_temp.response.$error
                && !$v.outdoor_env.extreme_temp.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.extreme_temp.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.extreme_temp.remark"
                @input="$v.outdoor_env.extreme_temp.remark.$touch()"
              />
              <span
                
                v-if="$v.outdoor_env.extreme_temp.remark.$error
                && !$v.outdoor_env.extreme_temp.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Threat from other Buildings</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.building_threat.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.building_threat.response"
                @input="$v.outdoor_env.building_threat.response.$touch()"
              />
              <span 
                v-if="$v.outdoor_env.building_threat.response.$error
                && !$v.outdoor_env.building_threat.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.outdoor_env.building_threat.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="outdoor_env.building_threat.remark"
                @input="$v.outdoor_env.building_threat.remark.$touch()"
              />
              <span 
                v-if="$v.outdoor_env.building_threat.remark.$error
                && !$v.outdoor_env.building_threat.remark.required"
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
      outdoor_env: {
        drainage_issue: { response: '', remark: '' },
        flood_issue: { response: '', remark: '' },
        heat: { response: '', remark: '' },
        traffic_issue: { response: '', remark: '' },
        drv_rain: { response: '', remark: '' },
        unkempt: { response: '', remark: '' },
        pollution: { response: '', remark: '' },
        extreme_temp: { response: '', remark: '' },
        building_threat: { response: '', remark: '' },
      },
    };
  },
  validations: {
    outdoor_env: {
      drainage_issue: { response: { required }, remark: { required } },
      flood_issue: { response: { required }, remark: { required } },
      heat: { response: { required }, remark: { required } },
      traffic_issue: { response: { required }, remark: { required } },
      drv_rain: { response: { required }, remark: { required } },
      unkempt: { response: { required }, remark: { required } },
      pollution: { response: { required }, remark: { required } },
      extreme_temp: { response: { required }, remark: { required } },
      building_threat: { response: { required }, remark: { required } },
      form: [
        'outdoor_env.drainage_issue.response',
        'outdoor_env.drainage_issue.remark',
        'outdoor_env.flood_issue.response',
        'outdoor_env.flood_issue.remark',
        'outdoor_env.heat.response',
        'outdoor_env.heat.remark',
        'outdoor_env.traffic_issue.response',
        'outdoor_env.traffic_issue.remark',
        'outdoor_env.drv_rain.response',
        'outdoor_env.drv_rain.remark',
        'outdoor_env.unkempt.response',
        'outdoor_env.unkempt.remark',
        'outdoor_env.pollution.response',
        'outdoor_env.pollution.remark',
        'outdoor_env.extreme_temp.response',
        'outdoor_env.extreme_temp.remark',
        'outdoor_env.building_threat.response',
        'outdoor_env.building_threat.remark',
      ],
    },
  },
  methods: {
    validate() {
      this.$v.outdoor_env.form.$touch();
      const isValid = !this.$v.outdoor_env.form.$invalid;
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
