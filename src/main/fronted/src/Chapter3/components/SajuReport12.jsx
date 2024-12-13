import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../css/SajuReport12.css';
import {useSaju} from "../../context/SajuContext";

const SajuReport12 = () => {
    const {sajuData} = useSaju();
    const {name} = sajuData;
    const location = useLocation();
    const navigate = useNavigate();

    // 전달받은 점수 데이터
    const {scores} = location.state || {
        scores: {
            자신감: 0,
            창의력: 0,
            경제력: 0,
            직업능력: 0,
            지적능력: 0,
        },
    };

    // 각 항목별 메시지 생성 함수 (위에 작성한 getMessage 활용)
    const getMessage = (category, percentage) => {
        const messages = {
            자신감: {
                0: "자신감을 키워 스스로를 믿는 연습이 필요합니다",
                42: "균형 잡힌 자신감으로 목표를 책임감 있게 달성합니다",
                56: "자신감이 많으면 때로는 실수로 이어질 수 있습니다"
            },
            창의력: {
                0: "아이디어를 탐구하며 창의력을 키워야 합니다",
                42: "창의력으로 새로운 아이디어를 실현합니다",
                56: "창의력이 과하면 현실성을 잃을 수 있습니다"
            },
            경제력: {
                0: "자원을 효율적으로 관리하는 연습이 필요합니다",
                42: "안정적으로 자원을 관리하며 목표를 달성합니다",
                56: "이익만 추구하면 인간관계가 소홀해질 수 있습니다"
            },
            성취력: {
                0: "목표를 설정하며 노력하는 습관을 키워보세요",
                42: "성취력으로 목표를 완성하며 즐거움을 얻습니다",
                56: "성취욕이 지나치면 스트레스를 받을 수 있습니다"
            },
            사고력: {
                0: "문제를 분석하는 연습으로 사고력을 키워보세요",
                42: "사고력으로 문제를 분석해 해답을 찾아냅니다",
                56: "고민이 길어지면 결단력이 떨어질 수 있습니다"
            }
        };

        if (percentage === 0) return messages[category][0];
        if (percentage <= 42) return messages[category][42];
        return messages[category][56];
    };

    // 평가 기호 함수
    const getEvaluationSymbol = (percentage) => {
        if (percentage === 0) return "❗";
        if (percentage <= 42) return "👍";
        return "❗❗";
    };

    const handleNextPage = () => {
        navigate('/Report13');
    };

    return (
        <div className="report12-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
            <h1 className="report-title">9. {name}님의 타고난 능력, 삶에 어떻게 작용할까요?</h1>
            <p className="report-subtitle">강점은 키우고 약점을 보완하는 방법을 알려드립니다</p>

            {/* 분석 결과 렌더링 */}
            <p>타고난 능력이 {name}님에게 어떻게 작용하는지 확인하세요</p>
            {Object.entries(scores).map(([key, value]) => (
                <div className="result-section" key={key}>
                    <div className="result-header">
                        <span className="result-category">{key}</span>
                        <span className="result-score">{getEvaluationSymbol(value)} {value}%</span>
                    </div>
                    <div className="result-message">{getMessage(key, value)}</div>
                </div>
            ))}
            <div className="report-footer">
                <p>능력의 강점을 활용하고 약점을 보완하면 구체적인 목표를 실현할 수 있습니다.</p>
            </div>
        </div>
    );
};

export default SajuReport12;
