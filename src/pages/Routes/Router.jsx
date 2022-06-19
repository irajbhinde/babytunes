import { Routes, Route } from "react-router-dom";
import {Landingpage, VideoListingPage} from "../index"

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={ <Landingpage />} />
            <Route path="/videolisting" element={<VideoListingPage />} />
        </Routes>
    )
}