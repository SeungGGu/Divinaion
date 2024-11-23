import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css'; // 동일한 스타일을 사용

const SajuReport3 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate(); // navigate 생성

    const analysisData = {
        "정관": {
            title: "말처럼 빠르고 책임감 있게 일하세요",
            strengths: [
                {
                    title: "책임감이 강해요",
                    description: "맡은 일을 철저히 해내며 신뢰를 쌓아요.",
                },
                {
                    title: "규칙을 잘 지켜요",
                    description: "질서를 중시하며 약속을 꼭 지켜요.",
                },
                {
                    title: "꾸준히 노력해요",
                    description: "목표를 포기하지 않고 지속적으로 나아가요.",
                },
                {
                    title: "안정을 중시해요",
                    description: "변화를 싫어하고 평온함을 유지해요.",
                },
                {
                    title: "도덕적으로 행동해요",
                    description: "모범이 되어 도덕성을 지켜요.",
                },
            ],
            description:
                "말처럼 신속하고 꾸준하게 자신이 맡은 일을 끝까지 해내는 책임감이 돋보여요. 말은 길을 목표로 향해 나아가는 모습이 인상적입니다.",
            imageAlt: "말처럼 빠르고 책임감 있게",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
    };

    // 월 관계의 결과값으로 동적인 데이터 가져오기
    const monthRelation = result.manseMonthGroundRelation; // 동적으로 결과 가져오기
    const currentAnalysis = analysisData[monthRelation] || {
        title: "데이터 없음",
        strengths: [{ title: "데이터 없음", description: "해당 관계에 대한 데이터가 없습니다." }],
        description: "해당 관계에 대한 상세 설명을 준비 중입니다.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report4'); // 다음 페이지로 이동
    };

    return (
        <div className="saju-report2-wrapper">
            <h1 className="report-title">3. {name}님의 사회적 성향과 강점을 알아보세요</h1>
            <p className="report-subtitle">사회적 관계 속에서 {name}님의 강점을 키워보세요</p>

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
                        {currentAnalysis.strengths.map((item, index) => (
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

export default SajuReport3;
