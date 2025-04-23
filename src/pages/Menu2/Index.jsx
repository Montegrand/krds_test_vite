import { Outlet, Link } from "react-router-dom";

export default function Menu2() {
  return (
    <div>
      <h2>Menu2 메인</h2>
      <ul>
        <li><Link to="sub1">Sub1</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}
