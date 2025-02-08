import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport30.css';

const SajuReport30 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name, result } = sajuData || {};

    if (!result) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 오행 색상 및 매핑
    const fiveElementColorMap = {
        wood: '#89b798', // 목(木)
        fire: '#e57373', // 화(火)
        earth: '#f0d58c', // 토(土)
        metal: '#c0c0c0', // 금(金)
        water: 'black',  // 수(水)
    };

    const hanjaToElementMap = {
        "甲": "wood", "乙": "wood",
        "丙": "fire", "丁": "fire",
        "戊": "earth", "己": "earth",
        "庚": "metal", "辛": "metal",
        "壬": "water", "癸": "water",
        "寅": "wood", "卯": "wood",
        "巳": "fire", "午": "fire",
        "辰": "earth", "未": "earth", "戌": "earth", "丑": "earth",
        "申": "metal", "酉": "metal",
        "亥": "water", "子": "water",
    };

    const getElementName = (hanja) => {
        const element = hanjaToElementMap[hanja];
        if (element === "wood") return "목";
        if (element === "fire") return "화";
        if (element === "earth") return "토";
        if (element === "metal") return "금";
        if (element === "water") return "수";
        return "알 수 없음";
    };

    const getElementColor = (hanja) => fiveElementColorMap[hanjaToElementMap[hanja]] || 'transparent';
    const getTextColor = (bgColor) => (bgColor === 'black' ? 'white' : 'black');

    // 오행 비율 계산
    const calculateFiveElementPercentages = () => {
        const fiveElementCount = {
            wood: 0, // 목(木)
            fire: 0, // 화(火)
            earth: 0, // 토(土)
            metal: 0, // 금(金)
            water: 0, // 수(水)
        };

        const elements = [
            result.timeSky, result.daySky, result.monthSky, result.yearSky,
            result.timeGround, result.dayGround, result.monthGround, result.yearGround,
        ];

        elements.forEach((hanja) => {
            const element = hanjaToElementMap[hanja];
            if (element) {
                fiveElementCount[element] += 1;
            }
        });

        const totalElements = elements.length;

        return {
            wood: ((fiveElementCount.wood / totalElements) * 100).toFixed(1),
            fire: ((fiveElementCount.fire / totalElements) * 100).toFixed(1),
            earth: ((fiveElementCount.earth / totalElements) * 100).toFixed(1),
            metal: ((fiveElementCount.metal / totalElements) * 100).toFixed(1),
            water: ((fiveElementCount.water / totalElements) * 100).toFixed(1),
        };
    };

    const percentages = calculateFiveElementPercentages();

    const handleNextPage = () => {
        navigate('/Report31', { state: { percentages } });
    };

    return (
        <div className="report30-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">22. {name}님의 타고난 성향, 오행 에너지로 분석합니다</h1>
            <p className="report-subtitle">
                오행 비율을 통해 당신의 강점과 성장을 발견하세요!
            </p>

            <div className="five-element-container">
                {/* 첫 번째 표 */}
                <div className="table-container">
                    <table className="five-element-table">
                        <thead>
                        <tr>
                            <th colSpan="4">{name}님의 오행 에너지 구성</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{getElementName(result.timeSky)}</td>
                            <td>{getElementName(result.daySky)}</td>
                            <td>{getElementName(result.monthSky)}</td>
                            <td>{getElementName(result.yearSky)}</td>
                        </tr>
                        <tr>
                            <td style={{
                                backgroundColor: getElementColor(result.timeSky),
                                color: getTextColor(getElementColor(result.timeSky))
                            }}>
                                {result.timeSky}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.daySky),
                                color: getTextColor(getElementColor(result.daySky))
                            }}>
                                {result.daySky}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.monthSky),
                                color: getTextColor(getElementColor(result.monthSky))
                            }}>
                                {result.monthSky}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.yearSky),
                                color: getTextColor(getElementColor(result.yearSky))
                            }}>
                                {result.yearSky}
                            </td>
                        </tr>
                        <tr>
                            <td style={{
                                backgroundColor: getElementColor(result.timeGround),
                                color: getTextColor(getElementColor(result.timeGround))
                            }}>
                                {result.timeGround}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.dayGround),
                                color: getTextColor(getElementColor(result.dayGround))
                            }}>
                                {result.dayGround}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.monthGround),
                                color: getTextColor(getElementColor(result.monthGround))
                            }}>
                                {result.monthGround}
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.yearGround),
                                color: getTextColor(getElementColor(result.yearGround))
                            }}>
                                {result.yearGround}
                            </td>
                        </tr>
                        <tr>
                            <td>{getElementName(result.timeGround)}</td>
                            <td>{getElementName(result.dayGround)}</td>
                            <td>{getElementName(result.monthGround)}</td>
                            <td>{getElementName(result.yearGround)}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 두 번째 표 */}
                <div className="table-container">
                    <table className="energy-summary-table">
                        <thead>
                        <td colSpan={3}>타고난 오행 비율로 본 {name}님의 성향</td>
                        <tr>
                            <th>오행</th>
                            <th>오행의 성향</th>
                            <th>비율</th>
                        </tr>
                        </thead>
                        <tbody>
                        {(() => {
                            return Object.entries(percentages).map(([element, percentage]) => {
                                const numericPercentage = parseFloat(percentage);

                                // 소수점 제거
                                const formattedPercentage = numericPercentage % 1 === 0
                                    ? numericPercentage.toFixed(0) // 소수점이 0일 경우 정수 형태로 표시
                                    : numericPercentage.toFixed(1); // 소수점이 있을 경우 한 자리까지 표시

                                return (
                                    <tr key={element}>
                                        <td style={{
                                            backgroundColor: fiveElementColorMap[element],
                                            color: 'white',
                                            textAlign: 'center',
                                        }}>
                                            {element === 'wood' ? '목(木)' :
                                                element === 'fire' ? '화(火)' :
                                                    element === 'earth' ? '토(土)' :
                                                        element === 'metal' ? '금(金)' : '수(水)'}
                                        </td>
                                        <td>
                                            {element === 'wood' ? '자립적/창의적이다' :
                                                element === 'fire' ? '열정적/진취적이다' :
                                                    element === 'earth' ? '안정적/책임감 있다' :
                                                        element === 'metal' ? '강인함/결단력이다' : '공감적/감성적이다'}
                                        </td>
                                        <td>
                                            {formattedPercentage}%있어요
                                        </td>
                                    </tr>
                                );
                            });
                        })()}
                        <tr>
                            <td colSpan={3}>비율이 낮으면 오행 에너지가 부족합니다</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>높은 비율은 강점이지만, 지나치면 단점이 될 수 있어요</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className="five-element-footer">
                <p>오행의 강점과 약점을 활용하면 균형 있는 성장을 만들 수 있습니다</p>
            </footer>
        </div>
    );
};

export default SajuReport30;
