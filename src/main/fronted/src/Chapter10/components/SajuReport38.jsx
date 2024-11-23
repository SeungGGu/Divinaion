import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport38.css';

const animalImages = {
    축: { name: "소띠", image: `${process.env.PUBLIC_URL}/images/cow.png` },
    미: { name: "양띠", image: `${process.env.PUBLIC_URL}/images/sheep.png` },
    자: { name: "쥐띠", image: `${process.env.PUBLIC_URL}/images/rat.png` },
    신: { name: "원숭이띠", image: `${process.env.PUBLIC_URL}/images/monkey.png` },
    유: { name: "닭띠", image: `${process.env.PUBLIC_URL}/images/chicken.png` },
    해: { name: "돼지띠", image: `${process.env.PUBLIC_URL}/images/pig.png` },
    묘: { name: "토끼띠", image: `${process.env.PUBLIC_URL}/images/rabbit.png` },
    사: { name: "뱀띠", image: `${process.env.PUBLIC_URL}/images/snake.png` },
    인: { name: "호랑이띠", image: `${process.env.PUBLIC_URL}/images/tiger.png` },
    오: { name: "말띠", image: `${process.env.PUBLIC_URL}/images/horse.png` },
    진: { name: "용띠", image: `${process.env.PUBLIC_URL}/images/dragon.png` },
    술: { name: "개띠", image: `${process.env.PUBLIC_URL}/images/dog.png` },
};

const SajuReport38 = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { benefactors } = state || {};
    const { name } = useSaju().sajuData;

    if (!benefactors) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    const handleNextPage = () => {
        navigate('/Report39'); // 다음 페이지로 이동
    };

    return (
        <div className="report38-container">
            <h1 className="report38-title">
                {name}님의 귀인의 도움으로 중요한 인생 순간을 이끌어 보세요
            </h1>
            <p className="report38-description">
                사주에 따르면, {name}님의 귀인은{" "}
                {benefactors
                    .map((benefactor) => animalImages[benefactor]?.name || "알 수 없음")
                    .join("와 ")}의 사람들입니다.<br/>
                이들과의 연결이 {name}님의 중요한 순간에 힘이 될 거예요.
            </p>
            <div className="report38-animals">
                {benefactors.map((benefactor, index) => (
                    <div key={index} className="animal-box">
                        <img
                            src={animalImages[benefactor]?.image || `${process.env.PUBLIC_URL}/images/placeholder.png`}
                            alt={animalImages[benefactor]?.name || "알 수 없음"}
                            className="animal-image"
                        />
                        <p className="animal-name">
                            {animalImages[benefactor]?.name || "알 수 없음"}
                        </p>
                    </div>
                ))}
            </div>
            <footer className="report38-footer">
                <p>귀인의 도움을 받아 {name}님의 중요한 순간을 성공으로 이끌어주세요</p>
            </footer>

            <button className="report37-next-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport38;
