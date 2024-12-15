import React from 'react';
import {useSaju} from '../../context/SajuContext';
import '../css/SajuReport37.css';
import {useNavigate} from "react-router-dom";

const SajuReport37 = () => {
    const {sajuData} = useSaju();
    const {name, result} = sajuData || {};
    const navigate = useNavigate();

    if (!result) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 출생 시간, 일, 월, 년 데이터 추출
    const birthTime = sajuData.birthTime; // "20:50"
    const birthDate = sajuData.birthDate.split('/'); // ["2000", "03", "21"]
    const birthYear = birthDate[0];
    const birthMonth = birthDate[1];
    const birthDay = birthDate[2];

    // 귀인 맵 정의
    const benefactorMap = {
        "甲": ["축", "미"],
        "乙": ["자", "신"],
        "丙": ["유", "해"],
        "丁": ["유", "해"],
        "戊": ["축", "미"],
        "己": ["자", "신"],
        "庚": ["축", "미"],
        "辛": ["인", "오"],
        "壬": ["묘", "사"],
        "癸": ["묘", "사"],
    };

    const benefactors = benefactorMap[result.daySky] || ["없음", "없음"];

    // 오행 색상 매핑
    const fiveElementColorMap = {
        wood: "#b3d9a5", // 연한 초록색
        fire: "#f4a89a", // 연한 빨간색
        earth: "#f5d0a9", // 연한 주황색
        metal: "#d3d3d3", // 연한 회색
        water: "black", // 연한 파란색
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

    const skyElements = [
        {label: "시", value: result.timeSky},
        {label: "일", value: result.daySky},
        {label: "월", value: result.monthSky},
        {label: "년", value: result.yearSky},
    ];

    const groundElements = [
        {label: "시", value: result.timeGround},
        {label: "일", value: result.dayGround},
        {label: "월", value: result.monthGround},
        {label: "년", value: result.yearGround},
    ];

    const hasBenefactor = benefactors.some((benefactor) =>
        groundElements.includes(benefactor)
    );

    const handleNextPage = () => {
        navigate('/Report38', {state: {benefactors}}); // 다음 페이지로 이동
    };

    return (
        <div className="report37-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report37-title">27. {name}님의 타고난 귀인, 사주로 분석합니다</h1>
            <p className="report37-description">
                귀인을 통해 삶의 방향을 찾고 중요한 기회를 만들어보세요!
            </p>

            <div className="report37-content">
                {/* 첫 번째 표 */}
                <div className="report37-table">
                    <table className="benefactor-table">
                        <thead>
                        <tr>
                            <th colSpan="4">{name}님의 사주팔자 귀인 에너지 분석</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>{birthTime}</th>
                            <th>{birthDay}일</th>
                            <th>{birthMonth}월</th>
                            <th>{birthYear}년</th>
                        </tr>
                        <tr>
                            {skyElements.map((element, index) => (
                                <td
                                    key={index}
                                    style={{
                                        backgroundColor: getElementColor(element.value),
                                        color: getTextColor(element.value),
                                        fontWeight: "bold",
                                    }}
                                >
                                    {element.value}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            {groundElements.map((element, index) => (
                                <td
                                    key={index}
                                    style={{
                                        backgroundColor: getElementColor(element.value),
                                        color: getTextColor(element.value),
                                        fontWeight: "bold",
                                    }}
                                >
                                    {element.value}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            {/* 귀인 에너지 유무 표시 */}
                            <td colSpan={4} style={{fontWeight: "bold", color: "#f0c674"}}>
                                {hasBenefactor ? "귀인 에너지가 있습니다" : "귀인 에너지가 없습니다"}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 두 번째 표 */}
                <div className="report37-table">
                    <table className="benefactor-status-table">
                        <thead>
                        <tr>
                            <th colSpan="3">
                                {name}님의 타고난 귀인 찾기<br/>
                                {name}님에게 해당하는 귀인은&nbsp;
                                <span style={{fontWeight: 'bold', color: '#f0c674', fontSize: '1.2rem'}}>
                                    {benefactors[0]}
                                </span>
                                과&nbsp;
                                <span style={{fontWeight: 'bold', color: '#f0c674', fontSize: '1.2rem'}}>
                                    {benefactors[1]}
                                </span>
                                입니다.<br/>
                                어려운 순간에 든든한 지원을 제공할 수 있어요
                            </th>

                        </tr>
                        <tr>
                            <th>{benefactors[0]}</th>
                            <th>귀인<br/>에너지</th>
                            <th>{benefactors[1]}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td colSpan={3}>
                                귀인은 중요한 순간에 결정을 도와주고<br/>
                                새로운 기회를 열어줍니다
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    {hasBenefactor
                        ? "귀인의 도움으로 새로운 기회를 발견하고 도전에 성공할 가능성이 높습니다."
                        : "귀인이 없을 때는 내 주변의 사람들과 협력하여 기회를 찾을 수 있습니다."}
                </p>
            </div>
        </div>
    );
};

export default SajuReport37;
