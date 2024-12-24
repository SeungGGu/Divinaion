import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/SajuReport15.css';
import { useSaju } from '../../context/SajuContext';

const SajuReport15 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { sajuData } = useSaju();
    const { name } = sajuData;

    // 이전 페이지에서 전달된 퍼센티지 데이터
    const mindScores = location.state?.mindScores || {};

    // 성향별 설명 데이터
    const mindDescriptions = {
        물질적: ["목표를 실현하며 자원을 효율적으로 관리합니다"],
        경쟁적: ["협력하며 타인과 함께 성과를 이룹니다"],
        내향적: ["창의적이고 유연하게 문제를 해결합니다"],
        외향적: ["적극적이고 혁신적인 아이디어를 제공합니다"],
        안정적: ["체계적이고 계획적으로 목표를 달성합니다"],
        권위적: ["결단력과 리더십이 강한 태도를 가집니다"],
        모범적: ["규칙을 잘 지키며 성실하게 행동합니다"],
        협력적: ["독립적이고 자기 주도적으로 행동합니다"],
        창의적: ["독창적이고 통찰력 있는 사고를 발휘합니다"],
        지혜적: ["분석적이고 신중하게 지식을 쌓습니다"],
    };

    // 평가 기호 함수
    const getEvaluationSymbol = (percentage) => {
        if (percentage <= 42) return "좋아요";
        return "강해요";
    };

    // 가장 높은 %의 성향 찾기
    const highestMind = Object.entries(mindScores).reduce((highest, [mind, score]) => {
        if (!highest || score > mindScores[highest]) {
            return mind;
        }
        return highest;
    }, null);

    const handleNextPage = () => {
        navigate('/Report16', { state: { mindScores: mindScores } });
    };

    return (
        <div className="report15-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">11. {name}님의 타고난 마음 성향, 강점을 알려드립니다</h1>
            <p className="report-subtitle">내면의 강점을 이해하고 삶을 더 풍요롭게 만들어보세요</p>

            <p className="report-subtitle">마음 성향의 강점은 {name}님에게 어떻게 작용하는 지 발견해보세요</p>
            <div className="report3-content">
                {Object.entries(mindScores)
                    .filter(([_, score]) => score > 0) // 0% 성향 제외
                    .map(([mind, score]) => (
                        <div key={mind} className={`result-section ${mind === highestMind ? 'highlight' : ''}`}>
                            <div className="result-header">
                                <span className="result-category">{mind} 마음 - {getEvaluationSymbol(score)}</span>
                            </div>
                            <div className="result-message">
                                <ul className="mind-description">
                                    {mindDescriptions[mind]?.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="report-footer">
                <p className="footer-text">내면의 강점을 활용하면 새로운 목표를 달성하는 데 도움이 됩니다</p>
            </div>
        </div>
    );
}

export default SajuReport15;
