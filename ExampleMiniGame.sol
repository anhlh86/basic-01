// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ExampleMiniGame{
    
    Student[] public arrStudent;

    struct Student{
        string _ID;
        address _walletAddress;
    }

    event SmartContract_Push_Data(address _walletAddress, string _id);

    function Register(string memory _id) public{
        Student memory newStudent = Student(_id, msg.sender);
        arrStudent.push(newStudent);
        emit SmartContract_Push_Data(msg.sender, _id);
    }
}