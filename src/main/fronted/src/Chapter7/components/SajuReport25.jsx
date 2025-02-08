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

    const relationsPercentage = {
        manseYearSkyRelation: 14,
        manseYearGroundRelation: 14,
        manseMonthSkyRelation: 14,
        manseMonthGroundRelation: 16,
        manseDayGroundRelation: 14,
        manseTimeSkyRelation: 14,
        manseTimeGroundRelation: 14,
    };

    const energyToStrength = {
        비견: '협력적 행동 - 자립적이다',
        겁재: '도전적 행동 - 경쟁적이다',
        식신: '내향적 행동 - 창의적이다',
        상관: '외향적 행동 - 표현적이다',
        편재: '실리적 행동 - 현실적이다',
        정재: '실용적 행동 - 계획적이다',
        편관: '권위적 행동 - 주도적이다',
        정관: '원칙적 행동 - 모범적이다',
        편인: '독창적 행동 - 탐구적이다',
        정인: '포용적 행동 - 신뢰적이다',
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

    // 에너지를 동적으로 계산 (중복된 값은 합산)
    const calculateEnergyScores = () => {
        const energyScores = {};
        Object.entries(relationsPercentage).forEach(([key, percentage]) => {
            const relation = result[key];
            if (relation) {
                energyScores[relation] = (energyScores[relation] || 0) + percentage;
            }
        });
        return energyScores;
    };

    const energyScores = calculateEnergyScores();

    // 사주 에너지 개수 계산 함수
    const calculateEnergyCounts = () => {
        const counts = {};
        Object.keys(energyToStrength).forEach((energy) => {
            counts[energy] = 0; // 초기화
        });

        Object.entries(result).forEach(([key, value]) => {
            if (counts.hasOwnProperty(value)) {
                counts[value]++;
            }
        });

        return counts;
    };

    const energyCounts = calculateEnergyCounts();

    const handleNextPage = () => {
        navigate('/Report26', { state: { energyScores } });
    };

    return (
        <div className="report25-container">
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">18. {name}님의 타고난 행동 성향, 사주로 분석합니다</h1>
            <p className="report-subtitle">사주로 당신의 강점을 발견하고 더 나은 방향을 설정해보세요!</p>

            <div className="report25-tables">
                <div className="table-container">
                    <h2 className="table-title">{name}님의 사주 에너지 구성</h2>
                    <table className="saju-table">
                        <tbody>
                        <tr>
                            <td>{result.manseTimeSkyRelation}</td>
                            <td>{name}</td>
                            <td>{result.manseMonthSkyRelation}</td>
                            <td>{result.manseYearSkyRelation}</td>
                        </tr>
                        <tr>
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
                            <td>{result.manseTimeGroundRelation}</td>
                            <td>{result.manseDayGroundRelation}</td>
                            <td>{result.manseMonthGroundRelation}</td>
                            <td>{result.manseYearGroundRelation}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="table-container">
                    <h2 className="table-title">사주로 알아보는 {name}님의 행동 성향 강점</h2>
                    <table className="saju-table">
                        <thead>
                        <tr>
                            <th>사주 에너지</th>
                            <th>타고난 강점</th>
                            <th>비율</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.entries(energyScores).map(([energy, percentage]) => (
                            <tr key={energy}>
                                <td>{`${energy} (${energyCounts[energy]}개)`}</td>
                                <td>{energyToStrength[energy]}</td>
                                <td>{percentage}% 있어요</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <p>높은 비율은 강점이지만, 지나치면 단점이 될 수 있어요</p>
                </div>
            </div>

            <div className="footer-section">
                <p className="footer-message">
                    뛰어난 강점을 바탕으로 목표를 세우면 더 나은 방향으로 나아갈 수 있습니다.
                </p>
            </div>
        </div>
    );
};

export default SajuReport25;
