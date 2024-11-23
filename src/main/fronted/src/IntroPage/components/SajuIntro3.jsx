import React from 'react';
import { useSaju } from '../../context/SajuContext';
import { useNavigate } from "react-router-dom";
import '../css/SajuIntro3.css';

const SajuIntro3 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();

    // sajuData가 없으면 로딩 중 메시지 표시
    if (!sajuData) {
        return <p>사주 데이터를 불러오는 중입니다...</p>;
    }

    function nextPageOnClick() {
        navigate('/Intro4');
    }

    const { name } = sajuData;
    const nameArray = name ? [...name.split(''), '님'] : [];

    return (
        <div className="saju-intro3-container">
            <h1>사주로 발견한 나만의 길을 걸어보세요</h1>
            <p>사주 보고서를 통해 새로운 길을 제시해 드립니다</p>

            {/* 이름 박스 */}
            <div className="saju-intro3-name-box-container">
                {nameArray.map((char, index) => (
                    <div key={index} className="saju-intro3-name-box">
                        {char}
                    </div>
                ))}
            </div>

            {/* '사 주 팔 자' 고정 표시 */}
            <div className="saju-intro3-name-box-container">
                {['사', '주', '팔', '자'].map((char, index) => (
                    <div key={index} className="saju-intro3-name-box">
                        {char}
                    </div>
                ))}
            </div>

            {/* 안내 텍스트 */}
            <p className="saju-intro3-info-text">
                사주팔자가 알려주는 인생의 나침반을 따라 새로운 길을 열어보세요
            </p>

            {/* 이미지 */}
            <div className="saju-intro3-image-container">
                <img src={`${process.env.PUBLIC_URL}/images/saju.png`} alt="Guiding Path"/>
            </div>
            <button className="saju-intro3-next-button" onClick={nextPageOnClick}>다음 페이지로</button>
        </div>
    );
};

export default SajuIntro3;
