import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css'; // 기존 스타일 활용

const SajuReport5 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate();

    // 관계 그룹 설정
    const relationGroups = {
        "편인, 정인": "인성",
        "비견, 겁재": "비겁",
        "식신, 상관, 편재, 정재, 편관, 정관": "식재관",
    };

    // 관계 기반으로 그룹 찾기
    const getRelationGroup = (relation) => {
        for (const group in relationGroups) {
            if (group.split(", ").includes(relation)) {
                return relationGroups[group];
            }
        }
        return "알 수 없는 관계"; // 기본값
    };

    const relationGroup = getRelationGroup(result.manseMonthGroundRelation);

    // 동적 데이터 매핑
    const analysisData = {
        "인성": {
            title: name + "님의 대인관계 강점을 알려드립니다",
            strengths: [
                { title: "변화에 빠르게 적응합니다", description: "새로운 상황에 유연히 대처하며 신뢰를 쌓습니다" },
                { title: "팀워크를 중시합니다", description: "협력을 통해 최고의 결과를 만듭니다" },
                { title: "다양한 의견을 존중합니다", description: "타인의 생각을 배려하며 균형을 찾습니다" },
                { title: "밝고 긍정적입니다", description: "열린 마음으로 사람들에게 에너지를 전합니다" },
            ],
            ImageDescription: [
                { title: "코끼리처럼 목표를 향해 꾸준히 나아가세요.", description: "코끼리처럼 끈기 있게 나아가며 의견을 존중해요"},
                { title: "올빼미처럼 지혜롭게 문제를 해결하세요.", description: "올빼미처럼 상황을 분석하며 해답을 찾아보세요"},
                ],
            imageAlt: "코끼리와 올빼미 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/relationship/elephant&owl.png`,
        },
        "비겁": {
            title: name + "님의 대인관계 강점을 알려드립니다",
            strengths: [
                { title: "의견을 명확히 전달합니다", description: "대화에서 자신의 생각을 분명히 전달합니다" },
                { title: "목표를 향해 도전합니다", description: "도전적이고 즐겁게 목표를 달성합니다" },
                { title: "협력과 독립을 겸비합니다", description: "함께 일하면서도 스스로 문제를 해결합니다" },
                { title: "리더십이 강합니다", description: "팀을 이끌며 목표를 향해 집중합니다" },
            ],
            ImageDescription: [
                { title: "늑대처럼 협력하며 독립성을 유지하세요.", description: "늑대처럼 팀과 협력하되 방향을 잃지 마세요"},
                { title: "호랑이처럼 경쟁력을 키우세요.", description: "호랑이처럼 자신감을 갖고 과감히 나아가세요"},
            ],
            imageAlt: "늑대와 호랑이 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/relationship/wolf&tiger.png`,
        },
        "식재관": {
            title: name + "님의 대인관계 강점을 알려드립니다",
            strengths: [
                { title: "변화를 빠르게 받아들입니다", description: "상황에 맞게 유연하게 대응합니다." },
                { title: "다양한 의견을 존중합니다", description: "여러 사람의 생각을 경청하며 협력합니다." },
                { title: "책임감을 갖고 임무를 완수합니다", description: "맡은 일을 끝까지 해내며 신뢰를 쌓습니다." },
                { title: "조화를 중요하게 생각합니다", description: "의견을 조율하며 원만한 관계를 만듭니다." },
            ],
            ImageDescription: [
                { title: "소처럼 꾸준히 목표를 향해 나아가세요", description: "소처럼 변화를 수용하며 꾸준히 성취하세요"},
                { title: "독수리처럼 멀리 보고 명확히 판단하세요.", description: "독수리처럼 넓은 시야로 신중히 판단해 보세요"},
                { title: "사자처럼 리더십을 발휘하세요.", description: "사자처럼 강한 리더십으로 목표를 이끌어보세요"},
            ],
            imageAlt: "소, 독수리, 사자 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/relationship/cow&eagle&lion.png`,
        },
    };

    const currentAnalysis = analysisData[relationGroup] || {
        title: "데이터 없음",
        strengths: [{ title: "데이터 없음", description: "해당 관계에 대한 데이터가 없습니다." }],
        description: "해당 관계에 대한 상세 설명을 준비 중입니다.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report6');
    };

    return (
        <div className="saju-report2-wrapper">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">4. {name}님의 대인 관계 강점을 찾아드립니다</h1>
            <p className="report-subtitle">강점을 바탕으로 더 나은 대인관계를 만들어보세요</p>

            <div className="report-content">
                <div className="sky-symbol-container">
                    <div
                        className="sky-symbol"
                        style={{
                            backgroundColor: "#f9c74f",
                            color: "black",
                        }}
                    >
                        {relationGroup}
                    </div>
                </div>

                <div className="analysis-container">
                    <h2 className="analysis-title">{currentAnalysis.title}</h2>
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
                    <ul className="strengths-list">
                        {currentAnalysis.ImageDescription.map((item, index) => (
                            <li key={index}>
                                <strong>{item.title}</strong><br/>
                                <span className="strength-description">👉 {item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="footer-text">강점을 활용하면 조화로운 협력과 소통의 길을 열 수 있습니다</p>
        </div>
    );
};

export default SajuReport5;
