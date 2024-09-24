package com.km.divination.util;

import java.time.LocalDateTime;

public class SajuCalculator {

    private static final String[] tenKan = {"갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"};
    private static final String[] twelveJi = {"자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"};

    // 절기 데이터를 포함한 사주 계산 메서드 (LocalDateTime과 String 매개변수)
    public static String calculateSaju(LocalDateTime birthDateTime, String solarTerms) {
        // 연주, 월주, 일주, 시주 계산
        int year = birthDateTime.getYear();
        String yearGan = getTenKan(year);
        String yearJi = getTwelveJi(year);

        // 절기 데이터를 사용하여 월간과 월지 계산
        String monthGan = getMonthGan(yearGan, solarTerms);
        String monthJi = getTwelveJiForSolarTerm(solarTerms);

        // 일간과 일지 계산
        String dayGan = getDayGan(birthDateTime);
        String dayJi = getTwelveJiForDay(birthDateTime);

        // 시주 계산
        String timeGanJi = getSiFromTime(birthDateTime);

        // 결과 출력
        return String.format("년주: %s%s, 월주: %s%s, 일주: %s%s, 시주: %s", yearGan, yearJi, monthGan, monthJi, dayGan, dayJi, timeGanJi);
    }

    // 연간에 따른 월간 계산
    private static String getMonthGan(String yearGan, String solarTerms) {
        // 절기 데이터를 기반으로 월간 계산 로직 추가 가능
        return tenKan[0];  // 임시 로직
    }

    private static String getTwelveJiForSolarTerm(String solarTerms) {
        return twelveJi[0];  // 임시 로직
    }

    private static String getTenKan(int year) {
        return tenKan[(year - 4) % 10];
    }

    private static String getTwelveJi(int year) {
        return twelveJi[(year - 4) % 12];
    }

    private static String getDayGan(LocalDateTime birthDateTime) {
        return tenKan[(birthDateTime.getDayOfYear() % 10)];
    }

    private static String getTwelveJiForDay(LocalDateTime birthDateTime) {
        return twelveJi[birthDateTime.getDayOfYear() % 12];
    }

    private static String getSiFromTime(LocalDateTime dateTime) {
        int hour = dateTime.getHour();
        if (hour >= 23 || hour < 1) {
            return "자시";
        } else if (hour >= 1 && hour < 3) {
            return "축시";
        } else if (hour >= 3 && hour < 5) {
            return "인시";
        } else if (hour >= 5 && hour < 7) {
            return "묘시";
        } else if (hour >= 7 && hour < 9) {
            return "진시";
        } else if (hour >= 9 && hour < 11) {
            return "사시";
        } else if (hour >= 11 && hour < 13) {
            return "오시";
        } else if (hour >= 13 && hour < 15) {
            return "미시";
        } else if (hour >= 15 && hour < 17) {
            return "신시";
        } else if (hour >= 17 && hour < 19) {
            return "유시";
        } else if (hour >= 19 && hour < 21) {
            return "술시";
        } else {
            return "해시";
        }
    }
}
