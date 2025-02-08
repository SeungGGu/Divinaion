import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/SajuReport21.css';
import {useSaju} from '../../context/SajuContext';

const SajuReport21 = () => {
    const navigate = useNavigate();
    const {sajuData} = useSaju();
    const {name, gender, result} = sajuData || {};

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

    // 가장 높은 1~42% 퍼센트를 찾기
    const highestLowScore = Object.entries(blessingScores)
        .filter(([_, score]) => score >= 1 && score <= 42) // 1~42% 필터링
        .reduce((highest, [key, score]) => {
            if (!highest || score > highest.score) {
                return {key, score};
            }
            return highest;
        }, null);

    // 퍼센트에 따라 결과값 반환
    const getEvaluation = (blessing, percentage) => {
        if (percentage === 0) return '약해요';
        if (percentage >= 1 && percentage <= 42) {
            return highestLowScore?.key === blessing ? ' 좋아요' : '좋아요';
        }
        return '많아요';
    };

    const handleNextPage = () => {
        navigate('/Report22', {state: {blessingScores}});
    };

    // 관계별 개수 계산 함수
    const calculateRelationCounts = () => {
        const counts = {};
        Object.keys(blessingGroups).forEach((blessing) => {
            blessingGroups[blessing].forEach((relation) => {
                counts[relation] = 0; // 초기화
            });
        });

        // 나 자신(manseDaySkyRelation) 제외하고 개수 계산
        Object.entries(result).forEach(([key, value]) => {
            if (key === 'manseDaySkyRelation') return; // 나 자신 제외
            if (counts.hasOwnProperty(value)) {
                counts[value]++;
            }
        });

        return counts;
    };

// 관계별 개수 계산 결과
    const relationCounts = calculateRelationCounts();

    return (
        <div className="report21-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
            <h1 className="report-title">12. {name}님의 타고난 5대 덕, 사주로 분석합니다</h1>
            <p className="report-subtitle">
                5덕의 비율로 인연의 의미를 이해하고 더 나은 관계를 만들어보세요
            </p>

            {/* 분석 표 */}
            <div className="report21-content">
                {/* 왼쪽 덕 분석 */}
                <div className="blessing-analysis-section">
                    <h2 className="section-title">{name}님의 사주 에너지 구성</h2>
                    <table className="blessing-analysis-table">
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

                {/* 오른쪽 덕 점수 */}
                <div className="blessing-score-section">
                    <h2 className="section-title">사주로 알아보는 {name}님의 타고난 5대 덕</h2>
                    <table className="blessing-score-table">
                        <thead>
                        <tr>
                            <th>사주 에너지</th>
                            <th>타고난 5대 덕</th>
                            <th>비율</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.entries(blessingScores).map(([blessing, score], index) => (
                            <tr key={index}>
                                <td>
                                    {blessing === '인' &&
                                        `비견(${relationCounts['비견']}) / 겁재(${relationCounts['겁재']})`}
                                    {blessing === '처가' &&
                                        `식신(${relationCounts['식신']}) / 상관(${relationCounts['상관']})`}
                                    {blessing === '자식' &&
                                        `편관(${relationCounts['편관']}) / 정관(${relationCounts['정관']})`}
                                    {blessing === '여자' &&
                                        `편재(${relationCounts['편재']}) / 정재(${relationCounts['정재']})`}
                                    {blessing === '남자' &&
                                        `편관(${relationCounts['편관']}) / 정관(${relationCounts['정관']})`}
                                    {blessing === '부모' &&
                                        `편인(${relationCounts['편인']}) / 정인(${relationCounts['정인']})`}
                                    {blessing === '시댁' &&
                                        `편재(${relationCounts['편재']}) / 정재(${relationCounts['정재']})`}
                                </td>
                                <td>
                                    {`${blessing} 덕 - ${
                                        blessing === '인' ? '사람들의 신뢰를 얻다' :
                                        blessing === '처가' ? '처가에서 도움을 받다' :
                                        blessing === '시댁' ? '시댁에서 도움을 받다' :
                                        blessing === '여자' ? '여성들과 좋은 관계다' :
                                        blessing === '남자' ? '남자들과 좋은 관계다' :
                                        blessing === '자식' ? '자녀에게 기쁨을 얻다' :
                                        blessing === '부모' ? '부모에게 지지를 받다' :
                                        ''
                                    }`}
                                </td>
                                <td>{score}% 있어요</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <p>비율이 낮으면 덕이 약할 수 있어요</p>
                    <p>
                        비율이 높으면 강점으로 작용해요<br/>
                        너무 높으면 균형을 잃을 수 있어요
                    </p>
                </div>
            </div>

            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    5대 덕의 비율을 활용하면 더 나은 관계와 의미를 설계할 수 있습니다
                </p>
            </div>
        </div>
    );
};

export default SajuReport21;
