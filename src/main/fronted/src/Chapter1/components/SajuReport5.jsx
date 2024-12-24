import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css'; // 기존 스타일 활용

const SajuReport5 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate();

    const analysisData = {
        "비견": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "의견을 명확히 전달합니다", description: "대화에서 자신의 생각을 분명히 전달합니다" },
                { title: "목표를 향해 도전합니다", description: "도전적이고 즐겁게 목표를 달성합니다" },
                { title: "협력과 독립을 겸비합니다", description: "함께 일하면서도 스스로 문제를 해결합니다" },
                { title: "리더십이 강합니다", description: "팀을 이끌며 목표를 향해 집중합니다" },
            ],
            ImageDescription: [
                { title: "늑대처럼 팀워크를 통해 조화를 이끌어내요."},
                { title: "늑대처럼 진솔한 태도로 신뢰를 얻어요."},
                { title: "늑대처럼 단결력을 발휘해 관계를 강화해요."},
            ],
            imageAlt: "늑대와 호랑이 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
        },
        "겁재": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "의견을 명확히 전달합니다", description: "대화에서 자신의 생각을 분명히 전달합니다" },
                { title: "목표를 향해 도전합니다", description: "도전적이고 즐겁게 목표를 달성합니다" },
                { title: "협력과 독립을 겸비합니다", description: "함께 일하면서도 스스로 문제를 해결합니다" },
                { title: "리더십이 강합니다", description: "팀을 이끌며 목표를 향해 집중합니다" },
            ],
            ImageDescription: [
                { title: "호랑이처럼 용기로 주변 사람에게 의지를 줘요."},
                { title: "호랑이처럼 강한 추진력으로 모임을 이끌어요."},
                { title: "호랑이처럼 솔직한 태도로 관계를 깊게 만들어요."},
            ],
            imageAlt: "늑대와 호랑이 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
        },
        "식신": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "변화를 빠르게 받아들입니다", description: "상대방의 의견을 열심히 수용합니다" },
                { title: "다양한 의견을 존중합니다", description: "다른 사람의 생각을 경청하며 협력합니다" },
                { title: "책임감을 갖고 임무를 완수합니다", description: "맡은 일을 끝까지 해내며 신뢰를 쌓습니다" },
                { title: "조화를 중요하게 생각합니다", description: "의견을 조율하며 원만한 관계를 만듭니다" },
            ],
            ImageDescription: [
                { title: "소처럼 꾸준한 관심으로 사람들에게 믿음을 줘요."},
                { title: "소처럼 성실함으로 주변을 든든히 지켜줘요."},
                { title: "소처럼 차분한 태도로 안정적인 관계를 유지해요."},
            ],
            imageAlt: "소",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
        },
        "상관": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "변화를 빠르게 받아들입니다", description: "상대방의 의견을 열심히 수용합니다" },
                { title: "다양한 의견을 존중합니다", description: "다른 사람의 생각을 경청하며 협력합니다" },
                { title: "책임감을 갖고 임무를 완수합니다", description: "맡은 일을 끝까지 해내며 신뢰를 쌓습니다" },
                { title: "조화를 중요하게 생각합니다", description: "의견을 조율하며 원만한 관계를 만듭니다" },
            ],
            ImageDescription: [
                { title: "원숭이처럼 유쾌한 분위기로 사람들을 즐겁게 해요."},
                { title: "원숭이처럼 재치 있는 말솜씨로 대화를 이끌어요."},
                { title: "원숭이처럼 열린 마음으로 다양한 사람과 어울려요."},
            ],
            imageAlt: "원숭이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
        },
        "편재": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "변화를 빠르게 받아들입니다", description: "상대방의 의견을 열심히 수용합니다" },
                { title: "다양한 의견을 존중합니다", description: "다른 사람의 생각을 경청하며 협력합니다" },
                { title: "책임감을 갖고 임무를 완수합니다", description: "맡은 일을 끝까지 해내며 신뢰를 쌓습니다" },
                { title: "조화를 중요하게 생각합니다", description: "의견을 조율하며 원만한 관계를 만듭니다" },
            ],
            ImageDescription: [
                { title: "독수리처럼 넓은 시야로 사람들의 고민을 이해해요."},
                { title: "독수리처럼 목표를 공유하며 협력 관계를 만들어요."},
                { title: "독수리처럼 강한 리더십으로 주변을 이끌어요."},
            ],
            imageAlt: "독수리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
        },
        "정재": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "변화를 빠르게 받아들입니다", description: "상대방의 의견을 열심히 수용합니다" },
                { title: "다양한 의견을 존중합니다", description: "다른 사람의 생각을 경청하며 협력합니다" },
                { title: "책임감을 갖고 임무를 완수합니다", description: "맡은 일을 끝까지 해내며 신뢰를 쌓습니다" },
                { title: "조화를 중요하게 생각합니다", description: "의견을 조율하며 원만한 관계를 만듭니다" },
            ],
            ImageDescription: [
                { title: "개미처럼 헌신적인 태도로 신뢰를 쌓아요."},
                { title: "개미처럼 세심하게 배려하며 관계를 유지해요."},
                { title: "개미처럼 협동심으로 공동의 목표를 이루어요."},
            ],
            imageAlt: "개미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
        },
        "편관": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "변화를 빠르게 받아들입니다", description: "상대방의 의견을 열심히 수용합니다" },
                { title: "다양한 의견을 존중합니다", description: "다른 사람의 생각을 경청하며 협력합니다" },
                { title: "책임감을 갖고 임무를 완수합니다", description: "맡은 일을 끝까지 해내며 신뢰를 쌓습니다" },
                { title: "조화를 중요하게 생각합니다", description: "의견을 조율하며 원만한 관계를 만듭니다" },
            ],
            ImageDescription: [
                { title: "사자처럼 결단력으로 주변 사람을 안심시켜요."},
                { title: "사자처럼 책임감 있는 태도로 신뢰를 얻어요."},
                { title: "사자처럼 강한 의지로 어려운 상황을 도와줘요."},
            ],
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
        },
        "정관": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "변화를 빠르게 받아들입니다", description: "상대방의 의견을 열심히 수용합니다" },
                { title: "다양한 의견을 존중합니다", description: "다른 사람의 생각을 경청하며 협력합니다" },
                { title: "책임감을 갖고 임무를 완수합니다", description: "맡은 일을 끝까지 해내며 신뢰를 쌓습니다" },
                { title: "조화를 중요하게 생각합니다", description: "의견을 조율하며 원만한 관계를 만듭니다" },
            ],
            ImageDescription: [
                { title: "말처럼 활기찬 태도로 주변 분위기를 밝게 해요."},
                { title: "말처럼 부드러운 소통으로 관계를 원활히 해요."},
                { title: "말처럼 상황에 맞는 융통성으로 신뢰를 얻어요."},
            ],
            imageAlt: "말",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
        },
        "편인": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "변화에 빠르게 적응합니다", description: "새로운 상황에 유연히 대처하며 신뢰를 쌓습니다." },
                { title: "팀워크를 중시합니다", description: "협력을 통해 최고의 결과를 만듭니다." },
                { title: "다양한 의견을 존중합니다", description: "타인의 생각을 배려하며 균형을 찾습니다." },
                { title: "밝고 긍정적입니다", description: "열린 마음으로 사람들에게 에너지를 전합니다." },
            ],
            ImageDescription: [
                { title: "올빼미처럼 통찰력으로 사람들의 고민을 이해해요."},
                { title: "올빼미처럼 침착한 태도로 신뢰를 줘요."},
                { title: "올빼미처럼 현명한 조언으로 관계를 발전시켜요."},
            ],
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
        },
        "정인": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "변화에 빠르게 적응합니다", description: "새로운 상황에 유연히 대처하며 신뢰를 쌓습니다." },
                { title: "팀워크를 중시합니다", description: "협력을 통해 최고의 결과를 만듭니다." },
                { title: "다양한 의견을 존중합니다", description: "타인의 생각을 배려하며 균형을 찾습니다." },
                { title: "밝고 긍정적입니다", description: "열린 마음으로 사람들에게 에너지를 전합니다." },
            ],
            ImageDescription: [
                { title: "코끼리처럼 배려로 사람들에게 안정감을 줘요."},
                { title: "코끼리처럼 포용력 있는 태도로 갈등을 해소해요."},
                { title: "코끼리처럼 진중한 태도로 깊은 신뢰를 얻어요."},
            ],
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
        },
    };

    const currentAnalysis = analysisData[result.manseMonthGroundRelation] || {
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
                        {result.manseMonthGroundRelation}
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
                                {/*<span className="strength-description">👉 {item.description}</span>*/}
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
