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
        인복: {
            '0%': '필요한 인연이 부족해 관계 형성에 어려움을 겪습니다',
            '1%~42%': '서로 도와주는 따뜻한 관계를 만듭니다',
            '56%~': '과도한 인간관계로 갈등이 잦아질 수 있습니다',
        },
        재능: {
            '0%': '창의적 아이디어 부족으로 도전에 한계가 있습니다',
            '1%~42%': '문제 해결과 성장에 큰 가능성을 보입니다',
            '56%~': '다재다능하지만 집중이 어려울 수 있습니다',
        },
        재물: {
            '0%': '노력에 비해 재정적 성과가 부족할 수 있습니다',
            '1%~42%': '자산을 잘 관리하여 안정적인 재정을 유지합니다',
            '56%~': '불필요한 소비로 재정 관리가 어려울 수 있습니다',
        },
        직장: {
            '0%': '협력 기회가 적어 조직 내 성과가 부족합니다',
            '1%~42%': '협력과 책임감으로 목표 달성에 기여합니다',
            '56%~': '직장 내 경쟁으로 갈등이 발생할 수 있습니다',
        },
        명예: {
            '0%': '명예와 인정 기회가 부족해 자존감에 영향을 줍니다',
            '1%~42%': '지혜롭게 다양한 자격을 얻고 성장합니다',
            '56%~': '과도한 명예 욕심이 불화를 초래할 수 있습니다',
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
            <h1 className="report-title">{name}님의 5대 복이 전하는 의미</h1>
            <p className="report-subtitle">
                {name}님의 5대 복이 주는 긍정적 영향을 확인해 보세요.
            </p>

            {/* 복별 메시지 표 */}
            <table className="blessing-table">
                <thead>
                <tr>
                    <th>복</th>
                    <th>점수</th>
                    <th>메시지</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(blessingScores).map(([blessing, score]) => (
                    <tr key={blessing}>
                        <td className="blessing-title">{blessing} 복</td>
                        <td className="blessing-score">{score}%</td>
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
                    {name}님의 강점을 키우고 부족한 복을 채우는 길을 찾아보세요.
                </p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport19;
