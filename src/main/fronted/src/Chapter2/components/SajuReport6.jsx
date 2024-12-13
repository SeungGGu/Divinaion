import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport6.css';
import '../../css/nextPageButton.css'
import { useSaju } from "../../context/SajuContext"; // Report6 전용 스타일 시트

const SajuReport6 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name } = sajuData;

    const handleNextPage = () => {
        navigate('/Report7'); // Report7로 이동
    };

    return (
        <div className="report6-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <div className="report6-header">
                <h1>사주로 알아보는 {name}님의 직업</h1>
            </div>
            <div className="report6-content">
                <div className="report6-image">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/professions.png`}
                        alt="적성에 맞는 직업"
                        className="profession-image"
                    />
                </div>
                <div className="report6-description">
                    <p>사주로 당신의 성향과 재능을 알아보세요</p>
                    <p>적성에 맞는 직업 선택은 더 큰 만족을 만듭니다</p>
                    <p>강점을 활용해 성공적인 직장 생활을 시작하세요</p>
                </div>
            </div>
            <div className="report6-footer">
                <p>적성에 맞는 직업을 선택하면 성공적인 직장 생활을 시작할 수 있습니다.</p>
            </div>
        </div>
    );
};

export default SajuReport6;