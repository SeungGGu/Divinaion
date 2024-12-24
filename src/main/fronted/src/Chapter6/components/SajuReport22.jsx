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
                '0%': '인간 관계가 부족해 많은 도움 얻기 어렵습니다',
                '1%~42%': '사람들과 협력하며 따뜻한 유대를 만들고 유지합니다',
                '56%~': '지나친 경쟁과 간섭으로 불편함을 느낄 수 있습니다',
            },
            처가: {
                '0%': ' 처가의 도움 없이도 가족의 조화를 지켜냅니다',
                '1%~42%': '처가의 도움으로 안정적인 관계를 유지합니다',
                '56%~': '처가의 지나친 지원이 갈등으로 이어질 수 있습니다',
            },
            여자: {
                '0%': '여자와의 관계가 부족해 혼자 해결하려 애씁니다',
                '1%~42%': '여성과 잘 협력하여 관계의 조화를 만듭니다',
                '56%~': '여자에게 많은 도움을 받지만 불편함도 따릅니다',
            },
            자식: {
                '0%': '자녀와의 소통 부족으로 어려움이 따를 수 있습니다',
                '1%~42%': '자녀와 협력하여 서로에게 의지가 됩니다',
                '56%~': '자녀에게 많은 기대가 부담으로 작용할 수 있습니다',
            },
            부모: {
                '0%': '부모와 소통 부족으로 관계 개선이 필요합니다',
                '1%~42%': '부모의 도움으로 안정된 삶을 유지할 수 있습니다',
                '56%~': '부모에게 많이 의지해 독립이 어려워질 수 있습니다',
            },
        },
        FEMALE: {
            인: {
                '0%': '인간 관계가 부족해 많은 도움 얻기 어렵습니다',
                '1%~42%': '사람들과 협력하며 따뜻한 유대를 만들고 유지합니다',
                '56%~': '지나친 경쟁과 간섭으로 불편함을 느낄 수 있습니다',
            },
            자식: {
                '0%': '자녀와의 소통 부족으로 어려움이 따를 수 있습니다',
                '1%~42%': '자녀와 협력하여 서로에게 의지가 됩니다',
                '56%~': '자녀에게 많은 기대가 부담으로 작용할 수 있습니다',
            },
            시댁: {
                '0%': '시댁의 지원 없어도 가정을 안정적으로 이끕니다',
                '1%~42%': '시댁의 도움으로 안정된 가정을 유지하게 됩니다',
                '56%~': '시댁의 많은 기대가 부담이 될 수 있습니다',
            },
            남자: {
                '0%': '남자와의 관계가 부족해 혼자 해결하려 애씁니다',
                '1%~42%': '남자와 협력하여 긍정적인 관계를 형성합니다',
                '56%~': '남자의 지나친 도움으로 갈등이 생길 수 있습니다',
            },
            부모: {
                '0%': '부모와 소통 부족으로 관계 개선이 필요합니다',
                '1%~42%': '부모의 도움으로 안정된 삶을 유지할 수 있습니다',
                '56%~': '부모에게 많이 의지해 독립이 어려워질 수 있습니다',
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

    const getScoreSymbol = (score) => {
        if (score === 0) return '약해요';
        if (score >= 1 && score <= 42) return '좋아요';
        if (score >= 43) return '많아요';
        return '';
    };

    const handleNextPage = () => {
        navigate('/Report23');
    };

    return (
        <div className="report22-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">16. {name}님의 5대 덕, 인연과 삶에 어떻게 영향을 줄까요?</h1>
            <p className="report-subtitle">5덕이 만든 특별한 인연의 비밀을 만나보세요!</p>

            <p>5대 덕이 {name}님의 인연과 삶에 미치는 영향을 확인하세요</p>
            {/* 덕별 결과를 렌더링 */}
            {Object.entries(blessingScores).map(([key, value]) => (
                <div className="result-section" key={key}>
                    <div className="result-header">
                        <span className="result-category">{key} 덕 - {getScoreSymbol(value)}</span>
                    </div>
                    <div className="result-message">{getBlessingMessage(key, value)}</div>
                </div>
            ))}

            <p className="footer-message">5덕의 가치를 이해하면 소중한 관계를 더 단단히 다질 수 있습니다</p>
        </div>
    );
};

export default SajuReport22;
