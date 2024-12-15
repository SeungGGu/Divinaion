import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/SajuReport31.css';
import {useSaju} from "../../context/SajuContext";

const SajuReport31 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData || {};
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const { percentages } = state || {};

    if (!percentages) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 오행 색상 및 매핑
    const fiveElementColorMap = {
        wood: '#89b798', // 목(木)
        fire: '#e57373', // 화(火)
        earth: '#f0d58c', // 토(土)
        metal: '#c0c0c0', // 금(金)
        water: 'black',  // 수(水)
    };

    const fiveElementDescriptions = {
        wood: {
            0: "집중력이 약해 계획을 쉽게 중단할 수 있어요",
            42: "목표를 향해 노력하며 끝까지 해내는 힘이 있어요",
            56: "자신만의 방식을 고집하며 쉽게 타협하지 않아요",
        },
        fire: {
            0: "목표를 이어가는 데 열정이 약할 수 있어요",
            42: "따뜻한 마음이 주변에 긍정적인 에너지를 줍니다",
            56: "감정이 과해질 때가 있어 신중함이 필요해요",
        },
        earth: {
            0: "불안정해 작은 일에도 스트레스를 받을 수 있어요",
            42: "책임감 있게 주변을 돕고 안정감을 줍니다",
            56: "고민이 많아 결정을 미룰 때가 있어요",
        },
        metal: {
            0: "결단력이 약해 기회를 놓칠 가능성이 있어요",
            42: "신뢰를 얻고 논리적으로 문제를 해결합니다",
            56: "자신의 방식을 고집해 변화에 적응하기 어려워요",
        },
        water: {
            0: "상상력 부족으로 아이디어가 제한될 수 있어요",
            42: "유연하게 상황을 대처하는 능력이 뛰어나요",
            56: "감정이 예민해져 사소한 일에도 쉽게 반응해요",
        },
    };

    const getDescription = (element, percentage) => {
        if (percentage === "0.0") return fiveElementDescriptions[element][0];
        if (percentage <= 50) return fiveElementDescriptions[element][42];
        return fiveElementDescriptions[element][56];
    };

    const handleNextPage = () => {
        navigate('/Report32', { state: { percentages } });
    };

    return (
        <div className="report31-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">23. {name}님의 오행, 삶에 어떤 변화를 줄까요?</h1>
            <p className="report-subtitle">오행 비율을 통해 내면의 균형과 조화를 발견하세요</p>

            <div className="energy-summary-table">
                <table>
                    <thead>
                    <tr>
                        <td colSpan={3}>오행(五行)으로 본 {name}님의 내면 성향을 확인하세요</td>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(percentages).map(([element, percentage]) => {
                        const numericPercentage = parseFloat(percentage); // 비율을 숫자로 변환

                        // 비율에 따른 표시
                        const prefix =
                            numericPercentage === 0 || numericPercentage >= 50
                                ? '❗'
                                : '👍';

                        return (
                            <tr key={element}>
                                <td
                                    style={{
                                        backgroundColor: fiveElementColorMap[element],
                                        color: 'white',
                                        textAlign: 'center',
                                    }}
                                >
                                    {element === 'wood' ? '목(木)' :
                                        element === 'fire' ? '화(火)' :
                                            element === 'earth' ? '토(土)' :
                                                element === 'metal' ? '금(金)' : '수(水)'}
                                </td>
                                <td>
                                    {prefix}
                                </td>
                                <td>{getDescription(element, numericPercentage)}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            <footer className="report31-footer">
                <p>오행의 강점과 약점을 조화롭게 활용하면 더 나은 선택과 성장을 만들 수 있습니다</p>
            </footer>
        </div>
    );
};

export default SajuReport31;
