import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../../css/SajuReport8.css'; // 기존 CSS 재활용

const SajuReport8 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate();

    const analysisData = {
        정관: {
            title: name + '님에게 어울리는 직업 선택 가이드',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 확인해보세요",
            tableTitle: name + '님에게 어울리는 직업 추천',
            tableData: [
                ["법조인", "행정 분야", "교육자", "상담 및 심리"],
                ["변호사", "행정사", "교사", "심리학자"],
                ["판사, 검사", "행정 공무원", "학자, 교수", "상담가"],
                ["법률 컨설턴트", "국영기업체 직원", "교육 컨설턴트", "사회복지사"],
                ["노무사", "환경 공무원", "심리 상담사", "예술 치료사"],
                ["의사", "간호사", "연구원", "문학가"],
            ],
            description:
                name +
                "님은 규칙적이고 질서 있는 환경에서 성실하게 실력을 쌓을 수 있으며, " +
                "조화롭고 책임감 있는 자세로 뛰어난 결과를 얻을 수 있습니다.",
            adviceTitle: "말처럼 균형 감각을 요구하는 직업",
            advice:
                "다양한 업무를 조화롭게 수행할 수 있는 직무가 잘 맞아요. 균형과 책임감을 발휘할 수 있는 환경에서 재능을 빛낼 수 있어요.",
            imageAlt: "정관 관계 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
    };

    const monthRelation = result.manseMonthGroundRelation;
    const currentAnalysis = analysisData[monthRelation] || {
        title: "데이터 없음",
        subtitle: "해당 관계에 대한 데이터가 준비 중입니다.",
        tableTitle: "데이터 없음",
        tableData: [["데이터 없음"]],
        description: "해당 관계에 대한 상세 설명이 준비 중입니다.",
        adviceTitle: "데이터 없음",
        advice: "해당 관계에 대한 추가 정보를 준비 중입니다.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report9');
    };

    return (
        <div className="saju-report2-wrapper">

            <h1 className="report-title">{currentAnalysis.title}</h1>
            <p className="report-subtitle">{currentAnalysis.subtitle}</p>

            <div className="report-content">
                <div className="sky-symbol-container">
                    <div
                        className="sky-symbol"
                        style={{
                            backgroundColor: "#4287f5",
                            color: "white",
                        }}
                    >
                        {monthRelation}
                    </div>
                </div>
                <div className="analysis-container">
                    <h2 className="analysis-title">{currentAnalysis.tableTitle}</h2>
                    <table className="job-table">
                        <tbody>
                        {currentAnalysis.tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="job-table-cell">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="analysis-image-container">
                    <img
                        src={currentAnalysis.imageSrc}
                        alt={currentAnalysis.imageAlt}
                        className="analysis-image"
                    />
                    <div className="analysis-description">
                        <h3>{currentAnalysis.adviceTitle}</h3>
                        <p>{currentAnalysis.advice}</p>
                    </div>
                </div>
            </div>

            <div className="next-page-button-container">
                <button className="next-page-button" onClick={handleNextPage}>
                    다음 페이지로 이동
                </button>
            </div>
        </div>
    );
};

export default SajuReport8;
