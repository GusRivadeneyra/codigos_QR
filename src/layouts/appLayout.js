import { Outlet, Link } from "react-router-dom";

export function AppLayout() {
  return (
    <div style={{ borderBottom: "solid 1px", paddingBottom: "1 rem"}}>
      <h1 style={{backgroundColor: "rgb(92, 107, 112)", width: "500px", marginLeft: "auto", marginRight: "auto"}}>Codigos QR!</h1>
      <p style={{alignItems: "center"}}><strong>En esta app se desarrollaran codigos QR</strong></p>
      <nav
      style={{ borderBottom: "solid 1px",
              paddingBottom: "1 rem",
              width: "200px",
              marginLeft: "auto",
              marginRight: "auto"
              }}
              >
              <Link to="/codes">Codigos</Link> |{" "}{" "}
      </nav>
      <Outlet />
    </div>
  );
}

