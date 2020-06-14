pragma solidity >=0.5.8 <0.7.0;
pragma experimental ABIEncoderV2;
import "./SafeMath.sol";
import "./Result.sol";

contract Management is Result {
    using SafeMath for uint256;

    // A counter for the students mapping an array list.
    uint256 public studentCtr;
    uint256 public courseCtr;
    uint256 public transactionCtr;

    mapping(uint256 => Student) public students;
    Transaction[] public transactions;
    Course[] public courses;

    address staff;

    modifier onlyStaff() {
        require(
            msg.sender == staff,
            "Only staff can register students!"
        );
        _;
    }

    constructor() public {
        staff = msg.sender;
    }

    // Major properties of a student
    struct Student {
        uint256 id;
        address admin;
        string studentHash;
    }

    struct Course {
        uint256 id;
        address admin;
        string courseHash;
    }

    struct Transaction {
        uint256 id;
        address admin;
        string transactionHash;
    }

    // event will notify new student
    event newStudent(address student, uint256 id);

    // Setters
    function sendStudentHash (uint256 _id, string memory _hash) public onlyStaff {
        studentCtr = studentCtr.add(1);
        Student storage adding = students[_id];
        adding.id = _id;
        adding.admin = msg.sender;
        adding.studentHash = _hash;

        emit newStudent(msg.sender, students[_id].id);
    }

    function sendTransactionHash(uint256 _id, string memory _hash) public onlyStaff {
        transactions.push(Transaction(_id, msg.sender, _hash));
        transactionCtr = transactionCtr.add(1);
        courseCtr = courseCtr.add(1);
    }

    function sendCoureHash(uint256 _id, string memory _hash) public onlyStaff {
        courses.push(Course(_id, msg.sender, _hash));

    }

    /**
        Getters
    */
    function getStudentHash(uint256 _id) public view returns (
        uint256 id,
        address admin,
        string memory hash
    ) {
        return(
            id = students[_id].id,
            admin = students[_id].admin,
            hash = students[_id].studentHash
        );
    }

    function getCourseHash(uint256 _id) public view returns(
        uint256 id,
        address admin,
        string memory hash
    ) {
        return(
            id = courses[_id].id,
            admin = courses[_id].admin,
            hash = courses[_id].courseHash
        );
    }

    function getTransactionHash(uint256 _id) public view returns(
        uint256 id,
        address admin,
        string memory hash
    ) {
        return(
            id = courses[_id].id,
            admin = courses[_id].admin,
            hash = courses[_id].courseHash
        );
    }

    /**
        Counters
    */
    function getStudentCtr() public view returns(uint256) { return studentCtr; }

    function getCourseCtr() public view returns(uint256) { return courseCtr; }

    function getTransactionCtr() public view returns(uint256) { return transactionCtr; }

    function getTrancLength() public view returns(uint256) { return transactions.length; }
    function getCourseLength() public view returns(uint256) { return courses.length; }
}