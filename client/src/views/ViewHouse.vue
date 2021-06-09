<template>
<div class="container" id="product-section">
  <div class="row">
   <div class="col-md-6">
    <img
    :src="require(`@/assets/house-avatar.jpg`)"
    alt="Building Silhouette"
    style="width: 18rem;"
    class="mb-2"
    />
   </div>
   <div class="col-md-6">
    <div class="row">
        <div class="col-md-12">
            <h1>{{House.building_no}}</h1>
        </div>
    </div><!-- end row-->
    <div class="row">
        <div class="col-md-12">
            <!-- <span class="label label-primary">Vintage</span> -->
            <span class="monospaced">{{House.address}}</span>
        </div>
    </div><!-- end row -->
    <div class="row">
        <div class="col-md-12">
            <p class="description">Building No./ Code
            Date/Type of Construction (If Known)
            Age of Building
            Date of last Repair/Intervention 
            Nature of Repair/Intervention
            Frequency of Repair/Interventions
            Geometry of the Building
            Special Characteristics
            Compliance with Intended Use
            Deviation from Intended Use/Misuse
            </p>
        </div>
    </div><!-- end row -->
   </div>
  </div><!-- end row -->
  <h3>PARTICULARS</h3>
  <div class="row row-underline">
                <div class="col-md-6"> <span class=" deal-text">External Environment</span> </div>
                <div class="col-md-6"> <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a> </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table class="col-md-12">
                        <tbody>
                            <tr class="row mt-10">


                                <td class="col-md-4"><span class="p_specification">Driving Rain :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Drainage Issue :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li> 14-dh0107TU </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Water Logged :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>7AL87PA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Dirty/Unkept Surroundings :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Aggressive Chemicals/Pollution :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Processing & Multitasking</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Topography :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Intel</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Ultra-Violet Radiation :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Intel</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Extreme Temperature :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Intel</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Flood :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Intel</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Fire/ Heat Source :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Intel</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Traffic Issues :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Intel</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Threat from other buildings :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Intel</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Wind :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Intel</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Moisture :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Intel</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row row-underline">
                <div class="col-md-6"> <span class=" deal-text">Internal Condition</span> </div>
                <div class="col-md-6"> <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a> </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table class="col-md-12">
                        <tbody>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Moisture/ Humid Air :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Excessive Heat :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li> 14-dh0107TU </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Ventilation :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>7AL87PA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Dry Air :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row row-underline">
                <div class="col-md-6"> <span class=" deal-text">General Well-Being of Building </span> </div>
                <div class="col-md-6"> <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a> </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table class="col-md-12">
                        <tbody>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Foundation Settlement :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Deformation :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li> 14-dh0107TU </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Defects :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>7AL87PA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Cracks :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h3>VISUAL</h3>
            <div class="row row-underline">
                <div class="col-md-6"> <span class=" deal-text">Quality of Component </span> </div>
                <div class="col-md-6"> <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a> </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table class="col-md-12">
                        <tbody>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Physical appearance :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Texture :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li> 14-dh0107TU </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Strength :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>7AL87PA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Crack :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Dimension :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Deflection :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Spalling :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Corrosion :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Structural Defect :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Distress :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Deformation :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Deterioration :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row row-underline">
                <div class="col-md-6"> <span class=" deal-text">Design Level </span> </div>
                <div class="col-md-6"> <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a> </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table class="col-md-12">
                        <tbody>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Dimension of Elements :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Spanning/ Heights :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li> 14-dh0107TU </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Arrangement(Structural)/ Configuration :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>7AL87PA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Redundant Element :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Loading :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Structural Defect :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Deformation :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row row-underline">
                <div class="col-md-6"> <span class=" deal-text">Work Experience Level </span> </div>
                <div class="col-md-6"> <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a> </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table class="col-md-12">
                        <tbody>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Dimension :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Misalignment/ Eccentricity :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li> 14-dh0107TU </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Deflection/Cracking :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>7AL87PA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Excessive Waviness :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Corossion :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Insufficient bar spacing :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Deficient/ excessive cover :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Reinforcement out of specification :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Sequential construction :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row row-underline">
                <div class="col-md-6"> <span class=" deal-text">Indoor Environment </span> </div>
                <div class="col-md-6"> <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a> </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table class="col-md-12">
                        <tbody>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Moisture :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Humidity :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li> 14-dh0107TU </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Vibration :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>7AL87PA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Excessive Heat :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Ventilation :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Lighting :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row row-underline">
                <div class="col-md-6"> <span class=" deal-text">Outdoor Environment </span> </div>
                <div class="col-md-6"> <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a> </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table class="col-md-12">
                        <tbody>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Drainage Issue :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Flood Issue :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li> 14-dh0107TU </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Fire/ Heat :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>7AL87PA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Traffic Issue :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Driving Rain :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Dirty/Unkept :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Aggressive Chemicals/polution :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Extreme Temperature :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Threat from other Buildings :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row row-underline">
                <div class="col-md-6"> <span class=" deal-text">In-Use Conditions </span> </div>
                <div class="col-md-6"> <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a> </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table class="col-md-12">
                        <tbody>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Addition/Alteration work :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Overloading :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li> 14-dh0107TU </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Environment not properly kept :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>7AL87PA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Vibration :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Building used for residential purpose only :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row row-underline">
                <div class="col-md-6"> <span class=" deal-text">Maintenance </span> </div>
                <div class="col-md-6"> <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a> </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table class="col-md-12">
                        <tbody>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Well maintained Internal Environment :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Well maintained External Environment :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li> 14-dh0107TU </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Building/ Structural Elements well maintained :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>7AL87PA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Maintenance issues :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Maintained when problem/ damage occurs :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Maintained at care takers disgression :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="row mt-10">
                                <td class="col-md-4"><span class="p_specification">Maintenance after inspection with planned frequency :</span> </td>
                                <td class="col-md-8">
                                    <ul>
                                        <li>Black</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
 </div><!-- end container -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ViewHouse',
  data() {
    return {
      message: '',
      showMessage: false,
      house: [],
    };
  },
  computed: {
    ...mapGetters({ House: 'StateHouse' }),
  },
  methods: {
    ...mapActions(['GetHouse']),
  },
  created() {
    this.GetHouse(this.$route.params.id);
  },
};
</script>

<style>
.row-underline {
    content: "";
    display: block;
    border-bottom: 2px solid #3798db;
    margin: 0px 0px;
    margin-bottom: 20px;
    margin-top: 15px
}
.p_specification {
    font-weight: 500;
    margin-left: 22px
}
</style>