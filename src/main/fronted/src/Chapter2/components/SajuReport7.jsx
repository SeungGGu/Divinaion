import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSaju} from '../../context/SajuContext';
import '../../Chapter1/css/SajuReport2.css'; // 기존 스타일 재사용

const SajuReport7 = () => {
    const {sajuData} = useSaju();
    const {result, name} = sajuData;
    const navigate = useNavigate();

    // 관계 데이터 매핑
    const analysisData = {
        정관: {
            title: name + '님의 성향을 효과적으로 활용하는 방법',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 제안합니다",
            strengths: [
                {title: "신뢰를 바탕으로 행동하세요", description: "주어진 일에 신뢰를 쌓으며 성실하게 수행합니다."},
                {title: "규칙과 원칙을 지키세요", description: "정해진 규범을 준수하며 일을 처리합니다."},
                {title: "책임감을 가지고 일하세요", description: "맡은 일을 끝까지 책임감 있게 완수합니다."},
                {title: "조화를 중요하게 생각하세요", description: "주변 사람들과 원만한 관계를 유지합니다."},
                {title: "안정된 결과를 추구하세요", description: "꾸준한 노력으로 안정적인 성과를 이뤄냅니다."},
            ],
            description:
                "말처럼 자유롭게 도전하고 앞으로 나아가세요.\n 말처럼 용기 있게 새로운 도전에 나서보세요. 배움에 대한 열정으로 빠르게 성취를 이뤄가세요",
            imageAlt: "정관 관계 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
    };

    const currentAnalysis = analysisData[result.manseMonthGroundRelation] || {
        title: "데이터 없음",
        subtitle: "해당 관계에 대한 데이터가 준비 중입니다.",
        strengths: [{title: "데이터 없음", description: "해당 관계에 대한 데이터가 없습니다."}],
        description: "해당 관계에 대한 상세 설명이 준비 중입니다.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report8');
    };

    return (
        <div className="saju-report2-wrapper">
            <h1 className="report-title">7. {currentAnalysis.title}</h1>
            <p className="report-subtitle">{currentAnalysis.subtitle}</p>

            <div className="report-content">
                <div className="sky-symbol-container">
                    <div
                        className="sky-symbol"
                        style={{
                            backgroundColor: "#f9c74f",
                            color: "black",
                        }}
                    >
                        {result.manseMonthGroundRelation || "정관"}
                    </div>
                </div>

                <div className="analysis-container">
                    <h2 className="analysis-title">{`${name}님의 성향을 활용한 직장 성공 전략`}</h2>
                    <ul className="strengths-list">
                        {currentAnalysis.strengths.map((item, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {item.title}</strong>
                                <br/>
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

export default SajuReport7;
