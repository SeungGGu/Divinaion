import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSaju} from '../../context/SajuContext';
import '../../Chapter1/css/SajuReport2.css'; // 기존 스타일 재사용

const SajuReport8 = () => {
    const {sajuData} = useSaju();
    const {result, name} = sajuData;
    const navigate = useNavigate();

    // 관계 데이터 매핑
    const analysisData = {
        비견: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "팀워크를 중요하게 생각하세요.", description: "협력해 목표를 함께 이루려는 성향이 있습니다." },
                { title: "어려움을 함께 나누세요.", description: "혼자보다 함께 문제를 해결하며 성장합니다." },
                { title: "자신의 의견을 당당하게 표현하세요.", description: "솔직한 성향으로 자신의 생각을 표현하세요." },
                { title: "책임을 분담하세요.", description: "사람들과 책임을 나누어 더 큰 성과를 만드세요." },
            ],
            TitleDescription: "늑대처럼 팀워크로 목표를 이루세요",
            subDescription: [
                {description: "팀과 협력하며 책임감을 발휘하세요"},
                {description: "흔들림 없이 성장하는 모습을 보여주세요"},
            ],
            imageAlt: "늑대처럼 책임감을 발휘하는 직장 생활",
            imageSrc: `${process.env.PUBLIC_URL}/images/wolf.png`,
        },
        겁재: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "팀과 함께 성취하세요.", description: "경쟁과 협력을 통해 목표를 성취합니다." },
                { title: "결정을 내리고 실행하세요.", description: "독립적으로 판단하며 빠르게 실행합니다." },
                { title: "기회를 놓치지 마세요.", description: "새로운 기회를 긍정적으로 활용해 보세요." },
                { title: "변화에 적응하며 성장하세요.", description: "변화 속에서도 적응하며 성과를 만들어냅니다." },
            ],
            TitleDescription: "호랑이처럼 목표를 향해 빠르게 성취하세요",
            subDescription: [
                {description: "강한 의지로 목표를 향해 나아가세요."},
                {description: "꾸준히 노력해 더 큰 성과를 만들어보세요"},
            ],
            imageAlt: "호랑이처럼 목표를 세우고 빠르게 성취하세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/tiger.png`,
        },
        식신: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "창의력을 발휘하세요.", description: "독창적인 아이디어로 문제를 해결해 나가세요" },
                { title: "목표를 꾸준히 이루세요", description: "한 번 정한 목표를 끝까지 노력해 성취하세요." },
                { title: "현실적인 계획을 세우세요.", description: "현실에 맞는 계획을 세워 실행해 나가세요." },
                { title: "결과를 중시하세요.", description: "효율적으로 일을 마무리하며 성과를 만드세요." },
            ],
            TitleDescription: "소처럼 성실하고 끈기 있게 일하세요",
            subDescription: [
                {description: "꾸준함으로 목표를 향해 한 걸음씩 나아가세요"},
                {description: "흔들림 없는 모습이 신뢰를 만들어갈 거예요"},
            ],
            imageAlt: "소처럼 성실하고 끈기 있게 일하세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/cow.png`,
        },
        상관: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "도전적인 목표를 설정하세요.", description: "새로운 목표를 향해 끝없이 도전합니다." },
                { title: "창의적인 아이디어를 내세요.", description: "독창적인 사고로 문제를 해결합니다." },
                { title: "자유로운 환경에서 일하세요.", description: "자유롭고 유연하게 일하는 것을 선호합니다." },
                { title: "강한 자기 표현을 하세요.", description: "자신의 생각을 적극적으로 표현하는 성향입니다." },
                { title: "틀에 얽매이지 마세요.", description: "기존의 틀을 깨고 새로운 방식으로 접근합니다." },
            ],
            TitleDescription: "원숭이처럼 유현하게 문제를 해결하세요",
            subDescription: [
                {description: "창의적인 아이디어로 문제를 해결해 보세요"},
                {description: "새롭게 접근하며 해결하는 모습이 돋보여요"},
            ],
            imageAlt: "원숭이처럼 유연하게 문제를 해결해요",
            imageSrc: `${process.env.PUBLIC_URL}/images/monkey.png`,
        },
        편재: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "목표를 명확하게 세우세요.", description: "목표를 구체적으로 설정하고 꾸준히 실행하세요." },
                { title: "결정을 신속하게 내리세요.", description: "상황에 맞게 빠르게 결정을 내려보세요" },
                { title: "재정을 신중히 관리하세요.", description: "자원을 효율적으로 관리해 안정감을 만드세요" },
                { title: "독립적으로 문제를 해결하세요.", description: "스스로 문제를 파악해 해결하는 태도를 가져요" },
            ],
            TitleDescription: "독수리처럼 높은 목표를 향해 도전하세요",
            subDescription: [
                {description: "멀리 보고 목표를 세워 꾸준히 노력하세요"},
                {description: "목표를 향해 힘차게 나아가는 모습이 돋보여요"},
            ],
            imageAlt: "독수리처럼 높은 목표를 향해 도전해요",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
        },
        정재: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "목표를 명확하게 설정하세요", description: "목표를 세우고 차근차근 달성하세요." },
                { title: "재정을 신중히 관리하세요", description: "자산과 자원을 책임감 있게 다루세요." },
                { title: "맡은 일을 끝까지 완수하세요", description: "성실하게 마무리하며 신뢰를 쌓으세요." },
                { title: "디테일에 신경 쓰세요", description: "꼼꼼한 관리로 성과를 높이세요." },
            ],
            TitleDescription: "개미처럼 부지런하고 끈기 있게 목표를 이뤄보세요",
            subDescription: [
                {description: "작은 일을 성실히 처리하며 목표를 쌓아가세요"},
                {description: "함께 이룬 성과가 큰 힘으로 돌아올 거예요"},
            ],
            imageAlt: "개미처럼 부지런하고 끈기 있게 일하세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
        },
        편관: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "결단력 있게 행동하세요", description: "중요한 순간에 신속하게 결정을 내리세요" },
                { title: "어려운 상황에서도 리더십을 발휘하세요", description: "도전적인 상황에서 강하게 밀고 나가세요." },
                { title: "책임감을 가지고 임무를 완수하세요", description: "맡은 역할을 끝까지 수행하며 신뢰를 얻으세요." },
                { title: "문제를 침착하게 해결하세요", description: "어려운 일도 차분히 해결하며 안정감을 주세요." },
            ],
            TitleDescription: "사자처럼 결단력 있게 이끌어주세요",
            subDescription: [
                {description: "책임감을 바탕으로 중요한 결정을 내려보세요"},
                {description: "목표를 향해 흔들림 없이 나아가세요"},
            ],
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
        },
        정관: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "신뢰를 바탕으로 행동하세요.", description: "약속을 지키며 맡은 일을 성실히 해보세요." },
                { title: "규칙과 원칙을 지키세요.", description: "규정을 따르고 업무를 체계적으로 처리하세요." },
                { title: "책임감을 가지고 협력하세요.", description: "맡은 일을 끝내고 동료와 원활히 소통하세요." },
                { title: "목표를 향해 꾸준히 집중하세요.", description: "꾸준히 목표를 이루도록 집중하세요." },
            ],
            TitleDescription: "말처럼 빠르게 적응하며 목표를 향해 달려보세요",
            subDescription: [
                {description: "빠르게 적응해 도전 정신으로 목표를 이루세요"},
                {description: "흔들림 없이 목표를 향해 나아가 보세요"},
            ],
            imageAlt: "말처럼 자유롭게 도전하고 앞으로 나아가세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        편인: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "목표를 명확히 세우세요.", description: "명확한 목표를 세우고 완수하세요." },
                { title: "문제를 창의적으로 해결하세요.", description: "독창적 방법으로 문제를 처리하세요." },
                { title: "새로운 아이디어를 개발하세요.", description: "발상의 전환으로 기회를 만드세요." },
                { title: "맡은 일을 끝까지 완수하세요.", description: "책임감을 가지고 끝까지 해내세요." },
            ],
            TitleDescription: "올빼미처럼 신중하게 판단하고 결정하세요",
            subDescription: [
                {description: "깊이 있는 사고로 중요한 결정을 내려보세요"},
                {description: "상황을 통찰하며 최선의 선택을 찾아보세요"},
            ],
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
        },
        정인: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "계획을 세우고 실행하세요.", description: "신중한 계획으로 업무를 철저히 처리하세요." },
                { title: "배움에 집중하세요.", description: "지식을 배우고 익히는 데 열정을 보이세요." },
                { title: "문제를 꼼꼼히 분석하세요.", description: "세부적인 부분까지 놓치지 않고 해결하세요." },
                { title: "꾸준히 성과를 쌓으세요.", description: "체계적으로 목표를 이루며 결과를 만드세요." },
            ],
            TitleDescription: "코끼리처럼 힘있고 안정적으로 목표를 이뤄보세요",
            subDescription: [
                {description: "강한 의지로 꾸준히 목표를 향해 나아가세요"},
                {description: "코끼리처럼 흔들림 없이 성과를 만드세요"},
            ],
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
        },
    };

    const currentAnalysis = analysisData[result.manseMonthGroundRelation] || {
        title: "데이터 없음",
        subtitle: "해당 관계에 대한 데이터가 준비 중입니다.",
        strengths: [{title: "데이터 없음", description: "해당 관계에 대한 데이터가 없습니다."}],
        TitleDescription: "데이터 없음",
        subDescription: [
            {description: "데이터 없음"},
            {description: "데이터 없음"},
        ],
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report9');
    };

    return (
        <div className="saju-report2-wrapper">

            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">6. {currentAnalysis.title}</h1>
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
                    <h2 className="analysis-title">{`${name}님의 직장 생활 성공 전략을 확인하세요`}</h2>
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
                    <p>{currentAnalysis.TitleDescription}</p>
                    <ul className="strengths-list">
                        {currentAnalysis.subDescription.map((item, index) => (
                            <li key={index}>
                                <strong>👉 {item.description}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="footer-text">강점을 바탕으로 직장에서 목표를 달성하면 성과를 만들어 갈 수 있습니다</p>
        </div>
    );
};

export default SajuReport8;
