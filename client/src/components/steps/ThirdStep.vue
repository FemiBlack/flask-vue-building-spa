<template>
  <fieldset>
    <h2>Building Internal Condition</h2>
    <div class="form-group" v-bind:class="{ 'has-error': $v.internal_cond.moisture.$error }">
      <label for="build_code">Moisture/ Humid Air</label>
      <input type="text" class="form-control" v-model.trim="internal_cond.moisture"
      @input="$v.internal_cond.moisture.$touch()">
      <span class="help-block"
      v-if="$v.internal_cond.moisture.$error && !$v.internal_cond.moisture.required">
      First name is required</span>
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.internal_cond.excess_heat.$error }">
      <label for="build_code">Excessive Heat</label>
      <input type="text" class="form-control" v-model.trim="internal_cond.excess_heat"
      @input="$v.internal_cond.excess_heat.$touch()">
      <span class="help-block"
      v-if="$v.internal_cond.excess_heat.$error && !$v.internal_cond.excess_heat.required">
      First name is required</span>
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.internal_cond.ventilation.$error }">
      <label for="build_code">Ventilation</label>
      <input type="text" class="form-control" v-model.trim="internal_cond.ventilation"
      @input="$v.internal_cond.ventilation.$touch()">
      <span class="help-block"
      v-if="$v.internal_cond.ventilation.$error && !$v.internal_cond.ventilation.required">
      First name is required</span>
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.internal_cond.dry_air.$error }">
      <label for="build_code">Dry Air</label>
      <input type="text" class="form-control" v-model.trim="internal_cond.dry_air"
      @input="$v.internal_cond.dry_air.$touch()">
      <span class="help-block"
      v-if="$v.internal_cond.dry_air.$error && !$v.internal_cond.dry_air.required">
      First name is required</span>
    </div>
  </fieldset>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      internal_cond: {
        moisture: '',
        excess_heat: '',
        ventilation: '',
        dry_air: '',
      },
    };
  },
  validations: {
    internal_cond: {
      moisture: { required },
      excess_heat: { required },
      ventilation: { required },
      dry_air: { required },
      form: ['internal_cond.moisture', 'internal_cond.excess_heat', 'internal_cond.ventilation', 'internal_cond.dry_air'],
    },
  },
  methods: {
    validate() {
      this.$v.internal_cond.form.$touch();
      const isValid = !this.$v.internal_cond.form.$invalid;
      this.$emit('on-validate', this.$data, isValid);
      return isValid;
    },
  },
};
</script>

<style>

</style>
