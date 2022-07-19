import { Nav, Sidebar, SignupCard } from "../../Components";
import "./signup-page.css"
import "../../Utils/styles.css"

export default function SignupPage(){
    return(
        <>
        <div className="signup-page-wrapper">
          <Nav />
          <Sidebar />
          <SignupCard />
        </div>
      </>
    )
}