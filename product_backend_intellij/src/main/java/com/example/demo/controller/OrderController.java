package com.example.demo.controller;

import com.example.demo.service.OrderService;
import com.example.demo.vo.OrderDetailVO;
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

    // 해당 주문건 취소 요청하기
    @GetMapping("/returnorder/{order_id}")
    public void returnOrder(@PathVariable String order_id){
        System.out.println("returnOrder Success!");
        System.out.println("order_id : "+order_id);
        orderService.returnOrder(order_id);
    }

    // 주문 상세내역 보기 1
    @GetMapping("/selectorderinfo/{order_id}")
    public OrderVO selectOrderInfo(@PathVariable String order_id){
        System.out.println("selectOrderInfo Success!");
        System.out.println("order_id : "+order_id);
        return orderService.selectOrderInfo(order_id);
    }

    // 주문 상세내역 보기 2
    @GetMapping("/selectorderdetailinfo/{order_id}")
    public List<OrderDetailVO> selectOrderDetailInfo(@PathVariable String order_id){
        System.out.println("selectOrderDetailInfo Success!");
        System.out.println("order_id : "+order_id);
        return orderService.selectOrderDetailInfo(order_id);
    }
}