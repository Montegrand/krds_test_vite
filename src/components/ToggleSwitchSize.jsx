import React from "react";

function ToggleSwitchSize() {
  return (
    <>

<div className="krds-form-toggle-switch large">
<input id="switch_lg_1" type="checkbox"/>
<label htmlFor="switch_lg_1"><span className="switch-toggle"><i></i></span>switch size : large</label>
</div>
<div className="krds-form-toggle-switch medium">
<input id="switch_lg_md" type="checkbox"/>
<label htmlFor="switch_lg_md"><span className="switch-toggle"><i></i></span>switch size : medium</label>
</div>

    </>
  );
}

export default ToggleSwitchSize;
