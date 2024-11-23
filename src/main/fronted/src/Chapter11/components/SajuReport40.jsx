import React from "react";
import { useSaju } from "../../context/SajuContext";
import "../css/SajuReport40.css";

// 천간과 지지 매핑
const heavenlyStems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const earthlyBranches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

// 운세 조합 매핑 (120개 작성)
const fortuneCombinationMap = {
    "甲": { "子": "편재 운", "丑": "정재 운", "寅": "비견 운", "卯": "겁재 운", "辰": "편관 운", "巳": "정관 운", "午": "상관 운", "未": "식신 운", "申": "편인 운", "酉": "정인 운", "戌": "편재 운", "亥": "정재 운" },
    "乙": { "子": "비견 운", "丑": "겁재 운", "寅": "편관 운", "卯": "정관 운", "辰": "상관 운", "巳": "식신 운", "午": "편인 운", "未": "정인 운", "申": "편재 운", "酉": "정재 운", "戌": "비견 운", "亥": "겁재 운" },
    "丙": { "子": "정관 운", "丑": "편관 운", "寅": "상관 운", "卯": "식신 운", "辰": "편인 운", "巳": "정인 운", "午": "편재 운", "未": "정재 운", "申": "비견 운", "酉": "겁재 운", "戌": "정관 운", "亥": "편관 운" },
    "丁": { "子": "편관 운", "丑": "정관 운", "寅": "식신 운", "卯": "상관 운", "辰": "정인 운", "巳": "편인 운", "午": "정재 운", "未": "편재 운", "申": "겁재 운", "酉": "비견 운", "戌": "편관 운", "亥": "정관 운" },
    "戊": { "子": "상관 운", "丑": "식신 운", "寅": "편인 운", "卯": "정인 운", "辰": "편재 운", "巳": "정재 운", "午": "비견 운", "未": "겁재 운", "申": "편관 운", "酉": "정관 운", "戌": "상관 운", "亥": "식신 운" },
    "己": { "子": "식신 운", "丑": "상관 운", "寅": "정인 운", "卯": "편인 운", "辰": "정재 운", "巳": "편재 운", "午": "겁재 운", "未": "비견 운", "申": "정관 운", "酉": "편관 운", "戌": "식신 운", "亥": "상관 운" },
    "庚": { "子": "편인 운", "丑": "정인 운", "寅": "편재 운", "卯": "정재 운", "辰": "비견 운", "巳": "겁재 운", "午": "편관 운", "未": "정관 운", "申": "상관 운", "酉": "식신 운", "戌": "편인 운", "亥": "정인 운" },
    "辛": { "子": "정인 운", "丑": "편인 운", "寅": "정재 운", "卯": "편재 운", "辰": "겁재 운", "巳": "비견 운", "午": "정관 운", "未": "편관 운", "申": "식신 운", "酉": "상관 운", "戌": "정인 운", "亥": "편인 운" },
    "壬": { "子": "편관 운", "丑": "정관 운", "寅": "상관 운", "卯": "식신 운", "辰": "편재 운", "巳": "정재 운", "午": "비견 운", "未": "겁재 운", "申": "편인 운", "酉": "정인 운", "戌": "편관 운", "亥": "정관 운" },
    "癸": { "子": "정관 운", "丑": "편관 운", "寅": "식신 운", "卯": "상관 운", "辰": "정재 운", "巳": "편재 운", "午": "겁재 운", "未": "비견 운", "申": "정인 운", "酉": "편인 운", "戌": "정관 운", "亥": "편관 운" },
};

// 오행 색상 매핑
const fiveElementColorMap = {
    wood: "#b3d9a5",
    fire: "#f4a89a",
    earth: "#f5d0a9",
    metal: "#d3d3d3",
    water: "black",
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

const getElementColor = (hanja) =>
    fiveElementColorMap[hanjaToElementMap[hanja]] || "#fff";

const getTextColor = (hanja) =>
    hanjaToElementMap[hanja] === "water" ? "#fff" : "#000";

const calculateYearInfo = (year) => {
    const stemIndex = (year - 4) % 10;
    const branchIndex = (year - 4) % 12;
    return {
        heavenlyStem: heavenlyStems[stemIndex],
        earthlyBranch: earthlyBranches[branchIndex],
    };
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

    const currentFortune =
        fortuneCombinationMap[result.daySky]?.[currentYearInfo.earthlyBranch] || "운세 없음";
    const nextFortune =
        fortuneCombinationMap[result.daySky]?.[nextYearInfo.earthlyBranch] || "운세 없음";

    return (
        <div className="report40-container">
            <h1 className="report40-title">{name}님의 운세로 미래 계획을 구체화하세요</h1>
            <p className="report40-subtitle">
                운세 흐름을 분석하여 구체적인 목표와 방향을 설정해보세요!
            </p>

            <div className="report40-content">
                {/* 첫 번째 표 */}
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
                                        color: getTextColor(result[key]),
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
                                        color: getTextColor(result[key]),
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

                {/* 두 번째 표 */}
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
                                    color: getTextColor(currentYearInfo.heavenlyStem),
                                }}
                            >
                                {currentYearInfo.heavenlyStem}
                            </td>
                            <td
                                style={{
                                    backgroundColor: getElementColor(nextYearInfo.heavenlyStem),
                                    color: getTextColor(nextYearInfo.heavenlyStem),
                                }}
                            >
                                {nextYearInfo.heavenlyStem}
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    backgroundColor: getElementColor(currentYearInfo.earthlyBranch),
                                    color: getTextColor(currentYearInfo.earthlyBranch),
                                }}
                            >
                                {currentYearInfo.earthlyBranch}
                            </td>
                            <td
                                style={{
                                    backgroundColor: getElementColor(nextYearInfo.earthlyBranch),
                                    color: getTextColor(nextYearInfo.earthlyBranch),
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
