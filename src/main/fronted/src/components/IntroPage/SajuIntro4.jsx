import React from 'react';
import { useSaju } from '../../context/SajuContext';
import '../../css/SajuIntro4.css';
import {useNavigate} from "react-router-dom";

const SajuIntro4 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
        // sajuData가 없으면 로딩 중 메시지 표시
    if (!sajuData) {
        return <p>사주 데이터를 불러오는 중입니다...</p>;
    }

    function nextPageOnClick() {
        navigate('/Report1'); // 다음 페이지의 경로로 이동
    }

    const { name } = sajuData;

    return (
        <div className="report-page-container">
            <h1>사주로 보는 {name}님의 성향과 대인관계</h1>
            <p>{name}님의 내면과 대인관계에서 강점을 발견해 보세요</p>

            <div className="relationship-chart">
                <div className="relation-item" style={{backgroundColor: '#a28ec3'}}>강점</div>
                <div className="relation-item" style={{backgroundColor: '#f0b96e'}}>성격</div>
                <div className="relation-item" style={{backgroundColor: '#4271c2'}}>약점</div>
                <div className="relation-item" style={{backgroundColor: '#2f4a6f'}}>적성</div>
                <div className="relation-item" style={{backgroundColor: '#2f4a6f'}}>대인관계</div>
                <div className="relation-item" style={{backgroundColor: '#1d3557'}}>직업</div>
            </div>

            <p className="info-text">
                {name}님의 강점을 살려 대인관계를 더 원활하게 만들어 보세요!
            </p>
            <button className="next-button" onClick={nextPageOnClick}>다음 페이지로</button>
        </div>
    );
};

export default SajuIntro4;
