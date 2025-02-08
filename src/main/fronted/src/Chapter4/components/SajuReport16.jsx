import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/SajuReport16.css'; // 해당 페이지 전용 CSS
import { useSaju } from '../../context/SajuContext';

const SajuReport16 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { sajuData } = useSaju();
    const { name } = sajuData;

    const mindScores = location.state?.mindScores || {};

    // 성향별 개선 방향 설명
    const mindImprovement = {
        협력적: "질투심과 우월감이 강하고 불필요한 지출이 많으며 자유를 추구하는 성향입니다.",
        도전적: "열등감과 투쟁심이 강해 지나친 자신감이 손해로 이어질 수 있는 성향입니다.",
        내향적: "감정 기복이 크고 말이 앞서며 결단력이 부족해 어려움에 흔들리는 성향입니다.",
        외향적: "즉흥적이며 충동적으로 행동해 실수하거나 갈등을 초래할 수 있는 성향입니다.",
        실리적: "기회를 우선시해 무리하게 행동하거나 상황 판단을 놓칠 수 있는 성향입니다.",
        실용적: "감정보다 이익을 우선시해 주변 관계에서 거리감을 줄 수 있는 성향입니다.",
        권위적: "위계와 권위를 중시하다 보니 지나치게 권위적으로 보일 수 있는 성향입니다.",
        원칙적: "타인의 시선을 많이 의식하며 자신의 의견을 지나치게 고집하는 성향입니다.",
        독창적: "다양한 아이디어를 떠올리지만 세부 계획이 부족해 실행력이 떨어지는 편입니다.",
        포용적: "고집이 강하고 신중한 성향으로 생각이 많아 결정을 늦추는 경우가 있습니다.",
    };

    const handleNextPage = () => {
        navigate('/Report24');
    };

    return (
        <div className="report16-container">
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report16-title">17. {name}님의 마음 성향, 약점을 강점으로 만들어보세요</h1>
            <p className="report16-subtitle">
                약점을 강점으로 전환하며 새로운 변화를 만들어보세요!
            </p>

            <p>{name}님의 마음 성향에서 보완할 점, 사주가 알려드립니다</p>
            <div className="report16-card-container">
                {Object.entries(mindScores)
                    .filter(([_, score]) => score > 0) // 0% 성향 제외
                    .map(([mind, score]) => (
                        <div key={mind} className="report16-card">
                            <div className="report16-card-header">
                                <span className="mind-category">{mind} 마음</span>
                                <span className="mind-score">{score}%</span>
                            </div>
                            <p className="mind-improvement">{mindImprovement[mind]}</p>
                        </div>
                    ))}
            </div>

            <div className="report16-footer">
                <p className="report16-footer-text">
                    약점을 강점으로 바꾸면 긍정적인 변화를 시작할 수 있습니다
                </p>
            </div>
        </div>
    );
}

export default SajuReport16;
