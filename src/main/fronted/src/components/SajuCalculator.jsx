import React, { useState } from 'react';
import axios from 'axios';
import '../css/SajuCalculator.css';

const SajuCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [birthTime, setBirthTime] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/saju/calculate', {
                birthDate,
                birthTime
            });

            setResult(response.data);
        } catch (error) {
            console.error('Error calculating saju:', error);
        }
    };

    return (
        <div>
            <h1>사주팔자 계산기</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    생년월일:
                    <input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    출생 시간:
                    <input
                        type="time"
                        value={birthTime}
                        onChange={(e) => setBirthTime(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">사주 계산하기</button>
            </form>

            {result && (
                <div>
                    <h2>계산 결과:</h2>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default SajuCalculator;
