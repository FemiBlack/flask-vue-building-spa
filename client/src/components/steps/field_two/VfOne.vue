<template>
  <fieldset>
    <h2>Quality of Condition</h2>
    <table style="width: 100%;">
      <thead>
        <th>Field</th>
        <th>Response</th>
        <th>Remark</th>
      </thead>
      <tbody>
        <tr>
          <td>Physical appearance</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.physical_app.response.$error }">
            <input
              type="text"
              class="form-control"
              v-model.trim="component_quality.physical_app.response"
              @input="$v.component_quality.physical_app.response.$touch()"
            />
            <span 
              v-if="$v.component_quality.physical_app.response.$error
              && !$v.component_quality.physical_app.response.required"
              >Response is required</span
            >
          </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.physical_app.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.physical_app.remark"
                @input="$v.component_quality.physical_app.remark.$touch()"
              />
              <span 
                v-if="$v.component_quality.physical_app.remark.$error
                && !$v.component_quality.physical_app.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Texture</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.component_quality.texture.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.texture.response"
                @input="$v.component_quality.texture.response.$touch()"
              />
              <span
                
                v-if="$v.component_quality.texture.response.$error
                && !$v.component_quality.texture.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.component_quality.texture.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.texture.remark"
                @input="$v.component_quality.texture.remark.$touch()"
              />
              <span
                
                v-if="$v.component_quality.texture.remark.$error
                && !$v.component_quality.texture.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Strength</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.strength.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.strength.response"
                @input="$v.component_quality.strength.response.$touch()"
              />
              <span
                
                v-if="$v.component_quality.strength.response.$error
                && !$v.component_quality.strength.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.strength.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.strength.remark"
                @input="$v.component_quality.strength.remark.$touch()"
              />
              <span
                
                v-if="$v.component_quality.strength.remark.$error
                && !$v.component_quality.strength.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Crack</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.crack.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.crack.response"
                @input="$v.component_quality.crack.response.$touch()"
              />
              <span 
                v-if="$v.component_quality.crack.response.$error
                && !$v.component_quality.crack.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.crack.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.crack.remark"
                @input="$v.component_quality.crack.remark.$touch()"
              />
              <span 
                v-if="$v.component_quality.crack.remark.$error
                && !$v.component_quality.crack.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Dimension</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.component_quality.dimension.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.dimension.response"
                @input="$v.component_quality.dimension.response.$touch()"
              />
              <span 
                v-if="$v.component_quality.dimension.response.$error
                && !$v.component_quality.dimension.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.component_quality.dimension.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.dimension.remark"
                @input="$v.component_quality.dimension.remark.$touch()"
              />
              <span 
                v-if="$v.component_quality.dimension.remark.$error
                && !$v.component_quality.dimension.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Deflection</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.deflection.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.deflection.response"
                @input="$v.component_quality.deflection.response.$touch()"
              />
              <span
                
                v-if="$v.component_quality.deflection.response.$error
                && !$v.component_quality.deflection.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.deflection.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.deflection.remark"
                @input="$v.component_quality.deflection.remark.$touch()"
              />
              <span
                
                v-if="$v.component_quality.deflection.remark.$error
                && !$v.component_quality.deflection.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Spalling</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.component_quality.spalling.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.spalling.response"
                @input="$v.component_quality.spalling.response.$touch()"
              />
              <span
                
                v-if="$v.component_quality.spalling.response.$error
                && !$v.component_quality.spalling.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.component_quality.spalling.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.spalling.remark"
                @input="$v.component_quality.spalling.remark.$touch()"
              />
              <span
                
                v-if="$v.component_quality.spalling.remark.$error
                && !$v.component_quality.spalling.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Corrosion</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.corrosion.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.corrosion.response"
                @input="$v.component_quality.corrosion.response.$touch()"
              />
              <span
                
                v-if="$v.component_quality.corrosion.response.$error
                && !$v.component_quality.corrosion.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.corrosion.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.corrosion.remark"
                @input="$v.component_quality.corrosion.remark.$touch()"
              />
              <span
                
                v-if="$v.component_quality.corrosion.remark.$error
                && !$v.component_quality.corrosion.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Structural Defect</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.structural_defect.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.structural_defect.response"
                @input="$v.component_quality.structural_defect.response.$touch()"
              />
              <span 
                v-if="$v.component_quality.structural_defect.response.$error
                && !$v.component_quality.structural_defect.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.structural_defect.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.structural_defect.remark"
                @input="$v.component_quality.structural_defect.remark.$touch()"
              />
              <span 
                v-if="$v.component_quality.structural_defect.remark.$error
                && !$v.component_quality.structural_defect.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Distress</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.component_quality.distress.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.distress.response"
                @input="$v.component_quality.distress.response.$touch()"
              />
              <span
                
                v-if="$v.component_quality.distress.response.$error
                && !$v.component_quality.distress.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.component_quality.distress.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.distress.remark"
                @input="$v.component_quality.distress.remark.$touch()"
              />
              <span
                
                v-if="$v.component_quality.distress.remark.$error
                && !$v.component_quality.distress.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Deformation</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.deformation.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.deformation.response"
                @input="$v.component_quality.deformation.response.$touch()"
              />
              <span
                
                v-if="$v.component_quality.deformation.response.$error
                && !$v.component_quality.deformation.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.deformation.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.deformation.remark"
                @input="$v.component_quality.deformation.remark.$touch()"
              />
              <span
                
                v-if="$v.component_quality.deformation.remark.$error
                && !$v.component_quality.deformation.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Deterioration</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.deterioration.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.deterioration.response"
                @input="$v.component_quality.deterioration.response.$touch()"
              />
              <span
                v-if="$v.component_quality.deterioration.response.$error
                && !$v.component_quality.deterioration.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.component_quality.deterioration.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="component_quality.deterioration.remark"
                @input="$v.component_quality.deterioration.remark.$touch()"
              />
              <span
                
                v-if="$v.component_quality.deterioration.remark.$error
                && !$v.component_quality.deterioration.remark.required"
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
      component_quality: {
        physical_app: { response: '', remark: '' },
        texture: { response: '', remark: '' },
        strength: { response: '', remark: '' },
        crack: { response: '', remark: '' },
        dimension: { response: '', remark: '' },
        deflection: { response: '', remark: '' },
        spalling: { response: '', remark: '' },
        corrosion: { response: '', remark: '' },
        structural_defect: { response: '', remark: '' },
        distress: { response: '', remark: '' },
        deformation: { response: '', remark: '' },
        deterioration: { response: '', remark: '' },
      },
    };
  },
  validations: {
    component_quality: {
      physical_app: { response: { required }, remark: { required } },
      texture: { response: { required }, remark: { required } },
      strength: { response: { required }, remark: { required } },
      crack: { response: { required }, remark: { required } },
      dimension: { response: { required }, remark: { required } },
      deflection: { response: { required }, remark: { required } },
      spalling: { response: { required }, remark: { required } },
      corrosion: { response: { required }, remark: { required } },
      structural_defect: { response: { required }, remark: { required } },
      distress: { response: { required }, remark: { required } },
      deformation: { response: { required }, remark: { required } },
      deterioration: { response: { required }, remark: { required } },
      form: [
        'component_quality.physical_app.response',
        'component_quality.physical_app.remark',
        'component_quality.texture.response',
        'component_quality.texture.remark',
        'component_quality.strength.response',
        'component_quality.strength.remark',
        'component_quality.crack.response',
        'component_quality.crack.remark',
        'component_quality.dimension.response',
        'component_quality.dimension.remark',
        'component_quality.deflection.response',
        'component_quality.deflection.remark',
        'component_quality.spalling.response',
        'component_quality.spalling.remark',
        'component_quality.corrosion.response',
        'component_quality.corrosion.remark',
        'component_quality.structural_defect.response',
        'component_quality.structural_defect.remark',
        'component_quality.distress.response',
        'component_quality.distress.remark',
        'component_quality.deformation.response',
        'component_quality.deformation.remark',
        'component_quality.deterioration.response',
        'component_quality.deterioration.remark',
      ],
    },
  },
  methods: {
    validate() {
      this.$v.component_quality.form.$touch();
      const isValid = !this.$v.component_quality.form.$invalid;
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
