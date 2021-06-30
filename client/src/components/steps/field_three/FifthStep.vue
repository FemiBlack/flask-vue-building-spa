<template>
  <fieldset>
    <h2>Non-Destructive Test Results</h2>

    <div class="form-group" :class="{ 'is-invalid': $v.nd_test_res.grid.$error }">
      <label for="build_code">Grid</label>
      <input type="text" class="form-control" v-model.trim="nd_test_res.grid"
      @input="$v.nd_test_res.grid.$touch()">
      <span
      v-if="$v.nd_test_res.grid.$error && !$v.nd_test_res.grid.required"
      class="help-block">Grid is required</span>
      <span
      v-if="$v.nd_test_res.grid.$error && !$v.nd_test_res.grid.numeric"
      class="help-block">Valid number is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.nd_test_res.ultrasonic.time.$error }">
      <label for="build_code">Ultrasonic Time(s)</label>
      <input type="text" class="form-control" v-model.trim="nd_test_res.ultrasonic.time"
      @input="$v.nd_test_res.ultrasonic.time.$touch()">
      <span class="help-block"
    v-if="$v.nd_test_res.ultrasonic.time.$error && !$v.nd_test_res.ultrasonic.time.required">
    Address is required</span>
    <span class="help-block"
    v-if="$v.nd_test_res.ultrasonic.time.$error && !$v.nd_test_res.ultrasonic.time.numeric">
    Valid number is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.nd_test_res.ultrasonic.distance.$error }">
      <label for="build_code">Ultrasonic Distance(mmm)</label>
      <input type="text" class="form-control" v-model.trim="nd_test_res.ultrasonic.distance"
      @input="$v.nd_test_res.ultrasonic.distance.$touch()">
      <span class="help-block"
    v-if="$v.nd_test_res.ultrasonic.distance.$error && !$v.nd_test_res.ultrasonic.distance.required">
    Date of Construction is required</span>
    <span class="help-block"
    v-if="$v.nd_test_res.ultrasonic.distance.$error && !$v.nd_test_res.ultrasonic.distance.numeric">
    Valid number is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.nd_test_res.ultrasonic.velocity.$error }">
      <label for="build_code">Ultrasonic Velocity(Km/s)</label>
      <input type="text" class="form-control" v-model.trim="nd_test_res.ultrasonic.velocity"
      @input="$v.nd_test_res.ultrasonic.velocity.$touch()">
      <span class="help-block"
    v-if="$v.nd_test_res.ultrasonic.velocity.$error && !$v.nd_test_res.ultrasonic.velocity.required">Age is required</span>
      <span class="help-block"
    v-if="$v.nd_test_res.ultrasonic.velocity.$error && !$v.nd_test_res.ultrasonic.velocity.numeric">A valid number is required!</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.nd_test_res.eq_strength.$error }">
      <label for="build_code">E.Q Strength(N/MM2)</label>
      <input type="text" class="form-control" v-model.trim="nd_test_res.eq_strength"
      @input="$v.nd_test_res.eq_strength.$touch()">
      <span class="help-block"
    v-if="$v.nd_test_res.eq_strength.$error && !$v.nd_test_res.eq_strength.required">
    Date of Last Repair is required</span>
    <span class="help-block"
    v-if="$v.nd_test_res.eq_strength.$error && !$v.nd_test_res.eq_strength.numeric">
    A valid number is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.nd_test_res.hammer_val.$error }">
      <label for="build_code">Hammer Value</label>
      <input type="text" class="form-control" v-model.trim="nd_test_res.hammer_val"
      @input="$v.nd_test_res.hammer_val.$touch()">
      <span class="help-block"
    v-if="$v.nd_test_res.hammer_val.$error && !$v.nd_test_res.hammer_val.required">
    Nature of Repair is required</span>
    <span class="help-block"
    v-if="$v.nd_test_res.hammer_val.$error && !$v.nd_test_res.hammer_val.numeric">
    Valid number is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.nd_test_res.avg_hammer_val.$error }">
      <label for="build_code">Average Hammer Value</label>
      <input type="text" class="form-control" v-model.trim="nd_test_res.avg_hammer_val"
      @input="$v.nd_test_res.avg_hammer_val.$touch()">
      <span class="help-block"
    v-if="$v.nd_test_res.avg_hammer_val.$error && !$v.nd_test_res.avg_hammer_val.required">
    Frequency of Repair is required</span>
    <span class="help-block"
    v-if="$v.nd_test_res.avg_hammer_val.$error && !$v.nd_test_res.avg_hammer_val.numeric">
    Valid number is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.nd_test_res.avg_eq_strength.$error }">
      <label for="build_code">Average E.Q Strength</label>
      <input type="text" class="form-control" v-model.trim="nd_test_res.avg_eq_strength"
      @input="$v.nd_test_res.avg_eq_strength.$touch()">
      <span class="help-block"
    v-if="$v.nd_test_res.avg_eq_strength.$error && !$v.nd_test_res.avg_eq_strength.required">
    Geometry is required</span>
    <span class="help-block"
    v-if="$v.nd_test_res.avg_eq_strength.$error && !$v.nd_test_res.avg_eq_strength.numeric">
    A valid number is required</span>
    </div>
  </fieldset>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      nd_test_res:{
          grid: '',
          ultrasonic: { time: '', distance: '', velocity: '' },
          eq_strength: '',
          hammer_val: '',
          avg_hammer_val: '',
          avg_eq_strength: '',
      },
    };
  },
  validations: {
    nd_test_res:{
        grid: { required, numeric },
        ultrasonic: { time: { required, numeric }, distance: { required, numeric }, velocity: { required, numeric } },
        eq_strength: { required, numeric },
        hammer_val: { required, numeric },
        avg_hammer_val: { required, numeric },
        avg_eq_strength: { required, numeric },
        form: [
        'nd_test_res.grid',
        'nd_test_res.ultrasonic.time',
        'nd_test_res.ultrasonic.distance',
        'nd_test_res.ultrasonic.velocity',
        'nd_test_res.eq_strength',
        'nd_test_res.hammer_val',
        'nd_test_res.avg_hammer_val',
        'nd_test_res.avg_eq_strength',
        ],
      },
  },
  methods: {
    validate() {
      this.$v.nd_test_res.form.$touch();
      const isValid = !this.$v.nd_test_res.form.$invalid;
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
