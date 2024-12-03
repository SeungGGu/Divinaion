import React from "react";
import { useSaju } from "../../context/SajuContext";
import "../css/SajuReport40.css";

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

const getElementColor = (hanja) => fiveElementColorMap[hanjaToElementMap[hanja]] || "#fff";
const getTextColor = (bgColor) => (bgColor === "black" ? "white" : "black");

// 십신 계산 함수
const calculateRelationship = (dayElement, dayYinYang, branchElement, branchYinYang) => {
    if (dayElement === branchElement) {
        return dayYinYang === branchYinYang ? "비견" : "겁재";
    }

    const relations = {
        wood: { produces: "fire", controls: "earth", supportedBy: "water" },
        fire: { produces: "earth", controls: "metal", supportedBy: "wood" },
        earth: { produces: "metal", controls: "water", supportedBy: "fire" },
        metal: { produces: "water", controls: "wood", supportedBy: "earth" },
        water: { produces: "wood", controls: "fire", supportedBy: "metal" },
    };

    const relation = relations[dayElement];
    if (relation.produces === branchElement) {
        return dayYinYang === branchYinYang ? "식신" : "상관";
    }
    if (relation.controls === branchElement) {
        return dayYinYang === branchYinYang ? "편재" : "정재";
    }
    if (relation.supportedBy === branchElement) {
        return dayYinYang === branchYinYang ? "편인" : "정인";
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
    const { sajuData } = useSaju();
    const { name, result } = sajuData || {};

    if (!result) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;

    const currentYearInfo = calculateYearInfo(currentYear);
    const nextYearInfo = calculateYearInfo(nextYear);

    const currentFortune = getYearlyFortune(result.daySky, currentYearInfo.earthlyBranch);
    const nextFortune = getYearlyFortune(result.daySky, nextYearInfo.earthlyBranch);

    return (
        <div className="report40-container">
            <h1 className="report40-title">{name}님의 운세로 미래 계획을 구체화하세요</h1>
            <p className="report40-subtitle">
                운세 흐름을 분석하여 구체적인 목표와 방향을 설정해보세요!
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
                        </tbody>
                    </table>
                </div>

                <div className="year-table-container">
                    <table className="year-table">
                        <thead>
                        <tr>
                            <th>올해</th>
                            <th>내년</th>
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
                            <td>{currentFortune}</td>
                            <td>{nextFortune}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className="report40-footer">
                <p>운세가 열어주는 기회를 포착하고, 성공을 위한 계획을 구체화하세요!</p>
                <button
                    className="report40-next-button"
                    onClick={() => console.log("다음 페이지로 이동")}
                >
                    다음 페이지로 이동
                </button>
            </footer>
        </div>
    );
};

export default SajuReport40;
