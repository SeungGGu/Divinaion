import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuIntro1.css';
import {useSaju} from "../../context/SajuContext";

const SajuIntro1 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData;
    const navigate = useNavigate();

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
                    <img
                        className="saju-intro1-image"
                        src={`${process.env.PUBLIC_URL}/images/mainPicture/saju.png`}
                        alt="Saju Main"
                    />
                </div>

                {/* 오른쪽 아이콘 */}
                <div className="saju-intro1-right-icons">
                    <div className="saju-intro1-icon">인연</div>
                    <div className="saju-intro1-icon">운세</div>
                    <div className="saju-intro1-icon">재물</div>
                </div>
            </div>

            <div className="saju-intro1-title">
                <h1>{name}님</h1>
                <h1>사주 보고서</h1>
            </div>

            {/* 안내 텍스트 */}
            <div className="saju-intro1-text">
                <p>나만의 사주 보고서로 성향, 진로, 인연 등 다양한 분석을 지금 바로 확인하세요!</p>
            </div>
        </div>
    );
};

export default SajuIntro1;
