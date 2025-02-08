import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSaju} from '../../context/SajuContext';
import '../../Chapter1/css/SajuReport2.css'; // 기존 스타일 재사용

const SajuReport8 = () => {
    const {sajuData} = useSaju();
    const {result, name} = sajuData;
    const navigate = useNavigate();

    // 관계 데이터 매핑
    const analysisData = {
        비견: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "협력과 조화를 중요시하세요.", description: "팀워크를 중시하며 동료들과 협력해 조화를 이루는 데 최선을 다하세요" },
                { title: "명확한 역할 분담을 추구하세요.", description: "자신의 역할을 명확히 하고 책임을 나눠 모두가 만족할 수 있게 하세요." },
                { title: "리더십을 발휘하세요.", description: "의견을 조율하며 팀 목표를 이끌어 리더십으로 신뢰와 존경을 얻어보세요." },
                { title: "갈등 상황에서 중재자가 되세요.", description: "갈등 상황에서 서로의 의견을 조율하며 원활하고 긍정적인 해결을 도와보세요." },
                { title: "목표를 함께 공유하세요.", description: "동료들과 목표를 공유하며 협력과 꾸준한 노력으로 성과를 함께 만들어 가세요." },
            ],
            TitleDescription: "늑대의 특성으로 본 " + name + "님의 직장 생활 성공 전략",
            subDescription: [
                {description: "늑대처럼 동료와 협력하며 신뢰를 쌓고 함께 목표를 끝까지 이뤄 가세요."},
                {description: "늑대처럼 목표를 향해 끈기 있게 달려가며 팀의 성공을 확실히 이끌어 보세요."},
                {description: "늑대처럼 변화에 유연하게 대응하며 상황을 주도적으로 빠르게 해결하세요."},
                {description: "늑대처럼 동료를 보호하며 서로의 장점을 살려 함께 더욱 성장하세요."},
            ],
            imageAlt: "늑대처럼 책임감을 발휘하는 직장 생활",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
        },
        겁재: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "강한 추진력을 활용하세요.", description: "과감한 결정으로 빠르게 업무를 추진하며 팀에 활력과 긍정을 불어넣으세요" },
                { title: "리더십을 발휘하세요.", description: "어려운 상황에서도 앞장서며 팀을 이끌어 신뢰와 깊은 존중을 쌓아보세요" },
                { title: "도전 정신을 키우세요.", description: "새로운 시도와 변화를 두려워하지 않고 업무에 도전하는 모습을 보여주세요." },
                { title: "협력하는 태도를 유지하세요.", description: "혼자 처리하려 하기보다 동료와 협력해 더 큰 성과와 결과를 만들어보세요" },
                { title: "목표를 구체적으로 세우세요.", description: "분명한 목표를 설정해 팀과 함께 이를 이루기 위한 노력을 보여주세요" },
            ],
            TitleDescription: "호랑이의 특성으로 본 " + name + "님의 직장 생활 성공 전략",
            subDescription: [
                { description: "호랑이처럼 용감하게 도전하며 직장에서 새로운 기회를 적극 만드세요." },
                { description: "호랑이처럼 주도적으로 행동하며 팀을 이끌어 신뢰와 존경을 쌓아보세요." },
                { description: "호랑이처럼 강한 의지로 목표를 이루며 모든 어려움을 극복해 나가세요." },
                { description: "호랑이처럼 날카롭게 판단하며 빠르고 정확하게 문제를 해결해 보세요." },
            ],
            imageAlt: "호랑이처럼 목표를 세우고 빠르게 성취하세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
        },
        식신: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "성실함으로 신뢰를 쌓으세요.", description: "꾸준히 맡은 일을 끝까지 해내며 동료들에게 믿음을 주는 모습을 보여주세요." },
                { title: "안정감을 유지하세요.", description: "차분하고 안정적인 태도로 동료들과 협력하며 성과를 지속적으로 만들어보세요." },
                { title: "책임감을 발휘하세요.", description: "맡은 일에 최선을 다하며 책임감 있는 태도로 팀에 꾸준히 기여하세요." },
                { title: "계획적으로 업무를 처리하세요.", description: "체계적인 계획을 세워 업무를 진행하며 효율성을 높이고 성과를 향상하세요." },
                { title: "팀워크를 소중히 하세요.", description: "협력을 통해 공동의 목표를 이루며 팀과 조화를 만들어가며 신뢰를 쌓으세요." },
            ],
            TitleDescription: "소의 특성으로 본 " + name + "님의 직장 생활 성공 전략",
            subDescription: [
                { description: "소처럼 꾸준히 노력하며 성실한 자세로 업무를 완수하고 성장해 보세요." },
                { description: "소처럼 묵묵히 책임을 다하며 신뢰와 성과를 차근차근 쌓아 보세요." },
                { description: "소처럼 차분히 문제를 해결하며 안정적이고 긍정적 결과를 만들어가세요." },
                { description: "소처럼 체계적으로 계획을 세워 목표를 하나씩 실현해 나가세요." },
            ],
            imageAlt: "소처럼 성실하고 끈기 있게 일하세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
        },
        상관: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "창의력을 발휘하세요.", description: "독창적인 아이디어로 업무에 활력을 불어넣고 성과를 꾸준히 만들어보세요." },
                { title: "유연하게 대처하세요.", description: "예상치 못한 상황에서도 빠르게 적응하며 문제를 효과적으로 해결하세요." },
                { title: "적극적으로 나서세요.", description: "팀 내에서 주도적으로 의견을 제시하며 리더십과 책임감을 발휘하세요." },
                { title: "소통을 중시하세요.", description: "열린 대화를 통해 동료와의 관계를 원활히 유지하며 신뢰를 쌓아가세요." },
                { title: "열정을 유지하세요.", description: "업무에 대한 열정으로 동료들에게 긍정적인 에너지를 자연스럽게 전달하세요." },
            ],
            TitleDescription: "원숭이의 특성으로 본 " + name + "님의 직장 생활 성공 전략",
            subDescription: [
                { description: "원숭이처럼 창의적인 아이디어로 업무에 활기를 크게 더하고 발전하세요." },
                { description: "원숭이처럼 유연하고 상황에 맞춰 빠르고 지혜롭게 문제에 대처하세요." },
                { description: "원숭이처럼 호기심으로 새로운 방법을 찾아 문제를 효과적으로 해결하세요." },
                { description: "원숭이처럼 팀원들과 활발히 소통하며 분위기를 즐겁고 긍정적으로 이끌어요." },
            ],
            imageAlt: "원숭이처럼 유연하게 문제를 해결해요",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
        },
        편재: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "목표를 분명히 설정하세요.", description: "명확한 목표를 세우고 집중력 있게 추진하며 원하는 성과를 달성하세요." },
                { title: "결단력을 발휘하세요.", description: "빠른 판단과 실행으로 업무를 효율적으로 처리하며 성과를 높이세요." },
                { title: "자원을 잘 활용하세요.", description: "자원을 효율적으로 관리하며 팀의 이익과 성과를 극대화하도록 노력하세요." },
                { title: "책임감을 보여주세요.", description: "맡은 일에 끝까지 책임을 다하며 신뢰와 존중을 쌓아가고 팀에 기여하세요." },
                { title: "팀워크를 중시하세요.", description: "협력과 조화를 이루며 동료와 함께 목표를 완성하며 성과를 공유하세요." },
            ],
            TitleDescription: "독수리의 특성으로 본 " + name + "님의 직장 생활 성공 전략",
            subDescription: [
                { description: "독수리처럼 높은 목표를 세우고 강한 의지로 끝까지 성공을 성취하세요." },
                { description: "독수리처럼 넓은 시야로 기회를 포착하며 더 멀리 앞서 나아가 보세요." },
                { description: "독수리처럼 독립적인 태도로 스스로 길을 개척하며 새로운 도약을 하세요." },
                { description: "독수리처럼 빠르고 과감하게 행동하며 문제를 신속히 해결해 나가세요." },
            ],
            imageAlt: "독수리처럼 높은 목표를 향해 도전해요",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
        },
        정재: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "책임감을 실천하세요.", description: "맡은 업무를 끝까지 완수하며 동료의 신뢰를 쌓고 존중을 얻어가세요." },
                { title: "계획적으로 행동하세요.", description: "철저한 계획으로 업무를 체계적으로 처리하며 안정감과 성과를 보여주세요." },
                { title: "팀워크를 유지하세요.", description: "동료들과 협력하며 조화를 이루어 공동 목표를 성공적으로 달성하세요." },
                { title: "실수를 줄이세요.", description: "작은 실수도 놓치지 않도록 세심함과 꼼꼼함을 발휘하여 완성도를 높이세요." },
                { title: "꾸준히 성장하세요.", description: "지속적인 자기 개발과 노력을 통해 직장 내 입지를 강화하고 인정받으세요." },
            ],
            TitleDescription: "개미의 특성으로 본 " + name + "님의 직장 생활 성공 전략",
            subDescription: [
                { description: "개미처럼 작은 일부터 차근차근 실행해 결과를 꾸준히 만들어가세요." },
                { description: "개미처럼 체계적으로 계획을 세워 차질 없이 목표를 끝까지 달성해 보세요." },
                { description: "개미처럼 협력하며 팀원들과 조화를 이루고 성장과 성과를 꾸준히 이루세요." },
                { description: "개미처럼 꾸준히 노력하며 신뢰를 쌓아 안정감과 성과를 유지하세요." },
            ],
            imageAlt: "개미처럼 부지런하고 끈기 있게 일하세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
        },
        편관: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "리더십을 발휘하세요.", description: "책임감 있는 태도로 주도적으로 목표를 달성하고 성과를 만들어보세요." },
                { title: "결단력을 키우세요.", description: "신속하고 정확한 판단으로 중요한 순간에 리더십과 추진력을 보여주세요." },
                { title: "동료를 배려하세요.", description: "강한 추진력과 함께 동료의 의견을 존중하며 협력과 신뢰를 이끌어내세요." },
                { title: "목표를 분명히 하세요.", description: "구체적인 목표 설정으로 팀 내 역할을 명확히 하고 성과를 꾸준히 만드세요." },
                { title: "균형을 유지하세요.", description: "강한 카리스마와 유연한 소통으로 조화를 이루고 신뢰를 지속적으로 쌓아보세요." },
            ],
            TitleDescription: "사자의 특성으로 본 " + name + "님의 직장 생활 성공 전략",
            subDescription: [
                { description: "사자처럼 강한 리더십으로 팀을 이끌며 목표를 끝까지 달성해 보세요." },
                { description: "사자처럼 주도적으로 행동하며 팀원들에게 신뢰와 존경을 보여주세요." },
                { description: "사자처럼 용기 있게 결단하며 어려운 상황에서도 새로운 길을 찾아가세요." },
                { description: "사자처럼 균형 잡힌 태도로 팀의 조화를 유지하며 성과를 꾸준히 만드세요." },
            ],
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
        },
        정관: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "규칙을 준수하세요.", description: "원칙을 지키며 책임감 있는 태도로 동료와 신뢰를 쌓아가며 존중 받으세요." },
                { title: "안정감을 유지하세요.", description: "침착하고 차분한 태도로 어려운 상황에서도 중심을 잡고 문제를 해결하세요." },
                { title: "팀워크를 활용하세요.", description: "조화를 중시하며 동료와 협력해 함께 성과를 만들어가고 신뢰를 키우세요." },
                { title: "성실하게 행동하세요.", description: "꾸준한 노력과 성실한 자세로 직장에서 안정적이고 긍정적 결과를 이끄세요." },
                { title: "책임을 다하세요.", description: "맡은 일을 끝까지 완수하며 리더로서의 신뢰와 책임감을 더욱 키워보세요." },
            ],
            TitleDescription: "말의 특성으로 본 " + name + "님의 직장 생활 성공 전략",
            subDescription: [
                { description: "말처럼 꾸준히 노력하며 팀과 함께 목표를 완벽하고 지속적으로 달성하세요." },
                { description: "말처럼 신뢰를 쌓아 안정감 있는 직장 환경을 스스로 직접 만들어 보세요." },
                { description: "말처럼 유연하게 움직이며 변화에 빠르게 적응하고 성장을 꾸준히 이뤄내세요." },
                { description: "말처럼 조화로운 협력으로 팀의 성과를 더욱 높이고 성공으로 이끌어주세요." },
            ],
            imageAlt: "말처럼 자유롭게 도전하고 앞으로 나아가세요",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
        },
        편인: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "분석력을 활용하세요.", description: "문제를 깊이 분석해 독창적인 해결책을 제시하며 신뢰와 성과를 얻으세요." },
                { title: "독립성을 살리세요.", description: "스스로 결정하고 추진하는 능력으로 업무 효율성과 책임감을 높여보세요." },
                { title: "창의력을 발휘하세요.", description: "새로운 아이디어를 제안하며 업무에서 두각을 나타내고 변화를 만들어보세요." },
                { title: "균형을 유지하세요.", description: "혼자만의 시간과 협력을 적절히 조율해 팀원들과 관계를 더욱 다지세요." },
                { title: "성취를 목표로 하세요.", description: "장기적인 목표를 설정하고 꾸준히 노력해 실질적인 성과를 이루세요." },
            ],
            TitleDescription: "올빼미의 특성으로 본 " + name + "님의 직장 생활 성공 전략",
            subDescription: [
                { description: "올빼미처럼 깊은 통찰로 문제를 분석하며 최선의 해법을 찾아보세요." },
                { description: "올빼미처럼 신중하게 판단해 중요한 결정을 현명하고 빠르게 내려보세요." },
                { description: "올빼미처럼 차분하게 상황을 정리하며 냉철한 시각과 균형을 유지하세요." },
                { description: "올빼미처럼 집중력으로 업무를 완수하며 신뢰를 차근차근 쌓아보세요." },
            ],
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
        },
        정인: {
            title: name + '님의 직장 생활 성공 전략을 알려드립니다.',
            subtitle: "성공적인 직장 생활을 위해 현실적인 조언을 제공합니다",
            strengths: [
                { title: "신뢰를 바탕으로 행동하세요.", description: "약속과 책임을 철저히 지키며 동료들에게 믿음과 안정감을 심어주세요." },
                { title: "지식을 넓히세요.", description: "꾸준한 학습과 경험을 통해 전문성을 강화하고 성장의 기회를 만드세요." },
                { title: "조화를 중요시하세요.", description: "타인의 의견을 존중하며 협력을 통해 팀의 성과와 신뢰를 더욱 높여보세요." },
                { title: "안정감을 유지하세요.", description: "차분한 태도로 문제를 해결하며 조직에 안정감과 깊은 신뢰를 제공하세요." },
                { title: "장기적인 목표를 설정하세요.", description: "명확한 목표를 세우고 지속적으로 노력해 성과와 꾸준한 성장을 이뤄내세요." },
            ],
            TitleDescription: "코끼리의 특성으로 본 " + name + "님의 직장 생활 성공 전략",
            subDescription: [
                { description: "코끼리처럼 무거운 책임도 묵묵히 감당하며 신뢰와 존경을 쌓아보세요." },
                { description: "코끼리처럼 기억력으로 약속을 지키며 관계를 더 깊고 단단히 만드세요." },
                { description: "코끼리처럼 느긋한 태도로 상황을 파악하며 안정감과 믿음을 보여주세요." },
                { description: "코끼리처럼 팀원들과 조화롭게 협력하며 목표를 함께 끝까지 이루어보세요." },
            ],
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
        },
    };

    const currentAnalysis = analysisData[result.manseMonthGroundRelation] || {
        title: "데이터 없음",
        subtitle: "해당 관계에 대한 데이터가 준비 중입니다.",
        strengths: [{title: "데이터 없음", description: "해당 관계에 대한 데이터가 없습니다."}],
        TitleDescription: "데이터 없음",
        subDescription: [
            {description: "데이터 없음"},
            {description: "데이터 없음"},
        ],
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report9');
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
                <h1 className="report-title">6. {currentAnalysis.title}</h1>
            </div>
            <p className="report-subtitle">{currentAnalysis.subtitle}</p>

            <div className="report-content">
                <div className="analysis-container">
                    <h2 className="analysis-title">{`${name}님의 직장 생활 성공 전략을 확인하세요`}</h2>
                    <ul className="strengths-list">
                        {currentAnalysis.strengths.map((item, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {item.title}</strong>
                                <br/>
                                <span className="strength-description">- {item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="analysis-image-container">
                    <p>{currentAnalysis.TitleDescription}</p>
                    <img
                        src={currentAnalysis.imageSrc}
                        alt={currentAnalysis.imageAlt}
                        className="analysis-image"
                    />
                    <ul className="strengths-list">
                        {currentAnalysis.subDescription.map((item, index) => (
                            <li key={index}>
                                <strong>👉 {item.description}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="footer-text">강점을 바탕으로 직장에서 목표를 달성하면 성과를 만들어 갈 수 있습니다</p>
        </div>
    );
};

export default SajuReport8;
