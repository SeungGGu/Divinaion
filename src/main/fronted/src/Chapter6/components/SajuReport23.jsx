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
                { title: "민감하지만 속마음은 깊은 배우자", description: "자존심이 강해 작은 말에도 민감하지만, 진심을 알아주면 깊은 교류를 합니다." },
                { title: "선택적 배려를 중요시하는 배우자", description: "마음이 가는 사람에게만 배려하며, 관계의 진정성과 소통을 중요하게 여깁니다." },
                { title: "공통 관심사로 소통하는 배우자", description: "음식, 취미 등 공통 관심사를 중요하게 생각하며 이를 통해 교감을 나눕니다." },
                { title: "가까운 사람들과 교류하는 배우자", description: "모든 이와 친하지 않으며, 가까운 사람과 깊은 관계를 맺는 것을 선호합니다." },
                { title: "친구처럼 편안한 배우자", description: "부담 없는 대화와 소통을 중요하게 여기며, 친구 같은 편안한 관계를 추구합니다." },
            ],
            TitleDescription: "늑대의 특성으로 본 " + name + "님의 미래 배우자 성향",
            SubDescription: [
                { description: "늑대처럼 가족을 보호하며 어떤 상황에서도 든든한 버팀목이 됩니다." },
                { description: "늑대처럼 가족의 필요를 살피고 세심하게 보살피며 화목을 유지합니다." },
                { description: "늑대처럼 협력하여 가족 간의 유대감을 키우고 조화와 신뢰를 이룹니다." },
                { description: "늑대처럼 어려운 상황에서도 끝까지 가족을 지키려 묵묵히 노력합니다." },
            ],
            EndDescription: name + "님의 배우자는 친구처럼 다정하고 가정에서 함께 고민을 나누는 분입니다",
            imageAlt: "늑대처럼 든든하고 독립적인 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
        },
        겁재: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                { title: "패배를 싫어하는 결단력 있는 배우자", description: "쉽게 물러서지 않고, 자신이 옳다고 느낀 일에 끝까지 노력하는 편입니다." },
                { title: "감정에 따라 소비가 달라지는 배우자", description: "기분에 따라 지출이 많아질 수 있으니, 균형 잡힌 절제된 관리가 필요합니다." },
                { title: "상황에 따라 역할을 잘 조정하는 배우자", description: "가정에서는 부드럽고, 사회에서는 책임감 있게 행동하려는 경향이 있습니다." },
                { title: "주변 사람을 챙겨주는 배우자", description: "자신뿐 아니라 주변 사람들의 상황을 살피며 적극적으로 도움을 주는 편입니다." },
                { title: "사랑을 깊이 표현하는 배우자", description: "사랑하는 사람에게 관심과 애정을 많이 쏟으며, 보호하려는 마음이 큽니다." },
            ],
            TitleDescription: "호랑이의 특성으로 본 " + name + "님의 미래 배우자 성향",
            SubDescription: [
                { description: "호랑이처럼 강인하게 가족을 지키며 어려운 상황에서도 든든함을 줍니다." },
                { description: "호랑이처럼 결단력 있게 문제를 해결하며 가족의 안정을 위해 노력합니다." },
                { description: "호랑이처럼 에너지 넘치게 가족을 이끌며 활력을 지속적으로 불어넣습니다." },
                { description: "호랑이처럼 가족의 어려움에 앞장서며 보호하고 희생하는 모습을 보입니다." },
            ],
            EndDescription: name + "님의 배우자는 주장을 잘 표현하며, 가정에서 결정을 주도하는 분입니다",
            imageAlt: "호랑이처럼 강인한 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
        },
        식신: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                { title: "감정이 얼굴에 드러나는 솔직한 배우자", description: "기분이 얼굴에 바로 나타나며, 감정을 숨기기보다는 솔직하게 표현합니다." },
                { title: "건강 관리를 중요하게 여기는 배우자", description: "운동이나 식습관을 세심히 신경 쓰며, 신체와 마음의 균형을 중요시합니다." },
                { title: "부지런하고 돌봄이 자연스러운 배우자", description: "동물이나 식물도 잘 보살피며, 주변 사람들까지 따뜻하게 챙기는 편입니다." },
                { title: "배우자를 자식처럼 살뜰히 챙기는 배우자", description: "작은 부분까지도 세심하게 신경 쓰며, 배우자에게 따뜻한 배려를 보냅니다." },
                { title: "가족을 삶의 중심에 두는 배우자", description: "가정과 가족을 우선시하며, 가족의 행복이 본인의 만족으로 이어집니다." },
            ],
            TitleDescription: "소의 특성으로 본 " + name + "님의 미래 배우자 성향",
            SubDescription: [
                { description: "소처럼 묵묵히 가족을 위해 헌신하며 안정된 가정을 끝까지 만들어갑니다." },
                { description: "소처럼 차분히 가족의 필요를 세심히 살피고 책임감 있게 잘 돌봐줍니다." },
                { description: "소처럼 성실히 일을 해내며 가족이 의지할 수 있는 기반을 제공합니다." },
                { description: "소처럼 느긋하지만 꾸준히 가족의 안정과 행복을 위해 노력합니다." },
            ],
            EndDescription: name + "님의 배우자는 가정의 안정을 중시하며, 따뜻하고 배려 깊은 분입니다.",
            imageAlt: "소처럼 성실한 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
        },
        상관: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                { title: "다양한 사람들과 잘 어울리는 배우자", description: "관심사가 많고 사교적이며, 여러 사람과 쉽게 친해지는 성향입니다." },
                { title: "자유로운 환경을 선호하는 배우자", description: "개인의 자유를 중시하며, 간섭이 심한 상황을 부담스러워할 수 있습니다." },
                { title: "말과 행동이 독창적인 배우자", description: "뛰어난 말솜씨와 창의적인 아이디어로 주변 분위기를 밝게 만듭니다." },
                { title: "감정을 솔직하게 표현하는 배우자", description: "감정이 격할 때 직설적으로 말할 수 있지만, 금방 화를 풀고 회복합니다." },
                { title: "애정을 아끼지 않는 다정한 배우자", description: "사랑을 적극적으로 표현하며, 주변 사람들에게도 따뜻한 관심을 보냅니다." },
            ],
            TitleDescription: "원숭이의 특성으로 본 " + name + "님의 미래 배우자 성향",
            SubDescription: [
                { description: "원숭이처럼 재치 있게 가족 간의 분위기를 밝고 따뜻하게 만들어갑니다." },
                { description: "원숭이처럼 호기심으로 가족의 필요를 살피고 다채롭게 도와줍니다." },
                { description: "원숭이처럼 빠르게 상황에 적응하며 가족의 문제를 신속히 해결합니다." },
                { description: "원숭이처럼 활발히 소통하며 가족과의 유대를 더욱 즐겁게 이어갑니다." },
            ],
            EndDescription: name + "님의 배우자는 자유롭고 유머가 넘치며, 가정 분위기를 밝히는 분입니다.",
            imageAlt: "원숭이처럼 창의적인 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
        },
        편재: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                { title: "활발하고 긍정적인 에너지를 가진 배우자", description: "즐거움을 쉽게 찾고 긍정적인 태도로 주변 분위기를 밝고 활기차게 만듭니다." },
                { title: "활동적이지만 건강 관리가 필요한 배우자", description: "여러 활동을 즐기며 바쁘게 지내지만, 건강을 챙기는 데 소홀할 수 있습니다." },
                { title: "새로운 경험을 좋아하는 배우자", description: "새로운 일에 호기심이 많아 도전하지만, 관심이 빨리 바뀔 수 있습니다." },
                { title: "외부 활동을 즐기며 적극적인 배우자", description: "단체 활동에 적극적으로 참여하며, 사람들과 어울리는 것을 좋아합니다." },
                { title: "너그럽고 통 큰 성격의 배우자", description: "계산을 먼저 하며, 주변 사람들에게 자연스럽게 배려와 관심을 보여줍니다." },
            ],
            TitleDescription: "독수리의 특성으로 본 " + name + "님의 미래 배우자 성향",
            SubDescription: [
                { description: "독수리처럼 날카롭게 가족의 필요를 파악하고 문제를 빠르게 해결합니다." },
                { description: "독수리처럼 넓은 시야로 가정을 돌보고 중요한 결정을 끝까지 책임집니다." },
                { description: "독수리처럼 목표를 향해 집요하게 노력하며 가족의 안정을 추구합니다." },
                { description: "독수리처럼 강인한 의지로 가족을 지키고 든든한 존재가 되어줍니다." },
            ],
            EndDescription: name + "님의 배우자는 현실적이고 재정 관리에 능하며 가정을 잘 이끄는 분입니다.",
            imageAlt: "독수리처럼 신뢰를 주는 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
        },
        정재: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                { title: "건강과 자기관리에 신경 쓰는 배우자", description: "몸과 마음의 균형을 중요하게 생각하며, 꾸준히 자기관리를 실천합니다." },
                { title: "자신만의 공간을 중요시하는 배우자", description: "혼자만의 시간이 필요하며, 사적인 공간이 침해되면 불편함을 느낄 수 있습니다." },
                { title: "소중한 것을 아끼는 세심한 배우자", description: "소유에 대한 애착이 강하며, 중요한 것에 대해 깊은 관심과 배려를 보입니다." },
                { title: "배우자에게 사랑을 깊이 표현하는 배우자", description: "배우자를 특별히 소중히 여기며, 작은 일에도 진심 어린 애정을 표현합니다." },
                { title: "가족의 안정과 행복을 우선시하는 배우자", description: "안정과 평화를 중요하게 생각하며, 가족의 행복을 가장 큰 목표로 삼습니다." },
            ],
            TitleDescription: "개미의 특성으로 본 " + name + "님의 미래 배우자 성향",
            SubDescription: [
                { description: "개미처럼 부지런히 가족을 위해 일하며 가정을 안정적으로 유지합니다." },
                { description: "개미처럼 철저히 계획하고 자원을 관리해 가족의 필요를 채워줍니다." },
                { description: "개미처럼 끈기 있게 목표를 이루며 가족에게 신뢰를 주는 모습을 보입니다." },
                { description: "개미처럼 협력하여 가족 간의 조화를 이루고 화목한 분위기를 만듭니다." },
            ],
            EndDescription: name + "님의 배우자는 계획적이고 책임감이 강하며, 가정을 든든히 지키는 분입니다.",
            imageAlt: "개미처럼 성실한 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
        },
        편관: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                { title: "체면을 중시하며 속마음을 쉽게 드러내지 않는 배우자", description: "주변 시선을 신경 쓰며, 속마음을 깊이 감추고 차분하게 상황을 살핍니다." },
                { title: "세심하고 꼼꼼하게 확인하는 배우자", description: "작은 실수를 줄이기 위해 자주 확인하는 습관이 있으며, 신중하게 행동합니다." },
                { title: "신중한 선택을 중요시하는 배우자", description: "걱정이 많아 결정을 내릴 때 시간이 걸리지만, 꼼꼼히 생각하고 판단합니다." },
                { title: "자신의 의견을 소신 있게 표현하는 배우자", description: "중요한 일에 대해 확고한 신념을 가지며, 자신의 의견을 명확하게 전달합니다." },
                { title: "원칙을 중시하며 질서를 중요하게 여기는 배우자", description: "규칙을 잘 지키고 가정 내에서도 책임감 있게 행동하며, 질서를 중시합니다." },
            ],
            TitleDescription: "사자의 특성으로 본 " + name + "님의 미래 배우자 성향",
            SubDescription: [
                { description: "사자처럼 강한 책임감으로 가족을 보호하며 든든하고 믿음직한 리더가 됩니다." },
                { description: "사자처럼 결단력 있게 중요한 결정을 내려 가족의 안정을 끝까지 이끕니다." },
                { description: "사자처럼 위엄 있게 행동하며 가족에게 신뢰와 깊은 존경을 받습니다." },
                { description: "사자처럼 어려운 상황에서도 용기 있게 가족을 위해 항상 앞장섭니다." },
            ],
            EndDescription: name + "님의 배우자는 가정을 보호하며 규칙을 중요시하는 책임감 있는 분입니다.",
            imageAlt: "사자 같은 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
        },
        정관: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                { title: "예의와 책임감을 중시하는 배우자", description: "예의를 중요하게 생각하며, 맡은 일에 끝까지 책임을 다하려는 성향입니다." },
                { title: "규칙적인 생활을 유지하는 배우자", description: "일상에서 규칙과 질서를 중요시하며, 계획에 따라 생활하는 것을 선호합니다." },
                { title: "자신의 원칙을 지키는 신념 있는 배우자", description: "올바름과 정의를 중시하며, 상황에 따라 자신의 원칙과 기준을 잘 지킵니다." },
                { title: "세심한 조언을 아끼지 않는 배우자", description: "잔소리처럼 느껴질 수 있지만, 상대방을 위해 필요한 조언을 자주 해줍니다." },
                { title: "주관이 뚜렷하고 명예를 중시하는 배우자", description: "자신의 가치와 명예를 소중히 여기며, 주변 사람들에게 신뢰를 주는 편입니다." },
            ],
            TitleDescription: "말의 특성으로 본 " + name + "님의 미래 배우자 성향",
            SubDescription: [
                { description: "말처럼 부지런히 움직이며 가족의 필요를 빠르게 챙기려 노력합니다." },
                { description: "말처럼 신뢰를 주며 책임감 있게 가정을 안정적으로 끝까지 이끌어갑니다." },
                { description: "말처럼 성실히 일하며 가족의 행복과 안정을 위해 꾸준히 헌신합니다." },
                { description: "말처럼 주변을 배려하며 조화로운 가정 분위기를 꾸준히 유지하려 합니다." },
            ],
            EndDescription: name + "님의 배우자는 공정하고 안정된 가정을 만들며 신뢰를 주는 분입니다.",
            imageAlt: "말",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
        },
        편인: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                { title: "미래를 대비하려는 신중한 배우자", description: "앞날을 걱정하고 불안감을 줄이기 위해 계획적으로 준비하고 행동합니다." },
                { title: "눈치가 빠르고 배려심이 깊은 배우자", description: "상대방의 마음을 빠르게 파악하며, 주변 사람들의 시선도 세심히 살핍니다." },
                { title: "희생과 배려를 아끼지 않는 배우자", description: "타인을 먼저 생각하며, 가족과 주변 사람들에게 진심 어린 배려를 보냅니다." },
                { title: "밤에 활발하고 아침엔 여유로운 배우자", description: "저녁 늦게까지 활동하며 에너지를 소모해 아침엔 휴식과 여유를 선호합니다." },
                { title: "물질보다 마음의 가치를 중요시하는 배우자", description: "눈에 보이는 것보다 마음을 더 중요하게 생각하며, 정서적 유대감을 중시합니다." },
            ],
            TitleDescription: "올빼미의 특성으로 본 " + name + "님의 미래 배우자 성향",
            SubDescription: [
                { description: "올빼미처럼 밤늦게까지 가족의 문제를 깊이 고민하며 해결책을 찾습니다." },
                { description: "올빼미처럼 조용히 가족의 필요를 살피고 세심하게 배려하려 노력합니다." },
                { description: "올빼미처럼 독립적으로 생각하며 가족에게 새로운 아이디어를 제시합니다." },
                { description: "올빼미처럼 침착하게 행동하며 가족의 어려움에 차분히 대처합니다." },
            ],
            EndDescription: name + "님의 배우자는 조용히 생각을 정리하며 깊은 조언을 주는 분입니다.",
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
        },
        정인: {
            title: name + "님의 미래 배우자는 어떤 성격일까요?",
            traits: [
                { title: "따뜻함과 배려심이 넘치는 희생적인 배우자", description: "가족을 위해 헌신하며, 주변 사람들에게 따뜻한 마음을 자연스럽게 전합니다." },
                { title: "자기 발전을 위해 꾸준히 노력하는 배우자", description: "자신의 성장을 중요하게 여기며, 더 나은 삶을 위해 항상 고민하고 노력합니다." },
                { title: "배려와 인내심으로 가정을 잘 이끄는 배우자", description: "가족의 필요를 먼저 생각하며, 작은 부분까지도 세심하게 잘 챙깁니다." },
                { title: "사랑을 중요하게 생각하며 노력하는 배우자", description: "상대방의 사랑과 관심을 소중히 여기며, 더 나은 관계를 위해 힘씁니다." },
                { title: "자기 관리를 철저히 하는 독립적인 배우자", description: "자기 주관이 뚜렷하며, 자신의 시간과 생활을 효율적으로 관리하는 편입니다." },
            ],
            TitleDescription: "코끼리의 특성으로 본 " + name + "님의 미래 배우자 성향",
            SubDescription: [
                { description: "코끼리처럼 묵묵히 가족을 지키며 안정적인 가정을 만들어갑니다." },
                { description: "코끼리처럼 가족을 세심하게 돌보며 따뜻한 배려로 화목을 유지합니다." },
                { description: "코끼리처럼 신뢰를 주며 중요한 순간마다 가족을 든든히 지원합니다." },
                { description: "코끼리처럼 인내심을 갖고 가족 간의 문제를 차분히 해결하려 노력합니다." },
            ],
            EndDescription: name + "님의 배우자는 포용력 있고 신뢰를 주며, 가족을 따뜻하게 보듬는 분입니다.",
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
        navigate('/Report13');
    };

    return (
        <div className="report23-wrapper">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            {/* 페이지 제목 */}
            <div className="title-symbol-container">
                <div className="sky-symbol-container">
                    <div className="sky-symbol">{result.manseDayGroundRelation}</div>
                </div>
                <h1 className="report-title">14. {name}님의 미래 배우자, 사주로 미리 만나보세요</h1>
            </div>
            <p className="report-subtitle">배우자의 성격과 관계의 특징을 사주로 확인해보세요</p>

            <div className="report-content">
                <div className="analysis-container">
                    <h2 className="analysis-title">{spouseInfo.title}</h2>
                    <ul className="traits-list">
                        {spouseInfo.traits.map((traits, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {traits.title}</strong>
                                <br/>
                                <span>{traits.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="analysis-image-container">
                    <h3>{spouseInfo.TitleDescription}</h3>
                    <img
                        src={spouseInfo.imageSrc}
                        alt={spouseInfo.imageAlt}
                        className="analysis-image"
                    />
                    <ul className="strengths-list">
                        {spouseInfo.SubDescription.map((item, index) => (
                            <li key={index}>
                                <strong>{item.description}</strong>
                            </li>
                        ))}
                    </ul>
                    <p>{spouseInfo.EndDescription}</p>
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
