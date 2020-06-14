pragma solidity >= 0.5.0 < 0.7.0;
import "./SafeMath.sol";

contract Transaction {
    using SafeMath for uint256;
    mapping(uint256 => StudentTransaction) public studentTransactions;
    uint256 public transactionC;

    struct StudentTransaction {
        uint256 id;
        uint256 level;
        uint256 amount;
        string semester;
        string matNo;
        string tName;
    }

    function addTransaction
    (
        uint256 _id,
        uint256 _level,
        uint256 _amount,
        string memory _semester,
        string memory _matNo,
        string memory _tName
    ) public {
        transactionC = transactionC.add(1);
        studentTransactions[_id] = StudentTransaction(
            _id,
            _level,
            _amount,
            _semester,
            _matNo,
            _tName
        );
    }

    function getTransaction(uint256 uid) public view returns
    (
        uint256,
        uint256,
        string memory,
        string memory,
        string memory
    ) {
        return
        (
        studentTransactions[uid].level,
        studentTransactions[uid].amount,
        studentTransactions[uid].semester,
        studentTransactions[uid].matNo,
        studentTransactions[uid].tName
        );
    }

    function transacCounter() public view returns (uint256) {
        return transactionC;
    }
}
