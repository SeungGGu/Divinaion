import React from 'react';
import { useSaju } from '../../context/SajuContext';
import { useNavigate } from "react-router-dom";
import '../css/SajuIntro2.css';

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

const SajuIntro2 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();

    if (!sajuData) {
        return <p>사주 데이터를 불러오는 중입니다...</p>;
    }

    function nextPageOnClick() {
        navigate('/Intro3');
    }

    const { name, result } = sajuData;

    return (
        <div className="saju-intro2-container">
            {/* 왼쪽 섹션 */}
            <div className="saju-intro2-left">
                <h2>디지털 사주 보고서</h2>
                <div className="saju-box">
                    <table className="saju-table">
                        <tbody>
                        <tr>
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
                </div>
            </div>

            {/* 오른쪽 섹션 */}
            <div className="saju-intro2-right">
                <div className="saju-intro2-box">
                    <p>{name}님의 맞춤형 사주 분석을 통해,<br />당신만의 특별한 길을 찾아보세요!</p>
                </div>
                <div className="saju-intro2-box">
                    <p>33가지 항목 분석으로 고민 해결!<br />나만의 사주를 지금 바로 확인하세요!</p>
                </div>
            </div>

            {/* 다음 버튼 */}
            <button className="saju-intro2-next-button" onClick={nextPageOnClick}>
                다음 ▶
            </button>
        </div>
    );
};

export default SajuIntro2;
