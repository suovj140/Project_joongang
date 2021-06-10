package com.example.demo.service;

import com.example.demo.mapper.UserMapper;
import com.example.demo.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserMapper userMapper;

    @Override
    public UserVO UserByID(String user_email) {
        return userMapper.UserByID(user_email);
    }

    @Override
    public List<UserVO> UserAddressList(String user_email) {
        return userMapper.UserAddressList(user_email);
    }

    @Override
    public void UpdateUserInfo(UserVO userVO) {
        userMapper.UpdateUserInfo(userVO);
    }

    @Override
    public void DeleteUserInfo(UserVO userVO) {
        userMapper.DeleteUserInfo(userVO);
    }

    @Override
    public void InsertUserAccount(UserVO userVO) {
        userMapper.InsertUserAccount(userVO);
    }

    @Override
    public UserVO UserAccount(UserVO userVO) {
        return userMapper.UserAccount(userVO);
    }

    @Override
    public void UpdateUserAccount(UserVO userVO) {
        userMapper.UpdateUserAccount(userVO);
    }

    @Override
    public void InsertUserRepay(UserVO userVO) {
        userMapper.InsertUserRepay(userVO);
    }

    @Override
    public void UpdateUserRepay(UserVO userVO) {
        userMapper.UpdateUserRepay(userVO);
    }

    @Override
    public UserVO GetUserAddressBySeq(int address_seq) {
        return userMapper.GetUserAddressBySeq(address_seq);
    }

    @Override
    public void UpdateUserAddress(UserVO userVO) {
        userMapper.UpdateUserAddress(userVO);
    }

    @Override
    public void DeleteUserAddress(int address_seq) {
        userMapper.DeleteUserAddress(address_seq);
    }

    @Override
    public void InsertUserAddress(UserVO userVO) {
        userMapper.InsertUserAddress(userVO);
    }


}
