import React from "react";
import { useSaju } from "../../context/SajuContext";
import "../css/SajuReport39.css";
import {useNavigate} from "react-router-dom";

const SajuReport39 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name } = sajuData || {};

    const handleNextPage = () => {
        navigate('/Report40'); // 다음 페이지로 이동
    };

    return (
        <div className="report39-container">
            <h1 className="report39-title">{name}님의 운세를 통해 미래 계획을 세워보세요</h1>
            <p className="report39-subtitle">운세 분석을 바탕으로 올바른 결정을 준비하세요!</p>

            <div className="report39-image-section">
                <div className="image-container">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/signpost.png`}
                        alt="이정표"
                        className="main-image"
                    />
                </div>
            </div>

            <footer className="report39-footer">
                <p>운세의 흐름을 읽고, {name}님의 목표에 맞춘 전략을 세워보세요!</p>

                <button className="next-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </footer>
        </div>
    );
};

export default SajuReport39;
