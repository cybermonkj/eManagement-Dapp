//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.16 < 0.7.0;
pragma experimental ABIEncoderV2;
import "./SafeMath.sol";
import "./Result.sol";

contract Management is Result {
  using SafeMath for uint256;

  address admin;
  // Keeping track of IDs
  uint256 nextStudentId = 0;
  uint256 nextPupilId = 0;
  uint256 nextStaffId = 0;

  constructor() public {
    admin = msg.sender;
  }

  modifier onlyAdmin() {
    require(
      msg.sender == admin,
      "Only staff can register students / pupils!"
    );
    _;
  }

  mapping(uint256 => Student) public students;
  mapping(uint256 => Pupil) public pupils;
  mapping(uint256 => Staff) public staff;

  // Major properties of student
  struct Student {
      uint256 id;
      string hash;
      address admin;
  }

  // Major Properties of pupil
  struct Pupil {
    uint256 id;
    string hash;
    address admin;
  }

  // Major Properties of staff
  struct Staff {
      uint256 id;
      string hash;
      address admin;
  }

  event newStaffHash(uint256 _date, uint256 _id, address _admin);
  event newStudentHash(uint256 _date, uint256 _id, address _admin);
  event newPupilHash(uint256 _date, uint256 _id, address _admin);

  // Create new Staff
  function sendStaffHash(string memory _hash) public onlyAdmin {
      nextStaffId = nextStaffId.add(1);
      Staff storage newStaff = staff[nextStaffId];
      newStaff.id = nextStaffId;
      newStaff.hash = _hash;
      newStaff.admin = msg.sender;

      emit newStaffHash(now, nextPupilId, msg.sender);
  }

  // Create new student
  function sendStudentHash(string memory _hash) public onlyAdmin {
      nextStudentId = nextStudentId.add(1);
      Student storage newStudent = students[nextStudentId];
      newStudent.id = nextStudentId;
      newStudent.hash = _hash;
      newStudent.admin = msg.sender;

      emit newStudentHash(now, nextPupilId, msg.sender);
  }

  // Create new Pupil
  function sendPupilHash(string memory _hash) public onlyAdmin {
      nextPupilId = nextPupilId.add(1);
      Student storage newPupil = students[nextPupilId];
      newPupil.id = nextPupilId;
      newPupil.hash = _hash;
      newPupil.admin = msg.sender;

      emit newPupilHash(now, nextPupilId, msg.sender);
  }
    
  // Get Staff by id
  function getStaffHash(uint256 _id) public view returns (uint256 id, string memory) {
      return(
          staff[_id].id,
          staff[_id].hash
      );
  }

  // Get Student by ID
  function getStudentHash(uint256 _id) public view returns (uint256, string memory) {
      return(
          students[_id].id,
          students[_id].hash
      );
  }

  // Get Pupil by ID
  function getPupilHash(uint256 _id) public view returns (uint256, string memory) {
      return(
          pupils[_id].id,
          pupils[_id].hash
      );
  }

}