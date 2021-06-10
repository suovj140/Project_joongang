import React, {useState} from 'react';
import {Table, TableBody, TableCell, TableRow, Grid, Button, Modal, Backdrop, Fade} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import ApiService from '../../ApiService';

function ModalDetailAddressComponent(props) {


    const UserAddress = props.UserAddressBySeq;
    const [user_phone2, setUser_phone2] = useState(null);
    const [detailaddress, setDetailAddress] = useState(null);


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

        function submit(){
            const user_info = {
                user_seq : props.user_seq,
                user_email : props.user_email,
                user_phone : props.user_phone,
                user_phone2 : props.user_phone2,
                postcode : props.postcode,
                address : props.address,
                detailaddress : props.detailaddress,
                address_name : props.address_name,
            }
            console.log(user_info);
            if(user_info.user_seq != null && user_info.user_email != null && user_info.user_phone != null && user_info.postcode != null && user_info.address != null && user_info.detailaddress != null && user_info.address_name != null){
                ApiService.insertUserAddress(user_info);
                props.handleClose();
                props.setState(5);
            }else{
                alert("정보를 모두 입력해주세요.");
            }
          props.setState(6);
        }

    return (
        <div>
            {/* 휴대전화번호 변경 모달 */}
            <Modal
                className={classes.modal}
                open={props.openInsertAddress}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={props.openInsertAddress}>
                    <div className={classes.paper}>
                        <div style={{textAlign:'left', marginTop:'10px'}}>
                        <h5 style={{margin:'0px 0px 20px 0px'}}>배송지 추가</h5>
                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>이메일</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'15px'}} type="email" value={props.user_email} name="change_email" onChange={props.onChange} disabled/>

                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>휴대폰 번호</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'5px'}} type="email" value={props.user_phone} name="change_phone" onChange={props.onChange}/>
                            <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'15px'}}>"-" 없이 숫자만 입력해 주세요.</div>

                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>주소 이름</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'15px'}} type="email" value={props.address_name} name="change_address_name" onChange={props.onChange}/>

                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>추가 연락처</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'5px'}} type="email" value={props.user_phone2} name="change_phone2" onChange={props.onChange}/>                            
                            <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'15px'}}>"-" 없이 숫자만 입력해 주세요.(선택)</div>
                            
                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>배송지주소</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'175px', marginBottom:'15px'}} type="email" value={props.postcode} name="change_postcode" onChange={props.onChange}/>
                            <Button style={{backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick={() => props.toggleInsertNav()}>찾기</Button>
                            <div>
                                <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'290px', marginBottom:'10px'}} type="email" value={props.address} name="change_address" onChange={props.onChange}/>
                            </div>
                            
                            <div>
                                <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'290px', marginBottom:'10px'}} type="email" name="change_detailaddress" onChange={props.onChange}/>
                            </div>
                        </div>
                        
                        {/* <button onClick={()=>console.log(UserAddress.user_email)}>이메일</button>
                        <button onClick={()=>console.log(UserAddress.user_phone)}>폰</button>
                        <button onClick={()=>console.log(props.postcode)}>우편</button>
                        <button onClick={()=>console.log(props.address)}>주소</button>
                        <button onClick={()=>console.log(props.user_phone2)}>폰2</button>
                        <button onClick={()=>console.log(props.detailaddress)}>주소2</button> */}

                        <Button style={{backgroundColor:'#444', width:'148px', height:'30px', borderRadius:'0px', marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white', border:'0px'}} onClick={() => submit()}>확인</Button>
                        <Button style={{backgroundColor:'white', width:'148px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'#444', border:'1px solid gray'}} onClick={() => props.handleClose()}>취소</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
    
}

export default ModalDetailAddressComponent;
