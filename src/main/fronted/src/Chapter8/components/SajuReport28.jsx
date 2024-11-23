import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport28.css';
import {useSaju} from "../../context/SajuContext";

const SajuReport28 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData || {};
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate('/Report29'); // 다음 페이지로 이동
    };

    return (
        <div className="report28-container">
            <h1 className="report28-title">음양오행으로 {name}님의 성장 잠재력을 발견하세요</h1>
            <p className="report28-subtitle">
                {name}님의 음양오행을 이해하고 성장의 기회를 찾아보세요.
            </p>

            <div className="report28-image-container">
                <img
                    src={`${process.env.PUBLIC_URL}/images/horse.png`}
                    alt="음양오행 이미지"
                    className="report28-main-image"
                />
            </div>

            <div className="report28-analysis-container">
                <h2 className="report28-analysis-title">박승빈님의 음양오행 분석</h2>
                <ul className="report28-traits-list">
                    <li>
                        <strong>1. 불(火)의 기운이 많다면:</strong>
                        열정적이며 추진력이 강한 성격을 가졌습니다.
                    </li>
                    <li>
                        <strong>2. 수(水)의 기운이 많다면:</strong>
                        감정이 풍부하고 직관력이 뛰어납니다.
                    </li>
                </ul>
                <p className="report28-question">
                    {name}님은 어떤 성향을 가지고 있을까요?
                </p>
                <footer className="report28-footer">
                    {name}님의 음양오행 에너지를 조화롭게 활용해 성장을 이끌어보세요!
                </footer>
            </div>
            <button className="report28-next-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport28;
