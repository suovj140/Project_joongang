package com.example.demo.service;

import com.example.demo.mapper.OrderMapper;
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
}
