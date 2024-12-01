import React from 'react';
import {useNavigate} from 'react-router-dom'; // useNavigate 추가
import {useSaju} from '../../context/SajuContext';
import '../css/SajuReport2.css';

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
            title: "튼튼한 나무처럼",
            strengths: [
                {title: "리더십이 뛰어나요", description: "팀을 이끌어 목표를 달성해요"},
                {title: "협력적이에요", description: "함께 힘을 모아 목표를 달성해요."},
                {title: "결단력이 있어요", description: "빠르게 결정을 내려 문제를 해결해요."},
                {title: "끈기가 강해요", description: "끝까지 포기하지 않고 도전해요."},
                {title: "믿음직스러워요", description: "팀에서 든든한 신뢰를 주는 존재예요."},
            ],
            description: "자녀는 목표가 뚜렷하고 성장을 위해 꾸준히 노력하는 아이입니다. 자기 발전에 집중하며 흔들림 없이 앞으로 나아가는 모습을 보여요.",
            imageAlt: "튼튼한 나무처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/mountain.png`,
        },
        "乙": {
            title: "성장하는 작은 나무처럼",
            strengths: [
                {title: "유연해요", description: "변화에 빠르게 적응해요."},
                {title: "협력적이에요", description: "함께 프로젝트를 성공적으로 이끌어요."},
                {title: "끈기가 있어요", description: "끝까지 목표를 달성해요."},
                {title: "성장 지향적이에요", description: "새로운 기술을 배우고 발전해요."},
                {title: "세심해요", description: "작은 디테일까지 꼼꼼히 신경 써요."},
            ],
            description: "자녀는 성실하고 꾸준히 노력하는 성향을 지니고 있습니다. 목표를 향해 한 걸음씩 성장해 나가는 모습을 보여줍니다.",
            imageAlt: "성장하는 작은 나무처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/tree.png`,
        },
        "丙": {
            title: "따뜻한 햇살처럼",
            strengths: [
                {title: "열정적이에요", description: "뜨거운 열정으로 팀에 활기를 줘요."},
                {title: "긍정적이에요", description: "밝은 에너지로 친구들에게 힘을 줘요."},
                {title: "즉흥적이에요", description: "기회를 빠르게 포착하고 행동해요."},
                {title: "리더십이 있어요", description: "팀을 이끌고 목표를 달성해요."},
                {title: "표현력이 풍부해요", description: "감정을 솔직하게 표현해요."},
            ],
            description: "자녀는 밝고 활기찬 에너지를 가지고 있습니다. 사람들에게 따뜻함을 전하며, 긍정적인 영향력을 널리 퍼뜨립니다.",
            imageAlt: "따뜻한 햇살처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/sun.png`,
        },
        "丁": {
            title: "활활 타오르는 불꽃처럼",
            strengths: [
                {title: "따뜻해요", description: "주변에 따뜻한 위로와 힘을 줘요."},
                {title: "꾸준해요", description: "목표를 향해 포기하지 않아요."},
                {title: "섬세해요", description: "작은 디테일도 놓치지 않아요."},
                {title: "솔직해요", description: "감정을 솔직하게 표현해요."},
                {title: "낙천적이에요", description: "어려운 상황에서도 긍정적인 태도를 유지해요."},
            ],
            description: "자녀는 열정적이고 활기찬 성향을 가지고 있습니다. 하고 싶은 일에 몰두하며, 끝까지 완수하려는 강한 의지가 있습니다.",
            imageAlt: "활활 타오르는 불꽃처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/fire.png`,
        },
        "戊": {
            title: "튼튼한 산처럼",
            strengths: [
                {title: "신뢰할 수 있어요", description: "맡은 일을 끝까지 책임감 있게 해내요."},
                {title: "안정적이에요", description: "익숙한 환경에서 안정감을 유지해요."},
                {title: "책임감이 강해요", description: "중요한 일에 책임감을 가지고 임해요."},
                {title: "꾸준해요", description: "인내심을 가지고 목표를 끝까지 이루어요."},
                {title: "현실적이에요", description: "감정보다 실질적인 결과를 중시해요."},
            ],
            description: "자녀는 안정적이고 믿음직한 성향을 가지고 있습니다. 다른 사람들을 세심하게 챙기며, 언제나 책임감 있게 행동합니다.",
            imageAlt: "튼튼한 산처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/mountain.png`,
        },
        "己": {
            title: "넉넉한 대지처럼",
            strengths: [
                {title: "포용력이 있어요", description: "다양한 생각을 이해하고 존중해요."},
                {title: "부드러워요", description: "상황에 맞춰 차분히 대응해요."},
                {title: "꼼꼼해요", description: "작은 일도 놓치지 않고 세심하게 처리해요."},
                {title: "끈기 있어요", description: "포기하지 않고 끝까지 최선을 다해요."},
                {title: "배려심이 깊어요", description: "타인의 입장을 헤아리고 진심으로 도와줘요."},
            ],
            description: "자녀는 안정적이고 믿음직한 성향을 가지고 있습니다. 사람들을 잘 챙기고 신뢰받으며, 책임감 있게 행동합니다.",
            imageAlt: "넉넉한 대지처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/earth.png`,
        },
        "庚": {
            title: "단단한 금속처럼",
            strengths: [
                {title: "결단력이 있어요", description: "빠르게 결정하고 상황을 주도해요."},
                {title: "직설적이에요", description: "생각을 솔직하고 직접적으로 표현해요."},
                {title: "단호해요", description: "흔들림 없이 자신의 생각을 지켜요."},
                {title: "끈기 있어요", description: "목표를 위해 끝까지 포기하지 않아요."},
                {title: "논리적이에요", description: "상황을 분석하고 합리적인 해결책을 찾아요."},
            ],
            description: "자녀는 강하고 목표가 뚜렷한 성향을 가지고 있습니다. 어려운 상황에서도 흔들리지 않고 꾸준히 목표를 향해 나아가는 강한 결단력을 보여줍니다.",
            imageAlt: "단단한 금속처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/metal.png`,
        },
        "辛": {
            title: "날카로운 금속처럼",
            strengths: [
                {title: "깔끔함을 좋아해요", description: "주위를 정돈하고 깔끔하게 유지해요."},
                {title: "분석적이에요", description: "세부 사항을 꼼꼼히 분석해 문제를 해결해요."},
                {title: "융통성이 있어요", description: "상황에 맞춰 유연하게 대처해요."},
                {title: "섬세해요", description: "타인의 감정을 이해하고 배려해요."},
                {title: "자기 관리가 철저해요", description: "시간을 철저히 관리하며 꾸준히 성장해요."},
            ],
            description: "자녀는 예리한 판단력과 뛰어난 집중력을 가진 아이입니다. 목표를 향해 정확하고 확실하게 나아가며, 결단력 있는 모습을 보여줍니다.",
            imageAlt: "날카로운 금속처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/knife.png`,
        },
        "壬": {
            title: "깊고 맑은 물처럼",
            strengths: [
                {title: "유연해요", description: "변화에 빠르게 적응하고 상황에 맞게 대처해요."},
                {title: "호기심이 많아요", description: "새로운 지식과 경험을 즐기며 탐구해요."},
                {title: "직관적이에요", description: "상황을 빠르게 파악하고 결정을 내립니다."},
                {title: "자유로워요", description: "독립적이며 틀에 얽매이지 않아요."},
                {title: "적응력이 뛰어나요", description: "어떤 환경에서도 자연스럽게 적응해요."},
            ],
            description: "자녀는 차분하고 넓은 시야를 가진 아이입니다. 다양한 상황에서 유연하게 대처하며, 깊이 있는 지혜로 주변에 긍정적인 영향을 줍니다.",
            imageAlt: "깊고 맑은 물처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/water.png`,
        },
        "癸": {
            title: "맑은 강물처럼",
            strengths: [
                {title: "섬세해요", description: "작은 것 하나도 꼼꼼하게 챙겨요."},
                {title: "감성적이에요", description: "예술적 감각과 풍부한 감정을 지녔어요."},
                {title: "신중해요", description: "중요한 결정을 신중하게 내려요."},
                {title: "지혜로워요", description: "상황을 빠르게 파악해 해결책을 찾아요."},
                {title: "적응력이 좋아요", description: "변화에 능숙하게 적응해요."},
            ],
            description: "자녀는 부드럽고 유연한 성향을 가진 아이입니다. 상황에 맞게 자연스럽게 적응하며, 흐름을 따라 문제를 해결하는 능력이 있습니다.",
            imageAlt: "맑은 강물처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/river.png`,
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
            <h1 className="report-title">2. {name}님의 내면 강점을 발견하세요</h1>
            <p className="report-subtitle">내면의 성향과 강점을 활용해 긍정적 변화를 만들어 보세요</p>

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

export default SajuReport2;
