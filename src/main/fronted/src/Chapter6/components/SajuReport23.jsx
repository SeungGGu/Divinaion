import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport23.css';

const SajuReport23 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name, result } = sajuData || {};

    if (!result || !result.manseDayGroundRelation) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 배우자 성향 메시지 매핑
    const spouseMessages = {
        비견: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                "작은 일에도 성실해요: 작은 노력으로도 상대에게 기쁨을 전해요.",
                "특별한 사람에게 집중해요: 중요하다고 느끼는 사람에게 애정을 표현해요.",
                "편안한 관계를 선호해요: 사람들과 신뢰를 쌓는 것을 중요하게 생각해요.",
                "함께하는 취미를 즐겨요: 공통된 관심사를 통해 즐거운 시간을 보내요.",
            ],
            TitleDescription: "늑대처럼 가족의 안전을 위해 헌신해요",
            SubDescription: [
                { description: "늑대처럼 위기에서도 가족을 든든히 지켜요." },
                { description: "늑대처럼 가족과 함께하며 믿음을 줘요." },
            ],
            imageAlt: "늑대처럼 든든하고 독립적인 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
        },
        겁재: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                "도전에서 강해요: 목표를 끝까지 포기하지 않고 도전해요.",
                "주도적으로 이끌어요: 상황을 통제하며 주도적인 역할을 해요.",
                "독립적으로 생각해요: 자신만의 의견을 고집하며 스스로 판단해요.",
                "활동적으로 움직여요: 바쁜 일상 속에서도 활기를 잃지 않아요.",
            ],
            TitleDescription: "호랑이처럼 어려운 순간에 가족을 보호해요",
            SubDescription: [
                { description: "호랑이처럼 힘과 용기로 가족을 이끌어요." },
                { description: "호랑이처럼 가족의 목표를 위해 열정을 보여요." },
            ],
            imageAlt: "호랑이처럼 강인한 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
        },
        식신: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                "배려심이 깊어요: 상대의 감정을 잘 이해하고 공감해요.",
                "안정감을 추구해요: 계획적인 생활로 안정감을 추구해요.",
                "결정을 섬세하게 내려요: 작은 일도 신중하게 판단하며 실수를 줄여요.",
                "감정을 솔직히 표현해요: 자신의 감정을 숨기지 않고 솔직하게 전해요.",
            ],
            TitleDescription: "소처럼 묵묵히 가족을 위해 일해요",
            SubDescription: [
                { description: "소처럼 책임감으로 가족에게 신뢰를 줘요." },
                { description: "소처럼 꾸준히 가족의 안정을 지켜요." },
            ],
            imageAlt: "소처럼 성실한 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
        },
        상관: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                "교감 능력이 뛰어나요: 사람들과 쉽게 친해지고 친화력이 좋아요.",
                "활동적인 생활을 즐겨요: 바쁘고 다채로운 활동을 좋아해요.",
                "자유로운 성격이에요: 제약에 얽매이지 않고 자율을 추구해요.",
                "분위기를 유쾌하게 만들어요: 활기차고 창의적인 에너지를 발산해요.",
            ],
            TitleDescription: "원숭이처럼 유쾌한 에너지로 가족을 즐겁게 해요",
            SubDescription: [
                { description: "원숭이처럼 창의적인 아이디어로 가족을 이끌어요." },
                { description: "원숭이처럼 밝은 분위기로 갈등을 완화해요." },
            ],
            imageAlt: "원숭이처럼 창의적인 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
        },
        편재: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                "목표가 뚜렷해요: 원하는 것을 위해 꾸준히 노력해요.",
                "실용적인 사고를 해요: 실질적인 가치를 중요하게 생각해요.",
                "독립심이 강해요: 스스로 문제를 해결하는 것을 선호해요.",
                "경제적 관심이 많아요: 돈과 관련된 일에 신경을 많이 써요.",
            ],
            TitleDescription: "독수리처럼 멀리 내다보며 가족의 미래를 계획해요",
            SubDescription: [
                { description: "독수리처럼 명확한 판단으로 가족을 이끌어요." },
                { description: "독수리처럼 높은 목표로 가족에게 희망을 줘요." },
            ],
            imageAlt: "독수리처럼 신뢰를 주는 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
        },
        정재: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                "책임감이 강해요: 시작한 일을 끝까지 완수하려 해요.",
                "안정적인 생활을 선호해요: 평화롭고 예측 가능한 하루를 좋아해요.",
                "신뢰를 중요하게 생각해요: 약속을 지키고 믿음을 소중히 여겨요.",
                "실용적인 사고를 해요: 실질적인 이익을 중시해요.",
            ],
            TitleDescription: "개미처럼 부지런히 가정을 위해 노력해요",
            SubDescription: [
                { description: "개미처럼 체계적으로 가족의 일상을 관리해요." },
                { description: "개미처럼 작은 일도 놓치지 않고 가족을 돌봐요." },
            ],
            imageAlt: "개미처럼 성실한 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
        },
        편관: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                "리더쉽이 뛰어나요 : 상황을 주도하며 이끄는 것을 즐겨요",
                "책임감이 깊어요 : 맡은 일에 최선을 다하려 해요",
                "규칙을 잘 지켜요 : 절차와 규율을 중요하게 생각해요",
                "결단력이 있어요 : 신속하게 결정을 내리고 실행해요",
            ],
            TitleDescription: `사자처럼 결단력 있게 가족의 중심을 잡아요`,
            SubDescription:[
                {description: "사자처럼 강한 의지로 가족을 보호해요."},
                {description: "사자처럼 가족의 리더로 모두를 이끌어요."},
            ],
            imageAlt: "사자 같은 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
        },
        정관: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                "성실함이 두드러져요 : 맡은 일을 끝까지 책임지고 완수해요",
                "책임감이 강해요 : 신뢰를 쌓기 위해 최선을 다해요",
                "규칙을 중요시해요 : 약속과 절차를 철저히 지켜요",
                "도덕적 기준이 높아요 : 옳고 그름을 분명히 구별해요",
            ],
            TitleDescription: `말처럼 자유롭고 편안한 소통으로 가족을 연결해요`,
            SubDescription:[
                {description: "말처럼 균형을 유지하며 가족의 조화를 지켜요"},
                {description: "말처럼 활기차게 가족의 분위기를 밝게 만들어요"},
            ],
            imageAlt: "말",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
        },
        편인: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                "상상력이 풍부해요 : 새로운 아이디어를 자주 떠올려요.",
                "자유로운 사고를 해요 : 틀에 얽매이지 않고 자연스럽게 생각해요.",
                "예술적 감각이 탁월해요 : 창작 활동에 큰 관심을 가지고 있어요",
                "개성을 중요하게 여겨요 : 자신의 스타일을 소중하게 생각해요",
            ],
            TitleDescription: `올빼미처럼 지혜로운 판단으로 가족을 지원해요`,
            SubDescription:[
                {description: "올빼미처럼 깊은 통찰로 가족의 고민을 해결해요"},
                {description: "올빼미처럼 신중하게 가족에게 조언을 해요"},
            ],
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
        },
        정인: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                "신중하게 판단해요 : 중요한 결정을 할 때 시간을 들여 생각해요",
                "지식에 대한 열정이 있어요 : 새로운 정보를 배우려는 의욕이 넘쳐요",
                "분석적으로 사고해요 : 상황을 논리적으로 분석해 해결을 찾아요",
                "감정 조절을 잘해요 : 감정을 잘 다스리고 차분하게 대처해요",
            ],
            TitleDescription: `코끼리처럼 따뜻한 배려로 가족을 감싸줘요`,
            SubDescription:[
                {description: "코끼리처럼 묵묵히 가족을 위해 헌신해요"},
                {description: "코끼리처럼 안정감으로 가족을 편안하게 해요"},
            ],
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
        },
    };

    const spouseInfo = spouseMessages[result.manseDayGroundRelation] || {
        title: "알 수 없는 배우자",
        traits: ["정보가 부족하여 분석할 수 없습니다."],
        TitleDescription: `정보가 부족하여 분석할 수 없습니다.`,
        SubDescription:[
            {description: "정보가 부족하여 분석할 수 없습니다."},
            {description: "정보가 부족하여 분석할 수 없습니다."},
        ],
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/x.png`,
    };

    const handleNextPage = () => {
        navigate('/Report24');
    };

    return (
        <div className="report23-wrapper">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">17. {name}님의 미래 배우자, 사주로 미리 만나보세요</h1>
            <p className="report-subtitle">
                배우자의 성격과 관계의 특징을 사주로 확인해보세요
            </p>

            <div className="report-content">
                <div className="sky-symbol-container">
                    <div
                        className="sky-symbol"
                        style={{
                            backgroundColor: '#f9c74f',
                            color: '#000',
                        }}
                    >
                        {result.manseDayGroundRelation}
                    </div>
                </div>

                <div className="analysis-container">
                    <h2 className="analysis-title">{spouseInfo.title}</h2>
                    <ul className="traits-list">
                        {spouseInfo.traits.map((trait, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {trait}</strong>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="analysis-image-container">
                    <img
                        src={spouseInfo.imageSrc}
                        alt={spouseInfo.imageAlt}
                        className="analysis-image"
                    />
                    <h3>{spouseInfo.TitleDescription}</h3>
                    <ul className="strengths-list">
                        {spouseInfo.SubDescription.map((item, index) => (
                            <li key={index}>
                                <strong>👉 {item.description}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer-section">
                <p className="footer-message">
                    미래 배우자의 성격을 이해하면 조화로운 삶을 계획할 수 있습니다
                </p>
            </div>
        </div>
    );
};

export default SajuReport23;
