import { Routes, Route } from "react-router-dom";
import Landingpage from "../Landing Page/Landingpage";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={ <Landingpage />} />
        </Routes>
    )
}