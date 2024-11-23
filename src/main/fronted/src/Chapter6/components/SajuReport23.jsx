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
            title: "협력형 배우자",
            traits: [
                "팀워크를 중요시하며 조화를 추구합니다.",
                "같은 목표를 위해 함께 노력합니다.",
                "솔직하고 직설적인 성격을 가지고 있습니다.",
            ],
            description: `${name}님의 배우자는 신뢰와 협력을 기반으로 관계를 이어가는 사람입니다.`,
            imageAlt: "협력형 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        겁재: {
            title: "도전적 배우자",
            traits: [
                "모험을 즐기며 새로운 것을 시도합니다.",
                "위험을 두려워하지 않는 강한 의지를 가집니다.",
                "리더십을 발휘하며 도전을 주도합니다.",
            ],
            description: `${name}님의 배우자는 도전적이고 진취적인 성향으로 항상 새로운 것을 추구합니다.`,
            imageAlt: "도전적 배우자",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        식신: {
            title: "",
            traits: [
                "",
                "",
                "",
            ],
            description: `${name}님`,
            imageAlt: "",
            imageSrc: `${process.env.PUBLIC_URL}/images/.png`,
        },
        상관: {
            title: "",
            traits: [
                "",
                "",
                "",
            ],
            description: `${name}님`,
            imageAlt: "",
            imageSrc: `${process.env.PUBLIC_URL}/images/.png`,
        },
        편재: {
            title: "",
            traits: [
                "",
                "",
                "",
            ],
            description: `${name}님`,
            imageAlt: "",
            imageSrc: `${process.env.PUBLIC_URL}/images/.png`,
        },
        정재: {
            title: "",
            traits: [
                "",
                "",
                "",
            ],
            description: `${name}님`,
            imageAlt: "",
            imageSrc: `${process.env.PUBLIC_URL}/images/.png`,
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
            title: "",
            traits: [
                "",
                "",
                "",
            ],
            description: `${name}님`,
            imageAlt: "",
            imageSrc: `${process.env.PUBLIC_URL}/images/.png`,
        },
        편인: {
            title: "",
            traits: [
                "",
                "",
                "",
            ],
            description: `${name}님`,
            imageAlt: "",
            imageSrc: `${process.env.PUBLIC_URL}/images/.png`,
        },
        정인: {
            title: "",
            traits: [
                "",
                "",
                "",
            ],
            description: `${name}님`,
            imageAlt: "",
            imageSrc: `${process.env.PUBLIC_URL}/images/.png`,
        },
        // 추가 메시지 생략: 위와 동일한 구조로 작성 가능
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
