import React, { useState } from 'react';
import axios from 'axios';
import '../css/SajuCalculator.css';

const SajuCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [birthTime, setBirthTime] = useState('');
    const [result, setResult] = useState(null);  // 결과를 객체로 받기 위해 null로 설정

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/saju/calculate', {
                birthDate,
                birthTime
            });

            setResult(response.data);  // API 응답 결과를 상태에 저장
        } catch (error) {
            console.error('Error calculating saju:', error);
        }
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
                                <th>천간</th>
                                <td>{result.timeGan}</td>
                                <td>{result.dayGan}</td>
                                <td>{result.monthGan}</td>
                                <td>{result.yearGan}</td>
                            </tr>
                            <tr>
                                <th>지지</th>
                                <td>{result.timeJi}</td>
                                <td>{result.dayJi}</td>
                                <td>{result.monthJi}</td>
                                <td>{result.yearJi}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SajuCalculator;
