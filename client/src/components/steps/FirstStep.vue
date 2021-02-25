<template>
  <fieldset>
    <h2>Building Particulars</h2>
    <div class="form-group" :class="{ 'has-error': $v.buildCode.$error }">
      <label for="build_code">Building No./ Code</label>
      <input type="text" class="form-control" v-model.trim="buildCode"
      @input="$v.buildCode.$touch()">
      <span class="help-block"
    v-if="$v.buildCode.$error && !$v.buildCode.required">Building code is required</span>
    </div>
    <div class="form-group" :class="{ 'has-error': $v.address.$error }">
      <label for="build_code">Address of Building</label>
      <input type="text" class="form-control" v-model.trim="address"
      @input="$v.address.$touch()">
      <span class="help-block"
    v-if="$v.address.$error && !$v.address.required">Building code is required</span>
    </div>
    <div class="form-group" :class="{ 'has-error': $v.dateType.$error }">
      <label for="build_code">Date/Type of Construction (If Known)</label>
      <input type="text" class="form-control" v-model.trim="dateType"
      @input="$v.dateType.$touch()">
      <span class="help-block"
    v-if="$v.dateType.$error && !$v.dateType.required">Building code is required</span>
    </div>
    <div class="form-group" :class="{ 'has-error': $v.age.$error }">
      <label for="build_code">Age of Building</label>
      <input type="text" class="form-control" v-model.trim="age" @input="$v.age.$touch()">
      <span class="help-block"
    v-if="$v.age.$error && !$v.age.required">Building code is required</span>
    </div>
    <div class="form-group" :class="{ 'has-error': $v.dateRepair.$error }">
      <label for="build_code">Date of last Repair/Intervention</label>
      <input type="text" class="form-control" v-model.trim="dateRepair"
      @input="$v.dateRepair.$touch()">
      <span class="help-block"
    v-if="$v.dateRepair.$error && !$v.dateRepair.required">Building code is required</span>
    </div>
    <div class="form-group" :class="{ 'has-error': $v.natureRepair.$error }">
      <label for="build_code">Nature of Repair/Intervention</label>
      <input type="text" class="form-control" v-model.trim="natureRepair"
      @input="$v.natureRepair.$touch()">
      <span class="help-block"
    v-if="$v.natureRepair.$error && !$v.natureRepair.required">Building code is required</span>
    </div>
    <div class="form-group" :class="{ 'has-error': $v.freqrepair.$error }">
      <label for="build_code">Frequency of Repair/Interventions</label>
      <input type="text" class="form-control" v-model.trim="freqrepair"
      @input="$v.freqrepair.$touch()">
      <span class="help-block"
    v-if="$v.freqrepair.$error && !$v.freqrepair.required">Building code is required</span>
    </div>
    <div class="form-group" :class="{ 'has-error': $v.geometry.$error }">
      <label for="build_code">Geometry of the Building</label>
      <input type="text" class="form-control" v-model.trim="geometry" @input="$v.geometry.$touch()">
      <span class="help-block"
    v-if="$v.geometry.$error && !$v.geometry.required">Building code is required</span>
    </div>
    <div class="form-group" :class="{ 'has-error': $v.specialChar.$error }">
      <label for="build_code">Special Characteristics</label>
      <input type="text" class="form-control" v-model.trim="specialChar"
      @input="$v.specialChar.$touch()">
      <span class="help-block"
    v-if="$v.specialChar.$error && !$v.specialChar.required">Building code is required</span>
    </div>
    <div class="form-group" :class="{ 'has-error': $v.compliance.$error }">
      <label for="build_code">Compliance with Intended</label>
      <input type="text" class="form-control" v-model.trim="compliance"
      @input="$v.compliance.$touch()">
      <span class="help-block"
    v-if="$v.compliance.$error && !$v.compliance.required">Building code is required</span>
    </div>
    <div class="form-group" :class="{ 'has-error': $v.deviation.$error }">
      <label for="build_code">Deviation from Intended Use/Misuse</label>
      <input type="text" class="form-control" v-model.trim="deviation"
      @input="$v.deviation.$touch()">
      <span class="help-block"
    v-if="$v.deviation.$error && !$v.deviation.required">Building code is required</span>
    </div>
  </fieldset>
</template>

<script>
import { required, minLength, numeric } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      buildCode: '',
      address: '',
      dateType: '',
      age: '',
      dateRepair: '',
      natureRepair: '',
      freqRepair: '',
      geometry: '',
      specialChar: '',
      compliance: '',
      deviation: '',
    };
  },
  validations: {
    buildCode: { required },
    address: { required },
    dateType: { required },
    age: { required, numeric },
    dateRepair: { required },
    natureRepair: { required },
    freqRepair: { required },
    geometry: { required },
    specialChar: { required },
    compliance: { required },
    deviation: { required, minLength: minLength(3) },
    form: [
      'buildCode', 'address',
      'dateType', 'age',
      'dateRepair', 'natureRepair',
      'freqRepair', 'geometry',
      'specialChar', 'compliance',
      'deviation',
    ],
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
