import React, { useEffect, useState } from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import ApiService from '../../ApiService';
import UserAccount from './InsertUserAccount';
import UpdateUserAccount from './UpdateUserAccount';
import InsertUserAccountPAY from './InsertUserAccountPAYComponent';
import UpdateUserRepay from './UpdateUserRepay';
import ModalPhone from './ModalUpdatePhoneComponent';
import ModalEmail from './ModalUpdateEmailComponent';
import ModalPassword from './ModalUpdatePasswordComponent';
import ModalAccount from './ModalUpdateAccountComponent';
import ModalSNS from './ModalUpdateSNSComponent';
import ModalDeleteUser from './ModalDeleteUserComponent';

function MemberInfoComponent(props) {

    const [change_email, setchange_email] = useState(null);
    const [change_phone, setchange_phone] = useState(null);
    const [change_password, setchange_password] = useState(null);
    const [user_email, setuser_email] = useState(props.user.user_email);
    const [user_account, setuser_account] = useState('');
    const [updateUserAccount, setUpdateUserAccount] = useState(false);
    const [user_name, setuser_name] = useState(props.user.user_name);

    const [open, setOpen] = useState(false);
    const [openChangePhone, setOpenChangePhone] = useState(false);
    const [openChangePassword, setOpenChangePassword] = useState(false);
    const [openUserAccountInsert, setOpenUserAccountInsert] = useState(false);
    const [openUserSNSConnect, setOpenUserSNSConnect] = useState(false);
    const [openUserDelete, setOpenUserDelete] = useState(false);
    const [openReCheckUserDelete, setOpenReCheckUserDelete] = useState(false);
    const [openInsertUserAccountPAY, setOpenInsertUserAccountPAY] = useState(false);
    const [openUpdateUserRepay, setOpenUpdateUserRepay] = useState(false);

    const Change_user = {
        user_email : user_email,
        change_email : change_email,
        change_phone : change_phone,
        change_password : change_password,
    }

    useEffect(() => {
        ApiService.userAccount(user_email)
            .then( res => {
                setuser_account(res.data);
            })
            .catch(err => {
                console.log('user_account print error!', err);
            })
    },[open, openChangePhone, openChangePassword, openUserAccountInsert, openUserSNSConnect, openUserDelete, openReCheckUserDelete, openInsertUserAccountPAY, openUpdateUserRepay]);


   

    // 업데이트 로직
    function updateButton(){
        console.log(Change_user);
        ApiService.updateUserInfo(Change_user);
        // alert('업데이트 성공');
        props.setState(10);
        handleClose();
    };

    // 이메일, 핸드폰 번호, 비밀번호 변경시 해당 set에 입력되게 하고, 다른 set에 이미 입력된 값이 있다면 null값으로 처리한다.
    // 만약 비밀번호를 바꾸려다 말고 핸드폰 번호를 아니면 잘못 입력했을 경우에를 대비해서 null로 지정해둠
    function onChange(e){
        if(e.target.name == "change_email"){
            setchange_phone(null);
            setchange_password(null);
            setchange_email(e.target.value);
        }else if(e.target.name == "change_phone"){
            setchange_email(null);
            setchange_password(null);
            setchange_phone(e.target.value);
        }else if(e.target.name == "change_password"){
            setchange_email(null);
            setchange_phone(null);
            setchange_password(e.target.value);
        }
    }


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
          padding: theme.spacing(2, 4, 3),
          borderRadius:'10px'
        },
      }));


    const classes = useStyles();


    const handleOpen = (e) => {
        if(e.target.name === "change_email"){
            setOpen(true);
        }else if(e.target.name === "change_phone"){
            setOpenChangePhone(true);
        }else if(e.target.name === "change_password"){
            setOpenChangePassword(true);
        }else if(e.target.name === "user_delete"){
            setOpenUserDelete(true);
        }else if(e.target.name === "recheck_user_delete"){
            setOpenReCheckUserDelete(true);
        }else if(e.target.name === "user_account_insert"){
            setOpenUserAccountInsert(true);
        }else if(e.target.name === "user_sns_connect"){
            setOpenUserSNSConnect(true);
        }   
        props.setState(2);
    };
    
    const handleClose = (e) => {
        
        // 이메일 변경 모달 띄우기
        setOpen(false);

        // 휴대폰 번호 변경 모달 띄우기
        setOpenChangePhone(false);
        
        // 비밀번호 변경 모달 띄우기
        setOpenChangePassword(false);
        
        // 환불 계좌 모달 띄우기
        setOpenUserAccountInsert(false);
        // 환불 계좌 정부 입력창 1
        setUserAccount01(false);

        // 회원 탈퇴 모달 띄우기
        setOpenUserDelete(false);
        // 회원 탈퇴 다시 묻는 모달 띄우기
        setOpenReCheckUserDelete(false);
        
        // SNS계정 연동 모달 띄우기
        setOpenUserSNSConnect(false);

        // 소득공제용 정보 변경 모달 띄우기
        setUpdateUserAccount(false);
    };


    // 엔터버튼 눌렀을 때 함수 실행
    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            updateButton();
            handleClose();
        }
    }

    const checkGender = (e) => {
        if(props.user.user_gender === e.target.value){
            // console.log("props : " +props.user.user_gender);
            // console.log("targetvalue : " + e.target.value);
        }
    }

    const [userAccount01, setUserAccount01] = useState(false);

    // 환불 계좌 등록 버튼 눌렀을 때 onoff버튼
    function openAccountButton(){
        if(user_account.user_bank != '' && user_account.user_bank != null){
            alert('이미 등록된 계좌가 있습니다.');
        }else{
            setUserAccount01(true);
        }
    }

    // 유저 탈퇴 처리 함수
    function deleteUser(){
        alert('회원탈퇴 처리가 완료됐습니다.');
        ApiService.deleteUserInfo(Change_user);
        handleClose();
        window.location.reload(); // 로그인 페이지로 이동시켜야할듯
    }

    function update_user_account(){
        setUpdateUserAccount(true);
    }

    function update_user_repay(){
        setOpenUpdateUserRepay(true);
    }

    function insertUserRepay(){
        if(user_account.user_repay != '' && user_account.user_repay != null){
            alert('이미 등록된 정보가 있습니다.');
        }else{
        setOpenInsertUserAccountPAY(true);
       }
    }



    return (
        <>
           <Grid item xs={6} sm={7}>
                    <div style={{fontSize:'13px', textAlign:'left'}}>회원정보변경</div>
                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>이메일 주소</div>
                            <div><button name="change_email" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>변경하기</button></div>
                        </div>

                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={user_email}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerLabel}>이름</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={user_name}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerLabel}>생년월일</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_birthday}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>휴대폰번호</div>
                            <div><button name="change_phone" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>변경하기</button></div>
                        </div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_phone}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>비밀번호</div>
                            <div><button name="change_password" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>변경하기</button></div>
                        </div>
                    </div>

                    <div style={{fontSize:'13px', textAlign:'left', marginTop:'50px'}}>부가정보(선택)</div>
                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>

                    <div style={centerDiv}>
                        <div style={centerLabel}>성별</div>
                        <div style={{fontSize:'14px', marginTop:'10px', justifyContent:'left', display:'flex'}}>
                            <input type='radio' name='gender' value='M' onChange={checkGender} disabled/> 남 
                            <input type='radio' name='gender' value='W' onChange={checkGender} disabled/> 여
                        </div>
                    </div>

                    {/* <div style={centerDiv}>
                        <div style={centerLabel}>관심매장선택</div>
                        <div style={{textAlign:'left'}}>
                            <FormControl style={{minWidth:'120px', marginRight:'10px'}}>
                                <InputLabel style={{fontSize:'14px'}}>관심매장선택</InputLabel>
                                <Select name='Favorite_Market'>
                                    <MenuItem><div style={{fontSize:'14px'}}>서울 송파점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>서울 영등포점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>서울 마포점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>서울 서초점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>서울 롯데점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>인천 계양점</div></MenuItem>
                                    <MenuItem><div style={{fontSize:'14px'}}>모르는데요?</div></MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerLabel}>제3자(H&M) 정보제공동의</div>
                        <div style={{fontSize:'14px', marginTop:'10px', justifyContent:'left', display:'flex'}}>
                        <input type='radio' value='M'/> 동의합니다 <input type='radio' value='W'/> 동의하지 않습니다
                        </div>
                    </div>

                    <div style={{marginTop:'25px', marginBottom:'100px'}}>
                        <Button style={{display:'flex', color:'#FFFFFF', backgroundColor:'#444444', border:'0px', fontSize:'13px', width:'100%', padding:'7px 0px 7px 0px', maxWidth:'270px'}} onClick={() => oncc()}>확인</Button>
                    </div> */}


                    <div style={spaceBetween}><span>환불계좌/현금영수증</span> <span><button name="user_account_insert" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>더보기</button></span></div>
                    <hr style={bottomHr}/>

                    <div style={spaceBetween}><span>개인계정 연결관리</span> <span><button name="user_sns_connect" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>더보기</button></span></div>
                    <hr style={bottomHr}/>

                    <div style={spaceBetween}><span>회원탈퇴</span> <span><button name="user_delete" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>신청</button></span></div>
                    <hr style={bottomHr}/>

                    <div style={{marginBottom:'80px'}}></div>
                    

                </Grid>

                    {/* 모달 모아두기 - 나중에 줄일 예정 */}
                    {/* 회원 이메일 변경 모달 */}
                    {/* <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >

                        <Fade in={open}>
                            <div className={classes.paper}>
                                <div style={{textAlign:'left', marginTop:'10px'}}>
                                    <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'5px'}}>변경할 이메일 주소</div>
                                    <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'170px', marginBottom:'10px'}} type="email" placeholder="이메일 주소를 입력해주세요." name="change_email" onChange={onChange} onKeyPress={onKeyPress}/>
                                    <Button style={{backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick={() => updateButton()}>수정하기</Button>
                                </div>
                            </div>
                            </Fade>
                    </Modal> */}

                        <ModalEmail open={open} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} />

                        <ModalPhone openChangePhone={openChangePhone} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} />

                        <ModalPassword openChangePassword={openChangePassword} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} />
                    
                        <ModalAccount user_name={user_name} openUserAccountInsert={openUserAccountInsert} user_email={user_email} user_account={user_account} centerDivBetween={centerDivBetween} openAccountButton={openAccountButton} updateUserAccount={updateUserAccount} UpdateUserAccount={UpdateUserAccount} openUpdateUserRepay={openUpdateUserRepay} UpdateUserRepay={UpdateUserRepay} openInsertUserAccountPAY={openInsertUserAccountPAY} InsertUserAccountPAY={InsertUserAccountPAY} userAccount01={userAccount01} UserAccount={UserAccount} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} update_user_account={update_user_account} insertUserRepay={insertUserRepay} update_user_repay={update_user_repay} />

                        <ModalSNS openUserSNSConnect={openUserSNSConnect} handleClose={handleClose} />

                        <ModalDeleteUser openUserDelete={openUserDelete} handleClose={handleClose} handleOpen={handleOpen} openReCheckUserDelete={openReCheckUserDelete} deleteUser={deleteUser} />
                    {/* 휴대전화번호 변경 모달 */}
                    {/* <Modal
                        // aria-labelledby="transition-modal-title"
                        // aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={openChangePhone}
                        onClose={handleClose}
                        closeAfterTransition
                        // BackdropComponent={Backdrop}
                        // BackdropProps={{
                        //     timeout: 500,
                        // }}
                    >
                        <Fade in={openChangePhone}>
                            <div className={classes.paper}>
                                <div style={{textAlign:'left', marginTop:'10px'}}>
                                    <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'5px'}}>변경할 휴대폰 번호</div>
                                    <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'170px', marginBottom:'10px'}} type="text" placeholder="휴대폰 번호를 입력해주세요." name="change_phone" onChange={onChange} onKeyPress={onKeyPress}/>
                                    <Button style={{backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick={() => updateButton()}>수정하기</Button>
                                </div>
                                <h5>변경할 휴대폰 번호</h5>
                                <p><input style={{padding:'10px', borderRadius:'0px', border:'1px solid gray'}} type="text" name="change_phone" onChange={onChange} onKeyPress={onKeyPress}></input></p>
                            </div>
                            </Fade>
                    </Modal> */}


                    {/* 비밀번호 변경 모달 */}
                    {/* <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={openChangePassword}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={openChangePassword}>
                            <div className={classes.paper}>
                                <div style={{textAlign:'left', marginTop:'10px'}}>
                                    <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'5px'}}>변경할 비밀번호</div>
                                    <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'170px', marginBottom:'10px'}} type="text" placeholder="비밀번호를 입력해주세요." name="change_password" onChange={onChange} onKeyPress={onKeyPress}/>
                                    <Button style={{backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick={() => updateButton()}>수정하기</Button>
                                </div>
                            </div>
                            </Fade>
                    </Modal> */}

                    
                    {/* 환불 계좌 등록 모달 */}
                    {/* <Modal
                        className={classes.modal}
                        open={openUserAccountInsert}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                        
                    >
                        <Fade in={openUserAccountInsert}>
                            <div className={classes.paper} style={{width:'640px'}}>
                                <div style={{height:'20px'}}></div>
                                <div style={centerDivBetween}>
                                    <h5 style={{margin:'0px'}}>{user_name}님의 환불계좌 정보</h5><Button style={{fontSize:'12px', margin:'0px', padding:'0px', color:'gray'}} onClick={() => openAccountButton()}>등록</Button>
                                </div>
                                
                                {userAccount01 && <UserAccount user_name={user_name} user_email={user_email} handleClose={handleClose}/>}

                                <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'10px 0px 10px 0px', paddingBottom:'0px', paddingTop:'0px'}}/>

                                <div style={{fontSize:'11px'}}>
                                    <div style={{textAlign:'left', marginBottom:'10px'}}>[등록된 환불 계좌]</div>
                                    
                                        <div style={{border:'1px solid lightgray', marginBottom:'10px', padding:'10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                            <div style={{textAlign:'left'}}>
                                                이름 : {user_account.user_name}<br/>
                                                은행 : {user_account.user_bank}<br/>
                                                계좌번호 : {user_account.user_account}<br/>
                                            </div>
                                            <div><Button onClick={() => update_user_account()} style={{fontSize:'12px', color:'gray'}}>수정</Button></div>
                                        </div>
                                        {updateUserAccount && <UpdateUserAccount user_name={user_name} user_email={user_email} handleClose={handleClose}/>}
                                    <div style={{textAlign:'left', marginBottom:'10px'}}>* 환불계좌 등록 및 수정 확인은 재로그인이 필요합니다.</div>
                                    <div style={{textAlign:'left', marginBottom:'10px'}}>* 환불계좌는 본인 명의의 계좌번호만 등록/변경 가능합니다.</div>
                                    <div style={{textAlign:'left', marginBottom:'10px'}}>* 환불계좌는 저장하시면, 추후 이용 시 별도의 계좌입력 없이 이용하실 수 있습니다.</div>
                                    <div style={{textAlign:'left', marginBottom:'50px'}}>* 정보 입력 또는 수정일로부터 1년간 환불기록이 없을 경우, 금융정보보호정책에 따라 환불계좌 정보는 삭제됩니다.</div>
                                </div>

                                <div style={centerDivBetween}>
                                    <h5 style={{margin:'0px'}}>소득공제용 현금영수증</h5>
                                    <Button style={{fontSize:'12px', margin:'0px', padding:'0px', color:'gray', backgroundColor:'white'}} onClick={() => insertUserRepay()}>등록</Button>
                                </div>
                                
                                <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'10px 0px 10px 0px', paddingBottom:'0px', paddingTop:'0px'}}/>

                                <div style={{fontSize:'11px'}}>
                                    <div style={{textAlign:'left', marginBottom:'10px'}}>[등록된 소득공제용 현금영수증]</div>
                                    <div style={{border:'1px solid lightgray', marginBottom:'10px', padding:'10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                            <div style={{textAlign:'left'}}>
                                                소득공제용 정보 : {user_account.user_repay}<br/>
                                            </div>
                                            <div><Button onClick={() => update_user_repay()} style={{fontSize:'12px', color:'gray', backgroundColor:'white'}}>수정</Button></div>
                                        </div>
                                        {openUpdateUserRepay && <UpdateUserRepay user_email={user_email} handleClose={handleClose}/>}
                                    {openInsertUserAccountPAY && <InsertUserAccountPAY user_email={user_email} handleClose={handleClose}/>}
                                   
                                </div>
                                
                            </div>
                        </Fade>
                    </Modal> */}


                    {/* SNS 연동 모달 */}
                    {/* <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={openUserSNSConnect}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={openUserSNSConnect}>
                            <div className={classes.paper} style={{width:'640px'}}>
                                <h5>개인계정 연결관리</h5>
                                <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'10px 0px 10px 0px', paddingBottom:'0px'}}/>
                                <div>
                                    <div style={{display:'flex'}}>
                                        <div  style={{fontSize:'12px', textAlign:'left', width:'40px'}}>NAVER</div><div style={{fontSize:'12px', width:'60px'}}> : </div><div style={{fontSize:'12px', textAlign:'left', width:'60px'}}>등록하기</div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div  style={{fontSize:'12px', textAlign:'left', width:'40px'}}>KAKAO</div><div style={{fontSize:'12px', width:'60px'}}> : </div><div style={{fontSize:'12px', textAlign:'left', width:'60px'}}>등록하기</div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div  style={{fontSize:'12px', textAlign:'left', width:'40px'}}>FACEBOOK</div><div style={{fontSize:'12px', width:'60px'}}> : </div><div style={{fontSize:'12px', textAlign:'left', width:'60px'}}>등록하기</div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div  style={{fontSize:'12px', textAlign:'left', width:'40px'}}>GOOGLE</div><div style={{fontSize:'12px', width:'60px'}}> : </div><div style={{fontSize:'12px', textAlign:'left', width:'60px'}}>등록하기</div>
                                    </div>
                                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'10px 0px 10px 0px', paddingBottom:'0px'}}/>
                                </div>
                            </div>
                        </Fade>
                    </Modal> */}


                    {/* 회원 탈퇴 모달 */}
                    {/* <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={openUserDelete}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={openUserDelete}>
                            <div className={classes.paper} style={{width:'640px'}}>
                                <h5>회원 탈퇴</h5>
                                <div style={{fontSize:'12px', textAlign:'left'}}>
                                이용해 주셔서 감사합니다.<br/>
                                이용하시면서 불만족스러웠던 점을 지적해주시면 서비스 개선에 참고하도록 하겠습니다.<br/>
                                회원 탈퇴 시, 아래 사항을 유의해 주시기 바랍니다.<br/>
                                </div>

                                <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'50px 0px 50px 0px', paddingBottom:'0px'}}/>
                                <h5>회원탈퇴 확인사항</h5>
                                <div style={{fontSize:'12px', textAlign:'left'}}>
                                ※ 재가입하셔도 개인정보가 복원되지 않습니다.<br/>
                                더현대닷컴에 가지고 계신 더머니, 예치금, 할인쿠폰 등의 혜택이 자동 삭제되며, 재가입하실 경우에도 복원되지 않습니다.<br/>
                                <br/>
                                ※ 아이디를 재사용하실 수 없습니다.<br/>
                                기존에 사용하셨던 ID는 재가입 시 사용하실 수 없습니다.<br/>
                                <br/>
                                ※ 탈퇴 후에도 게시판형 서비스에 등록한 게시물은 그대로 남아 있습니다.<br/>
                                게시판 등에 올린 게시글 및 댓글은 탈퇴시 자동삭제되지 않고 남아 있습니다. 삭제를 원하시는 게시글이 있다면 탈퇴전에 삭제하시기 바랍니다.<br/>
                                (단, 답글이 달린 글은 삭제 불가)
                                <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'50px 0px 50px 0px', paddingBottom:'0px'}}/>

                                ※ 진행중인 주문, 반품이 있을 시 회원 탈퇴가 불가능 합니다. 해당 사항을 완료 후 탈퇴를 하실 수 있습니다.<br/>
                                </div>
                                <div style={{marginTop:'50px', marginBottom:'50px'}}></div>
                                    <Button variant="contained" style={{backgroundColor:'white', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', border:'1px solid lightgray', marginRight:'10px'}} onClick={handleClose}>취소</Button>
                                    <Button variant="contained" style={{backgroundColor:'#444', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', color:'white'}} name='recheck_user_delete' onClick={handleOpen}><span name='recheck_user_delete' onClick={handleOpen}>회원 탈퇴</span></Button><br/>
                                </div>
                            </Fade>
                    </Modal> */}

                    {/* 회원 탈퇴 확인 모달 */}
                    {/* <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={openReCheckUserDelete}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={openReCheckUserDelete}>
                            <div className={classes.paper}>
                                <h5>정말 회원 탈퇴 하시겠습니까?</h5>
                                    <Button variant="contained" style={{backgroundColor:'white', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', border:'1px solid lightgray', marginRight:'10px'}} onClick={handleClose}>취소</Button>
                                    <Button variant="contained" style={{backgroundColor:'#444', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', color:'white'}} name='recheck_user_delete' onClick={deleteUser}>회원 탈퇴</Button><br/>
                            </div>
                            </Fade>
                    </Modal> */}
        </>
    )    
}

const centerDivBetween = {
    display:'flex', justifyContent:'space-between'
}

const centerDiv = {
    marginTop:'25px'
}

const centerLabel = {
    fontSize:'13px', textAlign:'left', color:'#999999'
}

const centerInput = {
    border:'0px', backgroundColor:'white', textAlign:'left', fontSize:'12px'
}

const centerInfo = {
    fontSize:'11px', textAlign:'left', color:'#999999', maxWidth:'270px'
}

const spaceBetween = {
    fontSize:'13px', marginTop:'40px', display:'flex', justifyContent:'space-between'
}

const bottomHr = {
    height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'8px 0px 30px 0px', paddingBottom:'0px'
}

export default MemberInfoComponent
