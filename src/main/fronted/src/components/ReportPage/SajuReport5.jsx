import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../../css/SajuReport2.css'; // 기존 스타일 활용

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
        인성: {
            title: "${name}님의 인성과 강점을 찾아드립니다",
            strengths: [
                { title: "변화를 빠르게 받아들여요", description: "상황에 맞게 유연하게 대응합니다." },
                { title: "체계적으로 일해요", description: "일 처리를 꼼꼼하게 하고 규칙을 잘 지켜요." },
                { title: "다양한 의견을 존중해요", description: "여러 사람의 생각을 존중하고 수용해요." },
                { title: "책임감이 강해요", description: "맡은 일을 끝까지 완수하려고 해요." },
                { title: "협력적으로 일해요", description: "팀과 함께 소통하며 목표를 달성해요." },
            ],
            description:
                "${name}님은 체계적으로 일 처리를 하고, 빠르게 변화에 적응하며 다양한 의견을 존중합니다. 또한 책임감을 가지고 목표를 완수하는 모습이 돋보입니다.",
            imageAlt: "인성 관계 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/teamwork.png`,
        },
        비겁: {
            title: "${name}님의 비겁 관계를 활용한 강점",
            strengths: [
                { title: "의리가 있어요", description: "친구들과 끈끈한 유대감을 유지합니다." },
                { title: "솔직해요", description: "직접적이고 명확한 의사소통을 좋아합니다." },
                { title: "자신감이 있어요", description: "스스로의 능력을 믿고 행동합니다." },
                { title: "도전적이에요", description: "새로운 기회를 찾아 적극적으로 나섭니다." },
            ],
            description:
                "비겁 관계를 통해 자신감을 드러내며 주변 사람들과 의리를 중시하는 모습을 보여줍니다. 새로운 도전을 두려워하지 않고 적극적으로 기회를 활용합니다.",
            imageAlt: "비겁 관계 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/leader.png`,
        },
        식재관: {
            title: "${name}님의 식재관 강점을 활용하는 법",
            strengths: [
                { title: "변화를 빠르게 받아들여요", description: "상황에 맞게 유연하게 대응합니다." },
                { title: "체계적으로 일해요", description: "일 처리를 꼼꼼하게 하고 규칙을 잘 지켜요." },
                { title: "다양한 의견을 존중해요", description: "여러 사람의 생각을 존중하고 수용해요." },
                { title: "책임감이 강해요", description: "맡은 일을 끝까지 완수하려고 해요." },
                { title: "협력적으로 일해요", description: "팀과 함께 소통하며 목표를 달성해요." },
            ],
            description:
                "소처럼 체계적으로 일을 처리하고, 원숭이처럼 변화에 빠르게 적응하며, 사자처럼 강한 리더십을 발휘합니다. 또한, 말처럼 끝까지 책임감을 가지고 완수합니다.",
            imageAlt: "식재관 관계 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/confidence.png`,
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
            <h1 className="report-title">5. {name}님의 대인 관계 강점을 찾아드립니다</h1>
            <p className="report-subtitle">대인 관계에서 {name}님의 강점을 발휘해 보세요</p>

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

export default SajuReport5;
