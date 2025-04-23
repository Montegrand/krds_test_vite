import React from "react";

function FileUpload() {
  return (
    <>

<div className="krds-file-upload line">

<div className="file-head">
<h3 className="tit">타이틀영역</h3>
<div>
<p>컨텐츠 영역</p>
</div>
</div>


<div className="file-upload">
<p className="txt">첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</p>
<div className="file-upload-btn-wrap">
<input hidden="" id="fileu-upload" name="myFile" type="file"/>
<label htmlFor="fileu-upload">
<button className="krds-btn medium" type="button"><i className="svg-icon ico-upload"></i>파일선택</button>
</label>
</div>
</div>


<div className="file-list">
<div className="total"><span className="current">3개</span> / 10개</div>
<ul className="upload-list">
<li>
<div className="file-info">
<div className="file-name">위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB] </div>
<div className="btn-wrap">
<span className="krds-spinner" role="status">
<span className="sr-only">업로드 중</span>
</span>
</div>
</div>
</li>
<li>
<div className="file-info">
<div className="file-name">위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB] </div>
<div className="btn-wrap">
<span className="ico-invalid complete">
<em className="sr-only">업로드 완료</em>
</span>
</div>
</div>
</li>
<li>
<div className="file-info">
<div className="file-name">위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB] </div>
<div className="btn-wrap">
<button className="krds-btn medium text" type="button">삭제 <i className="svg-icon ico-delete-fill"></i></button>
</div>
</div>
</li>
<li className="is-error">
<div className="file-info">
<div className="file-name">전입재등록신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호] [hwp, 17KB]</div>
<div className="btn-wrap">
<button className="krds-btn medium text" type="button">삭제 <i className="svg-icon ico-delete-fill"></i></button>
</div>
</div>
<p className="file-hint-invalid">
					등록 가능한 파일 용량을 초과하였습니다.<br/>
					20MB 미만의 파일만 등록할 수 있습니다.
				</p>
</li>
<li>
<div className="file-info m-column">
<div className="file-name">위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB] </div>
<div className="btn-wrap">
<button className="krds-btn medium text" type="button">다운로드 <i className="svg-icon ico-down"></i></button>
<button className="krds-btn medium text" type="button">바로보기 <i className="svg-icon ico-angle right"></i></button>
</div>
</div>
</li>
</ul>
<div className="upload-delete-btn">
<button className="krds-btn xsmall tertiary" type="button">전체 파일 삭제<i className="svg-icon ico-angle right"></i></button>
</div>
</div>

</div>

    </>
  );
}

export default FileUpload;
