<template>
	<fieldset>
		<h2>General Well Being of Building</h2>
		<div class="form-group" v-bind:class="{ 'has-error': $v.foundation.$error }">
			<label for="build_code">Foundation Settlement</label>
			<input type="text" class="form-control" v-model.trim="foundation" @input="$v.foundation.$touch()">
			<span class="help-block" v-if="$v.foundation.$error && !$v.foundation.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.deformation.$error }">
			<label for="build_code">Deformation</label>
			<input type="text" class="form-control" v-model.trim="deformation" @input="$v.deformation.$touch()">
			<span class="help-block" v-if="$v.deformation.$error && !$v.deformation.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.defects.$error }">
			<label for="build_code">Defects</label>
			<input type="text" class="form-control" v-model.trim="defects" @input="$v.defects.$touch()">
			<span class="help-block" v-if="$v.defects.$error && !$v.defects.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.cracks.$error }">
			<label for="build_code">Cracks</label>
			<input type="text" class="form-control" v-model.trim="cracks" @input="$v.cracks.$touch()">
			<span class="help-block" v-if="$v.cracks.$error && !$v.cracks.required">First name is required</span>
		</div>
	</fieldset>
</template>

<script>
import { required, minLength, numeric } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      foundation: '',
      deformation: '',
      defects: '',
      cracks: '',
    };
  },
  validations: {
    foundation: { required },
    deformation: { required },
    defects: { required },
    cracks: { required },
    form: ['foundation', 'deformation', 'defects', 'cracks'],
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
