import React from 'react';
import {useNavigate} from 'react-router-dom'; // useNavigate 추가
import {useSaju} from '../../context/SajuContext';
import '../../css/nextPageButton.css'; // 공통 CSS 파일 Import
import '../css/SajuReport2.css'; // 컴포넌트 고유 CSS

const SajuReport2 = () => {
    const {sajuData} = useSaju();
    const {result, name} = sajuData;
    const navigate = useNavigate(); // navigate 생성

    const fiveElementColorMap = {
        wood: '#89b798',
        fire: '#e57373',
        earth: '#f0d58c',
        metal: '#c0c0c0',
        water: 'black',
    };

    const getElementColor = (hanja) => {
        const element = {
            '甲': 'wood', '乙': 'wood', '丙': 'fire', '丁': 'fire',
            '戊': 'earth', '己': 'earth', '庚': 'metal', '辛': 'metal',
            '壬': 'water', '癸': 'water', '寅': 'wood', '卯': 'wood',
            '巳': 'fire', '午': 'fire', '辰': 'earth', '未': 'earth',
            '戌': 'earth', '丑': 'earth', '申': 'metal', '酉': 'metal',
            '亥': 'water', '子': 'water',
        }[hanja] || 'transparent';
        return fiveElementColorMap[element] || 'transparent';
    };

    const getTextColor = (bgColor) => (bgColor === 'black' ? 'white' : 'black');

    const daySky = result.daySky;

    const analysisData = {
        "甲": {
            title: "튼튼한 나무",
            strengths: [
                {title: "리더십이 뛰어납니다", description: "중요한 일을 앞장서서 해결합니다"},
                {title: "협력적입니다", description: "주변 사람들과 잘 어울립니다"},
                {title: "결단력이 있습니다", description: "빠르게 선택하고 행동합니다"},
                {title: "믿음직스럽습니다", description: "사람들에게 신뢰를 주는 존재입니다"},
            ],
            TitleDescription: "튼튼한 나무처럼 안정된 내면의 힘이 있습니다",
            subDescription: [
                {description: "흔들림 없이 삶의 길을 차분히 걸어갑니다"},
                {description: "당신의 뿌리가 주변에 든든한 신뢰를 전합니다"},
            ],
            imageAlt: "튼튼한 나무",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/bigTree.png`,
        },
        "乙": {
            title: "성장하는 작은 나무",
            strengths: [
                {title: "유연합니다", description: "변화에 빠르게 적응합니다"},
                {title: "협력적입니다", description: "함께 프로젝트를 성공적으로 이끕니다"},
                {title: "끈기가 있습니다", description: "끝까지 목표를 달성합니다"},
                {title: "세심합니다", description: "작은 디테일까지 꼼꼼히 신경 씁니다"},
            ],
            TitleDescription: "성장하는 작은 나무처럼 꾸준히 내면을 키우세요",
            subDescription: [
                {description: "작은 변화에 적응하며 가능성을 확장하세요"},
                {description: "꾸준함이 목표를 이루는 큰 힘이 됩니다"},
            ],
            imageAlt: "성장하는 작은 나무",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/smallTree.png`,
        },
        "丙": {
            title: "따뜻한 햇살처럼",
            strengths: [
                {title: "열정적입니다", description: "뜨거운 열정으로 활기를 더합니다"},
                {title: "긍정적입니다", description: "밝은 에너지로 주변에 힘을 줍니다"},
                {title: "리더십이 있습니다", description: "앞장서서 목표를 이룹니다"},
                {title: "표현력이 뛰어납니다", description: "감정을 솔직하게 표현합니다"},
            ],
            TitleDescription: "따뜻한 햇살처럼 밝고 긍정적인 내면을 키우세요",
            subDescription: [
                {description: "밝은 에너지로 주변에 활력을 전하세요"},
                {description: "따뜻한 마음으로 깊은 관계를 만들어가세요"},
            ],
            imageAlt: "따뜻한 햇살",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/tendency/sun.png`,
        },
        "丁": {
            title: "활활 타오르는 불꽃처럼",
            strengths: [
                {title: "따뜻합니다", description: "주변에 따뜻한 위로와 힘을 줍니다"},
                {title: "꾸준합니다", description: "목표를 향해 쉽게 포기하지 않습니다"},
                {title: "섬세합니다", description: "작은 디테일도 놓치지 않습니다"},
                {title: "솔직합니다", description: "감정을 진심으로 표현합니다"},
            ],
            TitleDescription: "타오르는 불꽃처럼 열정적이고 꾸준한 내면이에요",
            subDescription: [
                {description: "당신의 열정이 주변에 힘과 희망을 전합니다"},
                {description: "섬세한 마음으로 따뜻한 세상을 만들어가세요"},
            ],
            imageAlt: "타오르는 불꽃",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/fire.png`,
        },
        "戊": {
            title: "튼튼한 산처럼",
            strengths: [
                {title: "신뢰할 수 있습니다", description: "맡은 일을 끝까지 책임감 있게 해냅니다"},
                {title: "안정적입니다", description: "익숙한 환경에서 안정감을 유지합니다"},
                {title: "책임감이 뛰어납니다", description: "중요한 일에 책임감을 가지고 임합니다"},
                {title: "꾸준합니다", description: "인내심을 가지고 목표를 끝까지 이룹니다"},
            ],
            TitleDescription: "튼튼한 산처럼 흔들림 없는 내면의 강점이에요.",
            subDescription: [
                {description: "안정적이고 책임감 있는 성향이 신뢰를 줍니다"},
                {description: "이 강점은 목표를 꾸준히 이루는 힘이 됩니다"},
            ],
            imageAlt: "튼튼한 산처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/mountain.png`,
        },
        "己": {
            title: "넉넉한 대치처럼",
            strengths: [
                {title: "포용력이 뛰어납니다", description: "다양한 생각을 이해하고 존중합니다"},
                {title: "꼼꼼합니다", description: "작은 일도 놓치지 않고 세심하게 처리합니다"},
                {title: "끈기가 있습니다", description: "포기하지 않고 끝까지 최선을 다합니다"},
                {title: "배려심이 깊습니다", description: "타인의 입장을 헤아리고 진심으로 돕습니다"},
            ],
            TitleDescription: "넉넉한 대지처럼 따뜻하고 포용적인 내면이에요",
            subDescription: [
                {description: "깊은 배려심이 주변에 안정감을 전합니다"},
                {description: "끈기와 꼼꼼함은 목표를 이루는 큰 힘이 됩니다"},
            ],
            imageAlt: "넉넉한 대지",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/ground.png`,
        },
        "庚": {
            title: "단단한 금속",
            strengths: [
                {title: "결단력이 강합니다", description: "빠르게 결정하고 상황을 주도합니다"},
                {title: "직설적입니다", description: "솔직하고 명확하게 생각을 표현합니다"},
                {title: "단호합니다", description: "흔들림 없이 자신의 생각을 지킵니다"},
                {title: "논리적입니다", description: "상황을 분석해 합리적인 해결책을 찾습니다"},
            ],
            TitleDescription: "단단한 금속처럼 강하고 흔들림 없는 내면이에요",
            subDescription: [
                {description: "결단력과 단호함이 신뢰를 줍니다"},
                {description: "논리적인 사고로 문제를 명확히 해결합니다"},
            ],
            imageAlt: "단단한 금속",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/metal.png`,
        },
        "辛": {
            title: "날카로운 금속",
            strengths: [
                {title: "깔끔함을 좋아합니다", description: "주위를 정돈하고 질서를 유지합니다"},
                {title: "분석적입니다", description: "세부 사항을 꼼꼼히 분석해 문제를 해결합니다"},
                {title: "섬세합니다", description: "타인의 감정을 이해하고 배려합니다"},
                {title: "자기 관리가 철저합니다", description: "시간을 철저히 관리하며 꾸준히 성장합니다"},
            ],
            TitleDescription: "날카로운 금속처럼 세밀하고 정확한 내면이에요",
            subDescription: [
                {description: "분석적 사고로 문제를 해결하며 신뢰를 얻습니다"},
                {description: "깔끔함과 배려로 주변을 편안하게 만듭니다"},
            ],
            imageAlt: "날카로운 금속",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/sword.png`,
        },
        "壬": {
            title: "깊고 맑은 물",
            strengths: [
                {title: "유연합니다", description: "변화에 맞춰 상황을 잘 대처합니다"},
                {title: "호기심이 많습니다", description: "새로운 지식과 경험을 즐기며 탐구합니다"},
                {title: "자유롭습니다", description: "독립적이며 틀에 얽매이지 않습니다"},
                {title: "적응력이 뛰어납니다", description: "어떤 환경에서도 자연스럽게 적응합니다"},
            ],
            TitleDescription: "깊고 맑은 물처럼 자유롭고 유연한 내면이에요",
            subDescription: [
                {description: "적응력이 어떤 상황에서도 길을 만듭니다"},
                {description: "호기심과 자유로움이 삶을 풍요롭게 합니다"},
            ],
            imageAlt: "깊고 맑은 물",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/water.png`,
        },
        "癸": {
            title: "맑은 강물",
            strengths: [
                {title: "섬세합니다", description: "작은 것도 꼼꼼히 챙깁니다"},
                {title: "감성적입니다", description: "예술적 감각과 풍부한 감정을 지녔습니다"},
                {title: "지혜롭습니다", description: "상황을 빠르게 파악해 해결책을 찾습니다"},
                {title: "적응력이 뛰어납니다", description: "변화에 유연하게 적응합니다"},
            ],
            TitleDescription: "맑은 강물처럼 섬세하고 유연한 내면이에요",
            subDescription: [
                {description: "지혜롭게 상황을 부드럽게 해결합니다"},
                {description: "감성과 적응력이 삶에 활력을 더합니다"},
            ],
            imageAlt: "맑은 강물",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/river.png`,
        },
    };

    const currentAnalysis = analysisData[daySky] || {
        title: "데이터 없음",
        strengths: [{title: "데이터 없음", description: "해당 천간에 대한 데이터가 없습니다."}],
        description: "해당 천간에 대한 상세 설명을 준비 중입니다.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report3'); // 다음 페이지로 이동
    };

    return (
        <div className="saju-report2-wrapper">

            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            {/* 페이지 제목 */}
            <h1 className="report-title">1. {name}님의 타고난 성향을 알려드립니다</h1>
            <p className="report-subtitle">자신의 타고난 성향을 이해하고 더 나은 선택을 하세요</p>

            {/* 콘텐츠 레이아웃 */}
            <div className="report-content">
                <div className="sky-symbol-container">
                    <div
                        className="sky-symbol"
                        style={{
                            backgroundColor: getElementColor(daySky),
                            color: getTextColor(getElementColor(daySky)),
                        }}
                    >
                        {daySky}
                    </div>
                </div>
                {/* 왼쪽: 성향 분석 */}
                <div className="analysis-container">
                    <h2 className="analysis-title">{name}님의 타고난 성향을 확인하세요</h2>
                    <ul className="strengths-list">
                        {currentAnalysis.strengths.map((strength, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {strength.title}</strong>
                                <br/>
                                <span>{strength.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 오른쪽: 이미지와 설명 */}
                <div className="analysis-image-container">
                    <img
                        src={currentAnalysis.imageSrc}
                        alt={currentAnalysis.imageAlt}
                        className="analysis-image"
                    />
                    <p className="analysis-description">{currentAnalysis.TitleDescription}</p>
                    <ul className="strengths-list">
                        {currentAnalysis.subDescription.map((strength, index) => (
                            <li key={index}>
                                <strong>👉 {strength.description}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="footer-text">타고난 성향을 이해하면 자신만의 특별한 미래를 설계할 수 있습니다</p>
        </div>
    );
};
export default SajuReport2;
