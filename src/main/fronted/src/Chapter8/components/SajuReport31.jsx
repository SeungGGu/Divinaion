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
            0: "집중력이 부족해 어려움에 쉽게 포기할 수 있어요",
            42: "목표를 향해 노력하며 꾸준히 앞으로 나아갑니다",
            56: "자신만의 방식을 고집하여 쉽게 타협하지 않아요",
        },
        fire: {
            0: "열정이 부족해 목표를 유지하기 어려울 수 있어요",
            42: "따뜻한 행동으로 주변에 긍정의 에너지를 줍니다",
            56: "감정이 과격하게 흥분하거나 판단이 급할 수 있어요",
        },
        earth: {
            0: "안정감이 부족해 쉽게 스트레스를 받을 수 있어요",
            42: "책임감 있게 주변을 돌보며 도움을 줍니다",
            56: "생각이 많고 고집이 강해 쉽게 의견을 바꾸지 않아요",
        },
        metal: {
            0: "결단력이 약해 중요한 순간에 주저할 때가 있어요",
            42: "목표가 뚜렷해 신뢰를 얻고 논리적으로 접근합니다",
            56: "자신의 방식을 고집하며 변화에 적응하기 어려워요",
        },
        water: {
            0: "상상력이 부족해 아이디어를 떠올리기 어려워요",
            42: "상황을 잘 파악해 유연하게 대처해 나갑니다",
            56: "감정이 예민해져 작은 일에도 쉽게 반응할 수 있어요",
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
            <h1 className="report-title">오행 에너지로 {name}님의 성격과 변화를 확인하세요</h1>
            <p className="report-subtitle">오행의 균형과 비율에 따라 {name}님의 성격과 방향성을 알아보세요.</p>

            <div className="energy-summary-table">
                <table>
                    <thead>
                    <tr>
                        <th>오행</th>
                        <th>비율</th>
                        <th>결과</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(percentages).map(([element, percentage]) => (
                        <tr key={element}>
                            <td style={{
                                backgroundColor: fiveElementColorMap[element],
                                color: 'white',
                                textAlign: 'center',
                            }}>
                                {element === 'wood' ? '목(木)' :
                                    element === 'fire' ? '화(火)' :
                                        element === 'earth' ? '토(土)' :
                                            element === 'metal' ? '금(金)' : '수(水)'}
                            </td>
                            <td>{percentage}%</td>
                            <td>{getDescription(element, percentage)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <footer className="report31-footer">
                <p>{name}님의 오행 균형을 맞추어 부족한 부분을 보완하고 성장을 이루세요!</p>
            </footer>

            <button className="next-page-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport31;
