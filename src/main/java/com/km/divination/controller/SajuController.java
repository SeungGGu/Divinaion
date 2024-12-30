package com.km.divination.controller;

import com.km.divination.service.SajuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/saju")
public class SajuController {

    @Autowired
    private SajuService sajuService;

    @PostMapping("/calculate")
    public ResponseEntity<Map<String, Object>> calculateSaju(@RequestBody Map<String, String> request) {
        Map<String, Object> sajuData = sajuService.calculateSaju(
                request.get("birthDate"),
                request.get("birthTime"),
                request.get("birthdayType"),
                request.get("gender")
        );
        return ResponseEntity.ok(sajuData); // 올바른 JSON 반환
    }
}
