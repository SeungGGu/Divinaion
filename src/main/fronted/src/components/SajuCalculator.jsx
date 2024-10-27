import React, {useState} from 'react';
import axios from 'axios';
import '../css/SajuCalculator.css';

//오행 색상 매핑
const fiveElementColorMap = {
    wood: '#89b798',  // green for 목(木)
    fire: '#e57373',   // red for 화(火)
    earth: '#f0d58c',  // yellow for 토(土)
    metal: '#c0c0c0',  // silver for 금(金)
    water: 'black'   // blue for 수(水)
};

//한자 천간 및 지지에 따른 오행 매핑
const hanjaToElementMap = {
    // 천간 오행
    "甲": "wood", "乙": "wood",
    "丙": "fire", "丁": "fire",
    "戊": "earth", "己": "earth",
    "庚": "metal", "辛": "metal",
    "壬": "water", "癸": "water",

    // 지지 오행
    "寅": "wood", "卯": "wood",
    "巳": "fire", "午": "fire",
    "辰": "earth", "未": "earth", "戌": "earth", "丑": "earth",
    "申": "metal", "酉": "metal",
    "亥": "water", "子": "water"
};


// 한자 -> 한글 매핑 테이블
const hanjaToKoreanMap = {
    // 천간 매핑
    "甲": "갑", "乙": "을", "丙": "병", "丁": "정", "戊": "무",
    "己": "기", "庚": "경", "辛": "신", "壬": "임", "癸": "계",

    // 지지 매핑
    "子": "자", "丑": "축", "寅": "인", "卯": "묘", "辰": "진",
    "巳": "사", "午": "오", "未": "미", "申": "신", "酉": "유",
    "戌": "술", "亥": "해"
};

const SajuCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [birthTime, setBirthTime] = useState('');
    const [birthdayType, setBirthdayType] = useState('SOLAR'); // 양력/음력 여부
    const [gender, setGender] = useState('MALE'); // 성별
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hours = parseInt(birthTime.slice(0, 2), 10);
        const minutes = parseInt(birthTime.slice(3, 5), 10);

        console.log(birthDate);

        if (hours < 0 || hours > 24) {
            alert('시간은 00에서 24 사이여야 합니다.');
            return;
        }

        if (minutes < 0 || minutes >= 60) {
            alert('분은 00에서 59 사이여야 합니다.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/saju/calculate', {
                birthDate,
                birthTime,
                birthdayType,
                gender
            });
            setResult(response.data.data); // result 객체의 'data' 필드를 사용
        } catch (error) {
            console.error('Error calculating saju:', error);
        }
    };

    //숫자 0000 00:00 변환 함수
    const handleTimeChange = (e) => {
        let input = e.target.value.replace(/[^0-9]/g, ''); // 숫자 이외의 값은 제거
        if (input.length === 4) {
            const hours = input.slice(0, 2);
            const minutes = input.slice(2, 4);
            setBirthTime(`${hours}:${minutes}`);
        } else {
            setBirthTime(input); // 4자리가 아닐 때는 그대로 입력된 값을 유지
        }
    };

    //숫자 00000000 0000/00/00 변환 함수
    const handleDateChange = (e) => {
        let input = e.target.value.replace(/[^0-9]/g, ''); // 숫자 이외의 값 제거
        if (input.length > 8) input = input.slice(0, 8); // 최대 8자리로 제한

        if (input.length === 8) {
            const year = input.slice(0, 4);
            const month = input.slice(4, 6);
            const day = input.slice(6, 8);

            // 날짜 유효성 검사 (YYYY/MM/DD 형식)
            if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12 || parseInt(day, 10) < 1 || parseInt(day, 10) > 31) {
                alert("날짜 형식이 잘못되었습니다. 올바른 생년월일을 yyyy/dd/mm 형식으로 입력해 주세요.");
                setBirthDate("");
            } else {
                setBirthDate(`${year}/${month}/${day}`);
            }
        } else {
            setBirthDate(input); // 8자리가 아닐 때는 그대로 입력된 값을 유지
        }
    };

    // 한자 -> 한글 변환 함수
    const convertToKorean = (hanja) => {
        return hanjaToKoreanMap[hanja] || hanja; // 매핑된 한글 반환, 없으면 그대로 한자 반환
    };

    // 오행에 따른 색상 반환
    const getElementColor = (hanja) => {
        const element = hanjaToElementMap[hanja];  // 해당 한자가 어떤 오행인지 찾기
        return fiveElementColorMap[element] || "transparent";  // 매핑된 색상 반환, 없으면 투명
    };

// 배경색에 따라 텍스트 색상을 동적으로 설정하는 함수
    const getTextColor = (backgroundColor) => {
        if (backgroundColor === 'black') {
            return 'white';  // 배경이 파란색이면 글자색을 하얀색으로
        }
        return 'black';  // 그 외의 경우 기본 검정색 글자
    };

    return (
        <div className="saju-container">
            <h1>사주팔자 계산기</h1>
            <form className="saju-form" onSubmit={handleSubmit}>
                {/* 이름 입력란 */}
                <label className="input-label">이름:</label>
                <input
                    className="input-field"
                    type="text"
                    placeholder="최대 12글자 이내로 입력하세요"
                    maxLength="12"
                    required
                />

                {/* 성별 선택 */}
                <label className="input-label">성별:</label>
                <div className="gender-select">
                    <button
                        type="button"
                        className={`gender-button ${gender === 'MALE' ? 'active' : ''}`}
                        onClick={() => setGender('MALE')}
                    >
                        남자
                    </button>
                    <button
                        type="button"
                        className={`gender-button ${gender === 'FEMALE' ? 'active' : ''}`}
                        onClick={() => setGender('FEMALE')}
                    >
                        여자
                    </button>
                </div>

                {/* 생년월일 입력 */}
                <label className="input-label">생년월일시:</label>
                <div className="date-time-container">
                    <select className="input-field" value={birthdayType}
                            onChange={(e) => setBirthdayType(e.target.value)}>
                        <option value="SOLAR">양력</option>
                        <option value="LUNAR">음력</option>
                    </select>
                    <input
                        className="input-field"
                        type="text"
                        placeholder="0000/00/00"
                        value={birthDate}
                        onChange={handleDateChange}
                        maxLength={8}
                        required
                    />
                    <input
                        className="input-field"
                        type="text"
                        placeholder="00:00"
                        value={birthTime}
                        onChange={handleTimeChange}
                        maxLength={4} // 4자리 숫자로 제한
                        required
                    />
                </div>

                {/* 사주 계산하기 버튼 */}
                <button className="submit-button" type="submit">사주 계산하기</button>
            </form>

            {result && (
                <div className="saju-result">
                    <h2>계산 결과:</h2>
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
                            <th>천간 (한글)</th>
                            <td>{convertToKorean(result.timeSky)}</td>
                            <td>{convertToKorean(result.daySky)}</td>
                            <td>{convertToKorean(result.monthSky)}</td>
                            <td>{convertToKorean(result.yearSky)}</td>
                        </tr>
                        <tr>
                            <th>천간 (한자)</th>
                            <td
                                className="saju-cell"
                                style={{
                                    backgroundColor: getElementColor(result.timeSky),
                                    color: getTextColor(getElementColor(result.timeSky))
                                }}>
                                {result.timeSky}
                            </td>
                            <td
                                className="saju-cell"
                                style={{
                                    backgroundColor: getElementColor(result.daySky),
                                    color: getTextColor(getElementColor(result.daySky))
                                }}>
                                {result.daySky}
                            </td>
                            <td
                                className="saju-cell"
                                style={{
                                    backgroundColor: getElementColor(result.monthSky),
                                    color: getTextColor(getElementColor(result.monthSky))
                                }}>
                                {result.monthSky}
                            </td>
                            <td
                                className="saju-cell"
                                style={{
                                    backgroundColor: getElementColor(result.yearSky),
                                    color: getTextColor(getElementColor(result.yearSky))
                                }}>
                                {result.yearSky}
                            </td>
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
                            <td
                                className="saju-cell"
                                style={{
                                    backgroundColor: getElementColor(result.timeGround),
                                    color: getTextColor(getElementColor(result.timeGround))
                                }}>
                                {result.timeGround}
                            </td>
                            <td
                                className="saju-cell"
                                style={{
                                    backgroundColor: getElementColor(result.dayGround),
                                    color: getTextColor(getElementColor(result.dayGround))
                                }}>
                                {result.dayGround}
                            </td>
                            <td
                                className="saju-cell"
                                style={{
                                    backgroundColor: getElementColor(result.monthGround),
                                    color: getTextColor(getElementColor(result.monthGround))
                                }}>
                                {result.monthGround}
                            </td>
                            <td
                                className="saju-cell"
                                style={{
                                    backgroundColor: getElementColor(result.yearGround),
                                    color: getTextColor(getElementColor(result.yearGround))
                                }}>
                                {result.yearGround}
                            </td>
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
            )}
        </div>
    );
};

export default SajuCalculator;
