<template>
  <fieldset>
    <h2>Building External Environment</h2>
    <div class="form-group" v-bind:class="{ 'has-error': $v.external_env.drv_rain.$error }">
      <label for="build_code">Driving Rain</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.drv_rain"
        @input="$v.external_env.drv_rain.$touch()"
      />
      <span class="help-block"
        v-if="$v.external_env.drv_rain.$error && !$v.external_env.drv_rain.required"
        >First name is required</span
      >
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.external_env.drainage_issue.$error }">
      <label for="build_code">drainage_issue Issue</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.drainage_issue"
        @input="$v.external_env.drainage_issue.$touch()"
      />
      <span
        class="help-block"
        v-if="$v.external_env.drainage_issue.$error && !$v.external_env.drainage_issue.required"
        >First name is required</span
      >
    </div>
    <div
      class="form-group"
      v-bind:class="{ 'has-error': $v.external_env.water_log.$error }"
    >
      <label for="build_code">Water Logged</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.water_log"
        @input="$v.external_env.water_log.$touch()"
      />
      <span
        class="help-block"
        v-if="$v.external_env.water_log.$error && !$v.external_env.water_log.required"
        >First name is required</span
      >
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.external_env.unkempt.$error }">
      <label for="build_code">Dirty/Unkept Surroundings</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.unkempt"
        @input="$v.external_env.unkempt.$touch()"
      />
      <span class="help-block"
        v-if="$v.external_env.unkempt.$error && !$v.external_env.unkempt.required"
        >First name is required</span
      >
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.external_env.pollution.$error }">
      <label for="build_code">Aggressive Chemicals/Pollution</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.pollution"
        @input="$v.external_env.pollution.$touch()"
      />
      <span class="help-block"
        v-if="$v.external_env.pollution.$error && !$v.external_env.pollution.required"
        >First name is required</span
      >
    </div>
    <div
      class="form-group"
      v-bind:class="{ 'has-error': $v.external_env.topography.$error }"
    >
      <label for="build_code">Topography</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.topography"
        @input="$v.external_env.topography.$touch()"
      />
      <span
        class="help-block"
        v-if="$v.external_env.topography.$error && !$v.external_env.topography.required"
        >First name is required</span
      >
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.external_env.radiation.$error }">
      <label for="build_code">Ultra-Violet Radiation</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.radiation"
        @input="$v.external_env.radiation.$touch()"
      />
      <span
        class="help-block"
        v-if="$v.external_env.radiation.$error && !$v.external_env.radiation.required"
        >First name is required</span
      >
    </div>
    <div
      class="form-group"
      v-bind:class="{ 'has-error': $v.external_env.extreme_temp.$error }"
    >
      <label for="build_code">Extreme Temperature</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.extreme_temp"
        @input="$v.external_env.extreme_temp.$touch()"
      />
      <span
        class="help-block"
        v-if="$v.external_env.extreme_temp.$error && !$v.external_env.extreme_temp.required"
        >First name is required</span
      >
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.external_env.flood.$error }">
      <label for="build_code">Flood</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.flood"
        @input="$v.external_env.flood.$touch()"
      />
      <span class="help-block"
        v-if="$v.external_env.flood.$error && !$v.external_env.flood.required"
        >First name is required</span
      >
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.external_env.fire_source.$error }">
      <label for="build_code">Fire/ Heat Source</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.fire_source"
        @input="$v.external_env.fire_source.$touch()"
      />
      <span
        class="help-block"
        v-if="$v.external_env.fire_source.$error && !$v.external_env.fire_source.required"
        >First name is required</span
      >
    </div>
    <div
      class="form-group"
      v-bind:class="{ 'has-error': $v.external_env.traffic_issue.$error }"
    >
      <label for="build_code">Traffic Issues</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.traffic_issue"
        @input="$v.external_env.traffic_issue.$touch()"
      />
      <span
        class="help-block"
        v-if="$v.external_env.traffic_issue.$error && !$v.external_env.traffic_issue.required"
        >First name is required</span
      >
    </div>
    <div
      class="form-group"
      v-bind:class="{ 'has-error': $v.external_env.building_threat.$error }"
    >
      <label for="build_code">Threat from other buildings</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.building_threat"
        @input="$v.external_env.building_threat.$touch()"
      />
      <span
        class="help-block"
        v-if="$v.external_env.building_threat.$error && !$v.external_env.building_threat.required"
        >First name is required</span
      >
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.external_env.wind.$error }">
      <label for="build_code">Wind</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.wind"
        @input="$v.external_env.wind.$touch()"
      />
      <span class="help-block" v-if="$v.external_env.wind.$error && !$v.external_env.wind.required"
        >First name is required</span
      >
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.external_env.moisture.$error }">
      <label for="build_code">Moisture</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="external_env.moisture"
        @input="$v.external_env.moisture.$touch()"
      />
      <span
        class="help-block"
        v-if="$v.external_env.moisture.$error && !$v.external_env.moisture.required"
        >First name is required</span
      >
    </div>
  </fieldset>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      external_env: {
        drv_rain: '',
        drainage_issue: '',
        water_log: '',
        unkempt: '',
        pollution: '',
        topography: '',
        radiation: '',
        extreme_temp: '',
        flood: '',
        fire_source: '',
        traffic_issue: '',
        building_threat: '',
        wind: '',
        moisture: '',
      },
    };
  },
  validations: {
    external_env: {
      drv_rain: { required },
      drainage_issue: { required },
      water_log: { required },
      unkempt: { required },
      pollution: { required },
      topography: { required },
      radiation: { required, numeric },
      extreme_temp: { required },
      flood: { required },
      fire_source: { required },
      traffic_issue: { required },
      building_threat: { required },
      wind: { required },
      moisture: { required },
      form: [
        'external_env.drv_rain',
        'external_env.drainage_issue',
        'external_env.water_log',
        'external_env.unkempt',
        'external_env.pollution',
        'external_env.topography',
        'external_env.radiation',
        'external_env.extreme_temp',
        'external_env.flood',
        'external_env.fire_source',
        'external_env.traffic_issue',
        'external_env.building_threat',
        'external_env.wind',
        'external_env.moisture',
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
</style>
