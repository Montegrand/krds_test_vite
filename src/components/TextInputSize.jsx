import React from "react";

function TextInputSize() {
  return (
    <>

<div className="fieldset">

<div className="form-group">
<div className="form-tit">
<label htmlFor="consult_name31">레이블</label>
</div>
<div className="form-conts">
<input className="krds-input small" id="consult_name31" placeholder="플레이스홀더" type="text"/>
</div>
<p className="form-hint">도움말</p>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="consult_name32">레이블</label>
</div>
<div className="form-conts">
<input className="krds-input medium" id="consult_name32" placeholder="플레이스홀더" type="text"/>
</div>
<p className="form-hint">도움말</p>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="consult_name33">레이블</label>
</div>
<div className="form-conts">
<input className="krds-input large" id="consult_name33" placeholder="플레이스홀더" type="text"/>
</div>
<p className="form-hint">도움말</p>
</div>

</div>

    </>
  );
}

export default TextInputSize;
