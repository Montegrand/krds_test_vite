import React from "react";

function RadioChip() {
  return (
    <>

<div className="krds-check-area">
<div className="krds-form-chip">
<input className="radio" id="rdo_chip_1" name="rdo_chip" type="radio"/>
<label className="krds-form-chip-outline" htmlFor="rdo_chip_1">chip 상태 : default </label>
</div>
<div className="krds-form-chip">
<input checked="" className="radio" id="rdo_chip_2" name="rdo_chip" type="radio"/>
<label className="krds-form-chip-outline" htmlFor="rdo_chip_2">chip 상태 : checked </label>
</div>
<div className="krds-form-chip">
<input className="radio" disabled="" id="rdo_chip_3" name="rdo_chip" type="radio"/>
<label className="krds-form-chip-outline" htmlFor="rdo_chip_3">chip 상태 :disabled </label>
</div>
</div>

    </>
  );
}

export default RadioChip;
