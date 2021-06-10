package com.example.demo.service;

import com.example.demo.vo.UserVO;
import org.apache.catalina.User;

import java.util.List;

public interface UserService {

    // 해당 유저 아이디에 맞는 유저 정보 들고오기
    public UserVO UserByID(String user_email);
    
    // 해당 유저의 주소 모두 들고오기
    public List<UserVO> UserAddressList(String user_email);

    // 해당 유저의 정보 수정
    public void UpdateUserInfo(UserVO userVO);

    // 해당 유저 회원 탈퇴
    public void DeleteUserInfo(UserVO userVO);

    // 해당 유저 환불 정보 등록
    public void InsertUserAccount(UserVO userVO);

    // 해당 유저 환불 계좌 조회
    public UserVO UserAccount(UserVO userVO);

    // 해당 유저 환불 계좌 정보 수정
    public void UpdateUserAccount(UserVO userVO);

    // 해당 유저의 소득공제용 번호 입력
    public void InsertUserRepay(UserVO userVO);

    // 해당 유저의 소득공제용 번호 수정
    public void UpdateUserRepay(UserVO userVO);

    // 해당 유저에 맞는 등록된 주소값 불러오기
    public UserVO GetUserAddressBySeq(int address_seq);

    // 해당 유저의 주소값 수정
    public void UpdateUserAddress(UserVO userVO);

    public void DeleteUserAddress(int address_seq);

    public void InsertUserAddress(UserVO userVO);
}
