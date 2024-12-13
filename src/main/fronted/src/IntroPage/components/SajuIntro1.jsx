import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuIntro1.css';
import { useSaju } from "../../context/SajuContext";

const SajuIntro1 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();

    function nextPageOnClick() {
        navigate('/Intro2'); // 다음 페이지의 경로로 이동
    }

    return (
        <div className="saju-intro1-container">
            {/* 우측 상단의 다음 버튼 */}
            <button className="saju-intro1-next-button" onClick={nextPageOnClick}>
                다음 ▶
            </button>
            {/* 중앙 레이아웃 */}
            <div className="saju-intro1-layout">
                {/* 왼쪽 아이콘 */}
                <div className="saju-intro1-left-icons">
                    <div className="saju-intro1-icon">성향</div>
                    <div className="saju-intro1-icon">건강</div>
                    <div className="saju-intro1-icon">진로</div>
                </div>

                {/* 중앙 이미지 */}
                <div className="saju-intro1-image-container">
                    <img src={`${process.env.PUBLIC_URL}/images/wood.png`} alt="Saju Main"/>
                </div>

                {/* 오른쪽 아이콘 */}
                <div className="saju-intro1-right-icons">
                    <div className="saju-intro1-icon">인연</div>
                    <div className="saju-intro1-icon">운세</div>
                    <div className="saju-intro1-icon">재물</div>
                </div>
            </div>

            <div className="saju-intro1-title">
                <h1>나의 사주를</h1>
                <h1>알고 싶다</h1>
            </div>

            {/* 안내 텍스트 */}
            <div className="saju-intro1-text">
                <p>나만의 사주 보고서로 나의 진짜 모습을 찾아보세요!</p>
            </div>
        </div>
    );
};

export default SajuIntro1;
