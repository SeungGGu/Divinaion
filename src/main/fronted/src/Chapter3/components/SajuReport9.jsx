import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport9.css';
import { useSaju } from "../../context/SajuContext"; // Report9 전용 스타일

const SajuReport9 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { result, name } = sajuData;

    const handleNextPage = () => {
        navigate('/Report10'); // 다음 페이지로 이동
    };

    return (
        <div className="report9-container">
            {/* 상단 섹션 */}
            <header className="report9-header">
                <h1>{name}님의 타고난 재능과 성장 방향</h1>
                <p>{name}님의 재능을 발견하고 성장할 길을 찾아보세요</p>
            </header>

            {/* 메인 콘텐츠 섹션 */}
            <main className="report9-main">
                {/* 좌측 이미지 */}
                <div className="treasure-container">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/treasure.png`}
                        alt="타고난 재능 이미지"
                        className="treasure-image"
                    />
                </div>

                {/* 중앙 레이더 차트 */}
                <div className="radar-chart-section">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/radar-chart.png`}
                        alt="성장 능력 레이더 차트"
                        className="radar-chart-image"
                    />
                    <div className="chart-labels">
                        <div className="label top">자신감</div>
                        <div className="label top-left">지적 능력</div>
                        <div className="label top-right">창의력</div>
                        <div className="label bottom-left">직업 능력</div>
                        <div className="label bottom-right">경제력</div>
                    </div>
                </div>
            </main>

            {/* 하단 섹션 */}
            <footer className="report9-footer">
                <p>{name}님의 재능을 활용해 더 밝은 미래를 그려보세요</p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </footer>
        </div>
    );
};

export default SajuReport9;
