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
            '0%': '인간 관계의 부족으로 중요한 기회를 놓칠 수 있습니다',
            '1%~42%': '신뢰를 쌓아 많은 사람들의 도움을 받을 수 있습니다',
            '56%~': '사람으로 인해 좋은 일과 나쁜 일이 공존할 수 있어요',
        },
        재능: {
            '0%': '타고난 재능 복은 약하지만, 노력으로 보완할 수 있어요',
            '1%~42%': '재능을 발휘해 목표를 이루는 기회로 연결할 수 있어요',
            '56%~': '재능이 많지만, 활용하지 않으면 게을러질 수 있어요',
        },
        재물: {
            '0%': '타고난 재물 복은 약하지만, 절약으로 보완할 수 있어요',
            '1%~42%': '꾸준히 노력으로 관리하면 금전적 결실이 따르게 됩니다',
            '56%~': '재물이 많아도 과소비하면 손실이 커질 수 있어요',
        },
        직장: {
            '0%': '독립적으로 일하며 자신만의 전문성을 키울 수 있습니다',
            '1%~42%': '조직적 능력이 뛰어나 안정적인 직업을 가질 수 있습니다',
            '56%~': '다양한 능력이 뛰어나 직업의 변화가 따를 수 있습니다',
        },
        명예: {
            '0%': '타고난 명예 복은 약하지만 자신만의 전문성을 활용해요',
            '1%~42%': '꾸준한 성과로 명예를 차근차근 쌓아갈 수 있습니다',
            '56%~': '명예가 따르지만, 자만심으로 문제가 생길 수 있습니다',
        },
    };

    // 점수에 따른 기호를 반환하는 함수
    const getScoreSymbol = (score) => {
        if (score === 0) return '❗';
        if (score >= 1 && score <= 42) return '👍';
        if (score >= 43) return '🚫';
        return '';
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
            <h1 className="report-title">14. {name}님의 5대 복, 성공과 삶에 어떤 영향을 줄까요?</h1>
            <p className="report-subtitle">
                5대 복의 비밀과 삶에 미치는 긍정적 영향을 알아보세요
            </p>

            {/* 복별 메시지 표 */}
            <table className="blessing-table">
                <thead>
                <tr>
                    <th>복</th>
                    <th>상태</th>
                    <th>메시지</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(blessingScores).map(([blessing, score]) => (
                    <tr key={blessing}>
                        <td className="blessing-title">{blessing} 복</td>
                        <td className="blessing-score">{getScoreSymbol(score)}</td>
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
