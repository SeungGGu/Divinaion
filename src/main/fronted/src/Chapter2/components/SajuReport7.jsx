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
        비견: {
            title: name + '님의 성향을 효과적으로 활용하는 방법',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 제안합니다",
            strengths: [
                { title: "팀워크를 중요하게 생각하세요.", description: "협력해 목표를 함께 이루려는 성향이 있습니다." },
                { title: "어려움을 함께 나누세요.", description: "혼자보다 함께 문제를 해결하며 성장합니다." },
                { title: "자신의 의견을 당당하게 표현하세요.", description: "솔직한 성향으로 자신의 생각을 표현합니다." },
                { title: "책임을 분담하세요.", description: "사람들과 책임을 나누어 더 큰 성과를 만듭니다." },
                { title: "주변 사람을 돕는 데 앞장서세요.", description: "다른 사람의 성공에도 적극적으로 기여합니다." },
            ],
            description: "늑대처럼 책임감을 발휘하는 직장 생활. 책임감을 중시하는 늑대처럼, 팀 내에서 강점을 발휘하며 맡은 일을 책임 있게 수행해 보세요. 어려운 상황에서도 흔들림 없이 나아가는 모습이 신뢰를 줄 거예요.",
            imageAlt: "늑대처럼 책임감을 발휘하는 직장 생활",
            imageSrc: `${process.env.PUBLIC_URL}/images/wolf.png`,
        },
        겁재: {
            title: name + '님의 성향을 효과적으로 활용하는 방법',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 제안합니다",
            strengths: [
                { title: "팀과 함께 도전하세요.", description: "경쟁과 협력을 통해 목표를 성취합니다." },
                { title: "독립적인 판단을 존중하세요.", description: "스스로 결정을 내리고 빠르게 실행합니다." },
                { title: "새로운 기회를 놓치지 마세요.", description: "기회를 잡고 적극적으로 활용하는 성향입니다." },
                { title: "목표를 향해 끝까지 밀고 나가세요.", description: "한번 결정한 일은 끝까지 추진합니다." },
                { title: "변화를 두려워하지 마세요.", description: "변화에 빠르게 적응하고 새로운 환경을 즐깁니다." },
            ],
            description: "호랑이처럼 목표를 세우고 빠르게 성취하세요. 강한 의지로 목표를 향해 나아가는 호랑이처럼, 꾸준히 노력하여 성과를 이루세요. 힘으로 더 많은 성과를 얻을 수 있습니다.",
            imageAlt: "호랑이처럼 목표를 세우고 빠르게 성취하세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/tiger.png`,
        },
        식신: {
            title: name + '님의 성향을 효과적으로 활용하는 방법',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 제안합니다",
            strengths: [
                { title: "창의력을 발휘하세요.", description: "독창적인 아이디어로 문제를 해결해 나갑니다." },
                { title: "목표를 세우고 꾸준히 노력하세요.", description: "한 번 정한 목표는 끝까지 노력해 성취합니다." },
                { title: "현실적인 계획을 세우세요.", description: "현실에 맞는 계획을 세워 실행해 나갑니다." },
                { title: "즐겁게 일하는 방식을 찾으세요.", description: "일에 대한 열정과 즐거움을 가지고 성과를 냅니다." },
                { title: "결과를 중시하세요.", description: "효율적으로 일을 마무리하는 성향이 있습니다." },
            ],
            description: "소처럼 성실하고 끈기 있게 일하세요. 소처럼 꾸준하고 끈기 있는 태도로 목표를 향해 한 걸음씩 나아가며 신뢰를 쌓아가세요. 흔들림 없는 모습이 돋보일 거예요.",
            imageAlt: "소처럼 성실하고 끈기 있게 일하세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/cow.png`,
        },
        상관: {
            title: name + '님의 성향을 효과적으로 활용하는 방법',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 제안합니다",
            strengths: [
                { title: "도전적인 목표를 설정하세요.", description: "새로운 목표를 향해 끝없이 도전합니다." },
                { title: "창의적인 아이디어를 내세요.", description: "독창적인 사고로 문제를 해결합니다." },
                { title: "자유로운 환경에서 일하세요.", description: "자유롭고 유연하게 일하는 것을 선호합니다." },
                { title: "강한 자기 표현을 하세요.", description: "자신의 생각을 적극적으로 표현하는 성향입니다." },
                { title: "틀에 얽매이지 마세요.", description: "기존의 틀을 깨고 새로운 방식으로 접근합니다." },
            ],
            description: "원숭이처럼 유연하게 문제를 해결해요. 창의적인 사고로 문제를 해결하는 능력을 발휘해요. 새로운 아이디어로 자유롭게 문제를 풀어나가는 모습을 보여주세요.",
            imageAlt: "원숭이처럼 유연하게 문제를 해결해요",
            imageSrc: `${process.env.PUBLIC_URL}/images/monkey.png`,
        },
        편재: {
            title: name + '님의 성향을 효과적으로 활용하는 방법',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 제안합니다",
            strengths: [
                { title: "목표를 명확하게 세우세요.", description: "현실적인 목표를 설정하고 꾸준히 달성합니다." },
                { title: "결정을 신속하게 내리세요.", description: "빠르게 판단하고 상황에 맞게 결정을 내립니다." },
                { title: "재정 관리를 신중히 하세요.", description: "효율적으로 자원을 관리합니다." },
                { title: "독립적으로 문제를 해결하세요.", description: "스스로 문제를 파악하고 해결합니다." },
                { title: "새로운 기회를 놓치지 마세요.", description: "기회를 재빨리 포착해 성공적으로 활용합니다." },
            ],
            description: "독수리처럼 높은 목표를 향해 도전해요. 멀리 내다보며 목표를 세우고 꾸준히 노력하세요. 독수리처럼 목표를 향해 힘차게 비상하는 모습이 돋보일 거예요.",
            imageAlt: "독수리처럼 높은 목표를 향해 도전해요",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
        },
        정재: {
            title: name + '님의 성향을 효과적으로 활용하는 방법',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 제안합니다",
            strengths: [
                { title: "목표를 명확하게 설정하세요", description: "목표를 명확하게 세우고 차근차근 달성합니다." },
                { title: "재정적으로 신중하게 관리하세요", description: "자산과 자원을 책임감 있게 관리합니다." },
                { title: "성실하게 일을 끝까지 마무리하세요", description: "맡은 일을 끝까지 완수해 신뢰를 얻습니다." },
                { title: "디테일에 신경 쓰세요", description: "작은 부분도 꼼꼼하게 관리하여 성과를 높입니다." },
                { title: "안정적인 성과를 추구하세요", description: "꾸준한 성과를 통해 안정적인 발전을 이룹니다." },
            ],
            description: "개미처럼 부지런하고 끈기 있게 일하세요 \n" +
                "작은 일도 성실하게 처리하며 팀과 함께 목표를 이루세요. 꾸준함이 성과를 쌓는 데 큰 힘이 됩니다",
            imageAlt: "개미처럼 부지런하고 끈기 있게 일하세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
        },
        편관: {
            title: name + '님의 성향을 효과적으로 활용하는 방법',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 제안합니다",
            strengths: [
                { title: "결단력 있게 행동하세요", description: "중요한 순간에 신속하게 결정을 내립니다" },
                { title: "어려운 상황에서도 강하게 밀고 나가세요", description: "도전적인 상황에서 리더십을 발휘합니다." },
                { title: "책임감을 가지고 임무를 수행하세요", description: "맡은 역할을 책임감 있게 완수합니다." },
                { title: "명확한 기준을 세우고 지키세요", description: "규칙과 원칙을 확실하게 지키며 일합니다." },
                { title: "문제를 결단력으로 해결하세요", description: "어려운 문제를 과감하게 해결합니다" },
            ],
            description: "사자처럼 결단력 있게 이끌어주세요 \n" +
                "책임감을 갖고 리더십을 발휘해 중요한 결정을 내리는 연습을 해보세요. 사자처럼 목표를 향해 흔들림 없이 나아가세요",
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
        },
        정관: {
            title: name + '님의 성향을 효과적으로 활용하는 방법',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 제안합니다",
            strengths: [
                { title: "신뢰를 바탕으로 행동하세요.", description: "주어진 일에 신뢰를 쌓으며 성실하게 수행합니다." },
                { title: "규칙과 원칙을 지키세요.", description: "정해진 규범을 준수하며 일을 처리합니다." },
                { title: "책임감을 가지고 일하세요.", description: "맡은 일을 끝까지 책임감 있게 완수합니다." },
                { title: "조화를 중요하게 생각하세요.", description: "주변 사람들과 원만한 관계를 유지합니다." },
                { title: "안정된 결과를 추구하세요.", description: "꾸준한 노력으로 안정적인 성과를 이뤄냅니다." },
            ],
            description: "말처럼 자유롭게 도전하고 앞으로 나아가세요. 말처럼 용기 있게 새로운 도전에 나서보세요. 배움에 대한 열정으로 빠르게 성취를 이뤄가세요.",
            imageAlt: "말처럼 자유롭게 도전하고 앞으로 나아가세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        편인: {
            title: name + '님의 성향을 효과적으로 활용하는 방법',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 제안합니다",
            strengths: [
                { title: "목표를 설정하세요.", description: "명확한 목표를 세우고 완수합니다." },
                { title: "분석적으로 사고하세요.", description: "데이터를 바탕으로 빠르게 판단합니다." },
                { title: "문제를 창의적으로 해결하세요.", description: "독창적인 방법으로 문제를 처리합니다." },
                { title: "새로운 아이디어를 개발하세요.", description: "발상의 전환으로 기회를 만듭니다." },
                { title: "성실하게 맡은 일을 마무리하세요.", description: "책임감을 가지고 끝까지 완수합니다." },
            ],
            description: "올빼미처럼 신중하게 판단하고 결정하세요  \n" +
                "깊이 있는 사고로 중요한 결정을 내리는 능력이 있어요. 올빼미처럼 상황을 통찰하여 최선의 선택을 찾아보세요",
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
        },
        정인: {
            title: name + '님의 성향을 효과적으로 활용하는 방법',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 제안합니다",
            strengths: [
                { title: "계획을 세우고 차근차근 실행하세요.", description: "신중한 계획으로 일을 철저히 처리합니다." },
                { title: "배움에 집중하세요.", description: "새로운 지식을 습득하는 데 열정을 보입니다." },
                { title: "문제를 꼼꼼하게 분석하세요.", description: "세부적인 부분까지 놓치지 않고 해결합니다." },
                { title: "규칙을 잘 지키세요.", description: "체계적인 방법으로 규정을 준수합니다." },
                { title: "안정적으로 성과를 이루세요.", description: "꾸준한 노력으로 안정된 결과를 만들어냅니다" },
            ],
            description: "코끼리처럼 힘있고 안정적으로 목표를 이루세요\n" +
                "강한 의지와 안정감을 바탕으로 목표를 꾸준히 향해 나아가세요. 코끼리처럼 흔들림 없는 모습을 보여주세요",
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
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
