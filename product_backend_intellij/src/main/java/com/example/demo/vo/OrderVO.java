package com.example.demo.vo;

import lombok.Data;

import java.sql.Date;

@Data
public class OrderVO {
        private String order_id;
        private String user_email;
        private String address;
        private String detailaddress;
        private Long orderproductamount;
        private Long total_price;
        private String order_status;
        private Date orderdate;
}
