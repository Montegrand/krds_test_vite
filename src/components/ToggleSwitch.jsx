import React from "react";

function ToggleSwitch() {
  return (
    <>

<div className="krds-form-toggle-switch">
<input id="switch" type="checkbox"/>
<label htmlFor="switch"><span className="switch-toggle"><i></i></span>switch : default</label>
</div>
<div className="krds-form-toggle-switch">
<input checked="" id="switch_checked" type="checkbox"/>
<label htmlFor="switch_checked"><span className="switch-toggle"><i></i></span>switch : checked</label>
</div>
<div className="krds-form-toggle-switch">
<input disabled="" id="switch_disabled_1" type="checkbox"/>
<label htmlFor="switch_disabled_1"><span className="switch-toggle"><i></i></span>switch : disabled</label>
</div>

    </>
  );
}

export default ToggleSwitch;
