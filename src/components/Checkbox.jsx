import React from "react";

function Checkbox() {
  return (
    <>

<div className="fieldset">
<div className="form-group">
<div className="form-conts">
<div className="krds-check-area">
<div className="krds-form-check">
<input id="chk_1" name="chk_1" type="checkbox"/>
<label htmlFor="chk_1">기본</label>
</div>
<div className="krds-form-check">
<input checked="" id="chk_2" name="chk_1" type="checkbox"/>
<label htmlFor="chk_2">선택됨</label>
</div>
<div className="krds-form-check">
<input disabled="" id="chk_3" name="chk_1" type="checkbox"/>
<label htmlFor="chk_3">비활성화</label>
</div>
<div className="krds-form-check">
<input checked="" disabled="" id="chk_4" name="chk_1" type="checkbox"/>
<label htmlFor="chk_4">선택된 비활성화</label>
</div>
</div>
</div>
</div>
<div className="form-group">
<div className="form-conts">
<div className="krds-check-area chk-column">
<div className="krds-form-check">
<input checked="" id="chk_additional_1" type="checkbox"/>
<label htmlFor="chk_additional_1">체크박스</label>
<div className="krds-form-check-cnt">
<p className="krds-form-check-p">
							부가적인 설명이 들어갑니다.
						</p>
</div>
</div>
<div className="krds-form-check">
<input id="chk_additional_2" type="checkbox"/>
<label htmlFor="chk_additional_2">체크박스</label>
<div className="krds-form-check-cnt">
<p className="krds-form-check-p">
							부가적인 설명이 들어갑니다.
						</p>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}

export default Checkbox;
