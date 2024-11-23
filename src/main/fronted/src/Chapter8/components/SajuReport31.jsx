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
            0: "",
            42: "목표를 향해 노력하며 활기차게 한 걸음씩 나아갑니다.",
            56: "",
        },
        fire: {
            0: "열정이 부족해 목표와 동기 부여가 쉽게 떨어질 수 있어요.",
            42: "",
            56: "",
        },
        earth: {
            0: "",
            42: "생각이 많고 고집이 강해 쉽게 의견을 바꾸지 않아요.",
            56: "",
        },
        metal: {
            0: "",
            42: "목표가 뚜렷하고 논리적으로 접근하여 신뢰를 얻습니다.",
            56: "",
        },
        water: {
            0: "",
            42: "상황을 현명하고 지혜롭게 파악하여 유연하게 대응해요.",
            56: "",
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
