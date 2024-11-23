import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport21.css';
import { useSaju } from '../../context/SajuContext';

const SajuReport21 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name, gender, result } = sajuData || {};

    const relationsPercentage = {
        manseYearSkyRelation: 14,
        manseYearGroundRelation: 14,
        manseMonthSkyRelation: 14,
        manseMonthGroundRelation: 16,
        manseDayGroundRelation: 14,
        manseTimeSkyRelation: 14,
        manseTimeGroundRelation: 14,
    };

    const blessingGroups = gender === 'FEMALE'
        ? {
            인: ['비견', '겁재'],
            자식: ['식신', '상관'],
            시댁: ['편재', '정재'],
            남자: ['편관', '정관'],
            부모: ['편인', '정인'],
        }
        : {
            인: ['비견', '겁재'],
            처가: ['식신', '상관'],
            여자: ['편재', '정재'],
            자식: ['편관', '정관'],
            부모: ['편인', '정인'],
        };

    const fiveElementColorMap = {
        wood: '#89b798',
        fire: '#e57373',
        earth: '#f0d58c',
        metal: '#c0c0c0',
        water: '#000000',
    };

    const getElementColor = (hanja) => {
        const element = {
            '甲': 'wood', '乙': 'wood', '丙': 'fire', '丁': 'fire',
            '戊': 'earth', '己': 'earth', '庚': 'metal', '辛': 'metal',
            '壬': 'water', '癸': 'water', '寅': 'wood', '卯': 'wood',
            '巳': 'fire', '午': 'fire', '辰': 'earth', '未': 'earth',
            '戌': 'earth', '丑': 'earth', '申': 'metal', '酉': 'metal',
            '亥': 'water', '子': 'water',
        }[hanja] || 'transparent';
        return fiveElementColorMap[element] || 'transparent';
    };

    const getTextColor = (bgColor) => (bgColor === '#000000' ? '#ffffff' : '#000000');

    const getBlessingByRelation = (relation) => {
        return Object.keys(blessingGroups).find((blessing) =>
            blessingGroups[blessing].includes(relation)
        ) || '';
    };

    const calculateBlessingScores = () => {
        const blessingScores = Object.keys(blessingGroups).reduce((acc, key) => {
            acc[key] = 0;
            return acc;
        }, {});

        Object.entries(relationsPercentage).forEach(([key, percentage]) => {
            const relation = result[key];
            const blessing = getBlessingByRelation(relation);
            if (blessing) {
                blessingScores[blessing] += percentage;
            }
        });

        return blessingScores;
    };

    const blessingScores = calculateBlessingScores();

    const handleNextPage = () => {
        navigate('/Report22', { state: { blessingScores } });
    };

    return (
        <div className="report21-container">
            <h1 className="report-title">{name}님의 5대 덕을 통해 인생의 성장을 발견하세요</h1>
            <p className="report-subtitle">
                5대 덕 분석을 통해 긍정적인 변화를 이끌어 보세요.
            </p>

            {/* 분석 표 */}
            <div className="report-content">
                {/* 왼쪽 덕 분석 */}
                <div className="blessing-analysis-section">
                    <h2 className="section-title">{name}님의 사주팔자 5덕 분석</h2>
                    <table className="blessing-analysis-table">
                        <tbody>
                        <tr>
                            <th>덕</th>
                            <td>{getBlessingByRelation(result.manseTimeSkyRelation)} 덕</td>
                            <td>{name}</td>
                            <td>{getBlessingByRelation(result.manseMonthSkyRelation)} 덕</td>
                            <td>{getBlessingByRelation(result.manseYearSkyRelation)} 덕</td>
                        </tr>
                        <tr>
                            <th>천간</th>
                            {['timeSky', 'daySky', 'monthSky', 'yearSky'].map((key) => (
                                <td
                                    key={key}
                                    style={{
                                        backgroundColor: getElementColor(result[key]),
                                        color: getTextColor(getElementColor(result[key])),
                                    }}
                                >
                                    {result[key]}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <th>지지</th>
                            {['timeGround', 'dayGround', 'monthGround', 'yearGround'].map((key) => (
                                <td
                                    key={key}
                                    style={{
                                        backgroundColor: getElementColor(result[key]),
                                        color: getTextColor(getElementColor(result[key])),
                                    }}
                                >
                                    {result[key]}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <th>덕</th>
                            <td>{getBlessingByRelation(result.manseTimeGroundRelation)} 덕</td>
                            <td>{getBlessingByRelation(result.manseDayGroundRelation)} 덕</td>
                            <td>{getBlessingByRelation(result.manseMonthGroundRelation)} 덕</td>
                            <td>{getBlessingByRelation(result.manseYearGroundRelation)} 덕</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 오른쪽 덕 점수 */}
                <div className="blessing-score-section">
                    <h2 className="section-title">{name}님의 타고난 5대 덕</h2>
                    <table className="blessing-score-table">
                        <tbody>
                        {Object.entries(blessingScores).map(([blessing, score]) => (
                            <tr key={blessing}>
                                <td>{blessing} 덕</td>
                                <td>{score > 0 ? `${score}% 가졌어요` : '0% 가졌어요'}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    {name}님의 덕을 활용해 관계를 강화하고 안정된 삶을 만들어보세요.
                </p>
                <p className="footer-note">
                    사주에 덕이 없어도, 운이 좋을 때 덕이 발휘되어 긍정적 변화를 이끌어냅니다.
                </p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport21;
