import { Routes, Route } from "react-router-dom";
import {Landingpage, VideoListingPage, LoginPage} from "../index"
import SignupPage from "../Signup Page/SignupPage";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={ <Landingpage />} />
            <Route path="/videolisting" element={<VideoListingPage />} />
            <Route path="/login" element={<LoginPage /> } />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    )
}