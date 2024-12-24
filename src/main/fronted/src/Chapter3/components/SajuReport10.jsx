import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/SajuReport10.css';
import {useSaju} from '../../context/SajuContext';

const SajuReport10 = () => {
    const navigate = useNavigate();
    const {sajuData} = useSaju();
    const {name, result} = sajuData;

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

    // 관계에 따른 재능 그룹
    const relationGroups = {
        자신감: ['비견', '겁재'],
        창의력: ['식신', '상관'],
        경제력: ['편재', '정재'],
        성취력: ['편관', '정관'],
        사고력: ['편인', '정인'],
    };

    // 관계별 개수 계산 함수 추가
    const calculateRelationCounts = () => {
        const counts = {};
        Object.entries(relationGroups).forEach(([group, relations]) => {
            relations.forEach((relation) => {
                counts[relation] = 0;
            });
        });

        // API 응답 데이터를 순회하며 개수를 증가
        Object.entries(result).forEach(([key, value]) => {
            if (key === 'manseDaySkyRelation') return; // 나 자신은 제외
            if (counts.hasOwnProperty(value)) {
                counts[value]++;
            }
        });

        return counts;
    };

// 개수 계산 결과
    const relationCounts = calculateRelationCounts();

// relationGroups와 relationCounts를 기반으로 관계 표시 생성
    const getRelationWithCounts = (key) => {
        const relations = relationGroups[key] || [];
        return relations
            .map((relation) => `${relation}(${relationCounts[relation] || 0}개)`) // 0개도 포함
            .join('/');
    };

    // 재능 결과 계산
    const calculateScores = () => {
        const scores = {
            자신감: 0,
            창의력: 0,
            경제력: 0,
            성취력: 0,
            사고력: 0,
        };

        Object.entries(relationsPercentage).forEach(([key, percentage]) => {
            const relation = result[key];
            for (const [group, relations] of Object.entries(relationGroups)) {
                if (relations.includes(relation)) {
                    scores[group] += percentage;
                }
            }
        });

        return scores;
    };

    const scores = calculateScores();

    const handleNextPage = () => {
        navigate('/Report11', { state: { scores } });
    };

    const getEvaluation = (score, isHighest) => {
        if (score === 0) return "약해요";
        if (score >= 1 && score <= 42) return isHighest ? "좋아요" : "좋아요";
        return "강해요";
    };

    // 가장 높은 1~42% 값 찾기
    const highestKey = Object.keys(scores).reduce((highest, key) => {
        if (scores[key] >= 1 && scores[key] <= 42 && (!highest || scores[key] > scores[highest])) {
            return key;
        }
        return highest;
    }, null);

    // 오행 색상 매핑
    const fiveElementColorMap = {
        wood: '#89b798',
        fire: '#e57373',
        earth: '#f0d58c',
        metal: '#c0c0c0',
        water: 'black',
    };

    // 오행 색상 설정
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

    const getTextColor = (bgColor) => (bgColor === 'black' ? 'white' : 'black');

    return (
        <div className="report10-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">
                7. {name}님의 타고난 능력, 사주로 분석합니다
            </h1>
            <p className="report-subtitle">
                타고난 능력과 가능성을 사주 에너지로 발견해보세요!
            </p>

            <div className="report-content">
                {/* 기존 재능 분석표 */}
                <div className="analysis-section">
                    <h2 className="section-title">{name}님의 사주 에너지 구성</h2>
                    <table className="saju-table">
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

                {/* 퍼센티지 결과 */}
                <div className="percentage-section">
                    <h2 className="section-title">사주로 알아보는 {name}님의 타고난 능력</h2>
                    <table className="percentage-table">
                        <thead>
                        <tr>
                            <th>사주 에너지</th>
                            <th>타고난 능력</th>
                            <th>어때요?</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.entries(scores).map(([key, score]) => (
                            <tr key={key}>
                                <td>{getRelationWithCounts(key)}</td>
                                <td>{key} - {score}% 있어요</td>
                                <td>{key}이 {getEvaluation(score, highestKey === key)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="extra-footer">
                        <p>비율이 낮으면 에너지가 부족합니다</p>
                        <p>높은 비율은 강점이지만, 지나치면 단점이 될 수 있어요</p>
                    </div>
                </div>
            </div>

            <div className="footer">
            <p>강점을 살리고 약점을 보완하면 원하는 목표를 달성할 수 있습니다.</p>
            </div>
        </div>
    );
};

export default SajuReport10;
