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

    // 사주 에너지별 강점 매핑
    const energyToStrength = {
        비견: '협력/팀워크',
        겁재: '독립적/강인함',
        식신: '창의력/아이디어',
        상관: '표현력/설득력',
        편재: '기회 탐구/실리 추구',
        정재: '성실/재물 관리',
        편관: '리더십/도전',
        정관: '신뢰/책임감',
        편인: '독창적/문제 탐구',
        정인: '체계적/지식 쌓기',
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

    // 가장 높은 비율 찾기
    const highestPercentage = Math.max(...Object.values(energyScores));

    const handleNextPage = () => {
        navigate('/Report26', { state: { energyScores } });
    };

    return (
        <div className="report25-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">18. {name}님의 타고난 강점, 사주로 분석합니다</h1>
            <p className="report-subtitle">
                사주로 당신의 강점을 발견하고 더 나은 방향을 설정해보세요!
            </p>

            <div className="report-content">
                {/* 왼쪽 에너지 분석 */}
                <div className="energy-analysis-section">
                    <table className="energy-analysis-table">
                        <thead>
                        <tr>
                            <th colSpan={4}>{name}님의 사주 에너지 구성</th>
                        </tr>
                        </thead>
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
                            {['manseTimeGroundRelation', 'manseDayGroundRelation', 'manseMonthGroundRelation', 'manseYearGroundRelation'].map((key) => (
                                <td key={key}>{result[key]}</td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 오른쪽 에너지 점수 */}
                <div className="energy-score-section">
                    <table className="energy-score-table">
                        <thead>
                        <tr>
                            <th colSpan={3}>사주로 알아보는 {name}님의 타고난 강점</th>
                        </tr>
                        <tr>
                            <th>사주 에너지</th>
                            <th>타고난 강점</th>
                            <th>비율</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.entries(energyScores).map(([energy, percentage]) => (
                            <tr key={energy}>
                                <td>{energy}</td>
                                <td>
                                    {percentage === highestPercentage && '👍 '}
                                    {energyToStrength[energy]}
                                </td>
                                <td>
                                    {`${percentage}%`}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <p>높은 비율은 강점이지만, 지나치면 단점이 될 수 있어요</p>
                </div>
            </div>

            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    뛰어난 강점을 바탕으로 목표를 세우면 더 나은 방향으로 나아갈 수 있습니다
                </p>
            </div>
        </div>
    );
};

export default SajuReport25;
