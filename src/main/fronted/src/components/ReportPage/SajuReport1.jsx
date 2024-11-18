import React from 'react';
import { useSaju } from '../../context/SajuContext';
import '../../css/SajuReport1.css';
import { useNavigate } from 'react-router-dom';

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

// 텍스트 색상 설정
const getTextColor = (bgColor) => (bgColor === 'black' ? 'white' : 'black');

const SajuReport1 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name, result } = sajuData;

    const handleNext = () => {
        navigate('/Report2');
    };

    // 출생 시간, 일, 월, 년 데이터 추출
    const birthTime = sajuData.birthTime; // "20:50"
    const birthDate = sajuData.birthDate.split('/'); // ["2000", "03", "21"]
    const birthYear = birthDate[0];
    const birthMonth = birthDate[1];
    const birthDay = birthDate[2];

    return (
        <div className="saju-report1-wrapper">
            <div className="saju-report1-container">
                <h1>{name}님의 출생 정보로 보는 성격과 운명 분석</h1>
                <p>출생 시기와 사주 팔자를 통해 삶의 흐름을 알아보세요</p>

                {/* 상단 출생 정보 */}
                <div className="top-saju-table">
                    <div className="saju-row">
                        <div className="saju-cell-header">출생 시</div>
                        <div className="saju-cell">{birthTime}</div>
                    </div>
                    <div className="saju-row">
                        <div className="saju-cell-header">출생 일</div>
                        <div className="saju-cell">{birthDay}</div>
                    </div>
                    <div className="saju-row">
                        <div className="saju-cell-header">출생 월</div>
                        <div className="saju-cell">{birthMonth}</div>
                    </div>
                    <div className="saju-row">
                        <div className="saju-cell-header">출생 년</div>
                        <div className="saju-cell">{birthYear}</div>
                    </div>
                </div>

                <div className="saju-report1-tables">
                    {/* 사주표 */}
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
                            <th>천간</th>
                            <td style={{
                                backgroundColor: getElementColor(result.timeSky),
                                color: getTextColor(getElementColor(result.timeSky))
                            }}>{result.timeSky}</td>
                            <td style={{
                                backgroundColor: getElementColor(result.daySky),
                                color: getTextColor(getElementColor(result.daySky))
                            }}>{result.daySky}</td>
                            <td style={{
                                backgroundColor: getElementColor(result.monthSky),
                                color: getTextColor(getElementColor(result.monthSky))
                            }}>{result.monthSky}</td>
                            <td style={{
                                backgroundColor: getElementColor(result.yearSky),
                                color: getTextColor(getElementColor(result.yearSky))
                            }}>{result.yearSky}</td>
                        </tr>
                        <tr>
                            <th>지지</th>
                            <td style={{
                                backgroundColor: getElementColor(result.timeGround),
                                color: getTextColor(getElementColor(result.timeGround))
                            }}>{result.timeGround}</td>
                            <td style={{
                                backgroundColor: getElementColor(result.dayGround),
                                color: getTextColor(getElementColor(result.dayGround))
                            }}>{result.dayGround}</td>
                            <td style={{
                                backgroundColor: getElementColor(result.monthGround),
                                color: getTextColor(getElementColor(result.monthGround))
                            }}>{result.monthGround}</td>
                            <td style={{
                                backgroundColor: getElementColor(result.yearGround),
                                color: getTextColor(getElementColor(result.yearGround))
                            }}>{result.yearGround}</td>
                        </tr>
                        </tbody>
                    </table>

                    {/* 해석표 */}
                    <table className="analysis-table">
                        <thead>
                        <tr>
                            <th>출생일과 시간을 통한 사주 해석</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>출생 년</td>
                            <td>어린 시절과 운세 영향</td>
                        </tr>
                        <tr>
                            <td>출생 월</td>
                            <td>사회생활과 부모 관계</td>
                        </tr>
                        <tr>
                            <td>출생 일</td>
                            <td>성격과 배우자 관계</td>
                        </tr>
                        <tr>
                            <td>출생 시간</td>
                            <td>노년 운세와 자녀 관계</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p className="footer-text">출생일과 시간으로 {name}님의 성격과 운명을 깊이 있게 살펴보세요</p>
                <button className="next-button" onClick={handleNext}>다음 페이지</button>
            </div>
        </div>
    );
};

export default SajuReport1;
