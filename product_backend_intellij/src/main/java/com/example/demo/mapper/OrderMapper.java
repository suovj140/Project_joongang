package com.example.demo.mapper;

import com.example.demo.vo.OrderDetailVO;
import com.example.demo.vo.OrderVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {

    // 해당 유저의 주문목록 모두 가져오기
    List<OrderVO> getUserOrderList(String user_email);

    // 해당 주문내역 취소 요청
    void returnOrder(String order_id);

    // 주문 상세내역 보기 1
    OrderVO selectOrderInfo(String order_id);

    // 주문 상세내역 보기 2
    List<OrderDetailVO> selectOrderDetailInfo(String order_id);

}