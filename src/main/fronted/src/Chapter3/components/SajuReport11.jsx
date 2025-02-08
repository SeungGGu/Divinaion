import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/SajuReport11.css';
import { useSaju } from '../../context/SajuContext';

const SajuReport11 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { sajuData } = useSaju();
    const { name } = sajuData;

    const { scores } = location.state || {
        scores: {
            자신감: 0,
            잠재력: 0,
            경제력: 0,
            조직력: 0,
            학습력: 0,
        },
    };

    // 강점 데이터
    const strengthDescriptions = {
        자신감: "어려움 속에서도 문제를 끝까지 해결하고 추진력을 발휘하는 능력이 있어요",
        잠재력: "평범한 상황에서도 특별한 재능을 발휘하고 새로운 기회를 만드는 능력이 있어요",
        경제력: "현명하게 돈을 벌고 관리하며, 새로운 재정적 기회를 잡는 데 능숙한 능력이 있어요",
        조직력: "조직에서 신뢰를 얻고 목표를 달성하며 성공적인 경력을 만드는 능력이 있어요",
        학습력: "새로운 지식을 빠르게 이해하고 정보를 분석해 실생활에 활용하는 능력이 있어요",
    };

    // 약점 데이터
    const weaknessDescriptions = {
        자신감: "어려움 속에서 추진력이 약할 수 있지만, 꾸준한 경험을 통해 강해질 수 있어요",
        잠재력: "타고난 잠재력이 부족해 보일 수 있지만, 꾸준한 노력을 통해 성장할 수 있어요",
        경제력: "경제 감각이 부족할 수 있지만, 재정 관리 습관을 통해 안정적인 재산을 만들 수 있어요",
        조직력: "조직에서 목표 달성이 어려울 수 있지만 꾸준한 노력으로 성과를 높일 수 있어요",
        학습력: "지식을 쌓는 속도가 느릴 수 있지만 관심 분야에 집중하면 크게 발전할 수 있어요",
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
                                {key}
                                <br />
                                {value === 0 ? "부족해요" : "있어요"}
                            </td>

                            {/* 두 번째 칸: 강점/약점 설명과 태그 */}
                            <td className="analysis11-description">
                                {value === 0
                                    ? weaknessDescriptions[key]
                                    : strengthDescriptions[key]}
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
