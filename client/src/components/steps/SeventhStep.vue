<template>
  <fieldset>
    <h2>Site Description</h2>
    <div class="form-group" :class="{ 'is-invalid': $v.site_desc.location.$error }">
      <label for="build_code">Description/Location</label>
      <input type="text" class="form-control" v-model.trim="site_desc.location"
      @input="$v.site_desc.location.$touch()">
      <span
      v-if="$v.site_desc.location.$error && !$v.site_desc.location.required"
      class="help-block">Description/Location is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.site_desc.surr_veg.$error }">
      <label for="build_code">Surrounding Vegetation</label>
      <input type="text" class="form-control" v-model.trim="site_desc.surr_veg"
      @input="$v.site_desc.surr_veg.$touch()">
      <span class="help-block"
    v-if="$v.site_desc.surr_veg.$error && !$v.site_desc.surr_veg.required">Surrounding Vegetation is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.site_desc.surr_out.$error }">
      <label for="build_code">Surrounding Outlook</label>
      <input type="text" class="form-control" v-model.trim="site_desc.surr_out"
      @input="$v.site_desc.surr_out.$touch()">
      <span class="help-block"
    v-if="$v.site_desc.surr_out.$error && !$v.site_desc.surr_out.required">Surrounding Outlook is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.site_desc.wall_mat.$error }">
      <label for="build_code">Wall Materials</label>
      <input type="text" class="form-control" v-model.trim="site_desc.wall_mat"
      @input="$v.site_desc.wall_mat.$touch()">
      <span class="help-block"
    v-if="$v.site_desc.wall_mat.$error && !$v.site_desc.wall_mat.required">Wall Material is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.site_desc.roof_mat.$error }">
      <label for="build_code">Roofing Materials</label>
      <input type="text" class="form-control" v-model.trim="site_desc.roof_mat"
      @input="$v.site_desc.roof_mat.$touch()">
      <span class="help-block"
    v-if="$v.site_desc.roof_mat.$error && !$v.site_desc.roof_mat.required">
    Roofing Material is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.site_desc.ceil_mat.$error }">
      <label for="build_code">Ceiling Materials</label>
      <input type="text" class="form-control" v-model.trim="site_desc.ceil_mat"
      @input="$v.site_desc.ceil_mat.$touch()">
      <span class="help-block"
    v-if="$v.site_desc.ceil_mat.$error && !$v.site_desc.ceil_mat.required">
   Ceiling Material is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.site_desc.windows_mat.$error }">
      <label for="build_code">Windows Materials</label>
      <input type="text" class="form-control" v-model.trim="site_desc.windows_mat"
      @input="$v.site_desc.windows_mat.$touch()">
      <span class="help-block"
    v-if="$v.site_desc.windows_mat.$error && !$v.site_desc.windows_mat.required">
    Window Material is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.site_desc.door_mat.$error }">
      <label for="build_code">Door Material</label>
      <input type="text" class="form-control" v-model.trim="site_desc.door_mat"
      @input="$v.site_desc.door_mat.$touch()">
      <span class="help-block"
    v-if="$v.site_desc.door_mat.$error && !$v.site_desc.door_mat.required">
    Door Material is required</span>
    </div>
    <div class="form-group" :class="{ 'is-invalid': $v.site_desc.floor_finish.$error }">
      <label for="build_code">Floor Finish</label>
      <input type="text" class="form-control" v-model.trim="site_desc.floor_finish"
      @input="$v.site_desc.floor_finish.$touch()">
      <span class="help-block"
    v-if="$v.site_desc.floor_finish.$error && !$v.site_desc.floor_finish.required">
    Floor Finish is required</span>
    </div>
  </fieldset>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      site_desc: {
          location: '',
          surr_veg: '',
          surr_out: '',
          wall_mat: '',
          roof_mat: '',
          ceil_mat: '',
          windows_mat: '',
          door_mat: '',
          floor_finish: '',
      },
    };
  },
  validations: {
    site_desc: {
        location: { required },
        surr_veg: { required },
        surr_out: { required },
        wall_mat: { required },
        roof_mat: { required },
        ceil_mat: { required },
        windows_mat: { required },
        door_mat: { required },
        floor_finish: { required },
        form: [
        'site_desc.location', 'site_desc.surr_veg',
        'site_desc.surr_out', 'site_desc.wall_mat',
        'site_desc.roof_mat', 'site_desc.ceil_mat',
        'site_desc.windows_mat', 'site_desc.door_mat',
        'site_desc.floor_finish',
        ],
    },
  },
  methods: {
    validate() {
      this.$v.site_desc.form.$touch();
      const isValid = !this.$v.site_desc.form.$invalid;
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
