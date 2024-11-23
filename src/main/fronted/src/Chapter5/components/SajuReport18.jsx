import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport18.css';
import { useSaju } from '../../context/SajuContext';

const SajuReport18 = () => {
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

    // 관계에 따른 복의 구분
    const blessingGroups = {
        인복: ['비견', '겁재'],
        재능: ['식신', '상관'],
        재물: ['편재', '정재'],
        직장: ['편관', '정관'],
        명예: ['편인', '정인'],
    };

    // 오행 색상 매핑
    const fiveElementColorMap = {
        wood: '#89b798',
        fire: '#e57373',
        earth: '#f0d58c',
        metal: '#c0c0c0',
        water: 'black',
    };

    // 한자를 오행 색상으로 매핑
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

    // 관계를 복 이름으로 매핑하는 함수
    const getBlessingByRelation = (relation) => {
        return Object.keys(blessingGroups).find((blessing) =>
            blessingGroups[blessing].includes(relation)
        ) || ''; // 해당 관계에 해당하는 복 이름이 없을 경우 빈 문자열 반환
    };

    // 복의 점수 계산
    const calculateBlessingScores = () => {
        const blessingScores = {
            인복: 0,
            재능: 0,
            재물: 0,
            직장: 0,
            명예: 0,
        };

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
        navigate('/Report19', { state: { blessingScores } }); // 다음 페이지로 이동
    };

    return (
        <div className="report18-container">
            <h1 className="report-title">{name}님의 타고난 복으로 성장의 기회 찾기</h1>
            <p className="report-subtitle">
                {name}님의 5대 복을 분석해 성공의 길을 열어보세요.
            </p>

            {/* 분석 표 */}
            <div className="report-content">
                {/* 왼쪽 복 분석 */}
                <div className="blessing-analysis-section">
                    <h2 className="section-title">{name}님의 사주팔자 5복 분석</h2>
                    <table className="blessing-analysis-table">
                        <tbody>
                        <tr>
                            <th>복</th>
                            <td>{getBlessingByRelation(result.manseTimeSkyRelation)}</td>
                            <td>{name}</td>
                            <td>{getBlessingByRelation(result.manseMonthSkyRelation)}</td>
                            <td>{getBlessingByRelation(result.manseYearSkyRelation)}</td>
                        </tr>
                        <tr>
                            <th>천간</th>
                            <td
                                style={{
                                    backgroundColor: getElementColor(result.timeSky),
                                    color: getTextColor(getElementColor(result.timeSky)),
                                }}
                            >
                                {result.timeSky}
                            </td>
                            <td
                                style={{
                                    backgroundColor: getElementColor(result.daySky),
                                    color: getTextColor(getElementColor(result.daySky)),
                                }}
                            >
                                {result.daySky}
                            </td>
                            <td
                                style={{
                                    backgroundColor: getElementColor(result.monthSky),
                                    color: getTextColor(getElementColor(result.monthSky)),
                                }}
                            >
                                {result.monthSky}
                            </td>
                            <td
                                style={{
                                    backgroundColor: getElementColor(result.yearSky),
                                    color: getTextColor(getElementColor(result.yearSky)),
                                }}
                            >
                                {result.yearSky}
                            </td>
                        </tr>
                        <tr>
                            <th>지지</th>
                            <td
                                style={{
                                    backgroundColor: getElementColor(result.timeGround),
                                    color: getTextColor(getElementColor(result.timeGround)),
                                }}
                            >
                                {result.timeGround}
                            </td>
                            <td
                                style={{
                                    backgroundColor: getElementColor(result.dayGround),
                                    color: getTextColor(getElementColor(result.dayGround)),
                                }}
                            >
                                {result.dayGround}
                            </td>
                            <td
                                style={{
                                    backgroundColor: getElementColor(result.monthGround),
                                    color: getTextColor(getElementColor(result.monthGround)),
                                }}
                            >
                                {result.monthGround}
                            </td>
                            <td
                                style={{
                                    backgroundColor: getElementColor(result.yearGround),
                                    color: getTextColor(getElementColor(result.yearGround)),
                                }}
                            >
                                {result.yearGround}
                            </td>
                        </tr>
                        <tr>
                            <th>복</th>
                            <td>{getBlessingByRelation(result.manseTimeGroundRelation)}</td>
                            <td>{getBlessingByRelation(result.manseDayGroundRelation)}</td>
                            <td>{getBlessingByRelation(result.manseMonthGroundRelation)}</td>
                            <td>{getBlessingByRelation(result.manseYearGroundRelation)}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 오른쪽 복 점수 */}
                <div className="blessing-score-section">
                    <h2 className="section-title">{name}님의 타고난 5대 복</h2>
                    <table className="blessing-score-table">
                        <tbody>
                        {Object.entries(blessingScores).map(([blessing, score]) => (
                            <tr key={blessing}>
                                <td>{blessing} 복</td>
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
                    {name}님의 5대 복으로 성장을 촉진하고 더 많은 기회를 발견하세요.
                </p>
                <p className="footer-note">
                    복이 부족해도 운이 좋을 때 긍정적인 변화가 올 수 있습니다.
                </p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport18;
