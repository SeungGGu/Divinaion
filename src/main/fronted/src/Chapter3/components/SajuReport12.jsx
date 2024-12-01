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
                0: "타인의 의견에 휘둘려 결정을 내리기 어렵습니다",
                42: "자신감을 가지고 자신의 잠재력을 최대한 발휘합니다",
                56: "지나친 자신감으로 실수를 반복할 수 있습니다"
            },
            창의력: {
                0: "새로운 접근법이 부족해 문제 해결에 어려움을 겪습니다",
                42: "협력과 소통으로 창의적으로 문제를 해결해 갑니다",
                56: "창의적이지만 실현 어려운 아이디어를 고집합니다"
            },
            경제력: {
                0: "경제 감각이 부족해 재정 관리에 어려움을 겪습니다",
                42: "재정을 안정적으로 관리하며 경제적 안정을 찾습니다",
                56: "지나친 욕심이 재정적 리스크를 초래할 수 있습니다"
            },
            직업능력: {
                0: "조직에서 성과 내기가 어려워 만족감이 낮습니다",
                42: "꾸준한 노력으로 자신의 목표를 성실히 이룹니다",
                56: "독단적인 태도로 협력 부족과 갈등을 유발합니다"
            },
            지적능력: {
                0: "문제 분석과 해결책 찾기에 어려움을 겪을 수 있습니다",
                42: "지식이 풍부하여 문제를 효율적으로 해결합니다",
                56: "복잡하게 사고하여 문제 해결이 어려워질 수 있습니다"
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
