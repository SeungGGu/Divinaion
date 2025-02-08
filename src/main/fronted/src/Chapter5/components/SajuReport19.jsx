import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/SajuReport19.css';
import { useSaju } from '../../context/SajuContext';

const SajuReport19 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { sajuData } = useSaju();
    const { name } = sajuData || {};
    const blessingScores = location.state?.blessingScores || {}; // 이전 페이지에서 전달된 점수

    if (!blessingScores || !name) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 복별 메시지
    const blessingMessages = {
        인: {
            '0%': '관계 부족을 느끼며 스스로 문제를 해결하거나 더 나은 인연을 찾아 나섭니다',
            '1%~42%': '신뢰를 바탕으로 다양한 기회를 잡고 타인의 도움을 받아 성과를 이뤄냅니다',
            '56%~': '사람을 통해 좋은 일이 생기기도 하지만 예상치 못한 어려움도 함께 올 수 있어요',
        },
        식: {
            '0%': '식복이 부족해도 노력과 실천으로 성장하며 작은 보람에도 만족을 느낄 수 있어요',
            '1%~42%': '다양한 경험과 능력을 통해 목표를 이루고 주변의 도움을 받는 식복이 있어요',
            '56%~': '식복이 많아도 준비 없이 행동하면 성과가 떨어지고 어려움이 생길 수 있어요',
        },
        재물: {
            '0%': '재물이 부족해도 절약하고 계획적으로 지출하며 스스로를 단단히 만들어갑니다',
            '1%~42%': '효율적으로 재물을 활용해 필요한 곳에 투자하며 안정적인 삶을 만들어갑니다',
            '56%~': '재물이 많아도 관리하지 못하면 낭비와 분쟁이 생기거나 불안정해질 수 있어요',
        },
        직장: {
            '0%': '직장에서 기회는 적더라도,노력과 성실한 태도로 신뢰를 쌓아가려고 합니다',
            '1%~42%': '최적의 기회를 잡아 자신의 능력을 발휘하며 안정적으로 성장할 수 있습니다',
            '56%~': '직장 기회가 많아도 선택을 잘못하거나 욕심을 부리면 어려움이 생길 수 있어요',
        },
        문서: {
            '0%': '문서 복이 부족하더라도 성실한 노력과 꾸준한 정리로 성과를 쌓아갈 수 있어요',
            '1%~42%': '열심히 공부하여 학위와 자격증을 취득해 사람들에게 신뢰와 인정을 받습니다',
            '56%~': '문서복이 많아도 자만심이나 방심이 있다면 올바르게 활용하기 어려울 수 있어요',
        },
    };

    // 점수에 따른 메시지 선택 함수
    const getBlessingMessage = (blessing, score) => {
        if (score === 0) {
            return blessingMessages[blessing]['0%'];
        } else if (score >= 1 && score <= 42) {
            return blessingMessages[blessing]['1%~42%'];
        } else if (score >= 56) {
            return blessingMessages[blessing]['56%~'];
        }
        return ''; // 해당하지 않는 경우
    };

    const handleNextPage = () => {
        navigate('/Report20'); // 다음 페이지로 이동
    };

    return (
        <div className="report19-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
            <h1 className="report-title">11. {name}님의 5대 복, 성공과 삶에 어떤 영향을 줄까요?</h1>
            <p className="report-subtitle">
                5대 복의 비밀과 삶에 미치는 긍정적 영향을 알아보세요
            </p>

            {/* 복별 메시지 표 */}
            <p>5대 복이 {name}님의 삶에 미치는 영향을 확인해보세요</p>
            <table className="blessing-table">
                <thead>
                <tr>
                    <th>복</th>
                    <th>메시지</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(blessingScores).map(([blessing, score]) => (
                    <tr key={blessing}>
                        <td className="blessing-title">{blessing} 복 {score}% 있어요</td>
                        <td className="blessing-message">
                            {getBlessingMessage(blessing, score)}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* 하단 메시지 및 버튼 */}
            <div className="footer-section">
                <p className="footer-message">
                    5대 복의 강점을 활용하고 약점을 극복하면 더 나은 삶을 만들어 갈 수 있습니다
                </p>
            </div>
        </div>
    );
};

export default SajuReport19;
