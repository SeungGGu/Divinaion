import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport8.css'; // 기존 CSS 재활용

const SajuReport8 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate();

    const analysisData = {
        비견: {
            title: name + '님에게 어울리는 직업 선택 가이드',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 확인해보세요",
            tableTitle: name + '님에게 어울리는 직업 추천',
            tableData: [
                ["예술/창의","전문직/기술직","서비스/사무","기타"],
                ["작가", "의사", "교사", "유튜버"],
                ["예체능인", "변호사", "공무원", "사업가"],
                ["패션 모델", "연구원", "운전직업", "자영업"],
                ["방송연예인", "언론기자", "전문직종", "프로그래머"],
                ["디자이너", "상담사", "심리학자", "프리랜스"],
            ],
            description:
                name +
                "님은 주도적으로 일할 수 있는 환경에서 자신의 역량을 펼쳐 보일 수 있어요.",
            adviceTitle: "늑대처럼 협력이 중요한 직업",
            advice:
                "팀워크와 협력이 필요한 직무에서 자신의 능력을 발휘하고, 팀과 조화를 이루어 목표를 달성할 수 있는 역할이 잘 어울립니다.",
            imageAlt: "늑대",
            imageSrc: `${process.env.PUBLIC_URL}/images/wolf.png`,
        },
        겁재: {
            title: name + '님에게 어울리는 직업 선택 가이드',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 확인해보세요",
            tableTitle: name + '님에게 어울리는 직업 추천',
            tableData: [
                ["창의적 직업","전문직/기술직","서비스","비즈니스/리더십"],
                ["작가", "변호사", "교사", "브로커"],
                ["예술가", "의사/약사", "경찰", "단체장"],
                ["뮤지션", "학원사업", "운동선수", "영업직"],
                ["유튜버", "토목건축업", "여행사", "마케팅 분야"],
                ["인플루언서", "데이터 분석가", "상담사", "이벤트 기획"],
            ],
            description:
                name +
                "님은 협력하고 팀과 함께 성장할 수 있는 직업 환경에서 더 잘 적응할 수 있어요. 목표 달성의 즐거움을 느낄 수 있는 직무에서 빛날 수 있습니다.",
            adviceTitle: "호랑이처럼 도전 정신이 필요한 직업",
            advice:
                "호랑이처럼 목표 달성의 즐거움을 느낄 수 있는 직무에서 빛날 수 있어요. 도전 정신을 발휘하며 성취감을 느낄 수 있는 환경이 잘 어울립니다.",
            imageAlt: "호랑이",
            imageSrc: `${process.env.PUBLIC_URL}/images/tiger.png`,
        },
        식신: {
            title: name + '님에게 어울리는 직업 선택 가이드',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 확인해보세요",
            tableTitle: name + '님에게 어울리는 직업 추천',
            tableData: [
                ["창의적 직업","전문/기술직","서비스","비즈니스/리더십"],
                ["작가", "연구개발(AI,바이오)", "학원강사", "영업직"],
                ["예술가", "정보보안 전문가", "요리사", "컨설턴트"],
                ["화가", "데이터 엔지니어", "아나운서", "광고업"],
                ["배우", "소프트웨어 개발자", "방송연예인", "프로젝트 매니저"],
                ["크리에이터", "네트워크 관리자", "서비스업", "브랜드 매니저"],
            ],
            description:
                name +
                "님은 꾸준히 성실하게 일할 수 있는 직업 환경에서 만족감을 느낄 수 있어요.",
            adviceTitle: "소처럼 꾸준함을 요구되는 직업",
            advice:
                "성실함과 꾸준함이 필요한 역할에서 소처럼 차근차근 실력을 쌓아가며 빛날 수 있어요. 이런 환경에서 잘 어울릴 거예요.",
            imageAlt: "소",
            imageSrc: `${process.env.PUBLIC_URL}/images/ox.png`,
        },
        상관: {
            title: name + '님에게 어울리는 직업 선택 가이드',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 확인해보세요",
            tableTitle: name + '님에게 어울리는 직업 추천',
            tableData: [
                ["창의적/예술직업","기술/전문 직업","서비스","비즈니스/리더십"],
                ["작가", "소프트웨어개발자", "요리사", "사업가"],
                ["예술가", "웹 디자이너", "아나운서", "마케팅 매니저"],
                ["콘텐츠 크리에이터", "데이터 분석가", "이벤트 기획자", "브랜드 매니저"],
                ["사진 작가", "기계 엔지니어", "시민운동가", "미디어 기획"],
                ["미디어 프로듀서", "전기공학 개발자", "스포츠 트레이너", "커뮤니케이션 전문가"],
            ],
            description:
                name +
                "님은 창의성과 개성을 발휘할 수 있는 환경에서 더 큰 성취감을 얻을 수 있어요",
            adviceTitle: "원숭이처럼 창의력이 필요한 직업",
            advice:
                "창의력과 발상을 마음껏 펼칠 수 있는 직무가 어울려요. 유연한 사고와 새로운 아이디어를 존중하는 환경에서 활약할 수 있을 거예요.",
            imageAlt: "원숭이",
            imageSrc: `${process.env.PUBLIC_URL}/images/ox.png`,
        },
        편재: {
            title: name + '님에게 어울리는 직업 선택 가이드',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 확인해보세요",
            tableTitle: name + '님에게 어울리는 직업 추천',
            tableData: [
                ["비즈니스/리더십 직업","기술/전문 직업","예술/창의적 직업","서비스 직업"],
                ["사업가", "데이터 분석가", "뮤지션", "커뮤니케이션 전문가"],
                ["외교 전문가", "소프트웨어 엔지니어", "그래픽 디자이너", "이벤트 기획자"],
                ["재무 분석가", "건축 엔지니어", "콘텐츠 크리에이터", "사회자"],
                ["마케팅 매니저", "사이버 보안전문가", "패션 디자이너", "스포츠 코치"],
                ["HR 매니저", "UX/UI 디자이너", "사진작가", "홍보 전문가"],
            ],
            description:
                name +
                "님은 목표를 이루기 위해 적극적으로 성과를 낼 수 있는 직장에서 잘 어울려요",
            adviceTitle: "독수리처럼 분석력과 목표 지향적인 직업",
            advice:
                "전략적 사고와 분석력이 필요한 직무가 잘 맞아요. 문제를 해결하며 데이터를 바탕으로 목표를 향해 나아갈 수 있는 분야에서 빛날 수 있습니다",
            imageAlt: "독수리",
            imageSrc: `${process.env.PUBLIC_URL}/images/ox.png`,
        },
        정재: {
            title: name + '님에게 어울리는 직업 선택 가이드',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 확인해보세요",
            tableTitle: name + '님에게 어울리는 직업 추천',
            tableData: [
                ["교육 및 연구","기술 및 엔지니어링","금융 및 회계","기획 및 관리"],
                ["교사", "엔지니어", "은행원", "기획 관리자"],
                ["연구원", "기술자", "회계사", "전략 기획자"],
                ["교육 관리자", "제조업 관리자", "증권 분석가", "데이터 분석가"],
                ["직업 교육 트레이너", "시스템 관리자", "보험 설계사", "IT 기획자"],
                ["학원 강사", "품질 관리사", "세무사", "프로젝트 매니저"],
            ],
            description:
                name +
                "님은 안정적이고 체계적인 직업 환경에서 책임감을 가지고 일할 수 있어요",
            adviceTitle: "개미처럼 체계적이고 성실한 직업",
            advice:
                "계획에 따라 착실하게 성과를 내는 직업이 잘 맞아요. 규칙적인 환경에서 꾸준한 노력을 발휘할 수 있을 거예요",
            imageAlt: "개미",
            imageSrc: `${process.env.PUBLIC_URL}/images/ox.png`,
        },
        편관: {
            title: name + '님에게 어울리는 직업 선택 가이드',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 확인해보세요",
            tableTitle: name + '님에게 어울리는 직업 추천',
            tableData: [
                ["법률 및 공공 안전","기술 및 제조","교육 및 연구","공공 부문"],
                ["외과 의사", "조선 기술자", "교사", "공무원"],
                ["판사, 검사", "기술 엔지니어", "학원 강사", "국영기업체직원"],
                ["소방관", "세무사", "교육 관리자", "경비업체 직원"],
                ["경찰관", "제조업 관리자", "연구원", "토목 건축업"],
                ["군인", "로봇 엔지니어", "교육 컨설턴트", "환경 공무원"],
            ],
            description:
                name +
                "님은 도전적인 과제를 통해 성장할 수 있는 직업 환경에서 잘 적응할 수 있어요",
            adviceTitle: "사자처럼 리더십이 필요한 직업",
            advice:
                "팀을 이끌고 관리하는 역할에서 사자의 리더십을 발휘할 수 있어요. 책임감을 갖고 앞장서서 팀을 이끄는 직무가 잘 맞습니다",
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/ox.png`,
        },
        정관: {
            title: name + '님에게 어울리는 직업 선택 가이드',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 확인해보세요",
            tableTitle: name + '님에게 어울리는 직업 추천',
            tableData: [
                ["법조인","행정 분야","교육자","상담 및 심리"],
                ["변호사", "행정사", "교사", "심리학자"],
                ["판사, 검사", "행정 공무원", "학자, 교수", "상담가"],
                ["법률 컨설턴트", "국영기업체직원", "교육 컨설턴트", "사회복지사"],
                ["노무사", "환경 공무원", "심리 상담사", "예술 치료사"],
                ["의사", "간호사", "연구원", "문학가"],
            ],
            description:
                name +
                "님은 규칙적이고 질서 있는 환경에서 성실하게 실력을 쌓을 수 있어요",
            adviceTitle: "말처럼 균형 감각을 요구하는 직업",
            advice:
                "다양한 업무를 조화롭게 수행할 수 있는 직무가 잘 맞아요. 균형과 책임감을 발휘할 수 있는 환경에서 재능을 빛낼 수 있어요.",
            imageAlt: "말",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        편인: {
            title: name + '님에게 어울리는 직업 선택 가이드',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 확인해보세요",
            tableTitle: name + '님에게 어울리는 직업 추천',
            tableData: [
                ["발명가","종교인","배우","예술가"],
                ["연구개발 전문가", "종교 지도자", "무대 배우", "공예가"],
                ["특허 컨설턴트", "철학 연구가", "영화 배우", "설치 미술가"],
                ["제품 디자이너", "종교 상담가", "뮤지컬 배우", "디지털 아티스트"],
                ["기술 혁신 전문가", "신학자", "성우", "애니메이션 아티스트"],
                ["연구원", "문학가", "학원강사", "교육자"],
            ],
            description:
                name +
                "님은 독립적으로 탐구하고 연구할 수 있는 환경에서 더 큰 발전을 이룰 수 있어요",
            adviceTitle: "올빼미처럼 독립적이고 탐구심이 필요한 직업",
            advice:
                "스스로 지식을 쌓고 분석하는 역할이 잘 맞아요. 올빼미처럼 깊은 통찰력을 발휘할 수 있는 분야에서 빛날 수 있습니다",
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        정인: {
            title: name + '님에게 어울리는 직업 선택 가이드',
            subtitle: "직장에서 성공하기 위한 맞춤형 전략을 확인해보세요",
            tableTitle: name + '님에게 어울리는 직업 추천',
            tableData: [
                ["학자","연구원","의사","작가"],
                ["대학 연구자", "임상 연구원", "가정의학과 의사", "소설가"],
                ["기술 연구자", "환경 연구원", "응급의학과 의사", "극작가"],
                ["언론인", "간호사", "교육자", "평론가"],
                ["방송 기자", "병원 간호사", "학교 교사", "영화 평론가"],
                ["온라인 뉴스 기자", "학교 보건 간호사", "교육 컨설턴트", "음악 평론가"],
            ],
            description:
                name +
                "님은 깊이 있는 지식을 쌓을 수 있는 안정적인 직업 환경에서 실력을 발휘할 수 있어요",
            adviceTitle: "코끼리처럼 지혜와 협력이 중요한 직업",
            advice:
                "협력하며 의견을 나누고 발전할 수 있는 직무가 어울려요. 코끼리처럼 신뢰받으며 조화롭게 일할 수 있는 역할에서 빛날 수 있습니다.",
            imageAlt: "코끼리",
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
