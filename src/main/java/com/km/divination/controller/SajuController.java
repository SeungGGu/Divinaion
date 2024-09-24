package com.km.divination.controller;

import com.km.divination.dto.UserDTO;
import com.km.divination.service.SajuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/saju")
public class SajuController {

    @Autowired
    private SajuService sajuService;

    @PostMapping("/calculate")
    public String calculateSaju(@RequestBody UserDTO userDTO) {
        // 생년월일과 출생 시간을 이용하여 사주를 계산
        return sajuService.calculateSaju(userDTO.getBirthDate(), userDTO.getBirthTime());
    }
}
