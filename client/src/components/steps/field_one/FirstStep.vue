<template>
  <fieldset>
    <h2>Building Particulars</h2>
    <div class="form-group" :class="{ 'is-invalid': $v.building_no.$error }">
      <label for="build_code">Building No./ Code</label>
      <input type="text" class="form-control" v-model.trim="building_no"
      @input="$v.building_no.$touch()">
      <span
      v-if="$v.building_no.$error && !$v.building_no.required"
      class="help-block">Building code is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.address.$error }">
      <label for="build_code">Address of Building</label>
      <input type="text" class="form-control" v-model.trim="address"
      @input="$v.address.$touch()">
      <span class="help-block"
    v-if="$v.address.$error && !$v.address.required">Address is required</span>
    </div>
    <div class="form-group">
      <label for="build_code">Date/Type of Construction (If Known)</label>
      <input type="date" class="form-control" v-model.trim="date">
    </div>
    <div class="form-group">
      <label for="build_code">Age of Building</label>
      <input type="text" class="form-control" v-model.trim="building_age">
    </div>
    <div class="form-group">
      <label for="build_code">Date of last Repair/Intervention</label>
      <input type="date" class="form-control" v-model.trim="last_repair_date">
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.nature_of_repair.$error }">
      <label for="build_code">Nature of Repair/Intervention</label>
      <input type="text" class="form-control" v-model.trim="nature_of_repair"
      @input="$v.nature_of_repair.$touch()">
      <span class="help-block"
    v-if="$v.nature_of_repair.$error && !$v.nature_of_repair.required">
    Nature of Repair is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.frequency_of_repair.$error }">
      <label for="build_code">Frequency of Repair/Interventions</label>
      <input type="text" class="form-control" v-model.trim="frequency_of_repair"
      @input="$v.frequency_of_repair.$touch()">
      <span class="help-block"
    v-if="$v.frequency_of_repair.$error && !$v.frequency_of_repair.required">
    Frequency of Repair is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.geometry.$error }">
      <label for="build_code">Geometry of the Building</label>
      <input type="text" class="form-control" v-model.trim="geometry" @input="$v.geometry.$touch()">
      <span class="help-block"
    v-if="$v.geometry.$error && !$v.geometry.required">Geometry is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.characteristics.$error }">
      <label for="build_code">Special Characteristics</label>
      <input type="text" class="form-control" v-model.trim="characteristics"
      @input="$v.characteristics.$touch()">
      <span class="help-block"
    v-if="$v.characteristics.$error && !$v.characteristics.required">
    Special Characteristics is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.compliance.$error }">
      <label for="build_code">Compliance with Intended</label>
      <input type="text" class="form-control" v-model.trim="compliance"
      @input="$v.compliance.$touch()">
      <span class="help-block"
    v-if="$v.compliance.$error && !$v.compliance.required">Field is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.deviation.$error }">
      <label for="build_code">Deviation from Intended Use/Misuse</label>
      <input type="text" class="form-control" v-model.trim="deviation"
      @input="$v.deviation.$touch()">
      <span class="help-block"
    v-if="$v.deviation.$error && !$v.deviation.required">Field is required</span>
    </div>
  </fieldset>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      building_no: '',
      address: '',
      date: '',
      building_age: '',
      last_repair_date: '',
      nature_of_repair: '',
      frequency_of_repair: '',
      geometry: '',
      characteristics: '',
      compliance: '',
      deviation: '',
    };
  },
  validations: {
    building_no: { required },
    address: { required },
    nature_of_repair: { required },
    frequency_of_repair: { required },
    geometry: { required },
    characteristics: { required },
    compliance: { required },
    deviation: { required },
    form: [
      'building_no', 'address','nature_of_repair',
      'frequency_of_repair', 'geometry',
      'characteristics', 'compliance',
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
.help-block {
  color:red;
}
</style>
