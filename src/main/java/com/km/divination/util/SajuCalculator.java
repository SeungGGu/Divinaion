package com.km.divination.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.time.format.DateTimeFormatter;

import org.w3c.dom.Element;
import org.xml.sax.InputSource;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;

import java.io.StringReader;

public class SajuCalculator {

    private static final String[] tenKan = {"갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"};
    private static final String[] twelveJi = {"자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"};

    // 사주 계산 결과를 담을 클래스
    public static class SajuResult {
        public String yearGan;
        public String yearJi;
        public String monthGan;
        public String monthJi;
        public String dayGan;
        public String dayJi;
        public String timeGan;
        public String timeJi;

        @Override
        public String toString() {
            return String.format("년주: %s%s, 월주: %s%s, 일주: %s%s, 시주: %s%s", yearGan, yearJi, monthGan, monthJi, dayGan, dayJi, timeGan, timeJi);
        }
    }

    // 절기 데이터를 포함한 사주 계산 메서드
    public static SajuResult calculateSaju(LocalDateTime birthDateTime, String solarTermsXml) {
        try {
            // XML 파싱을 통해 필요한 절기 데이터 추출
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document doc = builder.parse(new InputSource(new StringReader(solarTermsXml)));

            NodeList solarTermNodes = doc.getElementsByTagName("item");
            String solarTerm = extractRelevantSolarTerm(solarTermNodes, birthDateTime);

            // 사주 결과 객체 생성
            SajuResult sajuResult = new SajuResult();

            // 연주 계산
            int year = birthDateTime.getYear();
            sajuResult.yearGan = getTenKan(year);
            sajuResult.yearJi = getTwelveJi(year);

            // 절기 데이터를 사용하여 월간과 월지 계산
            sajuResult.monthGan = getMonthGan(sajuResult.yearGan, solarTerm);
            sajuResult.monthJi = getTwelveJiForSolarTerm(solarTerm);

            // 일간과 일지 계산
            sajuResult.dayGan = getDayGan(birthDateTime);
            sajuResult.dayJi = getTwelveJiForDay(birthDateTime);

            // 시주 계산
            String[] timeGanJi = getSiFromTime(birthDateTime).split(",");
            sajuResult.timeGan = timeGanJi[0];
            sajuResult.timeJi = timeGanJi[1];

            // 결과 반환
            return sajuResult;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // 절기 데이터 파싱
    private static String extractRelevantSolarTerm(NodeList solarTermNodes, LocalDateTime birthDateTime) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        for (int i = 0; i < solarTermNodes.getLength(); i++) {
            Element item = (Element) solarTermNodes.item(i);
            String locDate = item.getElementsByTagName("locdate").item(0).getTextContent();
            LocalDate solarTermDate = LocalDate.parse(locDate, formatter);

            if (birthDateTime.toLocalDate().isBefore(solarTermDate)) {
                return item.getElementsByTagName("dateName").item(0).getTextContent();
            }
        }
        Element lastItem = (Element) solarTermNodes.item(solarTermNodes.getLength() - 1);
        return lastItem.getElementsByTagName("dateName").item(0).getTextContent();
    }

    // 절기 데이터를 기반으로 월간을 계산
    private static String getMonthGan(String yearGan, String solarTerms) {
        int ganIndex = getIndexFromTenKan(yearGan);
        int solarTermIndex = getIndexFromSolarTerms(solarTerms);

        // 입춘 전후에 따라 연도를 조정
        if (solarTermIndex < 3) { // 1월과 2월 초반은 전년도에 해당
            ganIndex -= 1;
        }
        int monthGanIndex = (ganIndex + solarTermIndex) % 10; // 천간은 10개 순환
        return tenKan[monthGanIndex];
    }


    // 절기 데이터를 기반으로 월지 계산
    private static String getTwelveJiForSolarTerm(String solarTerms) {
        int solarTermIndex = getIndexFromSolarTerms(solarTerms);
        return twelveJi[solarTermIndex % 12];
    }

    // 절기 이름을 기반으로 인덱스 반환
    private static int getIndexFromSolarTerms(String solarTerms) {
        switch (solarTerms) {
            case "입춘":
                return 0;
            case "우수":
                return 1;
            case "경칩":
                return 2;
            case "춘분":
                return 3;
            case "청명":
                return 4;
            case "곡우":
                return 5;
            case "입하":
                return 6;
            case "소만":
                return 7;
            case "망종":
                return 8;
            case "하지":
                return 9;
            case "소서":
                return 10;
            case "대서":
                return 11;
            case "입추":
                return 12;
            case "처서":
                return 13;
            case "백로":
                return 14;
            case "추분":
                return 15;
            case "한로":
                return 16;
            case "상강":
                return 17;
            case "입동":
                return 18;
            case "소설":
                return 19;
            case "대설":
                return 20;
            case "동지":
                return 21;
            case "소한":
                return 22;
            case "대한":
                return 23;
            default:
                return 0;
        }
    }

    // 연간에 따른 천간 인덱스 찾기
    private static int getIndexFromTenKan(String yearGan) {
        for (int i = 0; i < tenKan.length; i++) {
            if (tenKan[i].equals(yearGan)) {
                return i;
            }
        }
        return 0;
    }

    private static String getTenKan(int year) {
        return tenKan[(year - 4) % 10];
    }

    private static String getTwelveJi(int year) {
        return twelveJi[(year - 4) % 12];
    }

    private static String getDayGan(LocalDateTime birthDateTime) {
        // 일간은 출생일에 따라 천간이 결정됨. 이를 정확히 계산하기 위해 특정 규칙을 적용.
        return tenKan[(birthDateTime.getDayOfYear() % 10)];
    }

    private static String getTwelveJiForDay(LocalDateTime birthDateTime) {
        return twelveJi[birthDateTime.getDayOfYear() % 12];
    }

    // 시주 계산 (생시 기반의 천간, 지지)
    private static String getSiFromTime(LocalDateTime dateTime) {
        int hour = dateTime.getHour();
        int index = hour / 2; // 시각을 2시간 단위로 나눈 후 지지 계산
        String ji = twelveJi[index % 12];

        // 시지에 맞춰 시간을 계산 (시간에 따른 천간은 10개 중 일부만 사용됨)
        String dayGan = getDayGan(dateTime);
        int dayGanIndex = getIndexFromTenKan(dayGan);
        String[] timeGanList = {"갑", "병", "무", "경", "임", "갑", "병", "무", "경", "임"};
        String gan = timeGanList[(hour / 2 + dayGanIndex) % 10]; // 천간의 순환에 맞춰 계산

        return gan + "," + ji;
    }
}
