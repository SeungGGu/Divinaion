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

    // sajuData가 없으면 로딩 중 메시지 표시
    if (!sajuData) {
        return <p>사주 데이터를 불러오는 중입니다...</p>;
    }

    function nextPageOnClick() {
        navigate('/Intro3');
    }

    const { name, result } = sajuData;

    return (
        <div className="saju-intro3-container">
            {/* 다음 버튼 */}
            <button className="saju-intro3-next-button" onClick={nextPageOnClick}>
                다음 ▶
            </button>

            {/* 왼쪽 섹션: 만세력 */}
            <div className="saju-intro3-left">
                <h2>디지털 사주 보고서</h2>
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

            {/* 오른쪽 섹션: 보고서 정보 */}
            <div className="saju-intro3-right">
                <h2>{name}님을 위한 맞춤형 사주 보고서!</h2>
                <p>
                    지금 손끝에서 확인하세요.<br/>
                    궁금했던 모든 사주의 답이 여기 있습니다!
                </p>
                <p>
                    무엇이 고민이신가요?<br/>
                    무엇이 궁금하신가요?<br/>
                    ➡ 사주 보고서로 33가지 분석을 확인하세요!</p>
            </div>
        </div>
    );
};

export default SajuIntro2;
