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
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report36-title">
                {name}님의 삶에 빛이 되는 귀인을 찾아드립니다
            </h1>
            <p className="report36-subtitle">
                귀인을 통해 삶의 중요한 순간에 새로운 가능성을 찾아보세요!
            </p>

            <div className="report36-content">
                {/* 이미지 */}
                <div className="report36-image-container">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/benefactor.png`}
                        alt="귀인의 긍정적인 변화"
                        className="report36-main-image"
                    />
                </div>

                {/* 오른쪽 설명 박스 */}
                <div className="report36-text-box">
                    <p className="text-line">
                        <strong>타고난 귀인과 후천적 귀인을 이해하고 활용하세요!</strong>
                    </p>
                    <p className="text-line">
                        타고난 귀인은 <span className="highlight">사주에서 타고난 사람</span>
                    </p>
                    <p className="text-line">
                        후천적 귀인은 <span className="highlight">상황과 만남을 통해 찾아오는 사람입니다</span>
                    </p>
                </div>
            </div>

            <footer className="report36-footer">
                <p>귀인을 만나면 삶의 전환점을 만들고 원하는 목표를 이룰 수 있습니다</p>
            </footer>
        </div>
    );
};

export default SajuReport36;
