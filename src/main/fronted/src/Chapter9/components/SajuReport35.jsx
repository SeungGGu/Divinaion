import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/SajuReport35.css';
import { useSaju } from "../../context/SajuContext";

const SajuReport35 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData || {};
    const location = useLocation();
    const { state } = location || {};
    const { sinsalPercentages } = state || {};
    const navigate = useNavigate();

    if (!sinsalPercentages) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 신살별 고정된 이미지 경로와 설명 데이터
    const sinsalData = {
        역마살: {
            image: `${process.env.PUBLIC_URL}/images/sinsal/horse.png`,
            description: "변화를 즐기고 도전을 통해 성장하는 성격이에요\n여행, 무역, 창업 등 활동적인 분야에서 잘 어울려요",
        },
        도화살: {
            image: `${process.env.PUBLIC_URL}/images/sinsal/peacock.png`,
            description: "타인의 관심을 얻거나 신뢰를 쌓는 데 어려움이 있어요\n대인관계에서 매력을 발휘하기 힘들 수 있어요",
        },
        화개살: {
            image: `${process.env.PUBLIC_URL}/images/sinsal/turtle.png`,
            description: "깊은 사고와 창의적인 아이디어가 돋보여요\n예술, 철학, 교육 분야에서 두각을 나타낼 수 있어요",
        },
    };

    // 비율을 개수로 변환하는 함수
    const calculateCount = (percentage) => Math.round(percentage / 25);

    // 개수에 따른 메시지 반환
    const getMessage = (count) => {
        if (count === 0) return '약해요';
        if (count === 1) return '좋아요';
        if (count >= 2) return '강해요';
        return '';
    };

    const handleNextPage = () => {
        navigate('/Report36');
    };

    return (
        <div className="report35-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">26. {name}님의 매력과 진로, 신살로 알려드립니다</h1>
            <p className="report-subtitle">
                신살 에너지를 활용해 진로의 방향과 가능성을 찾아보세요!
            </p>

            <table className="sinsal-table">
                <thead>
                <tr>
                    <th colSpan="3">신살을 활용해 매력과 진로를 연결하세요</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(sinsalData).map(([sinsal, data]) => {
                    const count = calculateCount(sinsalPercentages[sinsal] || 0);
                    return (
                        <tr key={sinsal}>
                            <td>
                                <img
                                    src={data.image}
                                    alt={sinsal}
                                    className="sinsal-percentage-image"
                                />
                            </td>
                            <td>
                                <div>
                                    {sinsal} : {count}개
                                </div>
                                <div className="highlight-message">{getMessage(count)}</div>
                            </td>
                            <td>{data.description}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

            <footer className="report35-footer">
                <p>신살의 에너지를 활용하면 강점을 키우고 약점을 보완할 수 있습니다.</p>
            </footer>
        </div>
    );
};

export default SajuReport35;
