package com.example.demo.controller;

import com.example.demo.service.ProductService;
import com.example.demo.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;


    @GetMapping("/{product_id}")
    public ProductVO ProductByID(@PathVariable int product_id){
        System.out.println(product_id);
        return productService.ProductByID(product_id);
    }

    @PostMapping("/list")
    public List<ProductVO> productCategory(@RequestBody ProductVO productVO){
        System.out.println("Page Move Success");
        System.out.println("PAGENUM : "+productVO.getProduct_pageNum());
        System.out.println("GENDER : "+productVO.getProduct_gender());
        System.out.println("CATEGORY : "+productVO.getProduct_category());
        System.out.println("COLOR : "+productVO.getSelect_color());
        System.out.println("SIZE : "+productVO.getSelect_size());
        System.out.println("KEYWORD : "+productVO.getSearch_keyword());
        System.out.println("OPTION : "+productVO.getSelect_option());

        return productService.productCategory(productVO);
    }

    @PostMapping("/pagenum")
    public int findPageNum(@RequestBody ProductVO productVO){
        if((productService.findPageNum(productVO)%12)==0){
            System.out.println(productService.findPageNum(productVO));
            return productService.findPageNum(productVO)/12;
        }else{
            System.out.println(productService.findPageNum(productVO));
            return productService.findPageNum(productVO)/12+1;
        }
    }
}