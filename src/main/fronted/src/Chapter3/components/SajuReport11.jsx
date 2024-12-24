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
            성취력: 0,
            사고력: 0,
        },
    };

    // 강점 분석 데이터
    const strengthData = {
        자신감: "목표를 설정하고 꾸준히 실현하는 능력",
        창의력: "문제를 유연하게 해결하는 능력",
        경제력: "자원을 관리하며 목표를 달성하는 능력",
        성취력: "협력을 통해 목표를 이루는 능력",
        사고력: "정보를 분석하고 문제를 해결하는 능력",
    };

    const strengthTags = {
        자신감: "#책임감 #결단력 #도전 정신",
        창의력: "#아이디어 #유연성 #문제해결",
        경제력: "#실천력 #계획성 #효율적관리",
        성취력: "#팀워크 #조직력 #목표달성",
        사고력: "#분석력 #집중력 #문제해결",
    };

    const handleNextPage = () => {
        navigate('/Report12', { state: { scores } });
    };

    return (
        <div className="report11-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">
                8. {name}님의 타고난 능력, 강점과 약점을 알아봅니다
            </h1>
            <p className="report-subtitle">
                사주 비율로 능력의 강점과 약점을 이해해보세요
            </p>

            {/* 분석 표 */}
            <div className="report11-table-container">
                <table className="analysis11-table">
                    <thead>
                    <tr>
                        <th colSpan="3">타고난 능력이 {name}님에게 미치는 영향을 확인하세요</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(scores).map(([key, value]) => (
                        <tr key={key}>
                            {/* 첫 번째 칸: 능력 이름과 평가 */}
                            <td className="analysis11-ability">
                                {key} {value === 0 ? "약해요" : "있어요"}
                            </td>

                            {/* 두 번째 칸: 상세 설명과 강점/약점 평가 */}
                            <td className="analysis11-description">
                                {strengthData[key]}
                                {value === 0
                                    ? `이 약해요`
                                    : value <= 54
                                        ? `이 좋아요`
                                        : `이 강해요`}
                                <br/>
                                {strengthTags[key]}<br/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* 하단 정보 */}
            <div className="report-footer">
                <p>능력의 강점을 활용하면 목표를 이루고 약점을 극복할 수 있습니다.</p>
            </div>
        </div>
    );
};

export default SajuReport11;
