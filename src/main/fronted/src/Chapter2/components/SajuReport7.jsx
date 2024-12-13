import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport8.css'; // 기존 CSS 재활용

const SajuReport7 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate();

    const analysisData = {
        비견: {
            title: name + '님의 직업, 사주로 추천 드립니다',
            subtitle: "직업 선택의 새로운 방향을 사주로 찾아보세요",
            tableTitle: name + '님의 사주에 맞는 직업을 확인하세요',
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
            adviceTitle: "늑대처럼 협력과 목표 달성을 중시하는 직업",
            advice: [
                {description: "팀워크가 중요한 직업에서 조화를 이루세요"},
                {description: "목표를 향해 함께 나아가 성과를 만드세요"},
            ],
            imageAlt: "늑대",
            imageSrc: `${process.env.PUBLIC_URL}/images/wolf.png`,
        },
        겁재: {
            title: name + '님의 직업, 사주로 추천 드립니다',
            subtitle: "직업 선택의 새로운 방향을 사주로 찾아보세요",
            tableTitle: name + '님의 사주에 맞는 직업을 확인하세요',
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
            advice: [
                {description: "도전 정신으로 목표를 이루고 성취하세요"},
                {description: "목표 속 즐거움을 찾을 직업을 선택하세요"},
            ],
            imageAlt: "호랑이",
            imageSrc: `${process.env.PUBLIC_URL}/images/tiger.png`,
        },
        식신: {
            title: name + '님의 직업, 사주로 추천 드립니다',
            subtitle: "직업 선택의 새로운 방향을 사주로 찾아보세요",
            tableTitle: name + '님의 사주에 맞는 직업을 확인하세요',
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
            advice: [
                {description: "성실과 꾸준함으로 실력을 쌓아 빛나세요"},
                {description: "차분히 목표를 이루는 직업이 어울려요"},
            ],
            imageAlt: "소",
            imageSrc: `${process.env.PUBLIC_URL}/images/ox.png`,
        },
        상관: {
            title: name + '님의 직업, 사주로 추천 드립니다',
            subtitle: "직업 선택의 새로운 방향을 사주로 찾아보세요",
            tableTitle: name + '님의 사주에 맞는 직업을 확인하세요',
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
            advice: [
                {description: "창의력과 발상을 펼칠 직무에서 활약하세요"},
                {description: "유연한 사고와 아이디어로 빛날 환경이에요"},
            ],
            imageAlt: "원숭이",
            imageSrc: `${process.env.PUBLIC_URL}/images/ox.png`,
        },
        편재: {
            title: name + '님의 직업, 사주로 추천 드립니다',
            subtitle: "직업 선택의 새로운 방향을 사주로 찾아보세요",
            tableTitle: name + '님의 사주에 맞는 직업을 확인하세요',
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
            advice: [
                {description: "전략적 사고와 분석력이 잘 맞는 직무예요"},
                {description: "문제 해결과 목표 달성으로 빛나는 분야예요"},
            ],
            imageAlt: "독수리",
            imageSrc: `${process.env.PUBLIC_URL}/images/ox.png`,
        },
        정재: {
            title: name + '님의 직업, 사주로 추천 드립니다',
            subtitle: "직업 선택의 새로운 방향을 사주로 찾아보세요",
            tableTitle: name + '님의 사주에 맞는 직업을 확인하세요',
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
            advice: [
                {description: "계획에 따라 성과를 내는 직무가 어울려요"},
                {description: "규칙적인 환경에서 꾸준히 노력하며 빛나세요"},
            ],
            imageAlt: "개미",
            imageSrc: `${process.env.PUBLIC_URL}/images/ox.png`,
        },
        편관: {
            title: name + '님의 직업, 사주로 추천 드립니다',
            subtitle: "직업 선택의 새로운 방향을 사주로 찾아보세요",
            tableTitle: name + '님의 사주에 맞는 직업을 확인하세요',
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
            adviceTitle: "사자처럼 리더십을 발휘할 수 있는 직업",
            advice: [
                {description: "팀을 이끌며 리더십을 발휘할 역할이 맞아요"},
                {description: "책임감을 가지고 앞장서는 직무가 어울려요"},
            ],
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/ox.png`,
        },
        정관: {
            title: name + '님의 직업, 사주로 추천 드립니다',
            subtitle: "직업 선택의 새로운 방향을 사주로 찾아보세요",
            tableTitle: name + '님의 사주에 맞는 직업을 확인하세요',
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
            advice: [
                {description: "다양한 업무를 수행할 직무가 잘 어울려요"},
                {description: "균형과 책임감을 발휘하며 재능을 빛내세요"},
            ],
            imageAlt: "말",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        편인: {
            title: name + '님의 직업, 사주로 추천 드립니다',
            subtitle: "직업 선택의 새로운 방향을 사주로 찾아보세요",
            tableTitle: name + '님의 사주에 맞는 직업을 확인하세요',
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
            advice: [
                {description: "지식을 쌓고 분석하는 직무에 어울려요"},
                {description: "통찰력을 발휘하며 돋보일 수 있는 분야예요"},
            ],
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
        },
        정인: {
            title: name + '님의 직업, 사주로 추천 드립니다',
            subtitle: "직업 선택의 새로운 방향을 사주로 찾아보세요",
            tableTitle: name + '님의 사주에 맞는 직업을 확인하세요',
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
            advice: [
                {description: "협력하며 의견 나누는 직무에 어울려요"},
                {description: "신뢰받고 조화롭게 일할 역할이 맞아요"},
            ],
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
        navigate('/Report8');
    };

    return (
        <div className="saju-report2-wrapper">

            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

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
                        <ul className="strengths-list">
                            {currentAnalysis.advice.map((item, index) => (
                                <li key={index}>
                                    <strong>👉 {item.description}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <p className="footer-text">사주를 통해 적합한 직업을 찾아 미래를 설계할 수 있습니다</p>
        </div>
    );
};

export default SajuReport7;
