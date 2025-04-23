import React from "react";

function CheckboxChip() {
  return (
    <>

<div className="krds-check-area">
<div className="krds-form-chip">
<input className="checkbox" id="chk_chip_1" type="checkbox"/>
<label className="krds-form-chip-outline" htmlFor="chk_chip_1">chip 상태 : default</label>
</div>
<div className="krds-form-chip">
<input checked="" className="checkbox" id="chk_chip_2" type="checkbox"/>
<label className="krds-form-chip-outline" htmlFor="chk_chip_2">chip 상태 : checked</label>
</div>
<div className="krds-form-chip">
<input className="checkbox" disabled="" id="chk_chip_3" type="checkbox"/>
<label className="krds-form-chip-outline" htmlFor="chk_chip_3">chip 상태 : disabled</label>
</div>
</div>

    </>
  );
}

export default CheckboxChip;
