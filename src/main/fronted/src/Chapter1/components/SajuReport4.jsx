import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css'; // 동일한 스타일 재활용

const SajuReport4 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate();

    const analysisData = {
        "정관": {
            title: "말처럼 빠르지만, 가끔은 천천히 돌아보세요",
            weaknesses: [
                {
                    title: "융통성이 부족해요",
                    description: "규칙을 고집해 유연하게 대처하기 어려워요.",
                },
                {
                    title: "보수적이에요",
                    description: "변화를 꺼리고 새로운 시도를 피할 때가 있어요.",
                },
                {
                    title: "신중함이 지나쳐요",
                    description: "결정을 미루다 기회를 놓칠 수 있어요.",
                },
                {
                    title: "기준이 엄격해요",
                    description: "높은 기준으로 주위에 부담을 줄 수 있어요.",
                },
                {
                    title: "완고해요",
                    description: "고집이 세어 타인의 의견을 받아들이기 어려워요.",
                },
            ],
            description:
                "목표를 향해 빠르게 달리는 것도 좋지만, 때로는 주변을 돌아보며 여유를 가지는 것이 중요해요. 말처럼 균형을 유지해 보세요.",
            imageAlt: "말처럼 빠르지만 균형 잡기",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
    };

    const monthRelation = result.manseMonthGroundRelation; // 동적 데이터
    const currentAnalysis = analysisData[monthRelation] || {
        title: "데이터 없음",
        weaknesses: [{ title: "데이터 없음", description: "해당 관계에 대한 데이터가 없습니다." }],
        description: "해당 관계에 대한 상세 설명을 준비 중입니다.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report5'); // 다음 페이지로 이동
    };

    return (
        <div className="saju-report2-wrapper">
            <h1 className="report-title">4. {name}님의 사회적 성장을 위한 약점 개선 방법</h1>
            <p className="report-subtitle">약점을 보완하여 더 나은 사회적 성장을 이루어보세요</p>

            <div className="report-content">
                <div className="sky-symbol-container">
                    <div
                        className="sky-symbol"
                        style={{
                            backgroundColor: "#4287f5",
                            color: "white",
                        }}
                    >
                        {monthRelation}
                    </div>
                </div>

                <div className="analysis-container">
                    <h2 className="analysis-title">{currentAnalysis.title}</h2>
                    <ul className="strengths-list">
                        {currentAnalysis.weaknesses.map((item, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {item.title}</strong>
                                <br />
                                <span className="strength-description">- {item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="analysis-image-container">
                    <img
                        src={currentAnalysis.imageSrc}
                        alt={currentAnalysis.imageAlt}
                        className="analysis-image"
                    />
                    <p className="analysis-image-description">{currentAnalysis.description}</p>
                </div>
            </div>

            <div className="next-page-button-container">
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport4;
