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
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
            {/* 상단 제목 */}
            <div className="header-section">
                <h1 className="title">{name}님의 인연과 관련된 5가지 덕(德)</h1>
                <p className="subtitle">
                    5덕의 의미를 이해하고 인연의 균형을 찾아보세요
                </p>
            </div>

            {/* 메인 섹션 */}
            <div className="main-section">
                {/* 이미지 */}
                <div className="image-section">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/mainPicture/mountain.png`} // 이미지 경로
                        alt="배우자 운 이미지"
                        className="main-image"
                    />
                </div>

                {/* 글 박스 */}
                <div className="text-box">
                    <p className="text-content">
                        <strong>5대 덕(德)</strong>은<br />
                        {name}님의 인연에 영향을 미치며<br />
                        다양한 가능성을 제공합니다
                    </p>
                </div>
            </div>

            {/* 하단 메시지 및 버튼 */}
            <div className="footer-section">
                <p className="footer-message">
                    5대 덕을 활용하면 인연의 가치를 발견하고 행복한 삶을 만들 수 있습니다
                </p>
            </div>
        </div>
    );
};

export default SajuReport20;
