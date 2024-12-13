import React from 'react';
import { useSaju } from '../../context/SajuContext';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport1.css';

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

// 천간과 지지의 한자-한글 매핑
const hanjaToHangulMap = {
    // 천간 (십천간)
    '甲': '갑', '乙': '을', '丙': '병', '丁': '정',
    '戊': '무', '己': '기', '庚': '경', '辛': '신',
    '壬': '임', '癸': '계',

    // 지지 (십이지)
    '子': '자', '丑': '축', '寅': '인', '卯': '묘',
    '辰': '진', '巳': '사', '午': '오', '未': '미',
    '申': '신', '酉': '유', '戌': '술', '亥': '해',
};

// 한자를 한글로 변환하는 함수
const convertHanjaToHangul = (hanja) => {
    return hanja.split('').map(char => hanjaToHangulMap[char] || char).join('');
};


const SajuReport1 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();

    if (!sajuData) {
        return <p>사주 데이터를 불러오는 중입니다...</p>;
    }

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
            {/* 다음 페이지 버튼 */}
            <button className="saju-report1-next-button" onClick={handleNext}>
                다음 ▶
            </button>

            <h1>{name}님의 타고난 성향과 미래 가능성을 알려드립니다</h1>
            <p>성격, 적성, 대인관계까지 사주로 쉽게 풀어드립니다!</p>

            <div className="saju-report1-layout">
                {/* 왼쪽: 사주표 */}
                <div className="saju-report1-left">
                    <table className="saju-table">
                        <thead>
                            <tr>
                                <th colSpan={4}>{name}님의 사주 에너지 구성</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{birthTime}</td>
                            <td>{birthDay}일</td>
                            <td>{birthMonth}월</td>
                            <td>{birthYear}년</td>
                        </tr>
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
                        <tr>
                            <td>{`${convertHanjaToHangul(result.timeSky)}${convertHanjaToHangul(result.timeGround)}時`}</td>
                            <td>{`${convertHanjaToHangul(result.daySky)}${convertHanjaToHangul(result.dayGround)}日`}</td>
                            <td>{`${convertHanjaToHangul(result.monthSky)}${convertHanjaToHangul(result.monthGround)}月`}</td>
                            <td>{`${convertHanjaToHangul(result.yearSky)}${convertHanjaToHangul(result.yearGround)}年`}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 오른쪽: 추가 정보 */}
                <div className="saju-report1-right">
                    <div className="info-box">성격과 강점</div>
                    <div className="info-box">적성 찾기</div>
                    <div className="info-box">직업 분석</div>
                    <div className="info-box">대인관계</div>
                    <div className="info-box">약점 관리</div>
                </div>
            </div>
            <p className="footer-text">타고난 사주를 알면 나를 더 깊이 이해할 수 있습니다</p>
        </div>
    );
};

export default SajuReport1;
