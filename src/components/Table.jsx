import React from "react";

function Table() {
  return (
    <>

<div className="krds-table-wrap">
<table className="tbl col data">
<caption>000에 대한 표로 제목1,제목2에 대한 내용으로 구성되어 있으며 제목1은 제목1-1,제목1-2,제목1-3으로 구성되어있다.</caption>
<colgroup>
<col style="width: 30%"/>
<col/>
</colgroup>
<thead>
<tr>
<th scope="col">제목1</th>
<th scope="col">제목2</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">제목1-1</th>
<td>내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. </td>
</tr>
<tr>
<th scope="row">제목1-2</th>
<td>내용이 들어갑니다.</td>
</tr>
<tr>
<th scope="row">제목1-3</th>
<td>내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. </td>
</tr>
</tbody>
</table>
</div>

    </>
  );
}

export default Table;
