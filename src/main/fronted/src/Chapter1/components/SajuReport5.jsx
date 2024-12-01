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
        인성: {
            title: name + "님의 인성과 강점을 찾아드립니다",
            strengths: [
                { title: "변화에 빠르게 적응해요", description: "새로운 상황에 유연하게 대처하며 신뢰를 쌓아요" },
                { title: "팀워크를 중시해요", description: "협력하여 최선의 결과를 만들어요" },
                { title: "다양한 의견을 존중해요", description: "다른 사람의 생각을 존중하며 배울 점을 찾아요" },
                { title: "성장에 관심이 많아요", description: "진정성 있는 관계를 맺으려 노력해요" },
                { title: "긍정적인 태도를 유지해요", description: "밝은 마음으로 사람들을 응원해요" },
            ],
            description:
                name + "님은 코끼리처럼 꾸준히 성장하며 인내심을 가지고 목표를 향해 나아가고, 올빼미처럼 지혜롭게 생각하며 다양한 의견을 존중하고 문제를 해결하는 능력을 지녔습니다",
            imageAlt: "인성 관계 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/teamwork.png`,
        },
        비겁: {
            title: name + "님의 비겁 관계를 활용한 강점",
            strengths: [
                { title: "의견을 분명히 표현해요", description: "대화에서 생각을 명확하게 전달해요" },
                { title: "목표를 위해 도전해요", description: "도전적인 목표를 세우고 즐겁게 달성해요" },
                { title: "혼자서도, 함께도 잘해요", description: "협력도 잘하고 혼자서도 일을 처리해요" },
                { title: "적극적으로 나아가요", description: "위험을 감수하고도 목표를 향해 나아가요" },
                { title: "리더십을 발휘해요", description: "팀을 이끌며 목표를 향해 집중해요" },
            ],
            description:
                "늑대처럼 협력과 독립성을 모두 갖추고 있으며, 호랑이처럼 강한 경쟁심과 리더십으로 목표를 향해 힘차게 나아가는 성향을 가지고 있어요",
            imageAlt: "비겁 관계 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/leader.png`,
        },
        식재관: {
            title: name + "님의 식재관 강점을 활용하는 법",
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
