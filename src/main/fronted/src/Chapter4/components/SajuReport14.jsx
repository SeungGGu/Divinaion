import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport14.css';
import { useSaju } from '../../context/SajuContext';

const SajuReport14 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name, result } = sajuData;

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

    // 관계에 따른 마음 성향
    const mindGroups = {
        비견: '협력적',
        겁재: '경쟁적',
        식신: '내향적',
        상관: '외향적',
        편재: '물질적',
        정재: '안정적',
        편관: '권위적',
        정관: '모범적',
        편인: '창의적',
        정인: '지혜적',
    };

    // 오행 색상 매핑
    const fiveElementColorMap = {
        wood: '#89b798', // 목
        fire: '#e57373', // 화
        earth: '#f0d58c', // 토
        metal: '#c0c0c0', // 금
        water: 'black', // 수
    };

    // 오행 색상 결정 함수
    const getElementColor = (hanja) => {
        const elementMap = {
            '甲': 'wood', '乙': 'wood', '丙': 'fire', '丁': 'fire',
            '戊': 'earth', '己': 'earth', '庚': 'metal', '辛': 'metal',
            '壬': 'water', '癸': 'water', '寅': 'wood', '卯': 'wood',
            '巳': 'fire', '午': 'fire', '辰': 'earth', '未': 'earth',
            '戌': 'earth', '丑': 'earth', '申': 'metal', '酉': 'metal',
            '亥': 'water', '子': 'water',
        };
        return fiveElementColorMap[elementMap[hanja]] || 'transparent';
    };

    const getTextColor = (bgColor) => (bgColor === 'black' ? 'white' : 'black');

    // 마음 성향 결과 계산
    const calculateMindScores = () => {
        const mindScores = {
            물질적: 0,
            경쟁적: 0,
            내향적: 0,
            외향적: 0,
            안정적: 0,
            권위적: 0,
            모범적: 0,
            협력적: 0,
            창의적: 0,
            지혜적: 0,
        };

        Object.entries(relationsPercentage).forEach(([key, percentage]) => {
            const relation = result[key];
            const mind = mindGroups[relation];
            if (mind) {
                mindScores[mind] += percentage;
            }
        });

        return mindScores;
    };

    const mindScores = calculateMindScores();

    const handleNextPage = () => {
        navigate('/Report15', { state: { mindScores: mindScores } });
    };

    return (
        <div className="report14-container">
            <h1 className="report-title">{name}님의 타고난 마음 성향 분석</h1>
            <p className="report-subtitle">
                {name}님의 마음을 이해하고 긍정적인 변화와 행동으로 이끌어 보세요.
            </p>

            <div className="report-content">
                {/* 왼쪽 분석 표 */}
                <div className="mind-analysis-section">
                    <h2 className="section-title">{name}님의 사주팔자 마음성향 분석</h2>
                    <table className="mind-analysis-table">
                        <tbody>
                        <tr>
                            <th>관계</th>
                            <td>{mindGroups[result.manseTimeSkyRelation]}</td>
                            <td>{name}</td>
                            <td>{mindGroups[result.manseMonthSkyRelation]}</td>
                            <td>{mindGroups[result.manseYearSkyRelation]}</td>
                        </tr>
                        <tr>
                            <th>천간</th>
                            <td style={{
                                backgroundColor: getElementColor(result.timeSky),
                                color: getTextColor(getElementColor(result.timeSky)),
                            }}>
                                {result.timeSky}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.daySky),
                                color: getTextColor(getElementColor(result.daySky)),
                            }}>
                                {result.daySky}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.monthSky),
                                color: getTextColor(getElementColor(result.monthSky)),
                            }}>
                                {result.monthSky}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.yearSky),
                                color: getTextColor(getElementColor(result.yearSky)),
                            }}>
                                {result.yearSky}
                            </td>
                        </tr>
                        <tr>
                            <th>지지</th>
                            <td style={{
                                backgroundColor: getElementColor(result.timeGround),
                                color: getTextColor(getElementColor(result.timeGround)),
                            }}>
                                {result.timeGround}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.dayGround),
                                color: getTextColor(getElementColor(result.dayGround)),
                            }}>
                                {result.dayGround}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.monthGround),
                                color: getTextColor(getElementColor(result.monthGround)),
                            }}>
                                {result.monthGround}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.yearGround),
                                color: getTextColor(getElementColor(result.yearGround)),
                            }}>
                                {result.yearGround}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 오른쪽 마음 성향 표 */}
                <div className="mind-score-section">
                    <h2 className="section-title">{name}님의 타고난 마음 성향</h2>
                    <table className="mind-score-table">
                        <tbody>
                        {Object.entries(mindScores)
                            .filter(([_, score]) => score > 0) // 0% 제거
                            .map(([mind, score]) => (
                                <tr key={mind}>
                                    <td>{mind}</td>
                                    <td>{score}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="report-footer">
                <p className="footer-text">
                    {name}님의 마음을 이해하고 긍정적인 감정과 행동으로 이끌어 보세요.
                </p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport14;
