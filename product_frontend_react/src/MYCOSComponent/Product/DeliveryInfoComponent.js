import React, {useState,useEffect} from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Grid, Button} from '@material-ui/core';
import ApiService from '../../ApiService';

function DeliveryInfoComponent(props) {

    return (
        <Grid item xs={6} sm={7}>
            <div style={{fontSize:'13px', textAlign:'left', marginBottom:'20px'}}>주문/배송</div>
            <div style={{minHeight:'800px'}}>

                {/* 해당 유저의 order table에서 order목록 list로 받아서 map으로 반복문 돌릴 예정 */}
                <Table style={{marginBottom:'20px'}}>
                    <TableBody style={{display:'flex', justifyContent:'space-between', border:'1px solid lightgray', borderRadius:'10px', padding:'10px', minWidth:'600px'}}>
                        <Grid item xs={6} sm={8}>
                            <TableCell >배송 현황 : 열심히 달려가고 있어요 / 언제도착 : 몰라요 </TableCell><div/>
                            <TableCell ><a href='#' style={{textDecoration:'none'}}><span>상품이미지</span> <span>상품 이름</span><span>상품 가격</span></a></TableCell>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <div style={{textAlign:'right'}}><Button style={button}>배송조회</Button></div>
                            <div style={{textAlign:'right'}}><Button style={button}>상품제목</Button></div>
                            <div style={{textAlign:'right'}}><Button style={button}>상품제목</Button></div>
                        </Grid>
                    </TableBody>
                </Table>
                <Table style={{marginBottom:'20px'}}>
                    <TableBody style={{display:'flex', justifyContent:'space-between', border:'1px solid lightgray', borderRadius:'10px', padding:'10px', minWidth:'600px'}}>
                        <Grid item xs={6} sm={8}>
                            <TableCell >배송 현황 : 열심히 달려가고 있어요 / 언제도착 : 몰라요 </TableCell><div/>
                            <TableCell ><a href='#' style={{textDecoration:'none'}}><span>상품이미지</span> <span>상품 이름</span><span>상품 가격</span></a></TableCell>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <div style={{textAlign:'right'}}><Button style={button}>배송조회</Button></div>
                            <div style={{textAlign:'right'}}><Button style={button}>상품제목</Button></div>
                            <div style={{textAlign:'right'}}><Button style={button}>상품제목</Button></div>
                        </Grid>
                    </TableBody>
                </Table>
                <Table style={{marginBottom:'20px'}}>
                    <TableBody style={{display:'flex', justifyContent:'space-between', border:'1px solid lightgray', borderRadius:'10px', padding:'10px', minWidth:'600px'}}>
                        <Grid item xs={6} sm={8}>
                            <TableCell >배송 현황 : 열심히 달려가고 있어요 / 언제도착 : 몰라요 </TableCell><div/>
                            <TableCell ><a href='#' style={{textDecoration:'none'}}><span>상품이미지</span> <span>상품 이름</span><span>상품 가격</span></a></TableCell>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <div style={{textAlign:'right'}}><Button style={button}>배송조회</Button></div>
                            <div style={{textAlign:'right'}}><Button style={button}>상품제목</Button></div>
                            <div style={{textAlign:'right'}}><Button style={button}>상품제목</Button></div>
                        </Grid>
                    </TableBody>
                </Table>
                <Table style={{marginBottom:'20px'}}>
                    <TableBody style={{display:'flex', justifyContent:'space-between', border:'1px solid lightgray', borderRadius:'10px', padding:'10px', minWidth:'600px'}}>
                        <Grid item xs={6} sm={8}>
                            <TableCell >배송 현황 : 열심히 달려가고 있어요 / 언제도착 : 몰라요 </TableCell><div/>
                            <TableCell ><a href='#' style={{textDecoration:'none'}}><span>상품이미지</span> <span>상품 이름</span><span>상품 가격</span></a></TableCell>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <div style={{textAlign:'right'}}><Button style={button}>배송조회</Button></div>
                            <div style={{textAlign:'right'}}><Button style={button}>상품제목</Button></div>
                            <div style={{textAlign:'right'}}><Button style={button}>상품제목</Button></div>
                        </Grid>
                    </TableBody>
                </Table>
            </div>
        </Grid>
    )
}

const button = {
    width:'170px', border:'1px solid lightgray', margin:'5px'
}

export default DeliveryInfoComponent
