package com.example.demo.service;

import com.example.demo.mapper.OrderMapper;
import com.example.demo.vo.OrderDetailVO;
import com.example.demo.vo.OrderVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    OrderMapper orderMapper;

    @Override
    public List<OrderVO> getUserOrderList(String user_email) {
        return orderMapper.getUserOrderList(user_email);
    }

    @Override
    public void returnOrder(String order_id) {
        orderMapper.returnOrder(order_id);
    }

    @Override
    public OrderVO selectOrderInfo(String order_id) {
        return orderMapper.selectOrderInfo(order_id);
    }

    @Override
    public List<OrderDetailVO> selectOrderDetailInfo(String order_id) {
        return orderMapper.selectOrderDetailInfo(order_id);
    }
}
