import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/SajuReport32.css';
import { useSaju } from "../../context/SajuContext";

const SajuReport32 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData || {};
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const { percentages } = state || {};

    if (!percentages) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 다음 버튼 핸들러
    const handleNextPage = () => {
        navigate('/Report33');
    };

    // 오행별 고정 데이터 및 이미지 매핑
    const fiveElementColorMap = {
        목: '#89b798',  // 목(木)
        화: '#e57373',  // 화(火)
        토: '#f0d58c', // 토(土)
        금: '#c0c0c0', // 금(金)
        수: 'black',   // 수(水)
    };

    const fiveElements = [
        {
            type: '목 에너지',
            percentage: percentages.wood,
            description: ['간장', '쓸개', '두통', '조울증', '신경계'],
            image: `${process.env.PUBLIC_URL}/images/fiveEnengy/wood.png`,
        },
        {
            type: '화 에너지',
            percentage: percentages.fire,
            description: ['눈', '심장', '소장', '혈압', '순환계'],
            image: `${process.env.PUBLIC_URL}/images/fiveEnengy/fire.png`,
        },
        {
            type: '토 에너지',
            percentage: percentages.earth,
            description: ['비장', '위장', '당뇨', '피부', '근육계'],
            image: `${process.env.PUBLIC_URL}/images/fiveEnengy/earth.png`,
        },
        {
            type: '금 에너지',
            percentage: percentages.metal,
            description: ['폐', '대장', '호흡기', '기관지', '골격계'],
            image: `${process.env.PUBLIC_URL}/images/fiveEnengy/metal.png`,
        },
        {
            type: '수 에너지',
            percentage: percentages.water,
            description: ['신장', '방광', '우울증', '비뇨기', '혈액계'],
            image: `${process.env.PUBLIC_URL}/images/fiveEnengy/water.png`,
        },
    ];

    return (
        <div className="report32-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">24. {name}님의 오행, 건강과 균형을 알아봅니다</h1>
            <p className="report-subtitle">
                오행 에너지를 활용해 건강을 알아보고 관리하세요
            </p>

            <div className="health-summary-container">
                {fiveElements.map((element) => {
                    let statusText = "강해요"; // 기본값
                    const numericPercentage = parseFloat(element.percentage);

                    if (numericPercentage === 0) {
                        statusText = "❗ 약해요";
                    } else if (numericPercentage >= 50) {
                        statusText = "🚫 주의 필요";
                    }

                    return (
                        <div className="health-card" key={element.type}>
                            <ul className="health-description">
                                {element.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                            <img
                                src={element.image}
                                alt={element.type}
                                className="health-image"
                            />
                            <div
                                style={{
                                    backgroundColor: fiveElementColorMap[element.type.split(' ')[0]],
                                    color: element.type === '수 에너지' ? 'white' : 'black',
                                    fontWeight: 'bold',
                                    padding: '5px',
                                    borderRadius: '5px',
                                }}
                            >
                                {element.type}
                            </div>
                            <div
                                className="health-header"
                                style={{
                                    backgroundColor: numericPercentage === 0 || numericPercentage >= 50 ? "#f4a460" : "#444",
                                    color: numericPercentage === 0 || numericPercentage >= 50 ? "#000" : "#fff",
                                }}
                            >
                                {statusText}
                            </div>
                        </div>
                    );
                })}
            </div>

            <footer className="report32-footer">
                <p>오행의 균형을 맞추면 건강한 일상을 만들 수 있습니다</p>
            </footer>
        </div>
    );
};

export default SajuReport32;
