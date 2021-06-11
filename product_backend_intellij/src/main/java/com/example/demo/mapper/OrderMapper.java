package com.example.demo.mapper;

import com.example.demo.vo.OrderVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {

    // 해당 유저의 주문목록 모두 가져오기
    List<OrderVO> getUserOrderList(String user_email);
}