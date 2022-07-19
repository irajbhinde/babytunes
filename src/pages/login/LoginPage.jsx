import { LoginCard, Nav, Sidebar } from "../../Components";
import "./login-page.css";
import "../../Utils/styles.css"

export default function LoginPage() {
  return (
    <>
      <div className="login-page-wrapper">
        <Nav />
        <Sidebar />
        <LoginCard />
      </div>
    </>
  );
}
