import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport25.css';

const SajuReport25 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name, result } = sajuData || {};

    if (!result) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 관계별 퍼센티지 데이터
    const relationsPercentage = {
        manseYearSkyRelation: 14,
        manseYearGroundRelation: 14,
        manseMonthSkyRelation: 14,
        manseMonthGroundRelation: 16,
        manseDayGroundRelation: 14,
        manseTimeSkyRelation: 14,
        manseTimeGroundRelation: 14,
    };

    // 오행 색상 매핑
    const fiveElementColorMap = {
        wood: '#89b798',
        fire: '#e57373',
        earth: '#f0d58c',
        metal: '#c0c0c0',
        water: '#000000',
    };

    // 한자에 따른 오행 색상 설정
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

    // 에너지를 동적으로 계산
    const calculateEnergyScores = () => {
        const energyScores = {
            비견: 0,
            겁재: 0,
            식신: 0,
            상관: 0,
            편재: 0,
            정재: 0,
            편관: 0,
            정관: 0,
            편인: 0,
            정인: 0,
        };

        Object.entries(relationsPercentage).forEach(([key, percentage]) => {
            const relation = result[key];
            if (energyScores[relation] !== undefined) {
                energyScores[relation] += percentage;
            }
        });

        return energyScores;
    };

    const energyScores = calculateEnergyScores();

    const handleNextPage = () => {
        navigate('/Report26', { state: { energyScores } });
    };

    return (
        <div className="report25-container">
            <h1 className="report-title">{name}님의 사주 에너지로 더 큰 성장을 이루세요</h1>
            <p className="report-subtitle">
                사주 에너지를 통해 성장하는 길을 기대해 보세요.
            </p>

            <div className="report-content">
                {/* 왼쪽 에너지 분석 */}
                <div className="energy-analysis-section">
                    <h2 className="section-title">{name}님의 사주팔자 에너지 분석</h2>
                    <table className="energy-analysis-table">
                        <tbody>
                        <tr>
                            <th>관계</th>
                            {['manseTimeSkyRelation', 'manseDaySkyRelation', 'manseMonthSkyRelation', 'manseYearSkyRelation'].map((key) => (
                                <td key={key}>{result[key]}</td>
                            ))}
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
                            <th>관계</th>
                            {['manseTimeGroundRelation', 'manseDayGroundRelation', 'manseMonthGroundRelation', 'manseYearGroundRelation'].map((key) => (
                                <td key={key}>{result[key]}</td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 오른쪽 에너지 점수 */}
                <div className="energy-score-section">
                    <h2 className="section-title">{name}님의 타고난 사주 에너지</h2>
                    <table className="energy-score-table">
                        <tbody>
                        {Object.entries(energyScores)
                            .filter(([_, score]) => score > 0) // 0% 점수는 표시하지 않음
                            .map(([energy, score]) => (
                                <tr key={energy}>
                                    <td>{energy} 에너지</td>
                                    <td>{`${score}% 가졌어요`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    {name}님의 사주 에너지를 활용해 목표를 달성하는 방법을 알아보세요.
                </p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport25;
