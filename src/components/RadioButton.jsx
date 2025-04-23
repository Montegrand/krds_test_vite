import React from "react";

function RadioButton() {
  return (
    <>

<div className="fieldset">
<div className="form-group">
<div className="form-conts">
<div className="krds-check-area">
<div className="krds-form-check">
<input id="rdo_1" name="rdo_1" type="radio"/>
<label htmlFor="rdo_1">기본</label>
</div>
<div className="krds-form-check">
<input checked="" id="rdo_2" name="rdo_1" type="radio"/>
<label htmlFor="rdo_2">선택됨</label>
</div>
<div className="krds-form-check">
<input disabled="" id="rdo_3" name="rdo_1" type="radio"/>
<label htmlFor="rdo_3">비활성화</label>
</div>
<div className="krds-form-check">
<input checked="" disabled="" id="rdo_4" name="rdo_1a" type="radio"/>
<label htmlFor="rdo_4">선택된 비활성화</label>
</div>
</div>
</div>
</div>
<div className="form-group">
<div className="form-conts">
<div className="krds-check-area chk-column">
<div className="krds-form-check">
<input checked="" id="rdo_1-1" name="rdo_1" type="radio"/>
<label htmlFor="rdo_1-1">라디오버튼</label>
<div className="krds-form-check-cnt">
<p className="krds-form-check-p">
							부가적인 설명이 들어갑니다.
						</p>
</div>
</div>
<div className="krds-form-check">
<input id="rdo_1-2" name="rdo_1" type="radio"/>
<label htmlFor="rdo_1-2">라디오버튼</label>
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

export default RadioButton;
