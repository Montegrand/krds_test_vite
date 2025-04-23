import React from "react";

function TextInputState() {
  return (
    <>

<div className="fieldset">

<div className="form-group">
<div className="form-tit">
<label htmlFor="consult_name21">레이블</label>
</div>
<div className="form-conts is-error">
<input className="krds-input" id="consult_name21" placeholder="플레이스홀더" type="text" value="에러"/>
</div>
<p className="form-hint-invalid">에러 메시지</p>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="consult_name22">레이블</label>
</div>
<div className="form-conts is-success">
<input className="krds-input" id="consult_name22" placeholder="플레이스홀더" type="text" value="성공"/>
</div>
<p className="form-hint-success">성공 메시지</p>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="consult_name23">레이블</label>
</div>
<div className="form-conts is-information">
<input className="krds-input" id="consult_name23" placeholder="플레이스홀더" type="text" value="정보"/>
</div>
<p className="form-hint-information">정보 메시지</p>
</div>

</div>

    </>
  );
}

export default TextInputState;
