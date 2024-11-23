import React from 'react';
import '../css/SajuIntro2.css';
import { useNavigate } from "react-router-dom";

const SajuIntro2 = () => {
    const navigate = useNavigate();

    function nextPageOnClick() {
        navigate('/Intro3'); // 다음 페이지의 경로로 이동
    }

    return (
        <div className="saju-intro2-container">
            <h1>사주를 통해 나의 숨겨진 잠재력을 발견하고,<br />인생의 모든 궁금증을 풀어보세요</h1>
            <div className="saju-intro2-categories">
                <div className="saju-intro2-category saju-intro2-green">
                    <h2>성향</h2>
                    <p>당신만의 특별한 매력을 어떻게 발휘할 수 있는지 알려드립니다</p>
                </div>
                <div className="saju-intro2-category saju-intro2-red">
                    <h2>건강</h2>
                    <p>오행의 균형을 통해 건강 상태와 조심할 부분을 미리 알아보세요</p>
                </div>
                <div className="saju-intro2-category saju-intro2-orange">
                    <h2>직업</h2>
                    <p>꿈을 현실로 만드는, 당신에게 꼭 맞는 직업을 찾아보세요</p>
                </div>
                <div className="saju-intro2-category saju-intro2-white">
                    <h2>인연</h2>
                    <p>연인과의 궁합부터 주변 인연까지, 인연의 깊이를 파헤쳐 드립니다</p>
                </div>
                <div className="saju-intro2-category saju-intro2-black">
                    <h2>재물</h2>
                    <p>당신의 재물복은 어느 정도일까요? 사주로 미리 확인해보세요</p>
                </div>
                <div className="saju-intro2-category saju-intro2-yellow">
                    <h2>운세</h2>
                    <p>인생의 결정적 순간을 위한 타이밍과 조언을 드립니다</p>
                </div>
            </div>
            <button className="saju-intro2-next-button" onClick={nextPageOnClick}>다음 페이지로</button>
        </div>
    );
};

export default SajuIntro2;
