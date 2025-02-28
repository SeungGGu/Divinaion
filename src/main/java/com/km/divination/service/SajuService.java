package com.km.divination.service;

import com.km.divination.util.LunarToSolarConverter;
import com.km.divination.util.RelationCalculator;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@Service
public class SajuService {
    private static final int[] SOLAR_TERM_INTERVALS = {
            0, 21355, 42843, 64498, 86335, 108366, 130578, 152958, 175471, 198077,
            220728, 243370, 265955, 288432, 310767, 332928, 354903, 376685, 398290,
            419736, 441060, 462295, 483493, 504693, 525949
    };

    private static final String[] SOLAR_TERMS = {
            "입춘", "우수", "경칩", "춘분", "청명", "곡우", "입하", "소만",
            "망종", "하지", "소서", "대서", "입추", "처서", "백로", "추분",
            "한로", "상강", "입동", "소설", "대설", "동지", "소한", "대한"
    };

    private static final String[] TENKAN_CYCLE = {"甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"};
    private static final String[] JIJI_CYCLE = {"子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"};

    private static final LocalDateTime[][] DST_PERIODS = {
            {LocalDateTime.of(1948, 6, 1, 0, 0), LocalDateTime.of(1948, 9, 13, 0, 0)},
            {LocalDateTime.of(1949, 4, 3, 0, 0), LocalDateTime.of(1949, 9, 11, 0, 0)},
            {LocalDateTime.of(1950, 4, 1, 0, 0), LocalDateTime.of(1950, 9, 10, 0, 0)},
            {LocalDateTime.of(1951, 5, 6, 0, 0), LocalDateTime.of(1951, 9, 9, 0, 0)},
            {LocalDateTime.of(1955, 5, 5, 0, 0), LocalDateTime.of(1955, 9, 9, 0, 0)},
            {LocalDateTime.of(1956, 5, 20, 0, 0), LocalDateTime.of(1956, 9, 30, 0, 0)},
            {LocalDateTime.of(1957, 5, 5, 0, 0), LocalDateTime.of(1957, 9, 22, 0, 0)},
            {LocalDateTime.of(1958, 5, 4, 0, 0), LocalDateTime.of(1958, 9, 21, 0, 0)},
            {LocalDateTime.of(1959, 5, 3, 0, 0), LocalDateTime.of(1959, 9, 20, 0, 0)},
            {LocalDateTime.of(1960, 5, 1, 0, 0), LocalDateTime.of(1960, 9, 18, 0, 0)},
            {LocalDateTime.of(1987, 5, 10, 2, 0), LocalDateTime.of(1987, 10, 11, 3, 0)},
            {LocalDateTime.of(1988, 5, 8, 2, 0), LocalDateTime.of(1988, 10, 9, 3, 0)}
    };

    private static final LocalDateTime[][] LONGITUDE_PERIODS = {
            {LocalDateTime.of(1908, 4, 1, 0, 0), LocalDateTime.of(1911, 12, 31, 23, 59)},
            {LocalDateTime.of(1954, 3, 21, 0, 0), LocalDateTime.of(1961, 8, 9, 23, 59)}
    };

    public Map<String, Object> calculateSaju(String birthDate, String birthTime, String birthdayType, String gender) {
        System.out.println("================================");
        System.out.println("calculateSaju - 원본 입력 시간: " + birthDate + " " + birthTime);

        try {
            LocalDateTime birthDateTime = parseDateTime(birthDate, birthTime);
            System.out.println("calculateSaju - 파싱된 시간: " + birthDateTime);

            if ("LUNAR".equals(birthdayType)) {
                System.out.println("calculateSaju - 음력을 양력으로 변환");
                birthDateTime = LunarToSolarConverter.convertToSolar(birthDateTime);
                System.out.println("calculateSaju - 변환된 양력 시간: " + birthDateTime);
            }

            birthDateTime = adjustForLongitude(birthDateTime);
            birthDateTime = adjustForSummertime(birthDateTime);

            System.out.println("최종 시간 조정 후 : " + birthDateTime); // 변경된 시간을 출력하여 확인

            String[] sajuElements = calculateSajuElements(birthDateTime);

            System.out.println("calculateSajuElements - 연주: " + sajuElements[0] + sajuElements[1]);
            System.out.println("calculateSajuElements - 월주: " + sajuElements[2] + sajuElements[3]);
            System.out.println("calculateSajuElements - 일주: " + sajuElements[4] + sajuElements[5]);
            System.out.println("calculateSajuElements - 시주: " + sajuElements[6] + sajuElements[7]);

            Map<String, String> relations = new HashMap<>();

            // 천간 관계
            String manseYearSkyRelation = RelationCalculator.calculateTenkanRelation(sajuElements[4], sajuElements[0]);
            String manseMonthSkyRelation = RelationCalculator.calculateTenkanRelation(sajuElements[4], sajuElements[2]);
            String manseTimeSkyRelation = RelationCalculator.calculateTenkanRelation(sajuElements[4], sajuElements[6]);
            relations.put("manseYearSkyRelation", manseYearSkyRelation);
            relations.put("manseMonthSkyRelation", manseMonthSkyRelation);
            relations.put("manseTimeSkyRelation", manseTimeSkyRelation);

            // 지지 관계
            String manseYearGroundRelation = RelationCalculator.calculateJijiRelation(sajuElements[4], sajuElements[1]);
            String manseMonthGroundRelation = RelationCalculator.calculateJijiRelation(sajuElements[4], sajuElements[3]);
            String manseDayGroundRelation = RelationCalculator.calculateJijiRelation(sajuElements[4], sajuElements[5]);
            String manseTimeGroundRelation = RelationCalculator.calculateJijiRelation(sajuElements[4], sajuElements[7]);
            relations.put("manseYearGroundRelation", manseYearGroundRelation);
            relations.put("manseMonthGroundRelation", manseMonthGroundRelation);
            relations.put("manseDayGroundRelation", manseDayGroundRelation);
            relations.put("manseTimeGroundRelation", manseTimeGroundRelation);

            Map<String, Object> result = new HashMap<>();
            result.put("yearSky", sajuElements[0]);
            result.put("yearGround", sajuElements[1]);
            result.put("monthSky", sajuElements[2]);
            result.put("monthGround", sajuElements[3]);
            result.put("daySky", sajuElements[4]);
            result.put("dayGround", sajuElements[5]);
            result.put("timeSky", sajuElements[6]);
            result.put("timeGround", sajuElements[7]);

            // 관계를 결과에 포함
            result.putAll(relations);

            System.out.println("최종 Saju Data: " + result);

            return Map.of("status", "success", "data", result);
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("calculateSaju - 오류 발생: " + e.getMessage());
            return Map.of("status", "error", "message", e.getMessage());
        }
    }

    private LocalDateTime adjustForLongitude(LocalDateTime dateTime) {
        boolean adjusted = false;
        for (LocalDateTime[] period : LONGITUDE_PERIODS) {
            if (!dateTime.isBefore(period[0]) && dateTime.isBefore(period[1])) {
                System.out.println("adjustForLongitude - 동경시 조정 없음: " + dateTime);
                return dateTime; // 조정하지 않음
            }
        }
        if (!adjusted) {
            System.out.println("adjustForLongitude - 동경시 조정 적용 전: " + dateTime);
            dateTime = dateTime.minusMinutes(30);
            System.out.println("adjustForLongitude - 동경시 조정 적용 후: " + dateTime);
        }
        return dateTime;
    }

    private LocalDateTime adjustForSummertime(LocalDateTime dateTime) {
        for (LocalDateTime[] period : DST_PERIODS) {
            if (!dateTime.isBefore(period[0]) && dateTime.isBefore(period[1])) {
                System.out.println("adjustForSummertime - 써머타임 조정 적용 전: " + dateTime);
                dateTime = dateTime.minusHours(1);
                System.out.println("adjustForSummertime - 써머타임 조정 적용 후: " + dateTime);
                return dateTime;
            }
        }
        return dateTime;
    }

    private String[] calculateSajuElements(LocalDateTime birthDateTime) {
        // 기준값 설정
        LocalDate baseDate = LocalDate.of(1864, 2, 4);
        int baseTenKanIndex = 0;
        int baseJiJiIndex = 0;
        int baseDayTenKanIndex = 5; // 일주의 천간 기준 (己)
        int baseDayJiJiIndex = 11;  // 일주의 지지 기준 (亥)

        System.out.println("일주의 천간 기준 : " + TENKAN_CYCLE[baseDayTenKanIndex]);
        System.out.println("일주의 지지 기준 : " + JIJI_CYCLE[baseDayJiJiIndex]);

        // 연주 계산
        int yearsSinceBase = birthDateTime.getYear() - 1864;
        if (birthDateTime.isBefore(LocalDateTime.of(birthDateTime.getYear(), 2, 4, 0, 0))) {
            yearsSinceBase -= 1; // 입춘 이전은 이전 해로 간주
        }
        int yearTenKanIndex = (baseTenKanIndex + yearsSinceBase) % 10;
        int yearJiJiIndex = (baseJiJiIndex + yearsSinceBase) % 12;
        String yearTenKan = TENKAN_CYCLE[yearTenKanIndex];
        String yearJiJi = JIJI_CYCLE[yearJiJiIndex];

        // 날짜 변경 로직 (야자시 & 조자시 적용)
        int hour = birthDateTime.getHour();
        int minute = birthDateTime.getMinute();

        // 일주 계산
        if (birthDateTime.getHour() == 23) {
            birthDateTime = birthDateTime.plusDays(1); // 자시 이후는 다음 날로 간주
        }

        // 월주 계산
        int solarTermIndex = getSolarTermIndex(birthDateTime);
        if (solarTermIndex == 24) {
            solarTermIndex = 0;
        }
        String[] monthTenKanGround = getMonthTenKanGround(yearTenKan, solarTermIndex);
        String monthTenKan = monthTenKanGround[0];
        String monthJiJi = monthTenKanGround[1];

        // 일주 계산
        long totalDaysSinceBase = java.time.temporal.ChronoUnit.DAYS.between(baseDate, birthDateTime.toLocalDate());
        int cycleIndex = (int) (totalDaysSinceBase % 60);
        int dayTenKanIndex = (baseDayTenKanIndex + cycleIndex) % 10;
        int dayJiJiIndex = (baseDayJiJiIndex + cycleIndex) % 12;
        String dayTenKan = TENKAN_CYCLE[dayTenKanIndex];
        String dayJiJi = JIJI_CYCLE[dayJiJiIndex];

        System.out.println("경과일 계산: totalDaysSinceBase=" + totalDaysSinceBase);
        System.out.println("일주 계산: 일간=" + dayTenKan + ", 일지=" + dayJiJi);

        // ✅ 시주 계산에서 01:30 이후는 확실히 丑時(축시)로 변경되도록 보장
        int timeIndex = calculateTimeIndex(birthDateTime);
        if (hour == 1 && minute >= 30) {
            timeIndex = 1; // 01:30 이후부터는 丑時(축시)로 설정
        }
        String timeTenKan = calculateTimeTenKan(dayTenKan, timeIndex);
        String timeJiJi = JIJI_CYCLE[timeIndex % 12];

        return new String[]{yearTenKan, yearJiJi, monthTenKan, monthJiJi, dayTenKan, dayJiJi, timeTenKan, timeJiJi};
    }

    private String[] getMonthTenKanGround(String yearTenKan, int solarTermIndex) {
        // 하드코딩된 월주 데이터
        Map<String, String[][]> monthlyTable = Map.of(
                // 갑(甲) 및 기(己) 연간
                "甲", new String[][]{
                        {"丙", "寅"}, {"丁", "卯"}, {"戊", "辰"}, {"己", "巳"}, {"庚", "午"}, {"辛", "未"},
                        {"壬", "申"}, {"癸", "酉"}, {"甲", "戌"}, {"乙", "亥"}, {"丙", "子"}, {"丁", "丑"}
                },
                "己", new String[][]{
                        {"丙", "寅"}, {"丁", "卯"}, {"戊", "辰"}, {"己", "巳"}, {"庚", "午"}, {"辛", "未"},
                        {"壬", "申"}, {"癸", "酉"}, {"甲", "戌"}, {"乙", "亥"}, {"丙", "子"}, {"丁", "丑"}
                },

                // 을(乙) 및 경(庚) 연간
                "乙", new String[][]{
                        {"戊", "寅"}, {"己", "卯"}, {"庚", "辰"}, {"辛", "巳"}, {"壬", "午"}, {"癸", "未"},
                        {"甲", "申"}, {"乙", "酉"}, {"丙", "戌"}, {"丁", "亥"}, {"戊", "子"}, {"己", "丑"}
                },
                "庚", new String[][]{
                        {"戊", "寅"}, {"己", "卯"}, {"庚", "辰"}, {"辛", "巳"}, {"壬", "午"}, {"癸", "未"},
                        {"甲", "申"}, {"乙", "酉"}, {"丙", "戌"}, {"丁", "亥"}, {"戊", "子"}, {"己", "丑"}
                },

                // 병(丙) 및 신(辛) 연간
                "丙", new String[][]{
                        {"庚", "寅"}, {"辛", "卯"}, {"壬", "辰"}, {"癸", "巳"}, {"甲", "午"}, {"乙", "未"},
                        {"丙", "申"}, {"丁", "酉"}, {"戊", "戌"}, {"己", "亥"}, {"庚", "子"}, {"辛", "丑"}
                },
                "辛", new String[][]{
                        {"庚", "寅"}, {"辛", "卯"}, {"壬", "辰"}, {"癸", "巳"}, {"甲", "午"}, {"乙", "未"},
                        {"丙", "申"}, {"丁", "酉"}, {"戊", "戌"}, {"己", "亥"}, {"庚", "子"}, {"辛", "丑"}
                },

                // 정(丁) 및 임(壬) 연간
                "丁", new String[][]{
                        {"壬", "寅"}, {"癸", "卯"}, {"甲", "辰"}, {"乙", "巳"}, {"丙", "午"}, {"丁", "未"},
                        {"戊", "申"}, {"己", "酉"}, {"庚", "戌"}, {"辛", "亥"}, {"壬", "子"}, {"癸", "丑"}
                },
                "壬", new String[][]{
                        {"壬", "寅"}, {"癸", "卯"}, {"甲", "辰"}, {"乙", "巳"}, {"丙", "午"}, {"丁", "未"},
                        {"戊", "申"}, {"己", "酉"}, {"庚", "戌"}, {"辛", "亥"}, {"壬", "子"}, {"癸", "丑"}
                },

                // 무(戊) 및 계(癸) 연간
                "戊", new String[][]{
                        {"甲", "寅"}, {"乙", "卯"}, {"丙", "辰"}, {"丁", "巳"}, {"戊", "午"}, {"己", "未"},
                        {"庚", "申"}, {"辛", "酉"}, {"壬", "戌"}, {"癸", "亥"}, {"甲", "子"}, {"乙", "丑"}
                },
                "癸", new String[][]{
                        {"甲", "寅"}, {"乙", "卯"}, {"丙", "辰"}, {"丁", "巳"}, {"戊", "午"}, {"己", "未"},
                        {"庚", "申"}, {"辛", "酉"}, {"壬", "戌"}, {"癸", "亥"}, {"甲", "子"}, {"乙", "丑"}
                }
        );

        String[][] table = monthlyTable.getOrDefault(yearTenKan, new String[12][2]);
        int monthIndex = solarTermIndex / 2;
        return table[monthIndex];
    }

    private int getSolarTermIndex(LocalDateTime birthDateTime) {
        // 기준 입춘 날짜 계산
        LocalDateTime ipChun = calculateIpChun(birthDateTime.getYear());
        LocalDateTime[] solarTerms = calculateSolarTermsWithAdjustment(ipChun);

        // 절기 인덱스 계산 (시간까지 고려)
        for (int i = 0; i < solarTerms.length - 1; i++) {
            if (!birthDateTime.isBefore(solarTerms[i]) && birthDateTime.isBefore(solarTerms[i + 1])) {
                System.out.println("현재 절기: " + SOLAR_TERMS[i % 24] + " (절기 시작 시간: " + solarTerms[i] + ")");
                return i % 24; // 인덱스가 24를 넘을 경우 순환하여 반환
            }
        }

        System.out.println("현재 절기: " + SOLAR_TERMS[23] + " (절기 시작 시간: " + solarTerms[23] + ")");
        return 23;
    }

    private LocalDateTime[] calculateSolarTermsWithAdjustment(LocalDateTime ipChun) {
        LocalDateTime[] solarTerms = new LocalDateTime[SOLAR_TERM_INTERVALS.length];
        for (int i = 0; i < SOLAR_TERM_INTERVALS.length; i++) {
            LocalDateTime originalTerm = ipChun.plusMinutes(SOLAR_TERM_INTERVALS[i]);
            solarTerms[i] = adjustSolarTermForLongitudeAndDST(originalTerm);
        }
        return solarTerms;
    }

    private LocalDateTime calculateIpChun(int year) {
        LocalDate baseDate = LocalDate.of(1996, 2, 4); // 1996년 입춘 기준
        long minutesSinceBase = (year - 1996) * 525949L; // 1년간 분
        return baseDate.atStartOfDay().plusMinutes(minutesSinceBase);
    }

    private LocalDateTime adjustSolarTermForLongitudeAndDST(LocalDateTime term) {
        LocalDateTime periodStart1 = LocalDateTime.of(1908, 4, 1, 0, 0);
        LocalDateTime periodEnd1 = LocalDateTime.of(1911, 12, 31, 23, 59);
        LocalDateTime periodStart2 = LocalDateTime.of(1954, 3, 21, 0, 0);
        LocalDateTime periodEnd2 = LocalDateTime.of(1961, 8, 9, 23, 59);

        if (!(term.isAfter(periodStart1) && term.isBefore(periodEnd1)) &&
                !(term.isAfter(periodStart2) && term.isBefore(periodEnd2))) {
            term = term.minusMinutes(30);
        }

        return term;
    }

    private int calculateTimeIndex(LocalDateTime birthDateTime) {
        int hour = birthDateTime.getHour();
        int minute = birthDateTime.getMinute();

        int timeIndex;

        if ((hour == 23 && minute >= 0) || (hour == 0) || (hour == 1 && minute < 0)) {
            timeIndex = 0; // 子時 (자시)
        } else if ((hour == 1 && minute >= 0) || (hour == 2) || (hour == 3 && minute < 0)) {
            timeIndex = 1; // 丑時 (축시)
        } else if ((hour == 3 && minute >= 0) || (hour == 4) || (hour == 5 && minute < 0)) {
            timeIndex = 2; // 寅時 (인시)
        } else if ((hour == 5 && minute >= 0) || (hour == 6) || (hour == 7 && minute < 0)) {
            timeIndex = 3; // 卯時 (묘시)
        } else if ((hour == 7 && minute >= 0) || (hour == 8) || (hour == 9 && minute < 0)) {
            timeIndex = 4; // 辰時 (진시)
        } else if ((hour == 9 && minute >= 0) || (hour == 10) || (hour == 11 && minute < 0)) {
            timeIndex = 5; // 巳時 (사시)
        } else if ((hour == 11 && minute >= 0) || (hour == 12) || (hour == 13 && minute < 0)) {
            timeIndex = 6; // 午時 (오시)
        } else if ((hour == 13 && minute >= 0) || (hour == 14) || (hour == 15 && minute < 0)) {
            timeIndex = 7; // 未時 (미시)
        } else if ((hour == 15 && minute >= 0) || (hour == 16) || (hour == 17 && minute < 0)) {
            timeIndex = 8; // 申時 (신시)
        } else if ((hour == 17 && minute >= 0) || (hour == 18) || (hour == 19 && minute < 0)) {
            timeIndex = 9; // 酉時 (유시)
        } else if ((hour == 19 && minute >= 0) || (hour == 20) || (hour == 21 && minute < 0)) {
            timeIndex = 10; // 戌時 (술시)
        } else {
            timeIndex = 11; // 亥時 (해시)
        }

        System.out.println("calculateTimeIndex - 입력 시간: " + hour + ":" + minute + " -> 시주 인덱스: " + timeIndex + " (" + JIJI_CYCLE[timeIndex] + ")");
        return timeIndex;
    }

    private String calculateTimeTenKan(String dayTenKan, int timeIndex) {
        // 표에서 가져온 천간 조합
        Map<String, String[]> timeTenKanMap = Map.of(
                "甲", new String[]{"甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸", "甲", "乙"},
                "乙", new String[]{"丙", "丁", "戊", "己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁"},
                "丙", new String[]{"戊", "己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己"},
                "丁", new String[]{"庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛"},
                "戊", new String[]{"壬", "癸", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"},
                "己", new String[]{"甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸", "甲", "乙"},
                "庚", new String[]{"丙", "丁", "戊", "己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁"},
                "辛", new String[]{"戊", "己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己"},
                "壬", new String[]{"庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛"},
                "癸", new String[]{"壬", "癸", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"}
        );
        return timeTenKanMap.get(dayTenKan)[timeIndex];
    }

    private LocalDateTime parseDateTime(String birthDate, String birthTime) {
        try {
            // 입력된 날짜와 시간 조합
            String input = birthDate + " " + birthTime;
            System.out.println("parseDateTime - 입력된 날짜와 시간: " + input);

            // 날짜 및 시간 형식 지정
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm");
            LocalDateTime parsedDateTime = LocalDateTime.parse(input, formatter);

            System.out.println("parseDateTime - 파싱된 날짜와 시간: " + parsedDateTime);
            return parsedDateTime;
        } catch (Exception e) {
            System.err.println("parseDateTime - 날짜 및 시간 파싱 오류: " + e.getMessage());
            throw new RuntimeException("입력된 날짜 또는 시간의 형식이 잘못되었습니다: " + e.getMessage());
        }
    }
}
