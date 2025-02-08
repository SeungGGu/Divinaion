import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/SajuReport15.css'; // 해당 페이지 전용 CSS
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
        협력적: "독립적이고 추진력이 강하며 주변 사람들과 협력을 중시하는 성향입니다.",
        도전적: "경쟁심과 승부욕이 강하며 자유로운 선택과 도전을 중시하는 성향입니다.",
        내향적: "기본을 중시하고 책임감이 강하며 평온하고 안정된 삶을 추구하는 성향입니다.",
        외향적: "개방적이고 변화에 유연하며 자기주장이 강하고 도전을 즐기는 성향입니다.",
        실리적: "현실적이고 넓은 인맥을 통해 기회를 찾으며 실리를 중시하는 성향입니다.",
        실용적: "계산이 정확하고 책임감이 강하며 안정과 신뢰를 중시하는 성향입니다.",
        권위적: "법과 규칙을 중시하며 품행이 단정하고 권위와 명예를 중요시하는 성향입니다.",
        원칙적: "원칙을 중시하고 타인에게 믿음을 주며 바람직한 규범을 준수하는 성향입니다.",
        독창적: "정신적 만족을 중시하며 눈치가 빠르고 독창적인 생각을 잘하는 성향입니다.",
        포용적: "박학다식하고 예의를 중시하며 주변 사람들과 잘 어울리는 성향입니다.",
    };

    const handleNextPage = () => {
        navigate('/Report16', { state: { mindScores: mindScores } });
    };

    return (
        <div className="report15-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report15-title">16. {name}님의 타고난 마음 성향, 강점을 알려드립니다</h1>
            <p className="report15-subtitle">내면의 강점을 이해하고 삶을 더 풍요롭게 만들어보세요.</p>

            <p>{name}님의 진짜 마음 성향 감정은 무엇일까요?</p>
            <div className="report15-card-container">
                {Object.entries(mindScores)
                    .filter(([_, score]) => score > 0) // 0% 성향 제외
                    .map(([mind, score]) => (
                        <div key={mind} className="report15-card">
                            <div className="report15-card-header">
                                <span className="mind-category">{mind} 마음</span>
                                <span className="mind-score">{score}% 있어요</span>
                            </div>
                            <p className="mind-description">{mindDescriptions[mind]}</p>
                        </div>
                    ))}
            </div>

            <div className="report15-footer">
                <p className="report15-footer-text">
                    내면의 강점을 활용하면 새로운 목표를 달성하는 데 도움이 됩니다
                </p>
            </div>
        </div>
    );
}

export default SajuReport15;
