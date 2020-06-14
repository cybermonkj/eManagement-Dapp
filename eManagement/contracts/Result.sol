pragma solidity >=0.5.8 <0.7.0;
import "./SafeMath.sol";

contract Result {
    using SafeMath for uint256;
    StudentResult[] public studentResults;
    uint256 public resultCount;

    struct StudentResult {
        uint256 id;
        address admin;
        string hash;
    }

    event NewResult(address _admin, uint256 _id);

    function sendResultHash(
        uint256 _id,
        string memory hash
    ) public {
        resultCount = resultCount.add(1);
        studentResults.push(StudentResult(_id, msg.sender, hash));
        emit NewResult(msg.sender, studentResults[_id].id);
    }

    function getResultHash(uint256 _id) public view returns
    (
        uint256 id,
        address admin,
        string memory hash
    ) {
        return (
            id = studentResults[_id].id,
            admin = studentResults[_id].admin,
            hash = studentResults[_id].hash
        );
    }

    function getResultCtr() public view returns (uint256) { return resultCount; }

    function getResultLength() public view returns(uint256) { return studentResults.length; }
}
