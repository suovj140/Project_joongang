package com.example.demo.service;

import com.example.demo.vo.ProductVO;

import java.util.List;

public interface ProductService {

    // 해당 시퀀스에 맞는 상품 정보 출력
    public ProductVO ProductByID(int product_id);
    
    // 옵션 조건에 맞는 상품 리스트 출력
    public List<ProductVO> productCategory(ProductVO productVO);
    
    // 옵션 조건에 맞는 마지막 페이지 번호 출력
    public int findPageNum(ProductVO productVO);

}
