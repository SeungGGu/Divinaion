import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css'; // 동일한 스타일 재활용

const SajuReport4 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate();

    const analysisData = {
        "비견": {
            title: "늑대처럼 협력하면서 독립성을 유지하세요",
            weaknesses: [
                {
                    title: "고집이 강해요",
                    description: "자신의 생각만 고집해 타인의 의견을 놓쳐요",
                },
                {
                    title: "경쟁심이 과해요",
                    description: "지나친 경쟁으로 스트레스를 받을 수가 있어요.",
                },
                {
                    title: "독립성이 강해요",
                    description: "혼자 해결하려다 도움을 구하지 않을 때가 있어요",
                },
                {
                    title: "직설적이에요",
                    description: "솔직한 표현이 상대방에게 상처를 줄 수 있어요.",
                },
                {
                    title: "끈기가 지나쳐요",
                    description: "필요 없는 일에 지나치게 집착할 때가 있어요",
                },
            ],
            description:
                "고집이 강한 늑대처럼, 가끔은 도움을 받아 함께 성장하는 것이 중요해요. 친구들의 조언이 큰 힘이 될 거예요",
            imageAlt: "늑대",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        "겁재": {
            title: "호랑이처럼 용감하지만 신중함도 함께 가져봐요",
            weaknesses: [
                {
                    title: "경쟁심이 강해요",
                    description: "승부욕이 강해 갈등을 초래할 수 있어요",
                },
                {
                    title: "충동적으로 결정해요",
                    description: "성급한 판단으로 실수할 때가 있어요.",
                },
                {
                    title: "독립성이 과해요",
                    description: "혼자 해결하려다 어려움을 겪을 때가 있어요",
                },
                {
                    title: "고집이 세요",
                    description: "의견을 고집해 타협이 어려울 수 있어요.",
                },
                {
                    title: "스트레스를 받아요",
                    description: "실패나 비판에 민감하게 반응할 수 있어요.",
                },
            ],
            description:
                "호랑이처럼 용감하지만, 때로는 상황에 맞는 지혜가 필요해요. 친구들의 조언을 받아들이며 더 큰 성장을 이룰 수 있을 거예요.",
            imageAlt: "호랑이",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        "식신": {
            title: "소처럼 성실하되, 때론 속도를 내보세요",
            weaknesses: [
                {
                    title: "느긋함이 있어요",
                    description: "여유를 부리다 일이 지연될 수 있어요",
                },
                {
                    title: "내성적 성향이 강해요",
                    description: "혼자 있는 시간이 많아 소통이 적을 수 있어요",
                },
                {
                    title: "보수적인 태도를 가져요",
                    description: "익숙한 방식을 더 선호해요",
                },
                {
                    title: "걱정이 많아요",
                    description: "작은 일에도 고민이 많을 수 있어요",
                },
                {
                    title: "자기 만족이 커요",
                    description: "성과에 만족해 의지가 약해질 수 있어요",
                },
            ],
            description:
                "성실함이 중요하지만, 가끔은 속도를 내는 것도 필요해요. 목표를 잃지 않고 기회를 잡아보세요",
            imageAlt: "소",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        "상관": {
            title: "원숭이처럼 자유롭게 행동하되, 신중함과 배려를 함께 키워보세요",
            weaknesses: [
                {
                    title: "자유분방해요",
                    description: "규칙보다 자신의 방식을 고집해요",
                },
                {
                    title: "충동적으로 결정해요",
                    description: "계획 없이 행동해 실수할 수 있어요",
                },
                {
                    title: "말이 직설적이에요",
                    description: "솔직한 표현이 상대에게 부담이 될 수 있어요",
                },
                {
                    title: "변덕스러워요",
                    description: "관심이 자주 바뀌어 꾸준함이 부족해요",
                },
                {
                    title: "독립성이 강해요",
                    description: "혼자 해결하려는 경향이 있어요",
                },
            ],
            description:
                "원숭이처럼 자유롭고 솔직하게 표현하되, 행동할 때는 신중함을 갖고, 말할 때는 상대를 배려하는 마음을 가져보세요.",
            imageAlt: "원숭이",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        "편재": {
            title: "독수리처럼 넓게 보고 계획적으로 접근해보세요",
            weaknesses: [
                {
                    title: "물질적이에요",
                    description: "재물에 집중하다 중요한 결정을 놓칠 수 있어요",
                },
                {
                    title: "성급해요",
                    description: "이익을 서두르다 실수를 할 수 있어요",
                },
                {
                    title: "독립적이에요",
                    description: "혼자 해결하려다 어려움을 겪을 수 있어요",
                },
                {
                    title: "욕심이 많아요",
                    description: "이익에 집착해 중요한 가치를 놓칠 수 있어요",
                },
                {
                    title: "융통성이 부족해요",
                    description: "자신의 방식을 고집하면 타협이 어려울 때가 있어요",
                },
            ],
            description:
                "멀리 보는 능력이 탁월하지만, 때로는 가까운 것에 집중하는 것도 중요해요. 큰 그림을 그리면서 주변의 기회를 잘 챙겨보세요.",
            imageAlt: "독수리",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        "정재": {
            title: "개미처럼 체계적으로 일하되, 휴식을 챙기세요",
            weaknesses: [
                {
                    title: "변화를 싫어해요",
                    description: "익숙한 것에 집중해 새로운 시도를 놓칠 수 있어요",
                },
                {
                    title: "보수적이에요",
                    description: "위험을 피하려다 도전정신이 부족할 때가 있어요",
                },
                {
                    title: "결정이 느려요",
                    description: "신중한 성격으로 중요한 결정을 미룰 수 있어요.",
                },
                {
                    title: "완고해요",
                    description: "고집이 세서 타인의 의견을 받아들이기 어려워요",
                },
                {
                    title: "안정만을 추구해요",
                    description: "안전한 길만 선택해 성장이 더딜 수 있어요",
                },
            ],
            description:
                "개미처럼 꾸준히 일하는 것도 중요하지만, 가끔은 속도를 조절하고 휴식을 통해 에너지를 재충전하세요",
            imageAlt: "개미",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        "편관": {
            title: "사자처럼 강하지만,부드럽게 이끌어보세요",
            weaknesses: [
                {
                    title: "지나치게 통제해요",
                    description: "자신과 다른 사람을 지나치게 통제하려고 해요",
                },
                {
                    title: "융통성이 부족해요",
                    description: "규칙을 고집해 융통성이 부족할 수 있어요.",
                },
                {
                    title: "고집이 강해요",
                    description: "자신의 의견을 바꾸지 않아 타협이 어려워요.",
                },
                {
                    title: "스트레스를 받아요",
                    description: "책임감으로 인해 스트레스를 받을 때가 있어요",
                },
                {
                    title: "독단적으로 결정해요",
                    description: "결정을 내릴 때 타인의 의견을 배제할 때가 있어요",
                },
            ],
            description:
                "리더십이 뛰어나지만, 너무 강하게만 밀어붙이면 부담을 줄 수 있어요. 사자처럼 부드럽고 배려 깊게 이끌어보세요",
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
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
        "편인": {
            title: "신중한 올빼미처럼 행동하되, 때로는 결단도 필요해요 ",
            weaknesses: [
                {
                    title: "집중력이 부족해요",
                    description: "여러 관심사로 하나에 집중하지 못할 때가 있어요",
                },
                {
                    title: "비현실적 사고를 해요",
                    description: "창의적이지만 현실을 벗어날 때가 있어요",
                },
                {
                    title: "소통이 부족해요",
                    description: "혼자 생각에 빠져 타인과 소통하기 어려워요",
                },
                {
                    title: "결정을 미뤄요",
                    description: "가능성을 고민하다가 결정을 미룰 때가 있어요",
                },
                {
                    title: "감정에 따라 달라져요",
                    description: "일관성 있게 행동하지 못할 때가 있어요",
                },
            ],
            description:
                "올빼미처럼 신중하게 판단하지만, 중요한 순간에는 과감한 결단도 필요해요. 고민이 길어지지 않도록 적절한 타이밍을 잡아보세요.",
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        "정인": {
            title: "코끼리처럼 차분하게 나아가되, 때로는 속도를 내세요",
            weaknesses: [
                {
                    title: "신중함이 지나쳐요",
                    description: "결정을 미루다 기회를 놓칠 수 있어요",
                },
                {
                    title: "분석에 집착해요",
                    description: "모든 것을 따지다 실행이 늦어질 때가 있어요.",
                },
                {
                    title: "완고해요",
                    description: "타인의 의견을 받아들이기 어려울 수 있어요.",
                },
                {
                    title: "소극적 태도를 보일 때가 있어요",
                    description: "적극적으로 나서지 않을 때가 있어요",
                },
                {
                    title: "과도하게 걱정해요",
                    description: "사소한 일에도 지나치게 고민할 수 있어요",
                },
            ],
            description:
                "차분히 진행하는 것도 좋지만, 기회를 놓치지 않도록 빠르게 결정하는 용기도 필요해요. 중요한 순간을 놓치지 마세요",
            imageAlt: "코끼리",
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
