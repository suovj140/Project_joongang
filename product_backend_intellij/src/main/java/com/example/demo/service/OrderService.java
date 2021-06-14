package com.example.demo.service;


import com.example.demo.vo.OrderDetailVO;
import com.example.demo.vo.OrderVO;

import java.util.List;

public interface OrderService {

    // 해당 유저의 주문목록 모두 가져오기
    public List<OrderVO> getUserOrderList(String user_email);

    // 해당 주문내역 취소 요청
    public void returnOrder(String order_id);

    // 주문 상세내역 보기 1
    public OrderVO selectOrderInfo(String order_id);

    // 주문 상세내역 보기 2
    public List<OrderDetailVO> selectOrderDetailInfo(String order_id);
}
