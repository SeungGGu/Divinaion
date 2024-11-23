import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/SajuReport11.css';
import { useSaju } from '../../context/SajuContext';

const SajuReport11 = () => {
    const navigate = useNavigate();
    const location = useLocation(); // 전달된 데이터 수신
    const { sajuData } = useSaju();
    const { name } = sajuData;

    // 전달받은 scores 데이터 가져오기
    const { scores } = location.state || {
        scores: {
            자신감: 0,
            창의력: 0,
            경제력: 0,
            직업능력: 0,
            지적능력: 0,
        },
    };

    // 강점 분석 데이터
    const strengthData = {
        자신감: "#독립적 #자주적 #극복 #실행력 #추진력",
        창의력: "#참신함 #혁신적 #문제해결 #아이디어 #창의적",
        경제력: "#실용적 #효율적 #재테크 #자립심 #이성적",
        직업능력: "#리더십 #책임감 #조직관리 #판단력 #전문성",
        지적능력: "#직관적 #논리적 #키워드 #정보분석 #추론력",
    };

    const handleNextPage = () => {
        navigate('/Report12', { state: { scores } });
    };

    return (
        <div className="report11-container">
            <h1 className="report-title">
                {name}님의 재능과 강점 분석
            </h1>
            <p className="report-subtitle">
                균형 잡힌 성장을 위해 강점을 키우고 잠재력을 발휘해보세요
            </p>

            {/* 분석 표 */}
            <div className="report-table-container">
                <table className="analysis-table">
                    <thead>
                    <tr>
                        <th colSpan="3">{name}님의 타고난 재능과 강점 분석</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(scores).map(([key, value]) => (
                        <tr key={key}>
                            <td className="analysis-label">{key}</td>
                            <td className="analysis-score">{value}%</td>
                            <td className="analysis-tags">{strengthData[key]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* 하단 정보 */}
            <div className="report-footer">
                <p>{name}님의 재능을 키워 균형 잡힌 성장을 이루세요</p>
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport11;
