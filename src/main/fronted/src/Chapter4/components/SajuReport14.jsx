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

    // 사주 에너지 중복 제거 및 mindGroups에 포함된 항목만 필터링
    const uniqueEnergies = Object.values(result)
        .filter((relation, index, self) => self.indexOf(relation) === index && mindGroups[relation]);

    // 평가 기호 함수
    const getEvaluation = (percentage, isHighest) => {
        if (percentage <= 42) return isHighest ? '좋아요' : '좋아요';
        return '강해요';
    };

    const handleNextPage = () => {
        navigate('/Report15', { state: { mindScores: mindScores } });
    };

    // 사주 에너지 개수 계산 함수
    const calculateEnergyCounts = () => {
        const counts = {};
        Object.entries(mindGroups).forEach(([relation]) => {
            counts[relation] = 0; // 초기화
        });

        Object.entries(result).forEach(([key, value]) => {
            if (key === 'manseDaySkyRelation') return; // 나 자신은 제외
            if (counts.hasOwnProperty(value)) {
                counts[value]++;
            }
        });

        return counts;
    };

// 개수 계산 결과
    const energyCounts = calculateEnergyCounts();

// 0개인 에너지는 제외한 목록 생성
    const filteredEnergies = Object.entries(energyCounts)
        .filter(([_, count]) => count > 0)
        .map(([relation, count]) => ({ relation, count }));

    return (
        <div className="report14-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">10. {name}님의 타고난 마음 성향, 사주로 분석합니다</h1>
            <p className="report-subtitle">
                자신의 마음 성향을 이해하고 삶에 활용할 실천 방안을 제시합니다
            </p>
            <div className="report-content">
                {/* 왼쪽 분석 표 */}
                <div className="mind-analysis-section">
                    <h2 className="section-title">{name}님의 사주에너지 구성</h2>
                    <table className="mind-analysis-table">
                        <tbody>
                        <tr>
                            <td>{result.manseTimeSkyRelation}</td>
                            <td>{name}</td>
                            <td>{result.manseMonthSkyRelation}</td>
                            <td>{result.manseYearSkyRelation}</td>
                        </tr>
                        <tr>
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
                        <tr>
                            <td>{result.manseTimeGroundRelation}</td>
                            <td>{result.manseDayGroundRelation}</td>
                            <td>{result.manseMonthGroundRelation}</td>
                            <td>{result.manseYearGroundRelation}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 오른쪽 마음 성향 표 */}
                <div className="mind-score-section">
                    <h2 className="section-title">사주로 알아보는 {name}님의 타고난 마음 성향</h2>
                    <table className="mind-score-table">
                        <thead>
                        <tr>
                            <th>사주 에너지</th>
                            <th>마음 성향</th>
                            <th>어때요?</th>
                        </tr>
                        </thead>
                        <tbody>
                        {uniqueEnergies.map((energy) => {
                            const mind = mindGroups[energy];
                            const count = energyCounts[energy] || 0; // 에너지 개수 가져오기

                            // 개수가 0인 에너지는 건너뛰기
                            if (count === 0) return null;

                            return (
                                <tr key={energy}>
                                    <td>{`${energy} (${count}개)`}</td>
                                    <td>{`${mind} 마음 - ${mindScores[mind] || 0}% 있어요`}</td>
                                    <td>타고남이 {getEvaluation(mindScores[mind] || 0)}</td>
                                </tr>
                            );
                        })}
                        </tbody>

                    </table>
                    <p>높은 비율은 강점이지만, 지나치면 단점이 될 수 있어요</p>
                </div>
            </div>

            <div className="report-footer">
                <p className="footer-text">
                    마음의 성향을 이해하고 강점을 실천하면 더 큰 성장을 이룰 수 있습니다.
                </p>
            </div>
        </div>
    );
};

export default SajuReport14;
