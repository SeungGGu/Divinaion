import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport36.css';

const SajuReport36 = () => {
    const { sajuData } = useSaju(); // Context에서 이름 데이터를 가져옴
    const { name } = sajuData || {};
    const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트 훅

    const handleNextPage = () => {
        navigate('/Report37'); // 다음 페이지로 이동
    };

    return (
        <div className="report36-container">
            <h1 className="report36-title">
                {name}님의 귀인으로 긍정적인 변화를 만들어 보세요
            </h1>
            <p className="report36-subtitle">
                {name}님의 인생에서 귀인이 주는 긍정적인 변화를 확인해 보세요
            </p>

            <div className="report36-image-container">
                <img
                    src={`${process.env.PUBLIC_URL}/images/benefactor.png`}
                    alt="귀인의 긍정적인 변화"
                    className="report36-main-image"
                />
            </div>

            <footer className="report36-footer">
                <p>귀인은 {name}님의 인생에서 중요한 변화를 이끄는 힘이 될 것입니다</p>
                <button className="report36-next-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </footer>
        </div>
    );
};

export default SajuReport36;
