import { Outlet, Link } from "react-router-dom";

export default function Menu1() {
  return (
    <div>
      <h2>Menu1 메인</h2>
      <ul>
        <li><Link to="sub1">Sub1</Link></li>
        <li><Link to="sub2">Sub2</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}
