import React from "react";

function TextInput() {
  return (
    <>

<div className="fieldset">

<div className="form-group">
<div className="form-tit">
<label htmlFor="consult_name">레이블</label>
</div>
<div className="form-conts">
<input className="krds-input" id="consult_name" placeholder="플레이스홀더" type="text"/>
</div>
<p className="form-hint">도움말</p>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="consult_name2">레이블</label>
</div>
<div className="form-conts">
<input className="krds-input" id="consult_name2" placeholder="플레이스홀더" readonly="" type="text" value="readonly"/>
</div>
<p className="form-hint">도움말</p>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="consult_name3">레이블</label>
</div>
<div className="form-conts">
<input className="krds-input" disabled="" id="consult_name3" placeholder="플레이스홀더" type="text" value="disabled"/>
</div>
<p className="form-hint">도움말</p>
</div>

</div>

    </>
  );
}

export default TextInput;
