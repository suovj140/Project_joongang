package com.example.demo.service;


import com.example.demo.vo.OrderVO;

import java.util.List;

public interface OrderService {

    // 해당 유저의 주문목록 모두 가져오기
    public List<OrderVO> getUserOrderList(String user_email);
}
