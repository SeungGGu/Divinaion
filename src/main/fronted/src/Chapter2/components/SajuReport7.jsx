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
            adviceTitle: name + "님은 소통하고 주도적으로 일하며 전문성을 살릴 수 있는 직업이 적합합니다",
            advice: [
                {description: "사람들과 잘 어울리며 소통과 조화를 중요시하는 업무에 적합합니다"},
                {description: "혼자서도 잘 계획하고 실행할 수 있는 독립적인 업무가 잘 맞습니다"},
                {description: "스스로 주도하며 리더십을 발휘해 능력을 펼칠 수 있는 업무에 적합합니다"},
                {description: "자유롭게 일하면서 전문 지식을 활용해 성과를 낼 수 있는 분야에 어울립니다"},
            ],
            imageAlt: "늑대",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
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
            adviceTitle: name + "님은 사람들과 소통하며 스스로 주도적으로 일할 수 있는 직업이 적합합니다",
            advice: [
                {description: "목표를 이루기 위해 스스로 노력하며 앞장서서 일하는 업무에 적합합니다"},
                {description: "많은 사람을 잘 이끌며 집단을 관리하고 조직하는 업무가 잘 맞습니다"},
                {description: "다양한 사람들과 쉽게 어울리며 만남이 많은 분야에서 잘 어울립니다"},
                {description: "솔직하고 자존심이 강해 자유롭게 움직이며 일할 수 있는 업무에 적합합니다"},
            ],
            imageAlt: "호랑이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
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
            adviceTitle: name + "님은 대인 관계가 중요한 분야에서 자신의 능력을 활용하는 것이 좋습니다",
            advice: [
                {description: "여러 일을 능숙하게 처리할 수 있어 다양한 업무를 잘 해낼 수 있습니다"},
                {description: "소규모 관계를 선호하고 신뢰를 중요시해 안정적인 일에 잘 맞습니다"},
                {description: "말과 행동으로 사람들과 잘 어울리며 소통이 필요한 일에 적합합니다"},
                {description: "꼼꼼하고 차분한 성격으로 세부 사항을 관리하는 업무에 잘 어울립니다"},
            ],
            imageAlt: "소",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
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
            adviceTitle: name + "님은 자유로운 환경에서 창의성을 발휘할 수 있는 직업이 가장 적합합니다",
            advice: [
                {description: "자유롭고 편한 환경에서 일하며 창의적인 일에 관심이 많은 직업이 잘 맞습니다"},
                {description: "말과 글을 잘 활용해 사람들과 소통하는 일을 할 때 능력을 발휘할 수 있습니다"},
                {description: "예술 감각이 뛰어나고 새롭고 독창적인 생각을 필요로 하는 일에 잘 어울립니다"},
                {description: "아이디어를 내고 기획하는 일이 중요한 직업에서 뛰어난 능력을 보여줍니다"},
            ],
            imageAlt: "원숭이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
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
            adviceTitle: name + "님은 소통 능력을 발휘하고 정보 분석과 변화에 적응하는 직업이 적합합니다",
            advice: [
                {description: "상대를 배려하며 사람들과 잘 어울리는 소통이 중요한 일에 잘 맞습니다"},
                {description: "노력과 성과를 바탕으로 고수익을 목표로 하는 분야에서도 성공할 수 있습니다"},
                {description: "정보를 잘 분석해 이익을 내는 일에서 뛰어난 능력을 보여줄 수 있습니다"},
                {description: "변화와 도전을 즐기며 활동적이고 자유로운 일 환경에도 잘 적응합니다"},
            ],
            imageAlt: "독수리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
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
            adviceTitle: name + "님은 안정된 환경에서 책임감을 발휘하며 일을 하는 직업이 적합합니다",
            advice: [
                {description: "고정 수입이 보장되는 안정된 환경에서 능력을 발휘할 수 있는 직업이 좋습니다"},
                {description: "성실하게 책임을 다하며 관리자로서 조직을 이끄는 일이 잘 어울립니다"},
                {description: "사교적이거나 위험한 일보다는 안정된 환경에서 일하는 직업이 적합합니다"},
                {description: "꼼꼼한 성격을 살려 분석이나 세부적인 일을 처리하는 직무에 잘 맞습니다"},
            ],
            imageAlt: "개미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
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
            adviceTitle: name + "님은 도전적이고 리더십을 발휘하며 규칙을 중시하는 직업이 적합합니다",
            advice: [
                {description: "모험심과 승부욕이 강해 새로운 도전을 필요로 하는 일에 잘 어울립니다"},
                {description: "리더십과 추진력을 발휘해 자신의 사업을 시작하거나 운영하는 데 적합합니다"},
                {description: "복잡한 인간관계나 위험이 있는 일도 적극적으로 도전할 수 있는 성향입니다"},
                {description: "규칙과 원칙을 중요시하며 조직 내에서 맡은 일을 책임감 있게 수행합니다"},
            ],
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
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
            adviceTitle: name + "님은 정직과 성실성을 발휘하며 공익적이고 안정적인 직업이 적합합니다",
            advice: [
                {description: "정직하고 성실하게 일하며 공익적인 일을 해낼 수 있는 직업에 적합합니다"},
                {description: "안정된 환경에서 규칙을 지키며 명예를 얻을 수 있는 일에 잘 어울립니다"},
                {description: "직위와 책임을 중요하게 생각하며 큰 조직에서 능력을 발휘할 수 있습니다"},
                {description: "공정한 성격을 바탕으로 공공기관이나 사회에 기여하는 직업에 잘 맞습니다"},
            ],
            imageAlt: "말",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
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
            adviceTitle: name + "님은 지식을 전달하고 몰입해 전문성을 발휘할 수 있는 직업이 적합합니다",
            advice: [
                {description: "재능을 살려 사람들에게 지식을 전달하는 교육이나 멘토링 직업이 잘 맞습니다"},
                {description: "비제도권 교육에서도 창의적 접근으로 능력을 발휘할 수 있는 일에 적합합니다"},
                {description: "깊이 몰입해 전문 지식을 쌓는 연구나 개발 분야에서 강점을 보일 수 있습니다"},
                {description: "자신의 능력을 자유롭게 펼칠 수 있는 유연하고 자유로운 직장 환경이 좋습니다"},
            ],
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
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
            adviceTitle: name + "님은 지식을 전달하고 사람들을 돕는 안정적이고 체계적인 직업이 적합합니다",
            advice: [
                {description: "학문적 배경을 바탕으로 안정된 환경에서 일하는 직무가 잘 맞습니다"},
                {description: "사람들에게 지식을 전달하고 가르치는 일에서 좋은 성과를 낼 수 있습니다"},
                {description: "전문 지식을 활용해 교육하거나 사람들을 지도하는 일에 적합합니다"},
                {description: "사람들과 소통하며 도움을 줄 수 있는 상담이나 지원 업무에 잘 어울립니다"},
            ],
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
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

            {/* 페이지 제목 */}
            <div className="title-symbol-container">
                <div className="sky-symbol-container">
                    <div className="sky-symbol">{result.manseMonthGroundRelation}</div>
                </div>
                <h1 className="report-title">5. {currentAnalysis.title}</h1>
            </div>
            <p className="report-subtitle">{currentAnalysis.subtitle}</p>

            <div className="report-content">
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
                        <ul className="strengths-list">
                            {currentAnalysis.advice.map((item, index) => (
                                <li key={index}>
                                    <strong>{item.description}</strong>
                                </li>
                            ))}
                        </ul>
                        <h3>{currentAnalysis.adviceTitle}</h3>
                    </div>
                </div>
            </div>
            <p className="footer-text">사주를 통해 적합한 직업을 찾아 미래를 설계할 수 있습니다</p>
        </div>
    );
};

export default SajuReport7;
