package com.example.demo.controller;

import com.example.demo.service.OrderService;
import com.example.demo.vo.OrderVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderService orderService;


    // 해당 유저의 주문목록 모두 가져오기
    @GetMapping("/getuserorderlist/{user_email}")
    public List<OrderVO> getUserOrderList(@PathVariable String user_email){
        System.out.println("getUserOrderList Success!");
        System.out.println("user_email : "+user_email);
        return orderService.getUserOrderList(user_email);
    }
}