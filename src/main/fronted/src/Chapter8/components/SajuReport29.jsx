import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSaju} from '../../context/SajuContext';
import '../css/SajuReport29.css';

const SajuReport29 = () => {
    const navigate = useNavigate();
    const {sajuData} = useSaju();
    const {name, result} = sajuData || {};

    if (!result) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 출생 시간, 일, 월, 년 데이터 추출
    const birthTime = sajuData.birthTime; // "20:50"
    const birthDate = sajuData.birthDate.split('/'); // ["2000", "03", "21"]
    const birthYear = birthDate[0];
    const birthMonth = birthDate[1];
    const birthDay = birthDate[2];

    // 음양 판단 맵
    const yinYangMap = {
        "甲": "+", "乙": "-", "丙": "+", "丁": "-",
        "戊": "+", "己": "-", "庚": "+", "辛": "-",
        "壬": "+", "癸": "-",
        "寅": "+", "卯": "-", "巳": "+", "午": "-",
        "辰": "+", "未": "-", "戌": "+", "丑": "-",
        "申": "+", "酉": "-", "亥": "+", "子": "-",
    };

    // 오행 색상 매핑
    const fiveElementColorMap = {
        wood: '#89b798',  // green for 목(木)
        fire: '#e57373',   // red for 화(火)
        earth: '#f0d58c',  // yellow for 토(土)
        metal: '#c0c0c0',  // silver for 금(金)
        water: 'black',    // black for 수(水)
    };

    const hanjaToElementMap = {
        "甲": "wood", "乙": "wood", "丙": "fire", "丁": "fire",
        "戊": "earth", "己": "earth", "庚": "metal", "辛": "metal",
        "壬": "water", "癸": "water",
        "寅": "wood", "卯": "wood", "巳": "fire", "午": "fire",
        "辰": "earth", "未": "earth", "戌": "earth", "丑": "earth",
        "申": "metal", "酉": "metal", "亥": "water", "子": "water",
    };

    const getElementColor = (hanja) => fiveElementColorMap[hanjaToElementMap[hanja]] || 'transparent';
    const getTextColor = (bgColor) => (bgColor === 'black' ? 'white' : 'black');

    // 음양 에너지 카운트 계산
    const calculateYinYangCounts = () => {
        let yinCount = 0;
        let yangCount = 0;

        const elements = [
            result.timeSky,
            result.timeGround,
            result.daySky,
            result.dayGround,
            result.monthSky,
            result.monthGround,
            result.yearSky,
            result.yearGround,
        ];

        elements.forEach((element) => {
            const yinYang = yinYangMap[element];
            if (yinYang === '+') {
                yangCount += 1;
            } else if (yinYang === '-') {
                yinCount += 1;
            }
        });

        return { yinCount, yangCount };
    };

    const { yinCount, yangCount } = calculateYinYangCounts();

    // 음양 메시지 결정
    const getYinYangMessage = () => {
        if (yangCount > yinCount) {
            return `${name}님의 양 에너지가 높아 활동적으로 도전적인 성향이 강합니다.`;
        } else if (yinCount > yangCount) {
            return `${name}님의 음 에너지가 높아 신중하고 내면을 중시하는 성향이 강합니다.`;
        } else {
            return `${name}님의 음과 양이 균형을 이루어 조화롭고 균형 잡힌 성향을 보입니다.`;
        }
    };

    const handleNextPage = () => {
        navigate('/Report30');
    };

    return (
        <div className="report29-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">
                21. {name}님의 타고난 성격, 음양 에너지로 분석합니다
            </h1>
            <p className="report-subtitle">
                음양 에너지로 당신만의 성향과 균형을 찾아보세요!
            </p>

            <div className="yin-yang-container">
                {/* 음양 분석 표 */}
                <div className="table-container">
                    <table className="yin-yang-table">
                        <thead>
                        <td colSpan={4}>{name}님의 음양 에너지 구성</td>
                        <tr>
                            <th>{birthTime}</th>
                            <th>{birthDay}일</th>
                            <th>{birthMonth}월</th>
                            <th>{birthYear}년</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{
                                backgroundColor: getElementColor(result.timeSky),
                                color: getTextColor(getElementColor(result.timeSky))
                            }}>
                                {result.timeSky} <br/>
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.daySky),
                                color: getTextColor(getElementColor(result.daySky))
                            }}>
                                {result.daySky} <br/>
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.monthSky),
                                color: getTextColor(getElementColor(result.monthSky))
                            }}>
                                {result.monthSky} <br/>
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.yearSky),
                                color: getTextColor(getElementColor(result.yearSky))
                            }}>
                                {result.yearSky} <br/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{
                                backgroundColor: getElementColor(result.timeGround),
                                color: getTextColor(getElementColor(result.timeGround))
                            }}>
                                {result.timeGround} <br/>
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.dayGround),
                                color: getTextColor(getElementColor(result.dayGround))
                            }}>
                                {result.dayGround} <br/>
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.monthGround),
                                color: getTextColor(getElementColor(result.monthGround))
                            }}>
                                {result.monthGround} <br/>
                            </td>
                            <td style={{
                                backgroundColor: getElementColor(result.yearGround),
                                color: getTextColor(getElementColor(result.yearGround))
                            }}>
                                {result.yearGround} <br/>
                            </td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            <td>{yinYangMap[result.timeSky] === '+' ? '양(+)' : '음(-)'}</td>
                            <td>{yinYangMap[result.daySky] === '+' ? '양(+)' : '음(-)'}</td>
                            <td>{yinYangMap[result.monthSky] === '+' ? '양(+)' : '음(-)'}</td>
                            <td>{yinYangMap[result.yearSky] === '+' ? '양(+)' : '음(-)'}</td>
                        </tr>
                        </thead>
                    </table>
                </div>

                {/* 음/양 에너지 요약 */}
                <div className="table-container">
                    <table className="yin-yang-summary-table">
                        <thead>
                        <td colSpan={2}>사주로 알아보는 음양 에너지의 특징</td>
                        <tr>
                            <th>음기운 에너지</th>
                            <th>양기운 에너지</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>차분하고 신중하다</td>
                            <td>열정적이고 도전적이다</td>
                        </tr>
                        <tr>
                            <td>한 발 물러서 생각한다</td>
                            <td>스스로 나서서 행동한다</td>
                        </tr>
                        <tr>
                            <td>마음이 차분하다</td>
                            <td>활발하고 활기차다</td>
                        </tr>
                        <tr>
                            <td>부드럽고 섬세하다</td>
                            <td>강인하고 자신감 있다</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>{getYinYangMessage()}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className="yin-yang-footer">
                <p>
                    음양 에너지의 균형을 찾으면 나만의 강점으로 만들 수 있습니다
                </p>
            </footer>
        </div>
    );
};

export default SajuReport29;
