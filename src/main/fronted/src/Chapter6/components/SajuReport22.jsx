import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/SajuReport22.css';
import { useSaju } from '../../context/SajuContext';

const SajuReport22 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { sajuData } = useSaju();
    const { name, gender } = sajuData || {};
    const blessingScores = location.state?.blessingScores || {};

    if (!blessingScores || !name || !gender) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 덕별 메시지 로직 유지
    const blessingMessages = {
        MALE: {
            인: {
                '0%': '사람들과의 관계에서 도움받기 어려울 수 있습니다.',
                '1%~42%': '적당한 인덕으로 도움과 협력을 받을 수 있습니다.',
                '56%~': '풍부한 인덕으로 많은 도움과 신뢰를 받습니다.',
            },
            처가: {
                '0%': '처가와의 관계에서 지원받기 어려울 수 있습니다.',
                '1%~42%': '처가와 적절히 협력하며 안정된 가정을 유지합니다.',
                '56%~': '처가의 큰 지원과 도움으로 안정적인 가정을 유지합니다.',
            },
            여자: {
                '0%': '여자와의 관계에서 조화롭지 않을 수 있습니다.',
                '1%~42%': '여자와 적당히 조화를 이루며 관계를 유지합니다.',
                '56%~': '여자와의 깊은 신뢰와 조화를 이루며 관계를 강화합니다.',
            },
            자식: {
                '0%': '자식과의 관계에서 갈등이 있을 수 있습니다.',
                '1%~42%': '자식과 협력하여 문제를 해결하고 조화를 이룹니다.',
                '56%~': '자식과의 강한 유대와 신뢰로 관계가 발전합니다.',
            },
            부모: {
                '0%': '부모와의 갈등으로 재정적, 정서적 지원이 어려울 수 있습니다.',
                '1%~42%': '부모와 적절히 협력하며 도움을 받습니다.',
                '56%~': '부모와의 깊은 신뢰와 지원으로 관계가 발전합니다.',
            },
        },
        FEMALE: {
            인: {
                '0%': '사람들과의 관계에서 도움받기 어려울 수 있습니다.',
                '1%~42%': '적당한 인덕으로 도움과 협력을 받을 수 있습니다.',
                '56%~': '풍부한 인덕으로 많은 도움과 신뢰를 받습니다.',
            },
            자식: {
                '0%': '자식과의 관계에서 갈등이 있을 수 있습니다.',
                '1%~42%': '자식과 협력하여 문제를 해결하고 조화를 이룹니다.',
                '56%~': '자식과의 강한 유대와 신뢰로 관계가 발전합니다.',
            },
            시댁: {
                '0%': '시댁과의 관계에서 지원받기 어려울 수 있습니다.',
                '1%~42%': '시댁과 적절히 협력하며 안정된 가정을 유지합니다.',
                '56%~': '시댁의 큰 지원과 도움으로 안정적인 가정을 유지합니다.',
            },
            남자: {
                '0%': '남자와의 관계에서 조화롭지 않을 수 있습니다.',
                '1%~42%': '남자와 적당히 조화를 이루며 관계를 유지합니다.',
                '56%~': '남자와의 깊은 신뢰와 조화를 이루며 관계를 강화합니다.',
            },
            부모: {
                '0%': '부모와의 갈등으로 재정적, 정서적 지원이 어려울 수 있습니다.',
                '1%~42%': '부모와 적절히 협력하며 도움을 받습니다.',
                '56%~': '부모와의 깊은 신뢰와 지원으로 관계가 발전합니다.',
            },
        },
    };

    const getBlessingMessage = (blessing, score) => {
        const messages = blessingMessages[gender]?.[blessing] || {};
        if (score === 0) return messages['0%'];
        if (score >= 1 && score <= 42) return messages['1%~42%'];
        if (score >= 56) return messages['56%~'];
        return '점수 범위에 해당하는 메시지가 없습니다.';
    };

    const handleNextPage = () => {
        navigate('/Report23');
    };

    return (
        <div className="report22-container">
            <h1 className="report-title">{name}님의 5대 덕이 전하는 의미와 영향</h1>
            <p className="report-subtitle">각 덕이 인생에 어떤 변화를 주는지 확인하세요.</p>

            {/* 덕별 결과를 렌더링 */}
            {Object.entries(blessingScores).map(([key, value]) => (
                <div className="result-section" key={key}>
                    <div className="result-header">
                        <span className="result-category">{key} 덕</span>
                        <span className="result-score">{value}%</span>
                    </div>
                    <div className="result-message">{getBlessingMessage(key, value)}</div>
                </div>
            ))}

            <button className="next-page-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport22;
