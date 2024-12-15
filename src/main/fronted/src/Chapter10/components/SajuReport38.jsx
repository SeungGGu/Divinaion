import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useSaju} from '../../context/SajuContext';
import '../css/SajuReport38.css';

const animalImages = {
    축: {name: "소띠", image: `${process.env.PUBLIC_URL}/images/12ganji/cow.png`, baseYear: 2009, description: "소띠의 사람은 안정적이고 실질적인 도움을 줍니다."},
    미: {name: "양띠", image: `${process.env.PUBLIC_URL}/images/12ganji/sheep.png`, baseYear: 2015, description: "양띠의 사람은 도전과 용기로 새로운 기회를 만듭니다."},
    자: {name: "쥐띠", image: `${process.env.PUBLIC_URL}/images/12ganji/rat.png`, baseYear: 2020, description: ""},
    신: {name: "원숭이띠", image: `${process.env.PUBLIC_URL}/images/12ganji/monkey.png`, baseYear: 2016, description: ""},
    유: {name: "닭띠", image: `${process.env.PUBLIC_URL}/images/12ganji/chicken.png`, baseYear: 2017, description: ""},
    해: {name: "돼지띠", image: `${process.env.PUBLIC_URL}/images/12ganji/pig.png`, baseYear: 2019, description: ""},
    묘: {name: "토끼띠", image: `${process.env.PUBLIC_URL}/images/12ganji/rabbit.png`, baseYear: 2023, description: ""},
    사: {name: "뱀띠", image: `${process.env.PUBLIC_URL}/images/12ganji/snake.png`, baseYear: 2013, description: ""},
    인: {name: "호랑이띠", image: `${process.env.PUBLIC_URL}/images/12ganji/tiger.png`, baseYear: 2022, description: ""},
    오: {name: "말띠", image: `${process.env.PUBLIC_URL}/images/12ganji/horse.png`, baseYear: 2014, description: ""},
    진: {name: "용띠", image: `${process.env.PUBLIC_URL}/images/12ganji/dragon.png`, baseYear: 2012, description: ""},
    술: {name: "개띠", image: `${process.env.PUBLIC_URL}/images/12ganji/dog.png`, baseYear: 2018, description: ""},
};

// 연도 계산 함수
const getYearsForAnimal = (baseYear) => {
    const currentYear = new Date().getFullYear(); // 현재 연도 구하기
    const years = [];
    let count = 0;

    // 현재 연도가 해당 baseYear와 같은지 확인
    if (currentYear % 12 === baseYear % 12) {
        years.push(currentYear); // 현재 연도가 해당 띠이면 추가
        count++; // 배열에 추가된 개수 카운트
    }

    // 다음 연도 계산 (최대 1개)
    let nextYear = baseYear;
    while (nextYear <= currentYear) {
        nextYear += 12;
    }
    years.push(nextYear);
    count++;

    // 이전 연도 계산 (최대 5개 - count만큼)
    let previousYear = baseYear;
    while (previousYear < currentYear) {
        previousYear += 12;
    }
    previousYear -= 12; // 가장 가까운 이전 연도로 이동

    while (count < 6) { // 6개가 될 때까지 이전 연도 추가
        years.unshift(previousYear); // 앞에 추가
        previousYear -= 12;
        count++;
    }

    return years.sort((a, b) => a - b); // 오름차순 정렬
};


const SajuReport38 = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {benefactors} = state || {};
    const {name} = useSaju().sajuData;

    if (!benefactors) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    const handleNextPage = () => {
        navigate('/Report39');
    };

    return (
        <div className="report38-container">
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report38-title">28. {name}님의 후천적 귀인, 사주로 찾아드립니다</h1>
            <p className="report38-description">
                {name}님의 후천적 귀인을 확인하세요. <br/>
                {name}님의 귀인은{' '}
                {benefactors
                    .map((benefactor) => animalImages[benefactor]?.name || "알 수 없음")
                    .join("와 ")}의 사람들입니다. <br/>
                중요한 순간에 도움을 줄 특별한 인연입니다.
            </p>
            <div className="report38-animals">
                {benefactors.map((benefactor, index) => {
                    const animalData = animalImages[benefactor];
                    const years = getYearsForAnimal(animalData?.baseYear);

                    return (
                        <div key={index} className="animal-box">
                            {/* 사진과 테이블 */}
                            <div className="animal-content">
                                <div className="animal-image-container">
                                    <img
                                        src={animalData?.image || `${process.env.PUBLIC_URL}/images/placeholder.png`}
                                        alt={animalData?.name || "알 수 없음"}
                                        className="animal-image"
                                    />
                                </div>
                                <div className="animal-info">
                                    <table className="year-table">
                                        <thead>
                                        <tr>
                                            <th>{animalData?.name} 출생 년도</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {years.map((year, idx) => (
                                            <tr key={idx}>
                                                <td>{year}년생</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* 설명 박스 */}
                            <div className="animal-description-box">
                                <p>{animalData?.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <footer className="report38-footer">
                <p>후천적 귀인을 만나면 새로운 기회를 열고 인생의 방향을 전환할 수 있습니다.</p>
            </footer>
        </div>
    );
};

export default SajuReport38;
