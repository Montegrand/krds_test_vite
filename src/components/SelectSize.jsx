import React from "react";

function SelectSize() {
  return (
    <>

<div className="fieldset">

<div className="form-group">
<div className="form-tit">
<label htmlFor="select_size_small">레이블</label>
</div>
<div className="form-conts">
<select className="krds-form-select large" id="select_size_small" title="선택">
<option selected="" value="">large</option>
<option value="">medium</option>
<option value="">small</option>
</select>
</div>
<p className="form-hint">도움말</p>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="select_size_medium">레이블</label>
</div>
<div className="form-conts">
<select className="krds-form-select medium" id="select_size_medium" title="선택">
<option value="">large</option>
<option selected="" value="">medium</option>
<option value="">small</option>
</select>
</div>
<p className="form-hint">도움말</p>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="select_size_large">레이블</label>
</div>
<div className="form-conts">
<select className="krds-form-select small" id="select_size_large" title="선택">
<option value="">large</option>
<option value="">medium</option>
<option selected="" value="">small</option>
</select>
</div>
<p className="form-hint">도움말</p>
</div>

</div>

    </>
  );
}

export default SelectSize;
