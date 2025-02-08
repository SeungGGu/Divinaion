import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/SajuIntro3.css';

const SajuIntro3 = () => {
    const navigate = useNavigate();

    function nextPageOnClick() {
        navigate('/Report1'); // 다음 페이지의 경로로 이동
    }

    return (
        <div className="saju-intro3-container">
            {/* 상단 고정 타이틀 */}
            <div className="saju-intro3-title-box">
                <h1 className="saju-intro3-title">
                    무엇이 궁금하신가요?<br />
                    당신의 고민에 맞춘 사주 분석 보고서, 지금 확인해보세요!
                </h1>
            </div>
            {/* 우측 상단의 다음 버튼 */}
            <button className="saju-intro3-next-button" onClick={nextPageOnClick}>
                다음 ▶
            </button>
            {/* 중앙 이미지 */}
            <div className="saju-intro3-image-container">
                <img
                    className="saju-intro3-image"
                    src={`${process.env.PUBLIC_URL}/images/mainPicture/intro3.png`}
                    alt="Intro Background"
                />
            </div>
        </div>
    );
};

export default SajuIntro3;
