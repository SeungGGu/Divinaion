import React from "react";
import {Routes, Route} from "react-router-dom";
import {SajuProvider} from "./context/SajuContext";
import SajuCalculator from "./IntroPage/components/SajuCalculator";
import SajuIntro1 from "./IntroPage/components/SajuIntro1";
import SajuIntro3 from "./IntroPage/components/SajuIntro3";
import SajuIntro2 from "./IntroPage/components/SajuIntro2";
import SajuIntro4 from "./IntroPage/components/SajuIntro4";
import SajuReport1 from "./Chapter1/components/SajuReport1";
import SajuReport2 from "./Chapter1/components/SajuReport2";
import SajuReport3 from "./Chapter1/components/SajuReport3";
import SajuReport4 from "./Chapter1/components/SajuReport4";
import SajuReport5 from "./Chapter1/components/SajuReport5";
import SajuReport6 from "./Chapter2/components/SajuReport6";
import SajuReport8 from "./Chapter2/components/SajuReport8";
import SajuReport7 from "./Chapter2/components/SajuReport7";
import SajuReport9 from "./Chapter3/components/SajuReport9";
import SajuReport10 from "./Chapter3/components/SajuReport10";
import SajuReport11 from "./Chapter3/components/SajuReport11";
import SajuReport12 from "./Chapter3/components/SajuReport12";
import SajuReport13 from "./Chapter4/components/SajuReport13";
import SajuReport14 from "./Chapter4/components/SajuReport14";
import SajuReport15 from "./Chapter4/components/SajuReport15";
import SajuReport16 from "./Chapter4/components/SajuReport16";
import SajuReport17 from "./Chapter5/components/SajuReport17";
import SajuReport18 from "./Chapter5/components/SajuReport18";
import SajuReport19 from "./Chapter5/components/SajuReport19";
import SajuReport20 from "./Chapter6/components/SajuReport20";
import SajuReport21 from "./Chapter6/components/SajuReport21";
import SajuReport22 from "./Chapter6/components/SajuReport22";
import SajuReport23 from "./Chapter6/components/SajuReport23";
import SajuReport24 from "./Chapter7/components/SajuReport24";
import SajuReport25 from "./Chapter7/components/SajuReport25";
import SajuReport26 from "./Chapter7/components/SajuReport26";
import SajuReport27 from "./Chapter7/components/SajuReport27";
import SajuReport28 from "./Chapter8/components/SajuReport28";
import SajuReport29 from "./Chapter8/components/SajuReport29";
import SajuReport30 from "./Chapter8/components/SajuReport30";
import SajuReport31 from "./Chapter8/components/SajuReport31";
import SajuReport32 from "./Chapter8/components/SajuReport32";
import SajuReport33 from "./Chapter9/components/SajuReport33";
import SajuReport34 from "./Chapter9/components/SajuReport34";
import SajuReport35 from "./Chapter9/components/SajuReport35";
import SajuReport36 from "./Chapter10/components/SajuReport36";
import SajuReport37 from "./Chapter10/components/SajuReport37";
import SajuReport38 from "./Chapter10/components/SajuReport38";
import SajuReport39 from "./Chapter11/components/SajuReport39";
import SajuReport40 from "./Chapter11/components/SajuReport40";

const Router = () => {
    return (
        <SajuProvider>
            <Routes>
                {/*인트로*/}
                <Route exact path="/" element={<SajuCalculator/>}/>
                <Route path="/Intro1" element={<SajuIntro1/>}/>
                <Route path="/Intro2" element={<SajuIntro2/>}/>
                <Route path="/Intro3" element={<SajuIntro3/>}/>
                <Route path="/Intro4" element={<SajuIntro4/>}/>
                {/*챕터1*/}
                <Route path="/Report1" element={<SajuReport1/>}/>
                <Route path="/Report2" element={<SajuReport2/>}/>
                <Route path="/Report3" element={<SajuReport3/>}/>
                <Route path="/Report4" element={<SajuReport4/>}/>
                <Route path="/Report5" element={<SajuReport5/>}/>
                <Route path="/Report6" element={<SajuReport6/>}/>
                {/*챕터2*/}
                <Route path="/Report7" element={<SajuReport7/>}/>
                <Route path="/Report8" element={<SajuReport8/>}/>
                {/*챕터3*/}
                <Route path="/Report9" element={<SajuReport9/>}/>
                <Route path="/Report10" element={<SajuReport10/>}/>
                <Route path="/Report11" element={<SajuReport11/>}/>
                <Route path="/Report12" element={<SajuReport12/>}/>
                {/*챕터4*/}
                <Route path="/Report13" element={<SajuReport13/>}/>
                <Route path="/Report14" element={<SajuReport14/>}/>
                <Route path="/Report15" element={<SajuReport15/>}/>
                <Route path="/Report16" element={<SajuReport16/>}/>
                {/*챕터5*/}
                <Route path="/Report17" element={<SajuReport17/>}/>
                <Route path="/Report18" element={<SajuReport18/>}/>
                <Route path="/Report19" element={<SajuReport19/>}/>
                {/*챕터6*/}
                <Route path="/Report20" element={<SajuReport20/>}/>
                <Route path="/Report21" element={<SajuReport21/>}/>
                <Route path="/Report22" element={<SajuReport22/>}/>
                <Route path="/Report23" element={<SajuReport23/>}/>
                {/*챕터7*/}
                <Route path="/Report24" element={<SajuReport24/>}/>
                <Route path="/Report25" element={<SajuReport25/>}/>
                <Route path="/Report26" element={<SajuReport26/>}/>
                <Route path="/Report27" element={<SajuReport27/>}/>
                {/*챕터8*/}
                <Route path="/Report28" element={<SajuReport28/>}/>
                <Route path="/Report29" element={<SajuReport29/>}/>
                <Route path="/Report30" element={<SajuReport30/>}/>
                <Route path="/Report31" element={<SajuReport31/>}/>
                <Route path="/Report32" element={<SajuReport32/>}/>
                {/*챕터9*/}
                <Route path="/Report33" element={<SajuReport33/>}/>
                <Route path="/Report34" element={<SajuReport34/>}/>
                <Route path="/Report35" element={<SajuReport35/>}/>
                {/*챕터10*/}
                <Route path="/Report36" element={<SajuReport36/>}/>
                <Route path="/Report37" element={<SajuReport37/>}/>
                <Route path="/Report38" element={<SajuReport38/>}/>
                {/*챕터11*/}
                <Route path="/Report39" element={<SajuReport39/>}/>
                <Route path="/Report40" element={<SajuReport40/>}/>

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
