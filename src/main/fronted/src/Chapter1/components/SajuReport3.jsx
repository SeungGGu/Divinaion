import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css'; // 동일한 스타일을 사용

const SajuReport3 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate(); // navigate 생성

    const analysisData = {
        "비견": {
            title: name + "님의 사회적 성향과 강점을 확인하세요",
            strengths: [
                { title: "협력적이에요", description: "주변 사람들과 함께 조화를 이루며 협력해요" },
                { title: "자신감이 있어요", description: "스스로를 믿고 당당하게 행동해요" },
                { title: "솔직해요", description: "자신의 생각과 감정을 진솔하게 표현해요" },
                { title: "끈기가 있어요", description: "어려움에도 끝까지 포기하지 않아요" },
            ],
            TitleDescription: "늑대처럼 협력과 조화로 목표를 이루는 성향입니다",
            subDescription: [
                { description: "늑대처럼 주변과 조화를 이루며 목표를 달성하세요" },
                { description: "늑대처럼 독립적 태도로 도전해 자신감을 키우세요" },
            ],
            imageAlt: "늑대",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
        },
        "겁재": {
            title: name + "님의 사회적 성향과 강점을 확인하세요",
            strengths: [
                { title: "도전적이에요", description: "새로운 일에 망설이지 않고 도전해요" },
                { title: "목표 지향적이에요", description: "목표를 위해 끝까지 포기하지 않아요" },
                { title: "활동적이에요", description: "열정적으로 움직이며 활기를 더해요" },
                { title: "독립적이에요", description: "스스로 문제를 해결하며 나아가요" },
            ],
            TitleDescription: "호랑이처럼 용기와 자신감을 가진 성향입니다",
            subDescription: [
                { description: "호랑이처럼 강한 의지로 목표를 이루어보세요" },
                { description: "호랑이처럼 도전적 태도로 가능성을 넓히세요" },
            ],
            imageAlt: "호랑이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
        },
        "식신": {
            title: name + "님의 사회적 성향과 강점을 확인하세요",
            strengths: [
                { title: "자기 관리가 철저해요", description: "스스로 균형 잡힌 삶을 유지해요" },
                { title: "성실해요", description: "꾸준히 노력해 맡은 일을 끝까지 해내요" },
                { title: "섬세해요", description: "작은 부분도 놓치지 않고 꼼꼼하게 일해요" },
                { title: "배려심이 있어요", description: "타인의 감정을 이해하고 돕기 위해 노력해요" },
            ],
            TitleDescription: "소처럼 성실하고 꾸준함을 지닌 성향입니다",
            subDescription: [
                { description: "소처럼 끈기 있게 목표를 향해 나아가세요" },
                { description: "소처럼 작은 일도 꼼꼼히 해내며 목표를 이루세요" },
            ],
            imageAlt: "소",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
        },
        "상관": {
            title: name + "님의 사회적 성향과 강점을 확인하세요",
            strengths: [
                { title: "창의적이에요", description: "새로운 아이디어로 문제를 해결해요" },
                { title: "자유로워요", description: "틀에 얽매이지 않고 유연하게 생각해요" },
                { title: "친화력이 좋아요", description: "사람들과 쉽게 어울리며 활발하게 소통해요" },
                { title: "도전적이에요", description: "새로운 일에 두려움 없이 과감하게 도전해요" },
            ],
            TitleDescription: "원숭이처럼 재치와 창의력이 돋보이는 성향입니다",
            subDescription: [
                { description: "원숭이처럼 유연한 사고로 새 도전에 나서보세요" },
                { description: "원숭이처럼 창의적 아이디어로 변화를 만드세요" },
            ],
            imageAlt: "원숭이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
        },
        "편재": {
            title: name + "님의 사회적 성향과 강점을 확인하세요",
            strengths: [
                { title: "현실적이에요", description: "자원을 효율적으로 활용해 해결책을 찾아요" },
                { title: "목표 지향적이에요", description: "목표를 이루기 위해 구체적으로 계획해요" },
                { title: "결단력이 있어요", description: "중요한 순간 신속하게 결정을 내려요" },
                { title: "독립적이에요", description: "스스로 문제를 해결하며 자립심이 강해요" },
            ],
            TitleDescription: "독수리처럼 높은 목표를 향해 집중하는 성향입니다",
            subDescription: [
                { description: "독수리처럼 결단력 있게 목표를 이루세요" },
                { description: "당신의 결단력과 집중력이 큰 성과를 만듭니다" },
            ],
            imageAlt: "독수리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
        },
        "정재": {
            title: name + "님의 사회적 성향과 강점을 확인하세요",
            strengths: [
                { title: "책임감이 강해요", description: "맡은 일을 끝까지 해내며 신뢰를 얻어요" },
                { title: "안정을 선호해요", description: "변화보다 일상의 균형을 유지해요" },
                { title: "꾸준히 노력해요", description: "목표를 향해 포기하지 않고 나아가요" },
                { title: "신중하게 판단해요", description: "중요한 결정을 꼼꼼히 내려요" },
            ],
            TitleDescription: "개미처럼 꼼꼼하고 성실한 성향입니다",
            subDescription: [
                { description: "개미처럼 체계적으로 성과를 이루세요" },
                { description: "개미처럼 작은 일도 꼼꼼히 해내세요" },
            ],
            imageAlt: "개미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
        },
        "편관": {
            title: name + "님의 사회적 성향과 강점을 확인하세요",
            strengths: [
                { title: "리더십 발휘해요", description: "사람들을 이끌며 상황을 주도해요" },
                { title: "책임감 있어요", description: "맡은 일을 끝까지 해내며 책임을 다해요" },
                { title: "신속하게 판단해요", description: "중요한 순간에 정확히 결정을 내려요" },
                { title: "목표 지향적이에요", description: "목표를 향해 흔들림 없이 나아가요" },
            ],
            TitleDescription: "사자처럼 강한 리더십을 가진 성향입니다",
            subDescription: [
                { description: "사자처럼 결단력 있게 신뢰를 쌓아보세요" },
                { description: "사자처럼 어려운 상황에서 중심을 잡아보세요" },
            ],
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
        },
        "정관": {
            title: name + "님의 사회적 성향과 강점을 확인하세요",
            strengths: [
                { title: "책임감이 강해요", description: "맡은 일을 철저히 해내며 신뢰를 쌓아요." },
                { title: "규칙을 잘 지켜요", description: "질서를 중시하며 약속을 꼭 지켜요." },
                { title: "꾸준히 노력해요", description: "목표를 포기하지 않고 지속적으로 나아가요." },
                { title: "안정을 중시해요", description: "변화를 싫어하고 평온함을 유지해요." },
            ],
            TitleDescription: "말처럼 신속하고 책임감 있는 성향입니다.",
            subDescription: [
                { description: "말처럼 빠르게 목표를 향해 나아가세요." },
                { description: "말처럼 꾸준히 노력해 성과를 만들어보세요." },
            ],
            imageAlt: "말처럼 빠르고 책임감 있게",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.webp`,
        },
        "편인": {
            title: name + "님의 사회적 성향과 강점을 확인하세요",
            strengths: [
                { title: "창의적이에요", description: "새로운 아이디어로 문제를 해결해요" },
                { title: "호기심 많아요", description: "다양한 분야에 관심을 가지고 탐구해요" },
                { title: "유연해요", description: "상황에 맞게 적응하며 해결책을 찾아요" },
                { title: "독립적이에요", description: "스스로 결정하고 행동해요" },
            ],
            TitleDescription: "올빼미처럼 깊은 통찰력을 지닌 성향입니다",
            subDescription: [
                { description: "올빼미처럼 상황을 분석해 해결책을 찾으세요" },
                { description: "올빼미처럼 유연한 사고로 신뢰를 얻으세요" },
            ],
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
        },
        "정인": {
            title: name + "님의 사회적 성향과 강점을 확인하세요",
            strengths: [
                { title: "신중해요", description: "중요한 결정을 깊이 생각해 판단해요" },
                { title: "열정적으로 배워요", description: "새로운 지식과 정보를 배우는 것을 즐겨요" },
                { title: "분석적이에요", description: "상황을 논리적으로 분석하며 해결해요" },
                { title: "성실해요", description: "목표를 향해 꾸준히 노력해요" },
            ],
            TitleDescription: "코끼리처럼 온화하고 배려심 있는 성향입니다",
            subDescription: [
                { description: "코끼리처럼 꾸준한 배려로 신뢰를 쌓으세요" },
                { description: "코끼리처럼 따뜻한 관계를 맺고 나아가세요" },
            ],
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
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

            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">2. {name}님의 사회적 성향과 강점을 알려드립니다</h1>
            <p className="report-subtitle">사회에서 신뢰를 얻고 성공으로 이끄는 방법을 확인하세요</p>

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
                    <p className="analysis-image-description">{currentAnalysis.TitleDescription}</p>
                    <ul className="strengths-list">
                        {currentAnalysis.subDescription.map((item, index) => (
                            <li key={index}>
                                <strong>👉 {item.description}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="footer-text">사회적 강점을 발휘하면 신뢰와 성공을 쌓을 수 있습니다</p>
        </div>
    );
};

export default SajuReport3;
