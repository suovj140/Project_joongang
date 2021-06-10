package com.example.demo.mapper;

import com.example.demo.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

    // 해당 회원의 정보 출력
    UserVO UserByID(String user_email);

    // 해당 회원의 주소 리스트 출력
    List<UserVO> UserAddressList(String user_email);

    // 해당 회원 정보 수정
    void UpdateUserInfo(UserVO userVO);

    // 해당 회원 탈퇴
    void DeleteUserInfo(UserVO userVO);

    // 해당 유저 환불 정보 등록
    void InsertUserAccount(UserVO userVO);

    // 해당 유저 환불 계좌 조회
    UserVO UserAccount(UserVO userVO);
    
    // 해당 유저의 계좌 정보 수정
    void UpdateUserAccount(UserVO userVO);

    // 해당 유저의 소득공제용 정보 입력
    void InsertUserRepay(UserVO userVO);

    // 해당 유저의 소득공제용 정보 수정
    void UpdateUserRepay(UserVO userVO);

    // 해당 유저에 맞는 등록된 주소값 불러오기
    UserVO GetUserAddressBySeq(int address_seq);

    void UpdateUserAddress(UserVO userVO);

    void DeleteUserAddress(int address_seq);

    void InsertUserAddress(UserVO userVO);
}