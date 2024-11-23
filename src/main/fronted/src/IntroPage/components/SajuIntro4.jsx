import React from 'react';
import { useSaju } from '../../context/SajuContext';
import { useNavigate } from "react-router-dom";
import '../css/SajuIntro4.css';

const SajuIntro4 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();

    // sajuData가 없으면 로딩 중 메시지 표시
    if (!sajuData) {
        return <p>사주 데이터를 불러오는 중입니다...</p>;
    }

    function nextPageOnClick() {
        navigate('/Report1');
    }

    const { name } = sajuData;

    return (
        <div className="saju-intro4-container">
            <h1>사주로 보는 {name}님의 성향과 대인관계</h1>
            <p>{name}님의 내면과 대인관계에서 강점을 발견해 보세요</p>

            <div className="saju-intro4-relationship-chart">
                <div className="saju-intro4-relation-item">강점</div>
                <div className="saju-intro4-relation-item">성격</div>
                <div className="saju-intro4-relation-item">약점</div>
                <div className="saju-intro4-relation-item">적성</div>
                <div className="saju-intro4-relation-item">대인관계</div>
                <div className="saju-intro4-relation-item">직업</div>
            </div>

            <p className="saju-intro4-info-text">
                {name}님의 강점을 살려 대인관계를 더 원활하게 만들어 보세요!
            </p>
            <button className="saju-intro4-next-button" onClick={nextPageOnClick}>다음 페이지로</button>
        </div>
    );
};

export default SajuIntro4;
