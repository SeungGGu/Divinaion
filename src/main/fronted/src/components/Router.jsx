import React from "react";
import {Routes, Route} from "react-router-dom";
import {SajuProvider} from "../context/SajuContext";
import SajuCalculator from "./SajuCalculator";
import SajuIntro1 from "./IntroPage/SajuIntro1";
import SajuIntro2 from "./IntroPage/SajuIntro2";
import SajuIntro3 from "./IntroPage/SajuIntro3";
import SajuIntro4 from "./IntroPage/SajuIntro4";
import SajuReport1 from "./ReportPage/SajuReport1";
import SajuReport2 from "./ReportPage/SajuReport2";
import SajuReport3 from "./ReportPage/SajuReport3";
import SajuReport4 from "./ReportPage/SajuReport4";
import SajuReport5 from "./ReportPage/SajuReport5";
import SajuReport6 from "./ReportPage/SajuReport6";

const Router = () => {
    return (
        <SajuProvider>
            <Routes>
                <Route exact path="/" element={<SajuCalculator/>}/>
                <Route path="/Intro1" element={<SajuIntro1/>}/>
                <Route path="/Intro2" element={<SajuIntro2/>}/>
                <Route path="/Intro3" element={<SajuIntro3/>}/>
                <Route path="/Intro4" element={<SajuIntro4/>}/>

                <Route path="/Report1" element={<SajuReport1/>}/>
                <Route path="/Report2" element={<SajuReport2/>}/>
                <Route path="/Report3" element={<SajuReport3/>}/>
                <Route path="/Report4" element={<SajuReport4/>}/>
                <Route path="/Report5" element={<SajuReport5/>}/>
                <Route path="/Report6" element={<SajuReport6/>}/>

                <Route path='/*' element={ //*이란? 지정된 페이지 이외의 모든것들을 에러처리
                    <>
                        <div className='error-page'>oops!! 404 error!</div>
                        <img src={'https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png'}
                             alt="404 error page"
                             width={"100%"}
                             height={"100%"}></img>
                    </>}/>
            </Routes>
        </SajuProvider>
    );
};

export default Router;
