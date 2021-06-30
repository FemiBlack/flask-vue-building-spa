<template>
  <fieldset>
    <h2>Maintenance</h2>
    <table style="width: 100%;">
      <thead>
        <th>Field</th>
        <th>Response</th>
        <th>Remark</th>
      </thead>
      <tbody>
        <tr>
          <td>Well maintained Internal Environment</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.maintenance.int_env.response.$error }">
            <input
              type="text"
              class="form-control"
              v-model.trim="maintenance.int_env.response"
              @input="$v.maintenance.int_env.response.$touch()"
            />
            <span 
              v-if="$v.maintenance.int_env.response.$error
              && !$v.maintenance.int_env.response.required"
              >Response is required</span
            >
          </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.maintenance.int_env.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.int_env.remark"
                @input="$v.maintenance.int_env.remark.$touch()"
              />
              <span 
                v-if="$v.maintenance.int_env.remark.$error
                && !$v.maintenance.int_env.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Well maintained External Environment</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.maintenance.ext_env.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.ext_env.response"
                @input="$v.maintenance.ext_env.response.$touch()"
              />
              <span
                
                v-if="$v.maintenance.ext_env.response.$error
                && !$v.maintenance.ext_env.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.maintenance.ext_env.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.ext_env.remark"
                @input="$v.maintenance.ext_env.remark.$touch()"
              />
              <span
                
                v-if="$v.maintenance.ext_env.remark.$error
                && !$v.maintenance.ext_env.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Building/ Structural Elements well maintained</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.maintenance.struct_elements.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.struct_elements.response"
                @input="$v.maintenance.struct_elements.response.$touch()"
              />
              <span
                
                v-if="$v.maintenance.struct_elements.response.$error
                && !$v.maintenance.struct_elements.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.maintenance.struct_elements.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.struct_elements.remark"
                @input="$v.maintenance.struct_elements.remark.$touch()"
              />
              <span
                
                v-if="$v.maintenance.struct_elements.remark.$error
                && !$v.maintenance.struct_elements.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Maintenance issues</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.maintenance.maintenance_issue.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.maintenance_issue.response"
                @input="$v.maintenance.maintenance_issue.response.$touch()"
              />
              <span 
                v-if="$v.maintenance.maintenance_issue.response.$error
                && !$v.maintenance.maintenance_issue.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.maintenance.maintenance_issue.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.maintenance_issue.remark"
                @input="$v.maintenance.maintenance_issue.remark.$touch()"
              />
              <span 
                v-if="$v.maintenance.maintenance_issue.remark.$error
                && !$v.maintenance.maintenance_issue.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Maintained when problem/ damage occurs</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.maintenance.damage_maintenance.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.damage_maintenance.response"
                @input="$v.maintenance.damage_maintenance.response.$touch()"
              />
              <span 
                v-if="$v.maintenance.damage_maintenance.response.$error
                && !$v.maintenance.damage_maintenance.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.maintenance.damage_maintenance.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.damage_maintenance.remark"
                @input="$v.maintenance.damage_maintenance.remark.$touch()"
              />
              <span 
                v-if="$v.maintenance.damage_maintenance.remark.$error
                && !$v.maintenance.damage_maintenance.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Maintained at care takers disgression</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.maintenance.care_takers.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.care_takers.response"
                @input="$v.maintenance.care_takers.response.$touch()"
              />
              <span
                
                v-if="$v.maintenance.care_takers.response.$error
                && !$v.maintenance.care_takers.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.maintenance.care_takers.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.care_takers.remark"
                @input="$v.maintenance.care_takers.remark.$touch()"
              />
              <span
                
                v-if="$v.maintenance.care_takers.remark.$error
                && !$v.maintenance.care_takers.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Maintenance after inspection with planned frequency</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.maintenance.planned_frequency.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.planned_frequency.response"
                @input="$v.maintenance.planned_frequency.response.$touch()"
              />
              <span
                
                v-if="$v.maintenance.planned_frequency.response.$error
                && !$v.maintenance.planned_frequency.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.maintenance.planned_frequency.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="maintenance.planned_frequency.remark"
                @input="$v.maintenance.planned_frequency.remark.$touch()"
              />
              <span
                
                v-if="$v.maintenance.planned_frequency.remark.$error
                && !$v.maintenance.planned_frequency.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!--
     -->
  </fieldset>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      maintenance: {
        int_env: { response: '', remark: '' },
        ext_env: { response: '', remark: '' },
        struct_elements: { response: '', remark: '' },
        maintenance_issue: { response: '', remark: '' },
        damage_maintenance: { response: '', remark: '' },
        care_takers: { response: '', remark: '' },
        planned_frequency: { response: '', remark: '' },
      },
    };
  },
  validations: {
    maintenance: {
      int_env: { response: { required }, remark: { required } },
      ext_env: { response: { required }, remark: { required } },
      struct_elements: { response: { required }, remark: { required } },
      maintenance_issue: { response: { required }, remark: { required } },
      damage_maintenance: { response: { required }, remark: { required } },
      care_takers: { response: { required }, remark: { required } },
      planned_frequency: { response: { required }, remark: { required } },
      form: [
        'maintenance.int_env.response',
        'maintenance.int_env.remark',
        'maintenance.ext_env.response',
        'maintenance.ext_env.remark',
        'maintenance.struct_elements.response',
        'maintenance.struct_elements.remark',
        'maintenance.maintenance_issue.response',
        'maintenance.maintenance_issue.remark',
        'maintenance.damage_maintenance.response',
        'maintenance.damage_maintenance.remark',
        'maintenance.care_takers.response',
        'maintenance.care_takers.remark',
        'maintenance.planned_frequency.response',
        'maintenance.planned_frequency.remark',
      ],
    },
  },
  methods: {
    validate() {
      this.$v.maintenance.form.$touch();
      const isValid = !this.$v.maintenance.form.$invalid;
      this.$emit('on-validate', this.$data, isValid);
      return isValid;
    },
  },
};
</script>

<style>
.has-error, .invalid-feedback {
  color: red;
}
</style>
