import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/SajuReport26.css';
import { useSaju } from "../../context/SajuContext";

const SajuReport26 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData || {};
    const location = useLocation();
    const navigate = useNavigate();
    const { energyScores } = location.state || {}; // 25페이지에서 넘어온 에너지 데이터

    if (!energyScores) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 에너지별 메시지 매핑
    const energyMessages = {
        비견: { title: "협력적 행동", description: "독립적이며 협력을 중시해 문제 해결에 적극적으로 나서는 성향입니다." },
        겁재: { title: "도전적 행동", description: "새로운 도전을 두려워하지 않고 목표를 향해 적극적으로 행동합니다." },
        식신: { title: "내향적 행동", description: "상황을 분석하고 신뢰를 바탕으로 꾸준히 준비하고 실천하는 성향입니다." },
        상관: { title: "외향적 행동", description: "변화에 유연하게 대응하며 다양한 사람들과 쉽게 어울리는 성향입니다." },
        편재: { title: "실리적 행동", description: "기회를 빠르게 포착하고 실리를 추구하며 다양한 활동을 시도합니다." },
        정재: { title: "실용적 행동", description: "자산을 철저히 관리하며 실수를 줄이지 위해 신중하고 실리를 중시합니다." },
        편관: { title: "권위적 행동", description: "책임을 중시하며 규칙과 질서를 지켜 중요한 결정을 내리는 성향입니다." },
        정관: { title: "원칙적 행동", description: "원칙을 중시하고 타인에게 신뢰와 모범을 보여 주변에 귀감이 됩니다." },
        편인: { title: "독창적 행동", description: "새로운 아이디어를 떠올리고 창의적인 문제 해결을 즐기는 성향입니다." },
        정인: { title: "포용적 행동", description: "타인을 배려하며 신뢰를 바탕으로 주변 사람들과 조화를 이루는 성향입니다." },
    };

    const handleNextPage = () => {
        navigate('/Report27', { state: { energyScores } });
    };

    return (
        <div className="report26-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">19. {name}님의 행동 성향 강점, 사주로 풀어봅니다</h1>
            <p className="report-subtitle">십신(十神) 사주를 통해 강점을 쉽고 재미있게 만나보세요</p>

            <div className="energy-table">
                {Object.entries(energyScores)
                    .filter(([_, score]) => score > 0) // 0% 에너지는 표시하지 않음
                    .map(([energy, score]) => (
                        <div key={energy} className="energy-row">
                            <div className="energy-category">
                                <strong>{energyMessages[energy]?.title} - {score}% 있어요</strong>
                            </div>
                            <div className="energy-description">
                                {energyMessages[energy]?.description}
                            </div>
                        </div>
                    ))}
            </div>

            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    십신(十神) 사주를 통해 강점을 알게 되면 새로운 가능성을 발견할 수 있습니다.
                </p>
            </div>
        </div>
    );
};

export default SajuReport26;
