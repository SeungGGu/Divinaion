import React from "react";
import {Routes, Route} from "react-router-dom";
import SajuCalculator from "./SajuCalculator";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<SajuCalculator />}/>
            <Route path='/*' element={ //*이란? 지정된 페이지 이외의 모든것들을 에러처리
                <>
                    <div className='error-page'>oops!! 404 error!</div>
                    <img src={'https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png'}
                         alt="404 error page"
                         width={"100%"}
                         height={"100%"}></img>
                </>}/>
        </Routes>
    );
};

export default Router;