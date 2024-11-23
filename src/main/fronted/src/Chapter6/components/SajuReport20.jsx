import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport20.css'; // 스타일 파일 가져오기
import { useSaju } from '../../context/SajuContext'; // SajuContext 가져오기

const SajuReport20 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name } = sajuData || {}; // SajuContext에서 데이터 가져오기

    const handleNextPage = () => {
        navigate('/Report21'); // 다음 페이지로 이동
    };

    return (
        <div className="report20-container">
            {/* 상단 제목 */}
            <div className="header-section">
                <h1 className="title">{name}님의 배우자 인연과 덕을 깊이 있게 분석합니다</h1>
                <p className="subtitle">
                    결혼 후 {name}님의 배우자 덕을 알아보고 인연을 쌓아보세요
                </p>
            </div>

            {/* 메인 이미지 섹션 */}
            <div className="image-section">
                <img
                    src={`${process.env.PUBLIC_URL}/images/mountain.png`} // 이미지 경로
                    alt="배우자 운 이미지"
                    className="main-image"
                />
            </div>

            {/* 하단 메시지 및 버튼 */}
            <div className="footer-section">
                <p className="footer-message">
                    {name}님의 배우자 덕으로 더 나은 미래를 설계해보세요
                </p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport20;
