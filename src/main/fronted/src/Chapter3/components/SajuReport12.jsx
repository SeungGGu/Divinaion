import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/SajuReport12.css';
import { useSaju } from "../../context/SajuContext";

const SajuReport12 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData;
    const location = useLocation();
    const navigate = useNavigate();

    const { scores } = location.state || {
        scores: {
            자신감: 0,
            잠재력: 0,
            경제력: 0,
            조직력: 0,
            학습력: 0,
        },
    };

    // 능력이 있을 때 설명
    const hasAbilityDescriptions = {
        자신감: "#추진력 #결단력 #도전정신 #리더십 #책임감 #강한 의지 – 능력이 있어요",
        잠재력: "#창의력 #자기 개발 #능력 개발 #문제 해결능력 #숨겨진 재능 #성공 기반 – 능력이 있어요",
        경제력: "#수익 창출 #재정 관리 #경제 감각 #사업 기회 포착 #현실 감각 #자산 증식 – 능력이 있어요",
        조직력: "#조직 관리 #팀워크 #목표 달성 #협업 능력 #책임감 #리더십 발휘 – 능력이 있어요",
        학습력: "#지식 습득 #정보 분석 #빠른 이해력 #전문 지식 #문제 해결 능력 #배움의 욕구 – 능력이 있어요",
    };

    // 능력이 없을 때 설명
    const lacksAbilityDescriptions = {
        자신감: "#추진력 #결단력 #도전정신 #리더십 #책임감 - 이 능력이 조금 부족해요",
        잠재력: "#창의력 #자기 개발 #능력 개발 #문제 해결능력 #숨겨진 재능 - 이 능력이 조금 부족해요",
        경제력: "#수익 창출 #재정 관리 #경제 감각 #사업 기회 포착 #현실 감각 - 이 능력이 조금 부족해요",
        조직력: "#조직 관리 #팀워크 #목표 달성 #협업 능력 #책임감 - 이 능력이 조금 부족해요",
        학습력: "#지식 습득 #정보 분석 #빠른 이해력 #전문 지식 #문제 해결 능력 - 이 능력이 조금 부족해요",
    };

    const handleNextPage = () => {
        navigate('/Report17');
    };

    return (
        <div className="report12-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">9. {name}님의 타고난 능력, 어떤 것이 있을까요?</h1>
            <p className="report-subtitle">강점은 키우고 약점을 보완하는 방법을 알려드립니다</p>

            {/* 분석 결과 렌더링 */}
            <p>타고난 능력이 {name}님에게 어떻게 작용하는지 확인하세요</p>
            {Object.entries(scores).map(([key, value]) => (
                <div className="result-section" key={key}>
                    <div className="result-header">
                        <span className="result-category">
                            {key} - {value > 0 ? "있어요" : "부족해요"}
                        </span>
                    </div>
                    <div className="result-message">
                        {value > 0
                            ? hasAbilityDescriptions[key]
                            : lacksAbilityDescriptions[key]}
                    </div>
                </div>
            ))}

            <div className="report-footer">
                <p>능력의 강점을 활용하고 약점을 보완하면 구체적인 목표를 실현할 수 있습니다.</p>
            </div>
        </div>
    );
};

export default SajuReport12;
