import React from "react";

function Textarea() {
  return (
    <>


<div className="form-group">
<div className="form-tit">
<label htmlFor="textarea">레이블</label>
</div>
<div className="form-conts">
<div className="textarea-wrap">
<textarea className="krds-input" id="textarea" placeholder="플레이스홀더"></textarea>
<p className="textarea-count">
<span className="count-now">0</span><span className="count-total">/100</span>
</p>
</div>
</div>
</div>


    </>
  );
}

export default Textarea;
