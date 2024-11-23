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
        물질적: ["감정 표현이 서툼", "이익만 추구함", "공감 능력 향상 필요"],
        경쟁적: ["과도한 경쟁 의식", "성급한 결정", "신중한 결정 필요"],
        내향적: ["지나친 신중함", "변화 수용 어려움", "유연성 필요"],
        외향적: ["주변에 의존적", "주의 산만", "집중력 강화 필요"],
        안정적: ["안정 추구 과도", "변화에 둔감함", "균형감 유지 필요"],
        권위적: ["타인의 평가에 민감함", "자기 주장 강함", "유연한 소통 필요"],
        모범적: ["과도한 준수 집중", "완벽주의 경향", "융통성 발휘 필요"],
        협력적: ["자신의 주장을 고집", "타인 의견 수용 어려움", "다양한 의견 수용 필요"],
        창의적: ["비현실적 아이디어", "실행력 부족", "현실적 접근 필요"],
        지혜적: ["지나친 고민", "판단력 저하", "결단력 강화 필요"],
    };

    const handleNextPage = () => {
        navigate('/Report17'); // 다음 페이지로 이동
    };

    return (
        <div className="report16-container">
            <h1 className="report-title">{name}님의 마음 개선 방향</h1>
            <p className="report-subtitle">
                {name}님의 마음을 이해하고 성장할 수 있는 방향을 찾아보세요.
            </p>

            {/* 개선 방향 성향 박스 */}
            <div className="mind-improvement-container">
                {Object.entries(mindScores)
                    .filter(([_, score]) => score > 0) // 0% 성향 제외
                    .map(([mind, score]) => (
                        <div key={mind} className="mind-improvement-box">
                            <h2 className="mind-title">{mind} 성향</h2>
                            <p className="mind-score">{score}%</p>
                            <ul className="mind-improvement-list">
                                {mindImprovement[mind].map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>

            {/* 하단 버튼 */}
            <div className="report-footer">
                <p className="footer-text">
                    {name}님의 약점을 보완하고 성장할 방법을 찾아보세요.
                </p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport16;
