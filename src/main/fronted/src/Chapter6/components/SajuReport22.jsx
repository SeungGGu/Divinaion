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
                '0%': '사람들과의 관계가 희박해 도움을 받기 어려울 수 있습니다',
                '1%~42%': '사람들과 조화롭게 어울려 도움과 협력을 받습니다',
                '56%~': '사람들과 지나친 경쟁으로 불화가 생길 수 있습니다',
            },
            처가: {
                '0%': '처가의 도움 없이도 가족의 조화를 유지합니다',
                '1%~42%': '처가의 도움으로 안정된 가정을 유지합니다',
                '56%~': '처가의 지나친 지원으로 갈등이 생길 수 있습니다',
            },
            여자: {
                '0%': '여자와의 관계가 희박하여 혼자 해결하려 애씁니다',
                '1%~42%': '여자와의 조화로운 관계를 유지하며 도움을 받습니다',
                '56%~': '여자에게 많은 도움을 받지만, 관계의 불편함이 생길 수 있습니다',
            },
            자식: {
                '0%': '자녀와의 소통에 어려움을 느낄 수 있습니다',
                '1%~42%': '자식과 협력하여 문제를 해결하고 지원을 받습니다',
                '56%~': '자식에 대한 높은 기대가 자식에게 부담이 될 수 있습니다',
            },
            부모: {
                '0%': '부모에게 지나치게 의지해 자립에 어려움을 겪을 수 있습니다',
                '1%~42%': '부모의 도움으로 안정된 삶을 유지할 수 있습니다',
                '56%~': '부모와의 갈등으로 재정적 지원이 어려울 수 있습니다',
            },
        },
        FEMALE: {
            인: {
                '0%': '사람들과의 관계가 희박해 도움을 받기 어려울 수 있습니다',
                '1%~42%': '사람들과 조화롭게 어울려 도움과 협력을 받습니다',
                '56%~': '사람들과 지나친 경쟁으로 불화가 생길 수 있습니다',
            },
            자식: {
                '0%': '자녀와의 소통에 어려움을 느낄 수 있습니다',
                '1%~42%': '자식과 협력하여 문제를 해결하고 지원을 받습니다',
                '56%~': '자식에 대한 높은 기대가 자식에게 부담이 될 수 있습니다',
            },
            시댁: {
                '0%': '시댁의 지원 없이도 가정을 안정되게 유지합니다',
                '1%~42%': '시댁의 도움으로 안정된 삶을 유지할 수 있습니다',
                '56%~': '시댁의 높은 기대에 부담을 느끼고 힘들 수 있습니다.',
            },
            남자: {
                '0%': '남자와의 관계가 희박하여 도움을 받지 못합니다',
                '1%~42%': '남자와 조화롭게 협력하며 긍정적인 지원을 받습니다',
                '56%~': '남자에게 큰 도움을 받지만 관계가 지나쳐 불편할 수 있습니다',
            },
            부모: {
                '0%': '부모에게 지나치게 의지해 자립에 어려움을 겪을 수 있습니다',
                '1%~42%': '부모의 도움으로 안정된 삶을 유지할 수 있습니다',
                '56%~': '부모와의 갈등으로 재정적 지원이 어려울 수 있습니다',
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
