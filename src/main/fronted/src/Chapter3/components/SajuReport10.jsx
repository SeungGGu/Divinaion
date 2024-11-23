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
        직업능력: ['편관', '정관'],
        지적능력: ['편인', '정인'],
    };

    // 관계 매핑 함수
    const getRelation = (relation) => {
        for (const [key, values] of Object.entries(relationGroups)) {
            if (values.includes(relation)) {
                return key;
            }
        }
        return '';
    };

    // 재능 결과 계산
    const calculateScores = () => {
        const scores = {
            자신감: 0,
            창의력: 0,
            경제력: 0,
            직업능력: 0,
            지적능력: 0,
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
            <h1 className="report-title">
                {name}님의 잠재력 분석과 재능 발휘 전략
            </h1>
            <p className="report-subtitle">
                부족한 부분은 보완하고, 강점은 극대화하는 방법을 안내합니다.
            </p>

            {/* 추가된 상단 정보 */}
            <div className="extra-section">
                <h2 className="extra-title">추가 분석 정보</h2>
                <p>
                    {name}님의 사주팔자에 나타난 천간과 지지를 기반으로, 각 능력에 대한 비율과
                    관계를 분석합니다.
                </p>
            </div>

            <div className="report-content">
                {/* 기존 재능 분석표 */}
                <div className="analysis-section">
                    <h2 className="section-title">{name}님의 사주팔자 재능 분석</h2>
                    <table className="saju-table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>생시</th>
                            <th>생일</th>
                            <th>생월</th>
                            <th>생년</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>관계</th>
                            <td>{getRelation(result.manseTimeSkyRelation)}</td>
                            <td>{name}</td>
                            <td>{getRelation(result.manseMonthSkyRelation)}</td>
                            <td>{getRelation(result.manseYearSkyRelation)}</td>
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
                        <tr>
                            <th>관계</th>
                            <td>{getRelation(result.manseTimeGroundRelation)}</td>
                            <td>{getRelation(result.manseDayGroundRelation)}</td>
                            <td>{getRelation(result.manseMonthGroundRelation)}</td>
                            <td>{getRelation(result.manseYearGroundRelation)}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 퍼센티지 결과 */}
                <div className="percentage-section">
                    <h2 className="section-title">{name}님의 타고난 재능과 능력</h2>
                    <table className="percentage-table">
                        <tbody>
                        <tr>
                        <td>자신감</td>
                            <td>{scores.자신감}%</td>
                        </tr>
                        <tr>
                            <td>창의력</td>
                            <td>{scores.창의력}%</td>
                        </tr>
                        <tr>
                            <td>경제력</td>
                            <td>{scores.경제력}%</td>
                        </tr>
                        <tr>
                            <td>직업능력</td>
                            <td>{scores.직업능력}%</td>
                        </tr>
                        <tr>
                            <td>지적능력</td>
                            <td>{scores.지적능력}%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 추가된 하단 정보 */}
            <div className="extra-footer">
                <h2>추가 분석 요약</h2>
                <p>
                    {name}님의 사주팔자 분석을 통해 강점과 약점을 명확히 하고, 재능을 발휘할 수
                    있는 방향성을 제공합니다.
                </p>
            </div>

            <div className="footer">
                <p>{name}님의 재능을 발휘해 더 큰 성과를 이루어 보세요.</p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport10;
