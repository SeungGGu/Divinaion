import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css'; // 동일한 스타일을 사용

const SajuReport3 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate(); // navigate 생성

    const analysisData = {
        "늑대": {
            title: "늑대처럼 협력하며 독립적으로 살아가세요",
            strengths: [
                { title: "협력적이에요", description: "팀의 힘을 믿고 함께 협력해요." },
                { title: "자신감이 있어요", description: "자신을 믿고 당당하게 행동합니다." },
                { title: "경쟁심이 있어요", description: "경쟁을 통해 더 나은 결과를 이끌어내요." },
                { title: "솔직해요", description: "솔직하게 자신의 생각을 표현해요." },
                { title: "끈기가 있어요", description: "포기하지 않고 끝까지 노력해요." },
            ],
            description: "늑대처럼 사람들과 잘 어울리면서도 혼자서도 능숙하게 일을 해내는 독립심이 돋보여요. 도전 앞에서도 자신감이 넘칩니다.",
            imageAlt: "늑대처럼 협력하며 독립적으로",
            imageSrc: `${process.env.PUBLIC_URL}/images/wolf.png`,
        },
        "호랑이": {
            title: "호랑이처럼 자신감 넘치게 도전해 보세요",
            strengths: [
                { title: "도전적이에요", description: "새로운 일에 망설이지 않고 도전해요." },
                { title: "목표 지향적이에요", description: "목표를 위해 끝까지 포기하지 않아요." },
                { title: "활동성이 강해요", description: "열정적으로 움직이며 활기를 더해요." },
                { title: "경쟁심이 있어요", description: "경쟁을 통해 더 나은 성과를 얻어요." },
                { title: "독립적이에요", description: "스스로 문제를 해결하며 나아가요." },
            ],
            description: "호랑이처럼 어떤 상황에서도 흔들리지 않고 용감하게 도전하는 자신감을 가지세요. 그 강한 자신감이 큰 힘이 될 거예요.",
            imageAlt: "호랑이처럼 자신감 넘치게",
            imageSrc: `${process.env.PUBLIC_URL}/images/tiger.png`,
        },
        "소": {
            title: "소처럼 꾸준하고 성실하게 끝까지 해내세요",
            strengths: [
                { title: "자기 관리", description: "스스로 돌보며 균형 잡힌 삶을 유지해요." },
                { title: "성실해요", description: "꾸준히 노력해 맡은 일을 끝까지 해내요." },
                { title: "섬세해요", description: "작은 부분도 놓치지 않고 꼼꼼하게 일해요." },
                { title: "배려심이 있어요", description: "타인의 감정을 이해하며 돕기 위해 노력해요." },
                { title: "인내심이 강해요", description: "어려운 상황에서도 포기하지 않아요." },
            ],
            description: "소처럼 성실하게 일을 차근차근 이어가는 성향이에요. 작은 일도 성실하게 해내며 자신감을 키워나가세요.",
            imageAlt: "소처럼 꾸준하고 성실하게",
            imageSrc: `${process.env.PUBLIC_URL}/images/cow.png`,
        },
        "원숭이": {
            title: "원숭이처럼 재치 있고 창의적으로 도전해요",
            strengths: [
                { title: "창의적이에요", description: "새로운 아이디어로 문제를 해결해요." },
                { title: "자유로워요", description: "틀에 얽매이지 않고 유연하게 생각해요." },
                { title: "친화력이 좋아요", description: "사람들과 쉽게 어울리며 활발하게 소통해요." },
                { title: "설득력이 있어요", description: "솔직하게 생각을 전달하며 설득해요." },
                { title: "도전적이에요", description: "새로운 일에 두려움 없이 과감하게 도전해요." },
            ],
            description: "원숭이처럼 기발한 재치와 창의력이 넘쳐나요. 새로운 아이디어로 주위를 놀라게 해보세요.",
            imageAlt: "원숭이처럼 재치 있고 창의적으로",
            imageSrc: `${process.env.PUBLIC_URL}/images/monkey.png`,
        },
        "독수리": {
            title: "독수리처럼 목표를 향해 정확히 집중하세요",
            strengths: [
                { title: "현실적이에요", description: "자원을 효율적으로 사용해 해결책을 찾아요." },
                { title: "목표 지향적이에요", description: "목표를 이루기 위해 구체적으로 계획해요." },
                { title: "빠른 판단력이 있어요", description: "중요한 순간 신속하게 결정을 내려요." },
                { title: "독립적이에요", description: "스스로 문제를 해결하며 자립심이 강해요." },
                { title: "재정 관리에 능해요", description: "재물의 가치를 잘 이해하고 신중하게 관리해요." },
            ],
            description: "독수리처럼 멀리 보며 목표를 향해 흔들림 없이 나아가는 결단력이 있어요. 목표에 집중해보세요.",
            imageAlt: "독수리처럼 목표를 향해 정확히",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
        },
        "개미": {
            title: "개미처럼 체계적으로 성실하게 성과를 이루세요",
            strengths: [
                { title: "책임감이 강해요", description: "끝까지 일을 해내며 신뢰를 얻어요." },
                { title: "안정을 선호해요", description: "변화를 피하고 일상에 집중해요." },
                { title: "꾸준히 노력해요", description: "목표를 향해 계속 나아가요." },
                { title: "신중하게 판단해요", description: "중요한 결정을 신중히 내려요." },
                { title: "재정을 잘 관리해요", description: "돈을 잘 관리하며 실질적 이익을 중시해요." },
            ],
            description: "개미처럼 작은 일도 꼼꼼하게 해내며 꾸준히 노력하는 성향이에요. 계획적으로 접근하여 큰 성과를 만들어가세요.",
            imageAlt: "개미처럼 체계적으로 성실하게",
            imageSrc: `${process.env.PUBLIC_URL}/images/ant.png`,
        },
        "사자": {
            title: "사자처럼 리더십을 발휘해 모두의 존경을 받으세요",
            strengths: [
                { title: "리더십 발휘해요", description: "사람들을 이끌며 상황을 주도해요." },
                { title: "책임감 있어요", description: "끝까지 일을 해내며 책임을 다해요." },
                { title: "신속하게 판단해요", description: "중요한 순간에 빠르게 결정을 내려요." },
                { title: "목표 지향적이에요", description: "목표를 향해 흔들림 없이 나아가요." },
                { title: "단호해요", description: "흔들리지 않고 확고한 생각을 지켜요." },
            ],
            description: "사자처럼 강한 리더십으로 주위 사람들의 존경을 받고, 어려운 상황에서도 중심을 잡고 이끄는 모습이 인상적입니다.",
            imageAlt: "사자처럼 리더십 발휘",
            imageSrc: `${process.env.PUBLIC_URL}/images/lion.png`,
        },
        "말": {
            title: "말처럼 빠르고 책임감 있게 일하세요",
            strengths: [
                { title: "책임감이 강해요", description: "맡은 일을 철저히 해내며 신뢰를 쌓아요." },
                { title: "규칙을 잘 지켜요", description: "질서를 중시하며 약속을 꼭 지켜요." },
                { title: "꾸준히 노력해요", description: "목표를 포기하지 않고 지속적으로 나아가요." },
                { title: "안정을 중시해요", description: "변화를 싫어하고 평온함을 유지해요." },
                { title: "도덕적으로 행동해요", description: "모범이 되어 도덕성을 지켜요." },
            ],
            description: "말처럼 신속하고 꾸준하게 자신이 맡은 일을 끝까지 해내는 책임감이 돋보여요. 맡은 길을 목표로 향해 나아가는 모습이 인상적입니다.",
            imageAlt: "말처럼 빠르고 책임감 있게",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        "올빼미": {
            title: "올빼미처럼 지혜롭게 문제를 해결하고 통찰력을 발휘하세요",
            strengths: [
                { title: "창의적이에요", description: "새로운 아이디어로 문제를 해결해요." },
                { title: "호기심 많아요", description: "다양한 분야에 관심을 가지고 탐구해요." },
                { title: "독립적이에요", description: "스스로 결정하고 행동해요." },
                { title: "유연해요", description: "상황에 맞게 적응하며 해결책을 찾아요." },
                { title: "탐구적이에요", description: "새로운 지식을 배우는 것을 즐겨요." },
            ],
            description: "올빼미처럼 깊이 있는 사고로 문제를 지혜롭게 해결하는 능력이 있어요. 고요한 시간에 통찰력을 키우는 모습이 인상적입니다.",
            imageAlt: "올빼미처럼 지혜롭게 문제 해결",
            imageSrc: `${process.env.PUBLIC_URL}/images/owl.png`,
        },
        "코끼리": {
            title: "코끼리처럼 온화하고 배려심 깊게 천천히 나아가세요",
            strengths: [
                { title: "신중해요", description: "중요한 결정을 깊이 생각하고 판단해요." },
                { title: "열정적으로 배워요", description: "새로운 지식과 정보를 배우는 것을 즐겨요." },
                { title: "분석적 사고를 해요", description: "상황을 논리적으로 분석하고 해결해요." },
                { title: "지혜로워요", description: "다양한 경험을 통해 깊은 통찰력을 가졌어요." },
                { title: "성실해요", description: "목표를 향해 꾸준히 노력해요." },
            ],
            description: "코끼리처럼 온화한 배려심으로 주위 사람들과 따뜻한 관계를 맺으며, 천천히 꾸준히 나아가는 모습이 인상적입니다.",
            imageAlt: "코끼리처럼 온화하고 배려심 깊게",
            imageSrc: `${process.env.PUBLIC_URL}/images/elephant.png`,
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
