package com.km.divination.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.InputStream;

public class LunarToSolarConverter {

    private static final String API_URL = "http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService";
    private static final String API_KEY = "AQYe08EMZO%2FpbTVS6NtJyixJu8Hi7jEcXAkvP1kvQcJxaPjsz3wvC0zIc2krAYuh%2BVEnaLV%2FTaO96R027vnMpA%3D%3D"; // 실제 API 키로 교체하세요

    /**
     * 음력을 양력으로 변환하는 메서드
     * @param lunarDateTime 음력 날짜 및 시간
     * @return 변환된 양력 날짜 및 시간
     */
    public static LocalDateTime convertToSolar(LocalDateTime lunarDateTime) {
        try {
            // API 요청 URL 생성
            String url = String.format(
                    "%s/getLunCalInfo?serviceKey=%s&lunYear=%d&lunMonth=%02d&lunDay=%02d&lunLeapMonth=0",
                    API_URL,
                    API_KEY,
                    lunarDateTime.getYear(),
                    lunarDateTime.getMonthValue(),
                    lunarDateTime.getDayOfMonth()
            );

            // HTTP 연결 설정
            HttpURLConnection connection = (HttpURLConnection) new URL(url).openConnection();
            connection.setRequestMethod("GET");
            connection.setRequestProperty("Content-Type", "application/json");

            // 응답 코드 확인
            int responseCode = connection.getResponseCode();
            if (responseCode != 200) {
                throw new RuntimeException("API 요청 실패. HTTP 응답 코드: " + responseCode);
            }

            // 응답 데이터 파싱
            InputStream inputStream = connection.getInputStream();
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document document = builder.parse(inputStream);

            // XML에서 필요한 데이터 추출
            NodeList items = document.getElementsByTagName("item");
            if (items.getLength() == 0) {
                throw new RuntimeException("제공된 음력 날짜에 대한 변환 데이터를 찾을 수 없습니다.");
            }

            Element item = (Element) items.item(0);
            String solarYear = item.getElementsByTagName("solYear").item(0).getTextContent();
            String solarMonth = item.getElementsByTagName("solMonth").item(0).getTextContent();
            String solarDay = item.getElementsByTagName("solDay").item(0).getTextContent();

            // 결과 양력 날짜 및 시간 생성
            String solarDate = String.format("%s-%s-%sT00:00", solarYear, solarMonth, solarDay);
            return LocalDateTime.parse(solarDate, DateTimeFormatter.ISO_LOCAL_DATE_TIME);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("음력을 양력으로 변환 중 오류 발생: " + e.getMessage());
        }
    }
}
