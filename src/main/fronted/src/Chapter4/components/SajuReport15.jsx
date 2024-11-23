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
        물질적: ["실리를 추구해요", "효율적으로 일해요", "현실적 판단을 해요"],
        경쟁적: ["도전적이에요", "목표에 집중해요", "열정이 넘쳐요"],
        내향적: ["꾸준히 노력해요", "안정을 추구해요", "성실히 일해요"],
        외향적: ["사교적이에요", "적극적으로 나서요", "활발하게 활동해요"],
        안정적: ["안정감을 중요시해요", "균형을 유지해요", "조화를 이끌어요"],
        권위적: ["리더십이 있어요", "결단력이 뛰어나요", "목표를 주도해요"],
        모범적: ["성실히 노력해요", "규칙을 지켜요", "모범적 모습을 보여요"],
        협력적: ["협력을 잘해요", "함께할 때 즐거워요", "신뢰를 쌓아요"],
        창의적: ["창의적 사고를 해요", "새로운 것을 시도해요", "독창적이에요"],
        지혜적: ["지혜롭게 판단해요", "통찰력이 있어요", "배움을 중요시해요"],
    };

    const handleNextPage = () => {
        navigate('/Report16', { state: { mindScores: mindScores } });
    };

    return (
        <div className="report15-container">
            <h1 className="report-title">{name}님의 마음 강점 찾기</h1>
            <p className="report-subtitle">
                {name}님의 강점을 활용하여 성장하세요.
            </p>

            {/* 성향 및 설명 박스 */}
            <div className="mind-summary-container">
                {Object.entries(mindScores)
                    .filter(([_, score]) => score > 0) // 0% 성향 제외
                    .map(([mind, score]) => (
                        <div key={mind} className="mind-summary-box">
                            <h2 className="mind-title">{mind} 성향</h2>
                            <p className="mind-score">{score}%</p>
                            <ul className="mind-description">
                                {mindDescriptions[mind]?.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>

            {/* 하단 버튼 */}
            <div className="report-footer">
                <p className="footer-text">
                    {name}님의 긍정적인 마음 변화를 통해 더 큰 성장을 이루세요.
                </p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport15;
