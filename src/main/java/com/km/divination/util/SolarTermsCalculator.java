package com.km.divination.util;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

public class SolarTermsCalculator {

    // 절기 데이터를 저장할 Map (대략적인 절기 날짜를 기준으로)
    private static final Map<String, LocalDateTime> solarTerms = new HashMap<>();

    static {
        solarTerms.put("입춘", LocalDateTime.of(2024, 2, 4, 5, 28));
        solarTerms.put("우수", LocalDateTime.of(2024, 2, 19, 0, 54));
        solarTerms.put("경칩", LocalDateTime.of(2024, 3, 5, 22, 55));
        solarTerms.put("춘분", LocalDateTime.of(2024, 3, 20, 17, 15));
        solarTerms.put("청명", LocalDateTime.of(2024, 4, 4, 16, 24));
        solarTerms.put("곡우", LocalDateTime.of(2024, 4, 20, 10, 59));
        solarTerms.put("입하", LocalDateTime.of(2024, 5, 5, 19, 21));
        solarTerms.put("소만", LocalDateTime.of(2024, 5, 21, 15, 6));
        solarTerms.put("망종", LocalDateTime.of(2024, 6, 6, 8, 58));
        solarTerms.put("하지", LocalDateTime.of(2024, 6, 21, 23, 51));
        // 나머지 절기도 동일하게 추가...
    }

    // 출생일이 어느 절기에 속하는지 확인하는 메서드
    public static String getSolarTerm(LocalDateTime birthDateTime) {
        String previousTerm = null;

        for (Map.Entry<String, LocalDateTime> entry : solarTerms.entrySet()) {
            LocalDateTime solarTermStart = entry.getValue();
            if (birthDateTime.isBefore(solarTermStart)) {
                return previousTerm != null ? previousTerm : "대한";  // 가장 마지막 절기인 대한
            }
            previousTerm = entry.getKey();
        }

        return previousTerm;
    }
}