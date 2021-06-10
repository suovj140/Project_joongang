import React, {useState} from 'react';
import {Table, TableBody, TableCell, TableRow, Grid, Button, Modal, Backdrop, Fade} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

import DaumPostcode from 'react-daum-postcode';

function ModalDetailAddressComponent(props) {

    const UserAddress = props.UserAddressBySeq;
    
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
                open={props.isOpenUpdatePost}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={props.isOpenUpdatePost}>
                    <div className={classes.paper}>
                        <div style={{textAlign:'left', marginTop:'10px'}}>
                        {/* <h5 style={{margin:'0px 0px 20px 0px'}}>배송지 정보</h5> */}
                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>이메일</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'15px'}} type="email" value={UserAddress.user_email} name="change_email" onChange={props.onChange}/>

                            {/* <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>휴대폰 번호</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'5px'}} type="email" value={UserAddress.user_phone} name="change_phone" onChange={props.onChange}/>
                            <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'15px'}}>"-" 없이 숫자만 입력해 주세요.</div> */}

                            {/* <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>추가 연락처</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'5px'}} type="email" value={UserAddress.user_phone2} name="change_phone2" onChange={props.onChange} />                            
                            <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'15px'}}>"-" 없이 숫자만 입력해 주세요.(선택)</div> */}
                            
                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>배송지주소</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'175px', marginBottom:'15px'}} type="email" value={UserAddress.postcode} name="change_postcode" onChange={props.onChange}/>
                            <Button style={{backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick={() => props.toggleNav()}>찾기</Button>
                            
                            <div>
                                <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'290px', marginBottom:'10px'}} type="email" value={UserAddress.address} name="change_address" onChange={props.onChange}/>
                            </div>
                            
                            <div>
                                <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'290px', marginBottom:'10px'}} type="email" value={UserAddress.detailaddress} name="change_detailaddress" onChange={props.onChange}/>
                            </div>
                            <Button style={{backgroundColor:'#444', width:'148px', height:'30px', borderRadius:'0px', marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white', border:'0px'}} onClick={() => props.onNextButton()}>전부 다시 입력하기</Button>
                        </div>
                    </div>
                    </Fade>
            </Modal>
        </div>
    )
    
}

export default ModalDetailAddressComponent;
