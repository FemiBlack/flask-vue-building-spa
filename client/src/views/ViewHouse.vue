<template>
  <div class="container" id="product-section">
    <div class="row">
      <div class="col-md-6">
        <img
          :src="require(`@/assets/house-avatar.jpg`)"
          alt="Building Silhouette"
          style="width: 18rem"
          class="mb-2"
        />
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <h1>{{ House.building_no }}</h1>
          </div>
        </div>
        <!-- end row-->
        <div class="row">
          <div class="col-md-12">
            <span class="badge badge-primary">Address</span>
            <span class="monospaced"> {{ House.address }}</span>
          </div>
        </div>
        <!-- end row -->
        <div class="row">
          <div class="col-md-12">
            <p class="description">
              <span class="badge badge-primary">Creation date</span>
              <span class="monospaced"> {{ ConvertDateString }}</span
              ><br />
              <span class="badge badge-primary">Building Age</span>
              <span class="monospaced"> {{ House.building_age }}</span
              ><br />
              <span class="badge badge-primary">Last repair date</span>
              <span class="monospaced"> {{ newDateString }}</span
              ><br />
              <span class="badge badge-primary">Nature of Repair</span>
              <span class="monospaced"> {{ House.nature_of_repair }}</span
              ><br />
              <span class="badge badge-primary">Frequency of Repair</span>
              <span class="monospaced"> {{ House.frequency_of_repair }}</span
              ><br />
              <!-- <span class="badge badge-primary">Geometry</span>
            <span class="monospaced"> {{House.geometry}}</span><br/>
            <span class="badge badge-primary">Characteristics</span>
            <span class="monospaced"> {{House.characteristics}}</span><br/>
            <span class="badge badge-primary">Compliance</span>
            <span class="monospaced"> {{House.compliance}}</span><br/>
            <span class="badge badge-primary">Deviation</span>
            <span class="monospaced"> {{House.deviation}}</span> -->
            </p>
          </div>
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- end row -->
    <h3><span class="badge badge-primary">PARTICULARS</span></h3>
    <div class="row row-underline">
      <div class="col-md-6">
        <span class="deal-text">External Environment</span>
      </div>
      <div class="col-md-6">
        <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="col-md-12">
          <tbody>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Driving Rain :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.drv_rain.response }}</li>
                  <li>{{ House.external_env.drv_rain.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Drainage Issue :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.drainage_issue.response }}</li>
                  <li>{{ House.external_env.drainage_issue.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Water Logged :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.water_log.response }}</li>
                  <li>{{ House.external_env.water_log.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Dirty/Unkept Surroundings :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.unkempt.response }}</li>
                  <li>{{ House.external_env.unkempt.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification"
                  >Aggressive Chemicals/Pollution :</span
                >
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.pollution.response }}</li>
                  <li>{{ House.external_env.pollution.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Topography :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.topography.response }}</li>
                  <li>{{ House.external_env.topography.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Ultra-Violet Radiation :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.radiation.response }}</li>
                  <li>{{ House.external_env.radiation.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Extreme Temperature :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.extreme_temp.response }}</li>
                  <li>{{ House.external_env.extreme_temp.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Flood :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.flood.response }}</li>
                  <li>{{ House.external_env.flood.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Fire/ Heat Source :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.fire_source.response }}</li>
                  <li>{{ House.external_env.fire_source.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Traffic Issues :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.traffic_issue.response }}</li>
                  <li>{{ House.external_env.traffic_issue.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification"
                  >Threat from other buildings :</span
                >
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.building_threat.response }}</li>
                  <li>{{ House.external_env.building_threat.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Wind :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.wind.response }}</li>
                  <li>{{ House.external_env.wind.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Moisture :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.external_env.moisture.response }}</li>
                  <li>{{ House.external_env.moisture.remark }}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row row-underline">
      <div class="col-md-6">
        <span class="deal-text">Internal Condition</span>
      </div>
      <div class="col-md-6">
        <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="col-md-12">
          <tbody>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Moisture/ Humid Air :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.internal_cond.moisture.response }}</li>
                  <li>{{ House.internal_cond.moisture.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Excessive Heat :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.internal_cond.excess_heat.response }}</li>
                  <li>{{ House.internal_cond.excess_heat.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Ventilation :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.internal_cond.ventilation.response }}</li>
                  <li>{{ House.internal_cond.ventilation.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Dry Air :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.internal_cond.dry_air.response }}</li>
                  <li>{{ House.internal_cond.dry_air.remark }}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row row-underline">
      <div class="col-md-6">
        <span class="deal-text">General Well-Being of Building </span>
      </div>
      <div class="col-md-6">
        <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="col-md-12">
          <tbody>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Foundation Settlement :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.general_being.foundation_sett.response }}</li>
                  <li>{{ House.general_being.foundation_sett.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Deformation :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.general_being.deformation.response }}</li>
                  <li>{{ House.general_being.deformation.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Defects :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.general_being.defects.response }}</li>
                  <li>{{ House.general_being.defects.remark }}</li>
                </ul>
              </td>
            </tr>
            <tr class="row mt-10">
              <td class="col-md-4">
                <span class="p_specification">Cracks :</span>
              </td>
              <td class="col-md-8">
                <ul>
                  <li>{{ House.general_being.cracks.response }}</li>
                  <li>{{ House.general_being.cracks.remark }}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <section v-if="House.is_completed==='third' || House.is_completed==='completed'">
      <h3>VISUAL</h3>
      <div class="row row-underline">
        <div class="col-md-6">
          <span class="deal-text">Quality of Component </span>
        </div>
        <div class="col-md-6">
          <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="col-md-12">
            <tbody>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Physical appearance :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>
                      <li>{{ House.component_quality.physical_app.response }}</li>
                    <li>{{ House.component_quality.physical_app.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Texture :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.component_quality.texture.response }}</li>
                    <li>{{ House.component_quality.texture.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Strength :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.component_quality.strength.response }}</li>
                    <li>{{ House.component_quality.strength.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Crack :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.component_quality.crack.response }}</li>
                    <li>{{ House.component_quality.crack.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Dimension :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.component_quality.dimension.response }}</li>
                    <li>{{ House.component_quality.dimension.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Deflection :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.component_quality.deflection.response }}</li>
                    <li>{{ House.component_quality.deflection.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Spalling :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.component_quality.spalling.response }}</li>
                    <li>{{ House.component_quality.spalling.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Corrosion :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.component_quality.corrosion.response }}</li>
                    <li>{{ House.component_quality.corrosion.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Structural Defect :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.component_quality.structural_defect.response }}</li>
                    <li>{{ House.component_quality.structural_defect.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Distress :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.component_quality.distress.response }}</li>
                    <li>{{ House.component_quality.distress.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Deformation :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.component_quality.deformation.response }}</li>
                    <li>{{ House.component_quality.deformation.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Deterioration :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.component_quality.deterioration.response }}</li>
                    <li>{{ House.component_quality.deterioration.remark }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row row-underline">
        <div class="col-md-6"><span class="deal-text">Design Level </span></div>
        <div class="col-md-6">
          <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="col-md-12">
            <tbody>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Dimension of Elements :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.design_lvl.dimension.response }}</li>
                    <li>{{ House.design_lvl.dimension.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Spanning/ Heights :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.design_lvl.spanning.response }}</li>
                    <li>{{ House.design_lvl.spanning.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Arrangement(Structural)/ Configuration :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.design_lvl.configuration.response }}</li>
                    <li>{{ House.design_lvl.configuration.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Redundant Element :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.design_lvl.redundant_element.response }}</li>
                    <li>{{ House.design_lvl.redundant_element.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Loading :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.design_lvl.loading.response }}</li>
                    <li>{{ House.design_lvl.loading.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Structural Defect :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.design_lvl.structural_defect.response }}</li>
                    <li>{{ House.design_lvl.structural_defect.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Deformation :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.design_lvl.deformation.response }}</li>
                    <li>{{ House.design_lvl.deformation.remark }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row row-underline">
        <div class="col-md-6">
          <span class="deal-text">Work Experience Level </span>
        </div>
        <div class="col-md-6">
          <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="col-md-12">
            <tbody>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Dimension :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.work_xp_lvl.dimension.response }}</li>
                    <li>{{ House.work_xp_lvl.dimension.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Misalignment/ Eccentricity :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.work_xp_lvl.misalignment.response }}</li>
                    <li>{{ House.work_xp_lvl.misalignment.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Deflection/Cracking :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.work_xp_lvl.deflection.response }}</li>
                    <li>{{ House.work_xp_lvl.deflection.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Excessive Waviness :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.work_xp_lvl.excess_waviness.response }}</li>
                    <li>{{ House.work_xp_lvl.excess_waviness.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Corossion :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.work_xp_lvl.corossion.response }}</li>
                    <li>{{ House.work_xp_lvl.corossion.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Insufficient bar spacing :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.work_xp_lvl.bar_spacing.response }}</li>
                    <li>{{ House.work_xp_lvl.bar_spacing.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Deficient/ excessive cover :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.work_xp_lvl.deficient_cover.response }}</li>
                    <li>{{ House.work_xp_lvl.deficient_cover.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Reinforcement out of specification :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.work_xp_lvl.reinforcement_spec.response }}</li>
                    <li>{{ House.work_xp_lvl.reinforcement_spec.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Sequential construction :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.work_xp_lvl.seq_construction.response }}</li>
                    <li>{{ House.work_xp_lvl.seq_construction.remark }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row row-underline">
        <div class="col-md-6">
          <span class="deal-text">Indoor Environment </span>
        </div>
        <div class="col-md-6">
          <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="col-md-12">
            <tbody>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Moisture :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.indoor_env.moisture.response }}</li>
                    <li>{{ House.indoor_env.moisture.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Humidity :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.indoor_env.humidity.response }}</li>
                    <li>{{ House.indoor_env.humidity.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Vibration :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.indoor_env.vibration.response }}</li>
                    <li>{{ House.indoor_env.vibration.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Excessive Heat :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.indoor_env.excess_heat.response }}</li>
                    <li>{{ House.indoor_env.excess_heat.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Ventilation :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.indoor_env.ventilation.response }}</li>
                    <li>{{ House.indoor_env.ventilation.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Lighting :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.indoor_env.lighting.response }}</li>
                    <li>{{ House.indoor_env.lighting.remark }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row row-underline">
        <div class="col-md-6">
          <span class="deal-text">Outdoor Environment </span>
        </div>
        <div class="col-md-6">
          <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="col-md-12">
            <tbody>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Drainage Issue :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.outdoor_env.drainage_issue.response }}</li>
                    <li>{{ House.outdoor_env.drainage_issue.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Flood Issue :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.outdoor_env.flood_issue.response }}</li>
                    <li>{{ House.outdoor_env.flood_issue.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Fire/ Heat :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.outdoor_env.heat.response }}</li>
                    <li>{{ House.outdoor_env.heat.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Traffic Issue :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.outdoor_env.traffic_issue.response }}</li>
                    <li>{{ House.outdoor_env.traffic_issue.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Driving Rain :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.outdoor_env.drv_rain.response }}</li>
                    <li>{{ House.outdoor_env.drv_rain.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Dirty/Unkept :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.outdoor_env.unkempt.response }}</li>
                    <li>{{ House.outdoor_env.unkempt.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Aggressive Chemicals/polution :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.outdoor_env.pollution.response }}</li>
                    <li>{{ House.outdoor_env.pollution.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Extreme Temperature :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.outdoor_env.extreme_temp.response }}</li>
                    <li>{{ House.outdoor_env.extreme_temp.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Threat from other Buildings :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.outdoor_env.building_threat.response }}</li>
                    <li>{{ House.outdoor_env.building_threat.remark }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row row-underline">
        <div class="col-md-6">
          <span class="deal-text">In-Use Conditions </span>
        </div>
        <div class="col-md-6">
          <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="col-md-12">
            <tbody>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Addition/Alteration work :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.in_use_cond.addition.response }}</li>
                    <li>{{ House.in_use_cond.addition.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Overloading :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.in_use_cond.overloading.response }}</li>
                    <li>{{ House.in_use_cond.overloading.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Environment not properly kept :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.in_use_cond.not_kept.response }}</li>
                    <li>{{ House.in_use_cond.not_kept.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Vibration :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.in_use_cond.vibration.response }}</li>
                    <li>{{ House.in_use_cond.vibration.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Vandalism :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.in_use_cond.vandalism.response }}</li>
                    <li>{{ House.in_use_cond.vandalism.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Building used for residential purpose only :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.in_use_cond.residential_only.response }}</li>
                    <li>{{ House.in_use_cond.residential_only.remark }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row row-underline">
        <div class="col-md-6"><span class="deal-text">Maintenance </span></div>
        <div class="col-md-6">
          <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="col-md-12">
            <tbody>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Well maintained Internal Environment :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.maintenance.int_env.response }}</li>
                    <li>{{ House.maintenance.int_env.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Well maintained External Environment :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.maintenance.ext_env.response }}</li>
                    <li>{{ House.maintenance.ext_env.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Building/ Structural Elements well maintained :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.maintenance.struct_elements.response }}</li>
                    <li>{{ House.maintenance.struct_elements.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification">Maintenance issues :</span>
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.maintenance.maintenance_issue.response }}</li>
                    <li>{{ House.maintenance.maintenance_issue.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Maintained when problem/ damage occurs :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.maintenance.damage_maintenance.response }}</li>
                    <li>{{ House.maintenance.damage_maintenance.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Maintained at care takers disgression :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.maintenance.care_takers.response }}</li>
                    <li>{{ House.maintenance.care_takers.remark }}</li>
                  </ul>
                </td>
              </tr>
              <tr class="row mt-10">
                <td class="col-md-4">
                  <span class="p_specification"
                    >Maintenance after inspection with planned frequency :</span
                  >
                </td>
                <td class="col-md-8">
                  <ul>
                    <li>{{ House.maintenance.planned_frequency.response }}</li>
                    <li>{{ House.maintenance.planned_frequency.remark }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
  <!-- end container -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  title: 'SLDB - Product Listing',
  name: "ViewHouse",
  data() {
    return {
      message: "",
      showMessage: false,
      house: [],
    };
  },
  computed: {
    ...mapGetters({ House: "StateHouse" }),
    ConvertDateString: function () {
      // convert unixtime seconds to milliseconds and create JS date
      var date = new Date(
        this.$store.state.auth.house.date.$date
      ).toLocaleDateString();
      return date;
    },
    newDateString: function () {
      // convert unixtime seconds to milliseconds and create JS date
      var date = new Date(
        this.$store.state.auth.house.last_repair_date.$date
      ).toLocaleDateString();
      return date;
    },
  },
  methods: {
    ...mapActions(["GetHouse"]),
  },
  created() {
    this.GetHouse(this.$route.params.id);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap");
.row-underline {
  content: "";
  display: block;
  border-bottom: 2px solid #3798db;
  margin: 0px 0px;
  margin-bottom: 20px;
  margin-top: 15px;
}
.p_specification {
  font-weight: 500;
  margin-left: 22px;
}
.monospaced {
  font-family: "Ubuntu Mono", monospace;
}
</style>