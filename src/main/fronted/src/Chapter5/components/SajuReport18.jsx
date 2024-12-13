import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/SajuReport18.css';
import {useSaju} from '../../context/SajuContext';

const SajuReport18 = () => {
    const navigate = useNavigate();
    const {sajuData} = useSaju();
    const {name, result} = sajuData;

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

        Object.entries(relationsPercentage).forEach(([relationKey, percentage]) => {
            const relation = result[relationKey]; // 관계 이름
            const blessing = getBlessingByRelation(relation); // 복 이름
            if (blessing) {
                blessingScores[blessing] += percentage; // 점수 누적
            }
        });

        return blessingScores;
    };

    const blessingScores = calculateBlessingScores();

    // 어때요 평가
    const getEvaluation = (percentage) => {
        if (percentage === 0) return '약해요';
        if (percentage <= 42) return '좋아요';
        return '넘쳐요';
    };

    const handleNextPage = () => {
        navigate('/Report19', {state: {blessingScores}});
    };

    return (
        <div className="report18-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">13. {name}님의 타고난 5대 복, 사주로 분석합니다</h1>
            <p className="report-subtitle">
                5대 복의 비밀을 확인하고 삶의 기회를 발견하세요
            </p>

            {/* 분석 표 */}
            <div className="report-content">
                {/* 왼쪽 복 분석 */}
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
                            <td>{result.manseTimeGroundRelation}</td>
                            <td>{result.manseDayGroundRelation}</td>
                            <td>{result.manseMonthGroundRelation}</td>
                            <td>{result.manseYearGroundRelation}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/* 분석 표 */}
                <div className="blessing-table-container">
                    <table className="blessing-table">
                        <thead>
                        <tr>
                            <th>사주 에너지</th>
                            <th>5대 복</th>
                            <th>어때요?</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.entries(blessingScores).map(([blessing, score], index) => (
                            <tr key={index}>
                                <td>
                                    {blessing === '인복' && '비견 / 겁재'}
                                    {blessing === '재능' && '식신 / 상관'}
                                    {blessing === '재물' && '편재 / 정재'}
                                    {blessing === '직장' && '편관 / 정관'}
                                    {blessing === '명예' && '편인 / 정인'}
                                </td>
                                <td>{blessing} 복 - {score}%</td>
                                <td>{getEvaluation(score)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    타고난 복의 비율을 이해하면 삶의 기회를 더 잘 활용할 수 있습니다.
                </p>
            </div>
        </div>
    );
};

export default SajuReport18;
