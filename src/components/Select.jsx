import React from "react";

function Select() {
  return (
    <>

<div className="fieldset">

<div className="form-group">
<div className="form-tit">
<label htmlFor="select_name">레이블</label>
</div>
<div className="form-conts">
<select className="krds-form-select" id="select_name" title="선택">
<option value="">항목1</option>
<option value="">항목2</option>
<option value="">항목3</option>
<option value="">항목4</option>
</select>
</div>
<p className="form-hint">도움말</p>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="select_name4">레이블</label>
</div>
<div className="form-conts">
<select className="krds-form-select completed" id="select_name4" title="선택">
<option selected="" value="">선택완료 상태</option>
<option value="">항목2</option>
<option value="">항목3</option>
<option value="">항목4</option>
</select>
</div>
<p className="form-hint">도움말</p>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="select_error">레이블</label>
</div>
<div className="form-conts">
<select className="krds-form-select is-error" id="select_error" title="선택">
<option value="">항목1</option>
<option value="">항목2</option>
<option value="">항목3</option>
<option value="">항목4</option>
</select>
</div>
<p className="form-hint-invalid">도움말</p>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="select_name3">레이블</label>
</div>
<div className="form-conts">
<select className="krds-form-select" disabled="" id="select_name3" title="선택">
<option value="">disabled</option>
<option value="">항목2</option>
<option value="">항목3</option>
<option value="">항목4</option>
</select>
</div>
<p className="form-hint">도움말</p>
</div>

</div>

    </>
  );
}

export default Select;
