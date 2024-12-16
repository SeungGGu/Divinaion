import React from 'react';
import '../css/SajuIntro3.css';
import { useNavigate } from "react-router-dom";

const SajuIntro3 = () => {
    const navigate = useNavigate();

    function nextPageOnClick() {
        navigate('/Report1'); // 다음 페이지의 경로로 이동
    }

    return (
        <div className="saju-intro2-container">
            {/* 우측 상단의 다음 버튼 */}
            <button className="saju-intro2-next-button" onClick={nextPageOnClick}>
                다음 ▶
            </button>
            {/* 페이지 타이틀 */}
            <h1 className="saju-intro2-title">
                무엇이 궁금하신가요?<br/>
                당신의 고민에 맞춘 사주 분석 보고서, 지금 확인해보세요!
            </h1>
            {/* 중앙 구조 */}
            <div className="saju-intro2-main">
                <div className="saju-intro2-center">보이는 사주</div>
                <div className="saju-intro2-circle">
                    <div className="saju-intro2-item" style={{gridArea: '인연'}}>인연</div>
                    <div className="saju-intro2-item" style={{gridArea: '건강'}}>건강</div>
                    <div className="saju-intro2-item" style={{gridArea: '직업'}}>직업</div>
                    <div className="saju-intro2-item" style={{gridArea: '적성'}}>적성</div>
                    <div className="saju-intro2-item" style={{gridArea: '운세'}}>운세</div>
                    <div className="saju-intro2-item" style={{gridArea: '재물'}}>재물</div>
                    <div className="saju-intro2-item" style={{gridArea: '성격'}}>성격</div>
                </div>
            </div>
        </div>
    );
};

export default SajuIntro3;
