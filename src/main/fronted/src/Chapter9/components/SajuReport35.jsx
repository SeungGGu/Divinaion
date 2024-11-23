import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../css/SajuReport35.css';
import {useSaju} from "../../context/SajuContext";

const SajuReport35 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData;
    const location = useLocation();
    const {state} = location || {};
    const {sinsalPercentages} = state || {};
    const navigate = useNavigate();

    if (!sinsalPercentages) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    const descriptions = {
        역마살: '새로운 사람을 만나고 다양한 경험을 쌓는 것을 좋아합니다. 역마살이 강하면 도전과 변화를 즐기며 성장에 대한 욕구가 큽니다.',
        도화살: '사람들의 관심을 자연스럽게 끌고 매력을 발산하는 성향입니다. 도화살이 있으면 사회적 관계에서 주목받고 인기를 얻기 쉬워요.',
        화개살: '깊이 있는 대화와 철학적 주제를 즐기는 성향이에요. 화개살이 강하면 내면을 탐구하며 삶의 지혜를 추구하는 경향입니다.',
    };

    const handleNextPage = () => {
        navigate('/Report36');
    };

    return (
        <div className="report35-container">
            <h1 className="report-title">세 가지 신살로 보는 {state?.name}님의 성격과 성장 잠재력</h1>
            <p className="report-subtitle">
                신살의 특성을 통해 성장과 가능성을 알아보세요.
            </p>

            <table className="sinsal-table">
                <thead>
                <tr>
                    <th colSpan="3">{name}님의 세 가지 신살로 본 성격과 잠재력</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(sinsalPercentages).map((sinsal) => (
                    <tr key={sinsal}>
                        <td
                            className="sinsal-name"
                            style={{
                                backgroundColor: sinsal === '역마살' ? '#7fa8ff' : sinsal === '도화살' ? '#ff8a8a' : '#8fdb8f',
                                color: '#fff',
                            }}
                        >
                            {sinsal}
                        </td>
                        <td
                            className={`sinsal-percentage ${
                                sinsalPercentages[sinsal] === '0' ? 'highlight' : ''
                            }`}
                        >
                            {sinsalPercentages[sinsal]}%
                        </td>
                        <td>{descriptions[sinsal]}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <footer className="report35-footer">
                <p>신살의 힘이 0%이면 해당 에너지의 활동성이 부족하다고 판단하시면 됩니다.</p>
            </footer>

            <button className="next-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};


export default SajuReport35;
