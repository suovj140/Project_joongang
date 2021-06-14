import React from 'react';
import {Button, Modal, Backdrop, Fade, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

function ModalDetailAddressComponent(props) {
    
    const imgUrl = '/imgs/';

    // 모달
    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(5, 5, 5),
          borderRadius:'10px'
        },
      }));

    const classes = useStyles();

    return (
        <div>
            {/* 휴대전화번호 변경 모달 */}
            <Modal
                className={classes.modal}
                open={props.openOrderInfo}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={props.openOrderInfo}>
                    <Grid item xs={6} sm={6} style={{minWidth:'650px'}}>
                        <div className={classes.paper}>
                            <div style={{textAlign:'left', marginTop:'10px'}}>
                                <div style={{fontSize:'14px', color:'black', textAlign:'left', marginBottom:'5px'}}>주문상세내역</div>
                                <div style={{fontSize:'13px'}}>{props.orderInfo.order_date} 주문 · 주문번호 {props.orderInfo.order_id}</div>
                                <div style={{marginBottom:'20px', marginTop:'20px'}}><b>{props.orderInfo.order_status}</b></div>

                                <div style={{border:'1px solid lightgray', padding : '10px', borderRadius:'5px'}}>
                                {props.orderDetailInfo.map(detailinfo => 
                                <div style={{display:'flex'}}>
                                    <Grid item xs={6} sm={2} style={{minWidth:'120px'}}>
                                        <img src={imgUrl+detailinfo.imgs[0]} style={{width:'100px'}}/>
                                    </Grid>
                                    <Grid item xs={6} sm={10}>
                                        <div>{detailinfo.product_title}</div>
                                        <div>{detailinfo.product_price}원 / {detailinfo.amount}개</div>
                                    </Grid>
                                </div>
                                )}
                                </div>

                                <div style={{marginTop:'20px'}}>
                                    <div><b>받는사람 정보</b></div>
                                    <hr style={{height:'2px', border:'0px', backgroundColor:'black'}}/>
                                    <div style={{display:'flex'}}>
                                        <Grid item xs={6} sm={2} style={{minWidth:'120px'}}>
                                            <div>받는사람</div>
                                        </Grid>
                                        <Grid item xs={6} sm={10}>
                                            <div>{props.orderInfo.user_name}</div>
                                        </Grid>                                        
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <Grid item xs={6} sm={2} style={{minWidth:'120px'}}>
                                            <div>받는 주소</div>
                                        </Grid>
                                        <Grid item xs={6} sm={10}>
                                            <div>({props.orderInfo.post_code}) {props.orderInfo.address} {props.orderInfo.detail_address}</div>
                                        </Grid>
                                    </div>
                                </div>
                                

                                <div>
                                    <div style={{marginTop:'20px'}}><b>결제 정보</b></div>
                                    <hr style={{height:'2px', border:'0px', backgroundColor:'black'}}/>
                                    <div style={{display:'flex'}}>
                                        <Grid item xs={6} sm={2} style={{minWidth:'120px'}}>
                                            <div>결제수단</div>
                                        </Grid>
                                        <Grid item xs={6} sm={10}>
                                            <div>{props.orderInfo.pay_info}</div>
                                        </Grid>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <Grid item xs={6} sm={2} style={{minWidth:'120px'}}>
                                            <div>총 상품 가격</div>
                                        </Grid>
                                        <Grid item xs={6} sm={10}>
                                            <div>{props.orderInfo.total_price}</div>
                                        </Grid>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Grid>
                </Fade>
            </Modal>
        </div>
    )
    
}

export default ModalDetailAddressComponent;
