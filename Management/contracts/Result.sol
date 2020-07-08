//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.16 < 0.7.0;
pragma experimental ABIEncoderV2;
import "./SafeMath.sol";

contract Result {
  using SafeMath for uint256;

  // mapping(uint256 => Subject[]) public subjects;
  Subject[] public subjects;
  uint256 studentSubjectCtr = 0;
  uint8 public nextSubjectId = 0;

  event newSubject (uint256 _date, uint256 _id, address _admin);

  struct Subject {
    uint256 id;
    uint256 uid;
    address admin;
    string hash;
  }

  // function addSubjectHash(uint256 _uid,  string memory _hash) public {
  //   nextSubjectId = nextSubjectId.add(1);
  //   subjects[nextSubjectId].push(Subject({
  //     id: nextSubjectId,
  //     uid: _uid,
  //     admin: msg.sender,
  //     hash: _hash
  //   }));
  // }

  function addSubjectHash(uint256 _uid, string memory _hash) public {
    studentSubjectCtr = studentSubjectCtr.add(1);
    subjects.push(Subject(studentSubjectCtr, _uid, msg.sender, _hash));

    // Emit notification
    emit newSubject(now, _uid, msg.sender);
  }

  function getSubjectHash() external view returns (Subject[] memory) {
    return subjects;
  }
}
