import React from 'react';
import { useSaju } from '../../context/SajuContext';
import '../../css/SajuReport1.css';

// 오행 색상 매핑
const fiveElementColorMap = {
    wood: '#89b798',  // green for 목(木)
    fire: '#e57373',   // red for 화(火)
    earth: '#f0d58c',  // yellow for 토(土)
    metal: '#c0c0c0',  // silver for 금(金)
    water: 'black'   // blue for 수(水)
};

// 한자 천간 및 지지에 따른 오행 매핑
const hanjaToElementMap = {
    "甲": "wood", "乙": "wood", "丙": "fire", "丁": "fire",
    "戊": "earth", "己": "earth", "庚": "metal", "辛": "metal",
    "壬": "water", "癸": "water", "寅": "wood", "卯": "wood",
    "巳": "fire", "午": "fire", "辰": "earth", "未": "earth",
    "戌": "earth", "丑": "earth", "申": "metal", "酉": "metal",
    "亥": "water", "子": "water"
};

// 한자 -> 한글 매핑 테이블
const hanjaToKoreanMap = {
    "甲": "갑", "乙": "을", "丙": "병", "丁": "정", "戊": "무",
    "己": "기", "庚": "경", "辛": "신", "壬": "임", "癸": "계",
    "子": "자", "丑": "축", "寅": "인", "卯": "묘", "辰": "진",
    "巳": "사", "午": "오", "未": "미", "申": "신", "酉": "유",
    "戌": "술", "亥": "해"
};

// 오행 색상에 따른 텍스트 색상 설정 함수
const getTextColor = (backgroundColor) => {
    return backgroundColor === 'black' ? 'white' : 'black';
};

// 한자 -> 한글 변환 함수
const convertToKorean = (hanja) => {
    return hanjaToKoreanMap[hanja] || hanja;
};

// 오행에 따른 배경 색상 반환 함수
const getElementColor = (hanja) => {
    const element = hanjaToElementMap[hanja];
    return fiveElementColorMap[element] || 'transparent';
};

const SajuReport1 = () => {
    const { sajuData } = useSaju();
    const { name, result } = sajuData;

    return (
        <div className="saju-report1-container">
            <h1>1. {name}님의 출생 정보로 보는 성격과 운명 분석</h1>
            <p>출생 시기와 사주 팔자를 통해 삶의 흐름을 알아보세요</p>

            <div className="saju-report1-result">
                <table className="saju-report1-table">
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
                        <th>천간 (한글)</th>
                        <td>{convertToKorean(result.timeSky)}</td>
                        <td>{convertToKorean(result.daySky)}</td>
                        <td>{convertToKorean(result.monthSky)}</td>
                        <td>{convertToKorean(result.yearSky)}</td>
                    </tr>
                    <tr>
                        <th>천간 (한자)</th>
                        <td className="saju-report1-cell" style={{ backgroundColor: getElementColor(result.timeSky), color: getTextColor(getElementColor(result.timeSky)) }}>{result.timeSky}</td>
                        <td className="saju-report1-cell" style={{ backgroundColor: getElementColor(result.daySky), color: getTextColor(getElementColor(result.daySky)) }}>{result.daySky}</td>
                        <td className="saju-report1-cell" style={{ backgroundColor: getElementColor(result.monthSky), color: getTextColor(getElementColor(result.monthSky)) }}>{result.monthSky}</td>
                        <td className="saju-report1-cell" style={{ backgroundColor: getElementColor(result.yearSky), color: getTextColor(getElementColor(result.yearSky)) }}>{result.yearSky}</td>
                    </tr>
                    <tr>
                        <th>관계</th>
                        <td>{result.manseTimeSkyRelation}</td>
                        <td>본원</td>
                        <td>{result.manseMonthSkyRelation}</td>
                        <td>{result.manseYearSkyRelation}</td>
                    </tr>
                    <tr>
                        <th>지지 (한글)</th>
                        <td>{convertToKorean(result.timeGround)}</td>
                        <td>{convertToKorean(result.dayGround)}</td>
                        <td>{convertToKorean(result.monthGround)}</td>
                        <td>{convertToKorean(result.yearGround)}</td>
                    </tr>
                    <tr>
                        <th>지지 (한자)</th>
                        <td className="saju-report1-cell" style={{ backgroundColor: getElementColor(result.timeGround), color: getTextColor(getElementColor(result.timeGround)) }}>{result.timeGround}</td>
                        <td className="saju-report1-cell" style={{ backgroundColor: getElementColor(result.dayGround), color: getTextColor(getElementColor(result.dayGround)) }}>{result.dayGround}</td>
                        <td className="saju-report1-cell" style={{ backgroundColor: getElementColor(result.monthGround), color: getTextColor(getElementColor(result.monthGround)) }}>{result.monthGround}</td>
                        <td className="saju-report1-cell" style={{ backgroundColor: getElementColor(result.yearGround), color: getTextColor(getElementColor(result.yearGround)) }}>{result.yearGround}</td>
                    </tr>
                    <tr>
                        <th>관계</th>
                        <td>{result.manseTimeGroundRelation}</td>
                        <td>{result.manseDayGroundRelation}</td>
                        <td>{result.manseMonthGroundRelation}</td>
                        <td>{result.manseYearGroundRelation}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <p className="saju-report1-footer">출생일과 시간으로 {name}님의 성격과 운명을 깊이 있게 살펴보세요</p>
        </div>
    );
};

export default SajuReport1;
