<template>
  <fieldset>
    <h2>Building External Environment</h2>
    <table style="width: 100%;">
      <thead>
        <th>Field</th>
        <th>Response</th>
        <th>Remark</th>
      </thead>
      <tbody>
        <tr>
          <td>Driving Rain</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.drv_rain.response.$error }">
            <input
              type="text"
              class="form-control"
              v-model.trim="external_env.drv_rain.response"
              @input="$v.external_env.drv_rain.response.$touch()"
            />
            <span 
              v-if="$v.external_env.drv_rain.response.$error
              && !$v.external_env.drv_rain.response.required"
              >Response is required</span
            >
          </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.drv_rain.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.drv_rain.remark"
                @input="$v.external_env.drv_rain.remark.$touch()"
              />
              <span 
                v-if="$v.external_env.drv_rain.remark.$error
                && !$v.external_env.drv_rain.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Drainage Issue</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.external_env.drainage_issue.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.drainage_issue.response"
                @input="$v.external_env.drainage_issue.response.$touch()"
              />
              <span
                
                v-if="$v.external_env.drainage_issue.response.$error
                && !$v.external_env.drainage_issue.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.external_env.drainage_issue.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.drainage_issue.remark"
                @input="$v.external_env.drainage_issue.remark.$touch()"
              />
              <span
                
                v-if="$v.external_env.drainage_issue.remark.$error
                && !$v.external_env.drainage_issue.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Water Logged</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.water_log.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.water_log.response"
                @input="$v.external_env.water_log.response.$touch()"
              />
              <span
                
                v-if="$v.external_env.water_log.response.$error
                && !$v.external_env.water_log.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.water_log.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.water_log.remark"
                @input="$v.external_env.water_log.remark.$touch()"
              />
              <span
                
                v-if="$v.external_env.water_log.remark.$error
                && !$v.external_env.water_log.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Dirty/Unkept Surroundings</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.unkempt.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.unkempt.response"
                @input="$v.external_env.unkempt.response.$touch()"
              />
              <span 
                v-if="$v.external_env.unkempt.response.$error
                && !$v.external_env.unkempt.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.unkempt.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.unkempt.remark"
                @input="$v.external_env.unkempt.remark.$touch()"
              />
              <span 
                v-if="$v.external_env.unkempt.remark.$error
                && !$v.external_env.unkempt.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Aggressive Chemicals/Pollution</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.external_env.pollution.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.pollution.response"
                @input="$v.external_env.pollution.response.$touch()"
              />
              <span 
                v-if="$v.external_env.pollution.response.$error
                && !$v.external_env.pollution.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.external_env.pollution.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.pollution.remark"
                @input="$v.external_env.pollution.remark.$touch()"
              />
              <span 
                v-if="$v.external_env.pollution.remark.$error
                && !$v.external_env.pollution.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Topography</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.topography.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.topography.response"
                @input="$v.external_env.topography.response.$touch()"
              />
              <span
                
                v-if="$v.external_env.topography.response.$error
                && !$v.external_env.topography.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.topography.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.topography.remark"
                @input="$v.external_env.topography.remark.$touch()"
              />
              <span
                
                v-if="$v.external_env.topography.remark.$error
                && !$v.external_env.topography.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Ultra-Violet Radiation</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.external_env.radiation.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.radiation.response"
                @input="$v.external_env.radiation.response.$touch()"
              />
              <span
                
                v-if="$v.external_env.radiation.response.$error
                && !$v.external_env.radiation.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.external_env.radiation.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.radiation.remark"
                @input="$v.external_env.radiation.remark.$touch()"
              />
              <span
                
                v-if="$v.external_env.radiation.remark.$error
                && !$v.external_env.radiation.remark.required"
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
              v-bind:class="{ 'has-error': $v.external_env.extreme_temp.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.extreme_temp.response"
                @input="$v.external_env.extreme_temp.response.$touch()"
              />
              <span
                
                v-if="$v.external_env.extreme_temp.response.$error
                && !$v.external_env.extreme_temp.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.extreme_temp.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.extreme_temp.remark"
                @input="$v.external_env.extreme_temp.remark.$touch()"
              />
              <span
                
                v-if="$v.external_env.extreme_temp.remark.$error
                && !$v.external_env.extreme_temp.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Flood</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.flood.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.flood.response"
                @input="$v.external_env.flood.response.$touch()"
              />
              <span 
                v-if="$v.external_env.flood.response.$error
                && !$v.external_env.flood.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.flood.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.flood.remark"
                @input="$v.external_env.flood.remark.$touch()"
              />
              <span 
                v-if="$v.external_env.flood.remark.$error
                && !$v.external_env.flood.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Fire/ Heat Source</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.external_env.fire_source.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.fire_source.response"
                @input="$v.external_env.fire_source.response.$touch()"
              />
              <span
                
                v-if="$v.external_env.fire_source.response.$error
                && !$v.external_env.fire_source.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.external_env.fire_source.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.fire_source.remark"
                @input="$v.external_env.fire_source.remark.$touch()"
              />
              <span
                
                v-if="$v.external_env.fire_source.remark.$error
                && !$v.external_env.fire_source.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Traffic Issues</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.traffic_issue.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.traffic_issue.response"
                @input="$v.external_env.traffic_issue.response.$touch()"
              />
              <span
                
                v-if="$v.external_env.traffic_issue.response.$error
                && !$v.external_env.traffic_issue.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.traffic_issue.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.traffic_issue.remark"
                @input="$v.external_env.traffic_issue.remark.$touch()"
              />
              <span
                
                v-if="$v.external_env.traffic_issue.remark.$error
                && !$v.external_env.traffic_issue.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Threat from other buildings</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.building_threat.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.building_threat.response"
                @input="$v.external_env.building_threat.response.$touch()"
              />
              <span
                v-if="$v.external_env.building_threat.response.$error
                && !$v.external_env.building_threat.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.building_threat.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.building_threat.remark"
                @input="$v.external_env.building_threat.remark.$touch()"
              />
              <span
                
                v-if="$v.external_env.building_threat.remark.$error
                && !$v.external_env.building_threat.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Wind</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.wind.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.wind.response"
                @input="$v.external_env.wind.response.$touch()"
              />
              <span 
              v-if="$v.external_env.wind.response.$error
              && !$v.external_env.wind.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.wind.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.wind.remark"
                @input="$v.external_env.wind.remark.$touch()"
              />
              <span 
              v-if="$v.external_env.wind.remark.$error && !$v.external_env.wind.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Moisture</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.moisture.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.moisture.response"
                @input="$v.external_env.moisture.response.$touch()"
              />
              <span
                
                v-if="$v.external_env.moisture.response.$error
                && !$v.external_env.moisture.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.external_env.moisture.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="external_env.moisture.remark"
                @input="$v.external_env.moisture.remark.$touch()"
              />
              <span
                
                v-if="$v.external_env.moisture.remark.$error
                && !$v.external_env.moisture.remark.required"
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
      external_env: {
        drv_rain: { response: '', remark: '' },
        drainage_issue: { response: '', remark: '' },
        water_log: { response: '', remark: '' },
        unkempt: { response: '', remark: '' },
        pollution: { response: '', remark: '' },
        topography: { response: '', remark: '' },
        radiation: { response: '', remark: '' },
        extreme_temp: { response: '', remark: '' },
        flood: { response: '', remark: '' },
        fire_source: { response: '', remark: '' },
        traffic_issue: { response: '', remark: '' },
        building_threat: { response: '', remark: '' },
        wind: { response: '', remark: '' },
        moisture: { response: '', remark: '' },
      },
    };
  },
  validations: {
    external_env: {
      drv_rain: { response: { required }, remark: { required } },
      drainage_issue: { response: { required }, remark: { required } },
      water_log: { response: { required }, remark: { required } },
      unkempt: { response: { required }, remark: { required } },
      pollution: { response: { required }, remark: { required } },
      topography: { response: { required }, remark: { required } },
      radiation: { response: { required }, remark: { required } },
      extreme_temp: { response: { required }, remark: { required } },
      flood: { response: { required }, remark: { required } },
      fire_source: { response: { required }, remark: { required } },
      traffic_issue: { response: { required }, remark: { required } },
      building_threat: { response: { required }, remark: { required } },
      wind: { response: { required }, remark: { required } },
      moisture: { response: { required }, remark: { required } },
      form: [
        'external_env.drv_rain.response',
        'external_env.drv_rain.remark',
        'external_env.drainage_issue.response',
        'external_env.drainage_issue.remark',
        'external_env.water_log.response',
        'external_env.water_log.remark',
        'external_env.unkempt.response',
        'external_env.unkempt.remark',
        'external_env.pollution.response',
        'external_env.pollution.remark',
        'external_env.topography.response',
        'external_env.topography.remark',
        'external_env.radiation.response',
        'external_env.radiation.remark',
        'external_env.extreme_temp.response',
        'external_env.extreme_temp.remark',
        'external_env.flood.response',
        'external_env.flood.remark',
        'external_env.fire_source.response',
        'external_env.fire_source.remark',
        'external_env.traffic_issue.response',
        'external_env.traffic_issue.remark',
        'external_env.building_threat.response',
        'external_env.building_threat.remark',
        'external_env.wind.response',
        'external_env.wind.remark',
        'external_env.moisture.response',
        'external_env.moisture.remark',
      ],
    },
  },
  methods: {
    validate() {
      this.$v.external_env.form.$touch();
      const isValid = !this.$v.external_env.form.$invalid;
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
