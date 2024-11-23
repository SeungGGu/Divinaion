import React from 'react';
import { useSaju } from '../../context/SajuContext'; // SajuContext 가져오기
import '../css/SajuReport13.css';
import {useNavigate} from "react-router-dom"; // 스타일 파일 가져오기

const SajuReport13 = () => {
    const { sajuData } = useSaju(); // SajuContext에서 데이터 가져오기
    const { name } = sajuData || {}; // name 데이터 추출 (null 방지)
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate('/Report14');
    };

    return (
        <div className="report13-container">
            {/* 상단 제목 */}
            <div className="header-section">
                <h1 className="title">{name}님의 타고난 마음 성향 알아보기</h1>
                <p className="subtitle">
                    {name}님의 마음을 깊이 이해하고 올바른 결정을 내리세요
                </p>
            </div>

            {/* 메인 이미지 섹션 */}
            <div className="image-section">
                <img
                    src={`${process.env.PUBLIC_URL}/images/mountain.png`} // 더미 이미지 경로
                    alt="마음 성향 이미지"
                    className="main-image"
                />
            </div>

            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    {name}님의 긍정적인 마음 변화를 통해 더 나은 성장을 이루세요
                </p>
            </div>

            <button className="next-page-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport13;
