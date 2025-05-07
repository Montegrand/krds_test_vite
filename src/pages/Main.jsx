import Accordion from "@/components/Accordion";
import Calendar from "@/components/Calendar";
import Tag from "@/components/Tag";
import { Link } from "react-router-dom";

export default function Main() {
  const Accordion1Cont = [
    {
        title: '아코디언1 타이틀 영역',
        content:'아코디언1 내용 영역'
    },
    {
        title: '아코디언2 타이틀 영역',
        content:'아코디언2 내용 영역'
    },
    {
        title: '아코디언3 타이틀 영역',
        content:'아코디언3 내용 영역'
    },
    {
        title: '아코디언4 타이틀 영역',
        content:'아코디언4 내용 영역'
    },
  ]
  return (
    <div>
      <div className="rowg1">
        <h2>메인 페이지</h2>
        <p className="txt" style={{ fontSize: "3rem", fontWeight: "500" }}>
          컴포넌트 추가 테스트 - 아코디언, 달력
        </p>
        <div style={{marginTop:'30px',}}>
          <Accordion items={Accordion1Cont}/>
        </div>
        <div style={{marginTop:'30px',}}>
          <CalendarRange />
        </div>
        <div style={{marginTop:'40px'}}>
            <Link to={"/Menu1"}>Menu1</Link>
            <br />
            <Link to={"/Menu2"}>Menu2</Link>
        </div>
      </div>
    </div>
  );
}
