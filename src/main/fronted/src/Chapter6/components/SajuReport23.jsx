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
            title: name + "님의 배우자 성향 분석과 관계 조화",
            traits: [
                "자존심이 강해요 : 작은 일에도 쉽게 상처 받을 수 있어요.",
                "특별한 관심을 보여요 : 마음에 드는 사람에게는 특별히 신경을 써요.",
                "친근한 관계를 좋아해요 : 친구처럼 자연스럽고 편안한 관계를 선호해요.",
                "취미 공유를 즐겨요 : 공통된 취미나 관심사를 함께 즐기는 것을 좋아해요.",
                "자신만의 공간을 중시해요 : 때때로 혼자만의 시간을 가지려는 경향이 있어요.",
            ],
            description: `늑대 같은 배우자\n 함께하는 시간을 소중히 여기지만 혼자만의 시간도 잘 즐기는 사람입니다. 서로 협력하면서도 가끔은 자기만의 길을 걸어요.`,
            imageAlt: "늑대",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        겁재: {
            title: name + "님의 배우자 성향 분석과 관계 조화",
            traits: [
                "경쟁심이 강해요 : 경쟁심이 강하고 목표를 포기하지 않아요.",
                "주도적으로 상황을 이끌어요 : 상황을 주도적으로 이끌며 통제하길 원해요.",
                "독립적으로 사고해요 : 독립적인 사고로 자신의 의견을 고집해요.",
                "즉흥적인 결정을 좋아해요 : 계획보다는 순간적인 판단을 중시해요.",
                "활동적인 삶을 선호해요 : 활동적이며 바쁜 일상 속에서 활기를 찾습니다",
            ],
            description: `호랑이 같은 배우자\n 자신감 넘치고 도전을 두려워하지 않아요. 어려움이 닥쳐도 강하게 맞서며 당신을 든든히 지켜줄 거예요.`,
            imageAlt: "호랑이",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        식신: {
            title: name + "님의 배우자 성향 분석과 관계 조화",
            traits: [
                "배려심이 깊어요 : 배려심이 기퓨어 다른 사람의 감정을 잘 헤어려요.",
                "안정적인 생활을 좋아해요 : 예측 가능한 안정적인 생활을 선호해요",
                "세심한 성격이에요 : 작은 일에도 세심하게 신경을 써요",
                "느긋한 태도를 가지고 있어요 : 차분한 태도로 일을 천천히 진행하는 걸 좋아해요",
                "감정을 솔직하게 표현해요 : 자신의 감정을 숨기지 않고 솔직하게 표현해요",
            ],
            description: ` 소 같은 배우자\n 조용하고 묵묵히 맡은 일에 최선을 다하는 타입이에요. 꾸준하고 성실해서 함께 있으면 안정감을 느낄 수 있어요.`,
            imageAlt: "소",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        상관: {
            title: name + "님의 배우자 성향 분석과 관계 조화",
            traits: [
                "사교성이 뛰어나요 : 사람들과 쉽게 친해지고 친화력이 좋아요",
                "활동적인 생활을 즐겨요 : 바쁘고 다채로운 활동을 좋아해요",
                "자유로운 성격이에요 : 규칙에 얽매이지 않고 자율을 추구해요",
                "밝고 긍정적인 에너지를 발산해요 : 활기차고 유쾌한 분위기를 만들어요",
                "즉흥적인 결정을 선호해요 : 계획보다는 순간의 선택을 중시해요",
            ],
            description: ` 원숭이 같은 배우자\n 유쾌하고 창의적인 성격이에요. 늘 새로운 것을 시도하며 당신의 삶에 즐거움과 활기를 더해줄 거예요.`,
            imageAlt: "원숭이",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        편재: {
            title: name + "님의 배우자 성향 분석과 관계 조화",
            traits: [
                "목표가 뚜렷해요 : 원하는 것을 위해 꾸준히 노력해요",
                "실용적인 사고를 해요 : 실질적인 가치를 중요하게 생각해요",
                "독립심이 강해요 : 스스로 문제를 해결하는 것을 선호해요.",
                "경제적 관심이 많아요 : 돈과 관련된 일에 신경을 많이 써요.",
                "효율을 중시해요 : 시간을 아끼며 효율적으로 일해요.",
            ],
            description: `독수리 같은 배우자\n 높은 목표를 세우고 거침없이 도전해요. 중요한 결정을 빠르고 정확하게 내려 신뢰할 수 있는 든든한 파트너가 될 거예요`,
            imageAlt: "독수리",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        정재: {
            title: name + "님의 배우자 성향 분석과 관계 조화",
            traits: [
                "책임감이 강해요 : 시작한 일은 끝까지 완수하려 해요",
                "안정적인 생활을 선호해요 : 평화롭고 예측 가능한 하루를 좋아해요",
                "신뢰를 중요하게 생각해요 : 약속을 지키고 믿음을 소중히 여겨요",
                "실용적인 사고를 해요 : 실질적인 이익을 중시해요",
                "꾸준히 노력해요 : 목표를 향해 포기하지 않고 나아가요.",
            ],
            description: `개미 같은 배우자\n 섬세함과 성실함의 표본! 작은 일도 빠뜨리지 않고 하나씩 착실히 쌓아가는 모습에 깊은 신뢰를 줘요.`,
            imageAlt: "개미",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        편관: {
            title: name + "님의 배우자 성향 분석과 관계 조화",
            traits: [
                "리더쉽이 뛰어나요 : 상황을 주도하며 이끄는 것을 즐겨요",
                "책임감이 깊어요 : 맡은 일에 최선을 다하려 해요",
                "규칙을 잘 지켜요 : 절차와 규율을 중요하게 생각해요",
                "결단력이 있어요 : 신속하게 결정을 내리고 실행해요",
                "도전을 즐겨요 : 새로운 일에 두려움 없이 도전해요",
            ],
            description: `사자 같은 배우자\n 강한 리더십으로 주변에 신뢰와 존경을 받는 타입이에요. 어려운 상황에서도 당신을 이끌어 든든한 동반자가 되어줄 거에요.`,
            imageAlt: "사자 같은 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        정관: {
            title: name + "님의 배우자 성향 분석과 관계 조화",
            traits: [
                "성실함이 두드러져요 : 맡은 일을 끝까지 책임지고 완수해요",
                "책임감이 강해요 : 신뢰를 쌓기 위해 최선을 다해요",
                "규칙을 중요시해요 : 약속과 절차를 철저히 지켜요",
                "도덕적 기준이 높아요 : 옳고 그름을 분명히 구별해요",
                "꾸준히 노력해요 : 지속적인 성장과 발전을 위해 힘써요",
            ],
            description: `말 같은 배우자\n 한 번 마음먹으면 끝까지 책임을 다하는 사람이에요. 신속한 결정과 행동으로 신뢰를 주는 모습이 돋보입니다`,
            imageAlt: "말",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        편인: {
            title: name + "님의 배우자 성향 분석과 관계 조화",
            traits: [
                "상상력이 풍부해요 : 새로운 아이디어를 자주 떠올려요",
                "자유로운 사고를 해요 : 틀에 얽매이지 않고 자연스럽게 생각해요",
                "예술적 감각이 탁월해요 : 창작 활동에 큰 관심을 가지고 있어요",
                "개성을 중요하게 여겨요 : 자신의 스타일을 소중하게 생각해요",
                "독립적인 사고가 강해요 : 스스로 결정을 내리는 것을 좋아해요",
            ],
            description: `올빼미 같은 배우자\n 깊은 사고로 문제를 지혜롭게 해결해요. 조용하지만 꼭 필요한 순간에 현명한 결단을 내려 당신을 돕는 든든한 조력자가 될 거예요.`,
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        정인: {
            title: name + "님의 배우자 성향 분석과 관계 조화",
            traits: [
                "신중하게 판단해요 : 중요한 결정을 할 때 시간을 들여 생각해요",
                "지식에 대한 열정이 있어요 : 새롭고 다양한 정보를 배우려는 의욕이 넘쳐요",
                "분석적으로 사고해요 : 상황을 논리적으로 파악하고 해결을 찾아요",
                "감정 조절을 잘해요 : 감정을 잘 다스리고 차분하게 대처해요.",
                "배움에 열정적이에요 : 멈추지 않고 끊임없이 자기 계발을 이어가요",
            ],
            description: `코끼리 같은 배우자\n 온화하고 배려심이 깊은 사람입니다. 천천히 그러나 확실하게 함께 걸으며, 당신에게 든든한 지지와 따뜻함을 줄 거예요.`,
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
    };

    const spouseInfo = spouseMessages[result.manseDayGroundRelation] || {
        title: "알 수 없는 배우자",
        traits: ["정보가 부족하여 분석할 수 없습니다."],
        description: "데이터를 확인해주세요.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/mountain.png`,
    };

    const handleNextPage = () => {
        navigate('/Report24');
    };

    return (
        <div className="report23-wrapper">
            <h1 className="report-title">배우자 성향 분석</h1>
            <p className="report-subtitle">
                {name}님의 배우자 성향과 관계를 분석해보세요.
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
                    <p className="analysis-image-description">{spouseInfo.description}</p>
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

export default SajuReport23;
