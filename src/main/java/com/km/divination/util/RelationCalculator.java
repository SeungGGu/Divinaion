package com.km.divination.util;

import java.util.Map;

public class RelationCalculator {

    // 오행과 음양 매핑
    private static final Map<String, String> ELEMENT_MAP = Map.ofEntries(
            Map.entry("甲", "wood"), Map.entry("乙", "wood"),
            Map.entry("丙", "fire"), Map.entry("丁", "fire"),
            Map.entry("戊", "earth"), Map.entry("己", "earth"),
            Map.entry("庚", "metal"), Map.entry("辛", "metal"),
            Map.entry("壬", "water"), Map.entry("癸", "water"),
            Map.entry("子", "water"), Map.entry("丑", "earth"),
            Map.entry("寅", "wood"), Map.entry("卯", "wood"),
            Map.entry("辰", "earth"), Map.entry("巳", "fire"),
            Map.entry("午", "fire"), Map.entry("未", "earth"),
            Map.entry("申", "metal"), Map.entry("酉", "metal"),
            Map.entry("戌", "earth"), Map.entry("亥", "water")
    );

    private static final Map<String, String> YIN_YANG_MAP = Map.ofEntries(
            Map.entry("甲", "+"), Map.entry("乙", "-"),
            Map.entry("丙", "+"), Map.entry("丁", "-"),
            Map.entry("戊", "+"), Map.entry("己", "-"),
            Map.entry("庚", "+"), Map.entry("辛", "-"),
            Map.entry("壬", "+"), Map.entry("癸", "-"),
            Map.entry("子", "-"), Map.entry("丑", "-"),
            Map.entry("寅", "+"), Map.entry("卯", "-"),
            Map.entry("辰", "+"), Map.entry("巳", "+"),
            Map.entry("午", "-"), Map.entry("未", "-"),
            Map.entry("申", "+"), Map.entry("酉", "-"),
            Map.entry("戌", "+"), Map.entry("亥", "+")
    );

    private static final Map<String, String> PRODUCES = Map.ofEntries(
            Map.entry("wood", "fire"),
            Map.entry("fire", "earth"),
            Map.entry("earth", "metal"),
            Map.entry("metal", "water"),
            Map.entry("water", "wood")
    );

    private static final Map<String, String> CONTROLS = Map.ofEntries(
            Map.entry("wood", "earth"),
            Map.entry("fire", "metal"),
            Map.entry("earth", "water"),
            Map.entry("metal", "wood"),
            Map.entry("water", "fire")
    );

    public static String calculateTenkanRelation(String daySky, String targetSky) {
        return calculateRelation(daySky, targetSky);
    }

    public static String calculateJijiRelation(String dayGround, String targetGround) {
        return calculateRelation(dayGround, targetGround);
    }

    private static String calculateRelation(String day, String target) {
        String dayElement = ELEMENT_MAP.get(day);
        String dayYinYang = YIN_YANG_MAP.get(day);

        String targetElement = ELEMENT_MAP.get(target);
        String targetYinYang = YIN_YANG_MAP.get(target);

        if (dayElement == null || targetElement == null) {
            throw new IllegalArgumentException("Invalid element input: " + day + " or " + target);
        }

        // 비견/겁재: 오행이 같음
        if (dayElement.equals(targetElement)) {
            return dayYinYang.equals(targetYinYang) ? "비견" : "겁재";
        }

        // 식신/상관: 내가 생하는 오행
        if (PRODUCES.get(dayElement).equals(targetElement)) {
            return dayYinYang.equals(targetYinYang) ? "식신" : "상관";
        }

        // 편재/정재: 내가 극하는 오행
        if (CONTROLS.get(dayElement).equals(targetElement)) {
            return dayYinYang.equals(targetYinYang) ? "편재" : "정재";
        }

        // 편인/정인: 나를 생하는 오행
        if (PRODUCES.get(targetElement).equals(dayElement)) {
            return dayYinYang.equals(targetYinYang) ? "편인" : "정인";
        }

        // 편관/정관: 나를 극하는 오행
        if (CONTROLS.get(targetElement).equals(dayElement)) {
            return dayYinYang.equals(targetYinYang) ? "편관" : "정관";
        }

        return "관계 없음"; // 매칭되지 않을 경우
    }
}
