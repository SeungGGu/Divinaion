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
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report39-title">{name}님, 운의 흐름을 따라 최적의 결정을 내려보세요!</h1>
            <p className="report39-subtitle">운의 흐름을 활용해 올해의 목표와 미래의 방향을 계획하세요!</p>

            <div className="report39-image-section">
                <div className="image-container">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/mainPicture/signpost.png`}
                        alt="이정표"
                        className="main-image"
                    />
                </div>
            </div>

            <footer className="report39-footer">
                <p>운과 흐름을 따르면 성장과 성공을 계획할 수 있습니다.</p>
            </footer>
        </div>
    );
};

export default SajuReport39;
