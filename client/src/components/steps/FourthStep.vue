<template>
  <fieldset>
    <h2>General Well Being of Building</h2>
    <div
      class="form-group"
      v-bind:class="{ 'has-error': $v.general_being.foundation_sett.$error }"
    >
      <label for="build_code">foundation_sett Settlement</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="general_being.foundation_sett"
        @input="$v.general_being.foundation_sett.$touch()"
      />
      <span
        class="help-block"
        v-if="$v.general_being.foundation_sett.$error && !$v.general_being.foundation_sett.required"
        >First name is required</span
      >
    </div>
    <div
      class="form-group"
      v-bind:class="{ 'has-error': $v.general_being.deformation.$error }"
    >
      <label for="build_code">Deformation</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="general_being.deformation"
        @input="$v.general_being.deformation.$touch()"
      />
      <span
        class="help-block"
        v-if="$v.general_being.deformation.$error && !$v.general_being.deformation.required"
        >First name is required</span
      >
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.general_being.defects.$error }">
      <label for="build_code">Defects</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="general_being.defects"
        @input="$v.general_being.defects.$touch()"
      />
      <span class="help-block"
        v-if="$v.general_being.defects.$error && !$v.general_being.defects.required"
        >First name is required</span
      >
    </div>
    <div class="form-group" v-bind:class="{ 'has-error': $v.general_being.cracks.$error }">
      <label for="build_code">Cracks</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="general_being.cracks"
        @input="$v.general_being.cracks.$touch()"
      />
      <span class="help-block"
        v-if="$v.general_being.cracks.$error && !$v.general_being.cracks.required"
        >First name is required</span
      >
    </div>
  </fieldset>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      general_being: {
        foundation_sett: '',
        deformation: '',
        defects: '',
        cracks: '',
      },
    };
  },
  validations: {
    general_being: {
      foundation_sett: { required },
      deformation: { required },
      defects: { required },
      cracks: { required },
      form: ['general_being.foundation_sett', 'general_being.deformation', 'general_being.defects', 'general_being.cracks'],
    },
  },
  methods: {
    validate() {
      this.$v.general_being.form.$touch();
      const isValid = !this.$v.general_being.form.$invalid;
      this.$emit('on-validate', this.$data, isValid);
      return isValid;
    },
  },
};
</script>
