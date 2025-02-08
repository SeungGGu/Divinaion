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

    // 오행 색상 매핑
    const fiveElementColorMap = {
        wood: '#89b798', // 목(木)
        fire: '#e57373', // 화(火)
        earth: '#f0d58c', // 토(土)
        metal: '#c0c0c0', // 금(金)
        water: 'black',  // 수(水)
    };

    // 오행 설명 매핑
    const fiveElementDescriptions = {
        wood: "집중력과 추진력이 뛰어나며 명예를 중시합니다.",
        fire: "이성적이고 정열적이며, 표현력이 강합니다.",
        earth: "환경 변화에 유연하며 신뢰와 의리를 중요시합니다.",
        metal: "결단력과 비판적 사고가 뛰어나며 체면을 중시합니다.",
        water: "지혜롭고 감정적이며 상상력이 풍부합니다.",
    };

    // 한글 변환 함수
    const getKoreanElement = (element) => {
        return element === 'wood' ? '목(木)' :
            element === 'fire' ? '화(火)' :
                element === 'earth' ? '토(土)' :
                    element === 'metal' ? '금(金)' :
                        '수(水)';
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


            <p>  오행(五行)으로 본 {name}님의 내면 성향을 확인하세요</p>
            <div className="energy-summary-table">
                <table>
                    <tbody>
                    {Object.entries(percentages).map(([element, percentage]) => (
                        <tr key={element}>
                            <td
                                style={{
                                    backgroundColor: fiveElementColorMap[element],
                                    color: element === 'water' ? '#ffffff' : '#000000',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    borderRadius: '5px',
                                    padding: '12px',
                                }}
                            >
                                {getKoreanElement(element)} - {percentage}% 있어요
                            </td>
                            <td className="description-cell">{fiveElementDescriptions[element]}</td>
                        </tr>
                    ))}
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
