import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css';

const SajuReport2 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
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
        "戊": {
            title: "튼튼한 산처럼",
            strengths: [
                {
                    title: "신뢰할 수 있어요",
                    description: "맡은 일을 끝까지 책임감 있게 해내요.",
                },
                {
                    title: "안정적이에요",
                    description: "익숙한 환경에서 안정감을 유지해요.",
                },
                {
                    title: "책임감이 강해요",
                    description: "중요한 일에 책임감을 가지고 임해요.",
                },
                {
                    title: "꾸준해요",
                    description: "인내심을 가지고 목표를 끝까지 이루어요.",
                },
                {
                    title: "현실적이에요",
                    description: "감정보다 실질적인 결과를 중시해요.",
                },
            ],
            description:
                name + "님은 안정적이고 믿음직한 성향을 가지고 있습니다. 다른 사람들을 세심하게 챙기며, 언제나 책임감 있게 행동합니다.",
            imageAlt: "튼튼한 산처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/mountain.png`,
        },
    };

    const currentAnalysis = analysisData[daySky] || {
        title: "데이터 없음",
        strengths: [{ title: "데이터 없음", description: "해당 천간에 대한 데이터가 없습니다." }],
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

export default SajuReport2;
