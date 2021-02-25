<template>
	<fieldset>
		<h2>Building Internal Condition</h2>
		<div class="form-group" v-bind:class="{ 'has-error': $v.humidAir.$error }">
			<label for="build_code">Moisture/ Humid Air</label>
			<input type="text" class="form-control" v-model.trim="humidAir" @input="$v.humidAir.$touch()">
			<span class="help-block" v-if="$v.humidAir.$error && !$v.humidAir.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.excessHeat.$error }">
			<label for="build_code">Excessive Heat</label>
			<input type="text" class="form-control" v-model.trim="excessHeat" @input="$v.excessHeat.$touch()">
			<span class="help-block" v-if="$v.excessHeat.$error && !$v.excessHeat.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.ventilation.$error }">
			<label for="build_code">Ventilation</label>
			<input type="text" class="form-control" v-model.trim="ventilation" @input="$v.ventilation.$touch()">
			<span class="help-block" v-if="$v.ventilation.$error && !$v.ventilation.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.dryAir.$error }">
			<label for="build_code">Dry Air</label>
			<input type="text" class="form-control" v-model.trim="dryAir" @input="$v.dryAir.$touch()">
			<span class="help-block" v-if="$v.dryAir.$error && !$v.dryAir.required">First name is required</span>
		</div>
	</fieldset>
</template>

<script>
import { required, minLength, numeric } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      humidAir: '',
      excessHeat: '',
      ventilation: '',
      dryAir: '',
    };
  },
  validations: {
    humidAir: { required },
    excessHeat: { required },
    ventilation: { required },
    dryAir: { required },
    form: ['humidAir', 'excessHeat', 'ventilation', 'dryAir'],
  },
  methods: {
    validate() {
      this.$v.form.$touch();
      const isValid = !this.$v.form.$invalid;
      this.$emit('on-validate', this.$data, isValid);
      return isValid;
    },
  },
};
</script>

<style>

</style>
