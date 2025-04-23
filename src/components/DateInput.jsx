import React from "react";

function DateInput() {
  return (
    <>


<div className="form-group">
<div className="form-tit">
<label htmlFor="cal">레이블</label>
</div>
<div className="form-conts">
<div className="form-conts calendar-conts">
<div className="calendar-input">
<input className="krds-input datepicker cal" id="cal" placeholder="YYYY.MM.DD" type="number"/>
<button className="krds-btn medium icon form-btn-datepicker" type="button">
<span className="sr-only">달력 열기</span>
<i className="svg-icon ico-calendar"></i>
</button>
</div>
<div className="krds-calendar-area">
<div aria-label="달력" className="calendar-wrap bottom">
<div className="calendar-head">
<button className="btn-cal-move prev" type="button"><span className="sr-only">이전 달</span></button>
<div className="calendar-switch-wrap">
<div className="calendar-drop-down">
<button aria-label="연도 선택" className="btn-cal-switch year" type="button">2024년</button>
<div className="calendar-select calendar-year-wrap">
<ul className="sel year">
<li>
<button type="button">2001년</button>
</li>
<li>
<button className="active" type="button">2002년</button>
</li>
<li>
<button disabled="" type="button">2003년</button>
</li>
<li>
<button type="button">2004년</button>
</li>
<li>
<button type="button">2005년</button>
</li>
<li>
<button type="button">2006년</button>
</li>
<li>
<button type="button">2007년</button>
</li>
<li>
<button type="button">2008년</button>
</li>
<li>
<button type="button">2009년</button>
</li>
<li>
<button type="button">2010년</button>
</li>
<li>
<button type="button">2011년</button>
</li>
<li>
<button type="button">2012년</button>
</li>
<li>
<button type="button">2013년</button>
</li>
<li>
<button type="button">2014년</button>
</li>
<li>
<button type="button">2015년</button>
</li>
<li>
<button type="button">2016년</button>
</li>
<li>
<button type="button">2017년</button>
</li>
<li>
<button type="button">2018년</button>
</li>
<li>
<button type="button">2019년</button>
</li>
<li>
<button type="button">2020년</button>
</li>
<li>
<button type="button">2021년</button>
</li>
<li>
<button type="button">2022년</button>
</li>
<li>
<button type="button">2023년</button>
</li>
<li>
<button type="button">2024년</button>
</li>
</ul>
</div>
</div>
<div className="calendar-drop-down">
<button aria-label="월 선택" className="btn-cal-switch month" type="button">12월</button>
<div className="calendar-select calendar-mon-wrap">
<ul className="sel month">
<li>
<button disabled="" type="button">01월</button>
</li>
<li>
<button type="button">02월</button>
</li>
<li>
<button type="button">03월</button>
</li>
<li>
<button type="button">04월</button>
</li>
<li>
<button type="button">05월</button>
</li>
<li>
<button type="button">06월</button>
</li>
<li>
<button type="button">07월</button>
</li>
<li>
<button type="button">08월</button>
</li>
<li>
<button type="button">09월</button>
</li>
<li>
<button type="button">10월</button>
</li>
<li>
<button type="button">11월</button>
</li>
<li>
<button className="active" type="button">12월</button>
</li>
</ul>
</div>
</div>
</div>
<button className="btn-cal-move next" type="button"><span className="sr-only">다음 달</span></button>
</div>
<div className="calendar-body">
<div className="calendar-table-wrap">
<table className="calendar-tbl">
<caption>
									2024년 12월
								</caption>
<thead>
<tr>
<th>일</th>
<th>월</th>
<th>화</th>
<th>수</th>
<th>목</th>
<th>금</th>
<th>토</th>
</tr>
</thead>
<tbody>
<tr>
<td className="old day-off">
<button className="btn-set-date" type="button"><span>26</span></button>
</td>
<td className="old">
<button className="btn-set-date" type="button"><span>27</span></button>
</td>
<td className="old">
<button className="btn-set-date" type="button"><span>28</span></button>
</td>
<td className="old">
<button className="btn-set-date" type="button"><span>29</span></button>
</td>
<td className="old">
<button className="btn-set-date" type="button"><span>30</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>1</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>2</span></button>
</td>
</tr>
<tr>
<td className="day-off">
<button className="btn-set-date" type="button"><span>3</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>4</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>5</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>6</span></button>
</td>
<td className="period start">
<button className="btn-set-date" type="button"><span>7</span></button>
</td>
<td className="period">
<button className="btn-set-date" type="button"><span>8</span></button>
</td>
<td className="period">
<button className="btn-set-date" type="button"><span>9</span></button>
</td>
</tr>
<tr>
<td className="period day-off">
<button className="btn-set-date" type="button"><span>10</span></button>
</td>
<td className="period">
<button className="btn-set-date" type="button"><span>11</span></button>
</td>
<td className="period">
<button className="btn-set-date" type="button"><span>12</span></button>
</td>
<td className="period">
<button className="btn-set-date" type="button"><span>13</span></button>
</td>
<td className="period">
<button className="btn-set-date" type="button"><span>14</span></button>
</td>
<td className="period">
<button className="btn-set-date" type="button"><span>15</span></button>
</td>
<td className="period end">
<button className="btn-set-date" type="button"><span>16</span></button>
</td>
</tr>
<tr>
<td className="day-off">
<button className="btn-set-date" type="button"><span>17</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>18</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>19</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>20</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>21</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>22</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>23</span></button>
</td>
</tr>
<tr>
<td className="day-off">
<button className="btn-set-date" type="button"><span>24</span></button>
</td>
<td className="today">
<button className="btn-set-date" type="button"><span>25</span></button>
</td>
<td className="day-event">
<button className="btn-set-date" type="button"><span>26</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>27</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>28</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>29</span></button>
</td>
<td>
<button className="btn-set-date" type="button"><span>30</span></button>
</td>
</tr>
<tr>
<td className="day-off">
<button className="btn-set-date" type="button"><span>31</span></button>
</td>
<td className="new">
<button className="btn-set-date" type="button"><span>1</span></button>
</td>
<td className="new">
<button className="btn-set-date" type="button"><span>2</span></button>
</td>
<td className="new">
<button className="btn-set-date" type="button"><span>3</span></button>
</td>
<td className="new">
<button className="btn-set-date" type="button"><span>4</span></button>
</td>
<td className="new">
<button className="btn-set-date" type="button"><span>5</span></button>
</td>
<td className="new">
<button className="btn-set-date" type="button"><span>6</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="calendar-footer">
<div className="calendar-btn-wrap">
<button className="krds-btn small text" id="get-today" type="button">오늘</button>
<button className="krds-btn small tertiary" type="button">취소</button>
<button className="krds-btn small primary" type="button">확인</button>
</div>
</div>
</div>
</div>
</div>
</div>
<p className="form-hint">도움말</p>
</div>


    </>
  );
}

export default DateInput;
