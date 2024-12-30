import React, {useState} from 'react';
import axios from 'axios';
import {useSaju} from '../../context/SajuContext';
import '../css/SajuCalculator.css';
import {useNavigate} from "react-router-dom";

const SajuCalculator = () => {
    const [name, setName] = useState(''); // 이름 상태 추가
    const [birthDate, setBirthDate] = useState('');
    const [birthTime, setBirthTime] = useState('');
    const [birthdayType, setBirthdayType] = useState('SOLAR'); // 양력/음력 여부
    const [gender, setGender] = useState('MALE'); // 성별
    const {setSajuData} = useSaju();
    const navigate = useNavigate();

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

            // API 응답 전체를 출력
            console.log("API 응답 전체:", response);

            // API 응답 데이터 확인
            if (response.data) {
                console.log("API 응답 데이터:", response.data);

                if (response.data.status === "success") {
                    const calculationResult = response.data.data;

                    // 데이터가 비정상적인 경우 로그로 확인
                    if (!calculationResult) {
                        console.error("API 응답에서 data가 비어 있습니다:", response.data);
                    } else {
                        console.log("Context에 저장할 데이터:", calculationResult);

                        // Context에 저장
                        setSajuData({
                            name,
                            birthDate,
                            birthTime,
                            birthdayType,
                            gender,
                            result: calculationResult
                        });

                        // 다음 페이지로 이동
                        navigate('/Intro1');
                    }
                } else {
                    console.error("API 응답 상태가 success가 아닙니다:", response.data);
                }
            } else {
                console.error("response.data가 없습니다:", response);
            }
        } catch (error) {
            console.error("API 요청 중 오류 발생:", error);
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

    return (
        <div className="saju-container">
            <h1 className="saju-container-h1">사주팔자 계산기</h1>
            <form className="saju-form" onSubmit={handleSubmit}>
                {/* 이름 입력란 */}
                <label className="input-label">이름:</label>
                <input
                    className="input-field"
                    type="text"
                    placeholder="최대 12글자 이내로 입력하세요"
                    maxLength="12"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
        </div>
    );
};

export default SajuCalculator;
