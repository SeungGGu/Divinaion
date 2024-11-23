import React from 'react';
import { useSaju } from '../../context/SajuContext'; // SajuContext 가져오기
import '../css/SajuReport17.css'; // 스타일 파일
import { useNavigate } from 'react-router-dom';

const SajuReport17 = () => {
    const { sajuData } = useSaju(); // SajuContext에서 데이터 가져오기
    const { name } = sajuData || {}; // name 데이터 추출 (null 방지)
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate('/Report18');
    };

    return (
        <div className="report17-container">
            {/* 상단 제목 */}
            <div className="header-section">
                <h1 className="title">{name}님의 타고난 복을 통해 인생 기회를 찾기</h1>
                <p className="subtitle">
                    {name}님의 5대 복을 활용해 더 나은 인생 기회를 열어보세요.
                </p>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="content-section">
                <div className="image-container">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/mountain.png`} // 더미 이미지 경로
                        alt="5대 복 이미지"
                        className="main-image"
                    />
                </div>
                <div className="info-container">
                    <p className="info-text">
                        타고난 5복 福
                    </p>
                </div>
            </div>

            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    {name}님의 5대 복을 통해 더 행복한 삶을 설계해보세요.
                </p>
            </div>

            {/* 다음 페이지 버튼 */}
            <button className="next-page-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport17;
