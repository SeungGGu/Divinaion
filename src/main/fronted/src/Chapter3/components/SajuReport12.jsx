import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../css/SajuReport12.css';

const SajuReport12 = () => {
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
                0: "",
                42: "자신감을 가지고 자기 능력을 최대로 발휘하려 노력합니다.",
                56: ""
            },
            창의력: {
                0: "",
                42: "창의적으로 문제 해결하며 실질적 방안을 제시합니다.",
                56: ""
            },
            경제력: {
                0: "",
                42: "재정을 체계적으로 관리해 안정성을 유지할 수 있습니다.",
                56: ""
            },
            직업능력: {
                0: "",
                42: "일을 성실하게 완수하고 목표를 이루기 위해 꾸준히 노력합니다.",
                56: ""
            },
            지적능력: {
                0: "문제 분석과 해결책 찾기에 어려움을 겪을 수 있습니다.",
                42: "",
                56: ""
            }
        };

        if (percentage === 0) return messages[category][0];
        if (percentage <= 42) return messages[category][42];
        return messages[category][56];
    };

    const handleNextPage = () => {
        navigate('/Report13');
    };

    return (
        <div className="report12-container">
            <h1 className="report-title">맞춤형 성공 전략</h1>
            <p className="report-subtitle">각 능력에 따른 조언과 방향성을 확인하세요</p>

            {/* 분석 결과 렌더링 */}
            {Object.entries(scores).map(([key, value]) => (
                <div className="result-section" key={key}>
                    <div className="result-header">
                        <span className="result-category">{key}</span>
                        <span className="result-score">{value}%</span>
                    </div>
                    <div className="result-message">{getMessage(key, value)}</div>
                </div>
            ))}

            <button className="next-page-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport12;
