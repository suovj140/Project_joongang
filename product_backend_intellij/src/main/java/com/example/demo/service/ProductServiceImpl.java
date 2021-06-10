package com.example.demo.service;

import com.example.demo.mapper.ProductMapper;
import com.example.demo.vo.ProductVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductMapper productMapper;

    // 해당 시퀀스에 맞는 상품 정보 출력
    @Override
    public ProductVO ProductByID(int product_id) { return productMapper.ProductByID(product_id); }

    // 옵션 조건에 맞는 상품 리스트 출력
    @Override
    public List<ProductVO> productCategory(ProductVO productVO) {
        return productMapper.productCategory(productVO);
    }

    // 옵션 조건에 맞는 마지막 페이지 번호 출력
    @Override
    public int findPageNum(ProductVO productVO) {
        return productMapper.findPageNum(productVO);
    }
}
