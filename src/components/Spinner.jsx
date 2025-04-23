import React from "react";

function Spinner() {
  return (
    <>


<div className="form-group">
<div className="form-tit">
<label htmlFor="consult_name">Label</label>
</div>
<div className="form-conts">
<div className="form-spinner">
<input className="krds-input" id="consult_name" placeholder="placeholder" type="text"/>
<div className="krds-spinner" role="status">
<span className="sr-only">로딩 중</span>
</div>
</div>
</div>
</div>

<br/>
<br/>

<div className="krds-spinner" role="status">
<span className="sr-only">로딩 중</span>
	Loading data..
</div>


    </>
  );
}

export default Spinner;
