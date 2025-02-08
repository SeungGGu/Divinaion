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
                '0%': '인덕이 부족해도 스스로 문제를 해결하며 독립적으로 성장하려고 노력합니다',
                '1%~42%': '필요한 도움을 받아 목표를 이루고 주변 사람들과 깊은 신뢰를 쌓아갑니다',
                '56%~': '인덕이 많아도 지나치게 의존하거나 오해를 불러일으켜 갈등이 생길 수 있어요',
            },
            처가: {
                '0%': ' 처가의 지원이 부족해도 배우자와 함께 문제를 해결하며 자립하려고 노력합니다',
                '1%~42%': '처가의 도움을 충분히 받아 안정적인 가정을 이루고 삶에 여유가 생깁니다',
                '56%~': '처가 덕이 많아도 지나친 기대나 간섭으로 불편한 관계가 형성될 수 있어요',
            },
            여자: {
                '0%': '여자 덕이 많아도 과도한 관계로 인해 갈등이나 복잡한 문제가 생길 수 있어요',
                '1%~42%': '주변 여성의 적극적인 도움과 협력으로 안정적인 관계와 성과를 이룹니다',
                '56%~': '여자 덕이 부족해도 독립적으로 문제를 해결하며 관계를 차분히 다지려 합니다',
            },
            자식: {
                '0%': '자식 덕이 부족하지만 스스로 삶을 관리하고 자녀를 책임감 있게 돕습니다',
                '1%~42%': '자녀가 부모에게 효도를 실천하며 관계가 안정적이고 더욱 화목해집니다',
                '56%~': '자식 덕이 많아도 지나친 기대나 간섭으로 자녀와의 갈등이 생길 수 있습니다',
            },
            부모: {
                '0%': '부모 덕이 부족해도 독립적으로 문제를 해결하며 스스로 강인해지려 노력합니다',
                '1%~42%': '부모의 충분한 지원과 조언으로 안정된 환경에서 성장하고 목표를 이룹니다',
                '56%~': '부모 덕이 많아도 과도한 간섭이나 기대가 부담이 되어 갈등이 생길 수 있습니다',
            },
        },
        FEMALE: {
            인: {
                '0%': '인덕이 부족해도 스스로 문제를 해결하며 독립적으로 성장하려고 노력합니다',
                '1%~42%': '필요한 도움을 받아 목표를 이루고 주변 사람들과 깊은 신뢰를 쌓아갑니다',
                '56%~': '인덕이 많아도 지나치게 의존하거나 오해를 불러일으켜 갈등이 생길 수 있어요',
            },
            자식: {
                '0%': '자식 덕이 부족하지만 스스로 삶을 관리하고 자녀를 책임감 있게 돕습니다',
                '1%~42%': '자녀가 부모에게 효도를 실천하며 관계가 안정적이고 더욱 화목해집니다',
                '56%~': '자식 덕이 많아도 지나친 기대나 간섭으로 자녀와의 갈등이 생길 수 있습니다',
            },
            시댁: {
                '0%': '시댁의 지원 없어도 가정을 안정적으로 이끕니다',
                '1%~42%': '시댁의 도움으로 안정된 가정을 유지하게 됩니다',
                '56%~': '시댁의 많은 기대가 부담이 될 수 있습니다',
            },
            남자: {
                '0%': '남자 덕이 부족해도 스스로 문제를 해결하며 독립적으로 목표를 추구합니다',
                '1%~42%': '적극적인 협력과 지원을 받아 목표를 이루고 안정적인 관계를 유지합니다',
                '56%~': '남자 덕이 많아도 의존이나 관계의 복잡성으로 인해 어려움이 생길 수 있어요',
            },
            부모: {
                '0%': '부모 덕이 부족해도 독립적으로 문제를 해결하며 스스로 강인해지려 노력합니다',
                '1%~42%': '부모의 충분한 지원과 조언으로 안정된 환경에서 성장하고 목표를 이룹니다',
                '56%~': '부모 덕이 많아도 과도한 간섭이나 기대가 부담이 되어 갈등이 생길 수 있습니다',
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

            <h1 className="report-title">13. {name}님의 5대 덕, 인연과 삶에 어떻게 영향을 줄까요?</h1>
            <p className="report-subtitle">5덕이 만든 특별한 인연의 비밀을 만나보세요!</p>

            <p>5대 덕이 {name}님의 인연과 삶에 미치는 영향을 확인하세요</p>
            {/* 덕별 결과를 렌더링 */}
            {Object.entries(blessingScores).map(([key, value]) => (
                <div className="result-section" key={key}>
                    <div className="result-header">
            <span className="result-category">
                {key} 덕 - {value}% 있어요
            </span>
                    </div>
                    <div className="result-message">{getBlessingMessage(key, value)}</div>
                </div>
            ))}
            <p className="footer-message">5덕의 가치를 이해하면 소중한 관계를 더 단단히 다질 수 있습니다</p>
        </div>
    );
};

export default SajuReport22;
