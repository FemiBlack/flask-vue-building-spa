<template>
    <!-- <b-form-checkbox-group v-model.trim="is_completed" id="form-checks">
        <b-form-checkbox value="true" @input="$v.is_completed.$touch()">Completed?</b-form-checkbox>
    </b-form-checkbox-group> -->
    <div class="form-checkbox-group center">
      <label for="build_code">Completed? Please hit the checkbox
      </label>
      <input type="checkbox" value="true" class="form-control form-checkbox" v-model.trim="is_completed">
    </div>
</template>
<script>

export default {
  data() {
    return {
      is_completed: '',
    };
  },

  methods: {
    validate() {
    //   this.$v.form.$touch();
      let is_completed = false;
      if(this.is_completed) is_completed = true;
      const isValid = is_completed;
      this.$emit('on-validate', this.$data, isValid);
      return isValid;
    },
  },
};
</script>

<style>
.center {
    text-align: center;
}
</style>