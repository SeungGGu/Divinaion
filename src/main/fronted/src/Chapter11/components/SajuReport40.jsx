import React from "react";
import {useSaju} from "../../context/SajuContext";
import "../css/SajuReport40.css";
import {useNavigate} from "react-router-dom";

// 천간과 지지 매핑
const heavenlyStems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const earthlyBranches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

// 음양 판단 맵
const yinYangMap = {
    "甲": "+", "乙": "-", "丙": "+", "丁": "-",
    "戊": "+", "己": "-", "庚": "+", "辛": "-",
    "壬": "+", "癸": "-",
    "子": "-", "丑": "-", "寅": "+", "卯": "-",
    "辰": "+", "巳": "+", "午": "-", "未": "-",
    "申": "+", "酉": "-", "戌": "+", "亥": "-",
};

// 오행 색상 매핑
const fiveElementColorMap = {
    wood: "#b3d9a5",
    fire: "#f4a89a",
    earth: "#f5d0a9",
    metal: "#d3d3d3",
    water: "black",
};

// 오행 매핑
const hanjaToElementMap = {
    "甲": "wood", "乙": "wood",
    "丙": "fire", "丁": "fire",
    "戊": "earth", "己": "earth",
    "庚": "metal", "辛": "metal",
    "壬": "water", "癸": "water",
    "子": "water", "丑": "earth",
    "寅": "wood", "卯": "wood",
    "辰": "earth", "巳": "fire",
    "午": "fire", "未": "earth",
    "申": "metal", "酉": "metal",
    "戌": "earth", "亥": "water",
};

// 남자(FEMALE X)와 여자(FEMALE O) 해시태그 구분
const maleFortuneTags = {
    "비견": "#협력 #자신감 상승 #갈등 #경쟁하다",
    "겁재": "#도전 #인간관계 #재물 손실 #분쟁",
    "식신": "#건강 #창의력 #이성문제 #나태함",
    "상관": "#능력발휘 #추진력 #구설수 #충돌",
    "편재": "#재산 증가 #활동성 #과소비 #이성 문제",
    "정재": "#안정감 #책임감 #집착하다 #스트레스",
    "편관": "#도전정신 #리더십 #갈등 #불안과 강박",
    "정관": "#직장 운 #목표달성 #압박감 #책임부담",
    "편인": "#많은 생각 #몰입하다 #고립감 #비현실적",
    "정인": "#안정감 #혜택 받다 #많은 걱정 #고집",
};

const femaleFortuneTags = {
    "비견": "#협력 #자신감 상승 #갈등 #경쟁하다",
    "겁재": "#도전 #인간관계 #재물 손실 #분쟁",
    "식신": "#건강 #창의력 #이성문제 #나태함",
    "상관": "#능력발휘 #추진력 #구설수 #충돌",
    "편재": "#재산 증가 #활동성 #과소비 #금전 문제",
    "정재": "#안정감 #책임감 #집착하다 #스트레스",
    "편관": "#도전정신 #리더십 #강박감 #이성문제",
    "정관": "#이성관계 #목표달성 #압박감 #책임부담",
    "편인": "#많은 생각 #몰입하다 #고립감 #비현실적",
    "정인": "#안정감 #혜택 받다 #많은 걱정 #고집",
};

const getElementColor = (hanja) => fiveElementColorMap[hanjaToElementMap[hanja]] || "#fff";
const getTextColor = (bgColor) => (bgColor === "black" ? "white" : "black");

// 십신 계산 함수
const calculateRelationship = (dayElement, dayYinYang, branchElement, branchYinYang) => {
    if (!dayElement || !branchElement) return "운세 없음";

    const relations = {
        wood: {produces: "fire", controls: "earth", supportedBy: "water"},
        fire: {produces: "earth", controls: "metal", supportedBy: "wood"},
        earth: {produces: "metal", controls: "water", supportedBy: "fire"},
        metal: {produces: "water", controls: "wood", supportedBy: "earth"},
        water: {produces: "wood", controls: "fire", supportedBy: "metal"},
    };

    // 비견/겁재: 일간과 동일한 오행
    if (dayElement === branchElement) {
        return dayYinYang === branchYinYang ? "비견" : "겁재";
    }

    // 식신/상관: 내가 생하는 오행
    if (relations[dayElement]?.produces === branchElement) {
        return dayYinYang === branchYinYang ? "식신" : "상관";
    }

    // 편재/정재: 내가 극하는 오행
    if (relations[dayElement]?.controls === branchElement) {
        return dayYinYang === branchYinYang ? "편재" : "정재";
    }

    // 편인/정인: 나를 생하는 오행
    if (relations[dayElement]?.supportedBy === branchElement) {
        return dayYinYang === branchYinYang ? "편인" : "정인";
    }

    // 편관/정관: 나를 극하는 오행
    const controlledRelations = {
        fire: "water",
        wood: "metal",
        earth: "wood",
        metal: "fire",
        water: "earth",
    };

    if (controlledRelations[dayElement] === branchElement) {
        return dayYinYang === branchYinYang ? "편관" : "정관";
    }

    return "운세 없음"; // 정의되지 않은 경우
};


// 연도 계산 로직
const calculateYearInfo = (year) => {
    const stemIndex = (year - 4) % 10;
    const branchIndex = (year - 4) % 12;
    return {
        heavenlyStem: heavenlyStems[stemIndex],
        earthlyBranch: earthlyBranches[branchIndex],
    };
};

// 운세 계산
const getYearlyFortune = (dayStem, yearBranch) => {
    const dayElement = hanjaToElementMap[dayStem];
    const dayYinYang = yinYangMap[dayStem];
    const branchElement = hanjaToElementMap[yearBranch];
    const branchYinYang = yinYangMap[yearBranch];

    return calculateRelationship(dayElement, dayYinYang, branchElement, branchYinYang);
};

const SajuReport40 = () => {
    const {sajuData} = useSaju();
    const {name, result, gender} = sajuData || {};
    const navigate = useNavigate();

    if (!result) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;

    const currentYearInfo = calculateYearInfo(currentYear);
    const nextYearInfo = calculateYearInfo(nextYear);

    const currentFortune = getYearlyFortune(result.daySky, currentYearInfo.earthlyBranch);
    const nextFortune = getYearlyFortune(result.daySky, nextYearInfo.earthlyBranch);

    const currentYearFortune = currentFortune; // 현재 연도 운세 저장
    const nextYearFortune = nextFortune; // 다음 연도 운세 저장

    const handleNextPage = () => {
        navigate('/Report41', {
            state: {
                currentFortune,
                nextFortune,
                currentYear,
                nextYear,
                name
            }
        });
    };

    return (
        <div className="report40-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
            <h1 className="report40-title">29. {name}님의 {currentYear}년과 {nextYear}년, 운세를 분석합니다</h1>
            <p className="report40-subtitle">
                다가올 운세를 분석하고 기회를 잡아보세요!
            </p>

            <div className="report40-content">
                <div className="analysis-table-container">
                    <table className="analysis-table">
                        <thead>
                        <tr>
                            <th colSpan="4">{name}님의 사주팔자 운세 분석</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{result.manseTimeSkyRelation}</td>
                            <td>{name}</td>
                            <td>{result.manseMonthSkyRelation}</td>
                            <td>{result.manseYearSkyRelation}</td>
                        </tr>
                        <tr>
                            {["timeSky", "daySky", "monthSky", "yearSky"].map((key, index) => (
                                <td
                                    key={index}
                                    style={{
                                        backgroundColor: getElementColor(result[key]),
                                        color: getTextColor(getElementColor(result[key])),
                                        fontWeight: "bold",
                                    }}
                                >
                                    {result[key]}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            {["timeGround", "dayGround", "monthGround", "yearGround"].map((key, index) => (
                                <td
                                    key={index}
                                    style={{
                                        backgroundColor: getElementColor(result[key]),
                                        color: getTextColor(getElementColor(result[key])),
                                        fontWeight: "bold",
                                    }}
                                >
                                    {result[key]}
                                </td>
                            ))}
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

                <div className="year-table-container">
                    <table className="year-table">
                        <thead>
                        <tr>
                            <th>{currentYear}년</th>
                            <th>{nextYear}년</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td
                                style={{
                                    backgroundColor: getElementColor(currentYearInfo.heavenlyStem),
                                    color: getTextColor(getElementColor(currentYearInfo.heavenlyStem)),
                                }}
                            >
                                {currentYearInfo.heavenlyStem}
                            </td>
                            <td
                                style={{
                                    backgroundColor: getElementColor(nextYearInfo.heavenlyStem),
                                    color: getTextColor(getElementColor(nextYearInfo.heavenlyStem)),
                                }}
                            >
                                {nextYearInfo.heavenlyStem}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    backgroundColor: getElementColor(currentYearInfo.earthlyBranch),
                                    color: getTextColor(getElementColor(currentYearInfo.earthlyBranch)),
                                }}
                            >
                                {currentYearInfo.earthlyBranch}
                            </td>
                            <td
                                style={{
                                    backgroundColor: getElementColor(nextYearInfo.earthlyBranch),
                                    color: getTextColor(getElementColor(nextYearInfo.earthlyBranch)),
                                }}
                            >
                                {nextYearInfo.earthlyBranch}
                            </td>
                        </tr>
                        <tr>
                            <td>{currentFortune} 운</td>
                            <td>{nextFortune} 운</td>
                        </tr>
                        <tr>
                            <td>
                                <span className="fortune-tags">
                                    {gender === "FEMALE" ? femaleFortuneTags[currentYearFortune] : maleFortuneTags[currentYearFortune]}
                                </span>
                            </td>
                            <td>
                                <span className="fortune-tags">
                                    {gender === "FEMALE" ? femaleFortuneTags[nextYearFortune] : maleFortuneTags[nextYearFortune]}
                                </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className="report40-footer">
                <p>
                    운의 흐름을 활용하면 {currentYear}년과 {nextYear}년을 더 의미 있는 시간으로 계획할 수 있습니다.
                </p>
            </footer>
        </div>
    );
};

export default SajuReport40;
