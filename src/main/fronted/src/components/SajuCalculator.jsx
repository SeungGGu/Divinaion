import React, { useState } from 'react';
import axios from 'axios';
import '../css/SajuCalculator.css';

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

    // 한자 -> 한글 변환 함수
    const convertToKorean = (hanja) => {
        return hanjaToKoreanMap[hanja] || hanja; // 매핑된 한글 반환, 없으면 그대로 한자 반환
    };

    return (
        <div className="saju-container">
            <h1>사주팔자 계산기</h1>
            <form className="saju-form" onSubmit={handleSubmit}>
                <label>
                    생년월일:
                    <input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    출생 시간:
                    <input
                        type="time"
                        value={birthTime}
                        onChange={(e) => setBirthTime(e.target.value)}
                        required
                    />
                </label>
                <label>
                    양력/음력:
                    <select value={birthdayType} onChange={(e) => setBirthdayType(e.target.value)}>
                        <option value="SOLAR">양력</option>
                        <option value="LUNAR">음력</option>
                    </select>
                </label>
                <label>
                    성별:
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="MALE">남성</option>
                        <option value="FEMALE">여성</option>
                    </select>
                </label>
                <button type="submit">사주 계산하기</button>
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
                                <td>{result.timeSky}</td>
                                <td>{result.daySky}</td>
                                <td>{result.monthSky}</td>
                                <td>{result.yearSky}</td>
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
                                <td>{result.timeGround}</td>
                                <td>{result.dayGround}</td>
                                <td>{result.monthGround}</td>
                                <td>{result.yearGround}</td>
                            </tr>
                            <tr>
                                <th>관계</th>
                                <td>{result.manseTimeSkyRelation}</td>
                                <td>{result.manseDaySkyRelation}</td>
                                <td>{result.manseMonthSkyRelation}</td>
                                <td>{result.manseYearSkyRelation}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SajuCalculator;
