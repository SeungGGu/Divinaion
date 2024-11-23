import React from 'react';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport37.css';
import {useNavigate} from "react-router-dom";

const SajuReport37 = () => {
    const { sajuData } = useSaju();
    const { name, result } = sajuData || {};
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
        { label: "시", value: result.timeSky },
        { label: "일", value: result.daySky },
        { label: "월", value: result.monthSky },
        { label: "년", value: result.yearSky },
    ];

    const groundElements = [
        { label: "시", value: result.timeGround },
        { label: "일", value: result.dayGround },
        { label: "월", value: result.monthGround },
        { label: "년", value: result.yearGround },
    ];

    const benefactorStatus = benefactors.map((benefactor) =>
        groundElements.some((element) => element.value === benefactor) ? "있어요" : "없어요"
    );

    const handleNextPage = () => {
        navigate('/Report38', { state: { benefactors } }); // 다음 페이지로 이동
    };

    return (
        <div className="report37-container">
            <h1 className="report37-title">{name}님의 사주에서 귀인 에너지를 찾아보세요</h1>
            <p className="report37-description">
                {name}님의 사주에서 귀인의 힘을 발견하고 기회를 만드세요.<br/>
                해당하는 귀인은 <strong>{benefactors[0]}</strong>과 <strong>{benefactors[1]}</strong>입니다.
                귀인이 있는지 확인해보세요!
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
                            <th>{`${result.timeSky}${result.timeGround} 시`}</th>
                            <th>{`${result.daySky}${result.dayGround} 일`}</th>
                            <th>{`${result.monthSky}${result.monthGround} 월`}</th>
                            <th>{`${result.yearSky}${result.yearGround} 년`}</th>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 두 번째 표 */}
                <div className="report37-table">
                    <table className="benefactor-status-table">
                        <thead>
                        <tr>
                            <th colSpan="2">귀인</th>
                        </tr>
                        <tr>
                            <th>{benefactors[0]}</th>
                            <th>{benefactors[1]}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {benefactorStatus.map((status, index) => (
                                <td key={index}>{status}</td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <button className="report37-next-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport37;
