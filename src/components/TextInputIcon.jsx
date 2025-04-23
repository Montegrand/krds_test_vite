import React from "react";

function TextInputIcon() {
  return (
    <>

<div className="fieldset">

<div className="form-group">
<div className="form-tit">
<label htmlFor="login_pw">레이블</label>
</div>
<div className="form-conts btn-ico-wrap">
<input className="krds-input" id="login_pw" placeholder="8-12자의 영문자, 숫자, 특수문자 조합" type="password" value="1234567890"/>
<button className="krds-btn medium icon" type="button">
<span className="sr-only">입력한 비밀번호 보기</span>
<i className="svg-icon ico-pw-visible"></i>
</button>
</div>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="login_pw2">레이블</label>
</div>
<div className="form-conts btn-ico-wrap">
<input className="krds-input" id="login_pw2" placeholder="8-12자의 영문자, 숫자, 특수문자 조합" type="text" value="1234567890"/>
<button className="krds-btn medium icon" type="button">
<span className="sr-only">입력한 비밀번호 가리기</span>
<i className="svg-icon ico-pw-visible-on"></i>
</button>
</div>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="form_delete">레이블</label>
</div>
<div className="form-conts btn-ico-wrap" data-delete="true">
<input className="krds-input" id="form_delete" placeholder="내용을 입력하세요" type="text"/>
<button className="krds-btn medium icon pure btn-delete-input" type="button">
<span className="sr-only">내용 삭제</span>
<i className="svg-icon ico-delete-fill"></i>
</button>
</div>
</div>


<div className="form-group">
<div className="form-tit">
<label htmlFor="form_btn_multiple">레이블</label>
</div>
<div className="form-conts btn-ico-wrap" data-delete="true">
<input className="krds-input" id="form_btn_multiple" placeholder="8-12자의 영문자, 숫자, 특수문자 조합" type="password" value="1234567890"/>
<div className="btn-group">
<button className="krds-btn medium icon pure btn-delete-input" type="button">
<span className="sr-only">내용 삭제</span>
<i className="svg-icon ico-delete-fill"></i>
</button>
<button className="krds-btn medium icon" type="button">
<span className="sr-only">입력한 비밀번호 보기</span>
<i className="svg-icon ico-pw-visible"></i>
</button>
</div>
</div>
</div>

</div>

    </>
  );
}

export default TextInputIcon;
