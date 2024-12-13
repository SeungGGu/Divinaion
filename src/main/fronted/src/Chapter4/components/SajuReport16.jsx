import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/SajuReport16.css';
import { useSaju } from '../../context/SajuContext';

const SajuReport16 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { sajuData } = useSaju();
    const { name } = sajuData;

    // 이전 페이지에서 전달된 데이터
    const mindScores = location.state?.mindScores || {};

    // 성향별 개선 방향 설명
    const mindImprovement = {
        물질적: ["이익만 추구해 신뢰를 잃을 수 있습니다"],
        경쟁적: ["지나친 경쟁으로 관계가 불편해질 수 있습니다"],
        내향적: ["현실만 고집해 창의성이 부족해질 수 있습니다"],
        외향적: ["자유로움이 지나쳐 반발을 살 수 있습니다"],
        안정적: ["변화에 소극적이고 보수적일 수 있습니다"],
        권위적: ["권위적 태도로 독단적이 될 수 있습니다"],
        모범적: ["규칙에 얽매여 융통성이 부족할 수 있습니다"],
        협력적: ["자기 주장만 고집해 협력이 어려울 수 있습니다"],
        창의적: ["과도한 분석으로 소통이 단절될 수 있습니다"],
        지혜적: ["지나친 신중함으로 기회를 놓칠 수 있습니다"],
    };

    // 약점 평가 기호 함수
    const getEvaluationSymbol = (percentage, isHighest) => {
        if (isHighest) return "⚠";
        if (percentage <= 42) return "❗";
        if (percentage <= 70) return "‼";
        return "🚫";
    };

    // 가장 높은 %의 성향 찾기
    const highestMind = Object.entries(mindScores).reduce((highest, [mind, score]) => {
        if (!highest || score > mindScores[highest]) {
            return mind;
        }
        return highest;
    }, null);

    const handleNextPage = () => {
        navigate('/Report17'); // 다음 페이지로 이동
    };

    return (
        <div className="report16-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">12. {name}님의 마음성향, 약점을 강점으로 만들어보세요</h1>
            <p className="report-subtitle">
                약점을 강점으로 전환하며 새로운 변화를 만들어보세요!
            </p>

            {/* 개선 방향 성향 박스 */}
            <p>마음 성향의 약점이 {name}님의 성장에 어떤 영향을 미치는지 확인하세요</p>
            <div className="mind-improvement-container">
                {Object.entries(mindScores)
                    .filter(([_, score]) => score > 0) // 0% 성향 제외
                    .map(([mind, score]) => {
                        const isHighest = mind === highestMind;
                        return (
                            <div key={mind} className={`mind-improvement-box ${isHighest ? 'highlight' : ''}`}>
                                <h2 className="mind-title">{mind} 마음</h2>
                                <p className="mind-score">
                                    {getEvaluationSymbol(score, isHighest)} {score}%
                                </p>
                                <ul className="mind-improvement-list">
                                    {mindImprovement[mind].map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
            </div>

            {/* 하단 버튼 */}
            <div className="report-footer">
                <p className="footer-text">
                    약점을 강점으로 바꾸면 긍정적인 변화를 시작할 수 있습니다.
                </p>
            </div>
        </div>
    );
};

export default SajuReport16;
