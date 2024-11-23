import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport24.css'; // 스타일 파일 경로
import { useSaju } from '../../context/SajuContext';

const SajuReport24 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name } = sajuData || {};

    const handleNextPage = () => {
        navigate('/Report25');
    };

    return (
        <div className="report24-container">
            <h1 className="report-title">{name}님의 사주 에너지로 강점을 발견해 보세요</h1>
            <p className="report-subtitle">
                사주 에너지를 분석해 {name}님의 잠재력을 깨워보세요
            </p>

            {/* 메인 이미지 섹션 */}
            <div className="image-section">
                <img
                    src={`${process.env.PUBLIC_URL}/images/horse.png`} // 에너지 분석 이미지 경로
                    alt="사주 에너지 분석"
                    className="main-image"
                />
            </div>

            <p className="footer-message">
                6가지 사주 에너지를 활용해 {name}님의 인생을 긍정적으로 변화시켜 보세요
            </p>

            <button className="next-page-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport24;
