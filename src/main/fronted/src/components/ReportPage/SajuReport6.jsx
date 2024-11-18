import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/SajuReport6.css'; // Report6 전용 스타일 시트

const SajuReport6 = () => {
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate('/Report7'); // Report7로 이동
    };

    return (
        <div className="report6-container">
            <div className="report6-header">
                <h1>박승빈님의 적성에 맞는 직업과 직장 생활을 안내</h1>
                <p>박승빈님에게 맞는 직업을 찾아 미래를 준비해 보세요</p>
            </div>
            <div className="report6-image">
                <img
                    src={`${process.env.PUBLIC_URL}/images/professions.png`}
                    alt="적성에 맞는 직업"
                    className="profession-image"
                />
            </div>
            <div className="report6-footer">
                <p>박승빈님의 적성에 맞는 직업으로 즐겁고 보람찬 직장 생활을 시작하세요</p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport6;
