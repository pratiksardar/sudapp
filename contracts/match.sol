// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/interfaces/IERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CodeMate {
    using Counters for Counters.Counter;
    Counters.Counter private cntIds;

    struct Member {
        bool active;
        address userAddr;
        address accId; //Safe ID for Account Abstraction
        string gitAddr;
        bool gitVerified;
        string desc;
        string toolsUsed;
        string langsUsed;
        uint createdAt;
    }

    struct Guide {
        bool active;
        address mentorAddr;
        address accId; //Safe ID for Account Abstraction
        string gitAddr;
        bool gitVerified;
        string expertise;
        string resLinks;
        uint createdAt;
    }

    struct Task {
        uint taskId;
        address[] members;
        string taskName;
        string techUsed;
        string gitAddr;
        string vidLink;
        bool verified;
    }

    address constant DEFAULT_ADDRESS = 0x8090E825C6FEED75A2aB5bbBF098f01083B98090;
    mapping(address => Member) public memberMap; //Mapping of user address to details
    mapping(address => Guide) public guideMap;
    mapping(uint => Task) public taskIdMap; //Mapping between task ID and details
    mapping(address => uint[]) public userTasks; //Mapping between user and their task IDs
    Member[] memberList; //Array of all users
    Guide[] guideList; //Array of all mentors

    /** 
     * @dev Register a new user profile.
     */
    function addUser(string memory _gitAddr, string memory _desc,
        string memory _toolsUsed, string memory _langsUsed) public returns(uint){
            address userAddr = msg.sender;
            require(
                memberMap[userAddr].createdAt == 0, 
                "User already registered"
            );
            
            Member memory newMember = Member(true, userAddr, DEFAULT_ADDRESS, _gitAddr, false,
            _desc, _toolsUsed, _langsUsed, block.timestamp);

            memberMap[userAddr] = newMember;
            memberList.push(newMember);
            return memberMap[userAddr].createdAt;
    }

    /** 
     * @dev Register a new mentor profile.
     */
    function addMentor(string memory _gitAddr, string memory _expertise,
        string memory _resLinks) public returns(uint) {
            address mentorAddr = msg.sender;
            require(
                guideMap[mentorAddr].createdAt == 0, 
                "Mentor already registered"
            );
            
            Guide memory newGuide = Guide(true, mentorAddr, DEFAULT_ADDRESS, _gitAddr, false, 
            _expertise, _resLinks, block.timestamp);

            guideMap[mentorAddr] = newGuide;
            guideList.push(newGuide);
            return guideMap[mentorAddr].createdAt;
    }

    /** 
     * @dev Update an existing user profile.
     */
    function updateUser(address _accId, string memory _gitAddr, bool _gitVerified, string memory _desc,
        string memory _toolsUsed, string memory _langsUsed) public {
        
        address userAddr = msg.sender;
        
        require(
            memberMap[userAddr].active, 
            "User profile is not active"
        );

        memberMap[userAddr].accId = _accId;
        memberMap[userAddr].gitAddr = _gitAddr;
        memberMap[userAddr].gitVerified = _gitVerified;
        memberMap[userAddr].desc = _desc;
        memberMap[userAddr].toolsUsed = _toolsUsed;
        memberMap[userAddr].langsUsed = _langsUsed;

    }

    /** 
     * @dev Update an existing mentor profile.
     */
    function updateMentor(address _accId, string memory _gitAddr, bool _gitVerified, string memory _expertise,
        string memory _resLinks) public {
        
        address mentorAddr = msg.sender;
        
        require(
            guideMap[mentorAddr].active, 
            "Mentor profile is not active"
        );

        guideMap[mentorAddr].accId = _accId;
        guideMap[mentorAddr].gitAddr = _gitAddr;
        guideMap[mentorAddr].gitVerified = _gitVerified;
        guideMap[mentorAddr].expertise = _expertise;
        guideMap[mentorAddr].resLinks = _resLinks;

    }
    
    /** 
     * @dev Register a new task.
     */
    function addTask(address[] memory _members, string memory _taskName, 
        string memory _techUsed, string memory _gitAddr, string memory _vidLink) public {

            //Ensure all members have registered profiles
            for(uint i = 0; i < _members.length; i++) {
                require(memberMap[_members[i]].active, "Member not actively registered");
            }

            cntIds.increment();
            uint id = cntIds.current();

            Task memory newTask = Task(id, _members, _taskName, _techUsed, _gitAddr, _vidLink, false);

            taskIdMap[id] = newTask;

            //Associate each member with the task ID
            for(uint i = 0; i < _members.length; i++) {
                userTasks[_members[i]].push(id);
            }

    }

    /*** --------------READ FUNCTIONS--------------------------------- ***/
    /**
     * @dev Retrieve profile of a specific user.
     * @param _userAddr : Address of the user
     */
    function getUserProfile(address _userAddr) public view
    returns(Member memory){
        return memberMap[_userAddr];
    }

    /**
     * @dev Retrieve profile of a specific mentor.
     * @param _mentorAddr : Address of the mentor
     */
    function getMentorProfile(address _mentorAddr) public view
    returns(Guide memory){
        return guideMap[_mentorAddr];
    }

    /** 
     * @dev Fetch all user profiles.
     * @return Array of all user profiles 
    */ 
    function getAllUsers() public view
            returns (Member[] memory)
    {
        return memberList;
    }

    /** 
     * @dev Fetch all mentor profiles.
     * @return Array of all mentor profiles 
    */ 
     function getAllMentors() public view
            returns (Guide[] memory)
    {
        return guideList;
    }

    /** 
     * @dev Fetch all task IDs associated with a user.
     * @return Array of task IDs
    */ 
     function getUserTaskIds(address _user) public view
            returns (uint[] memory)
    {
        return userTasks[_user];
    }

    /** 
     * @dev Retrieve task details by task ID.
     * @return Task details
    */ 
     function getTaskById(uint _id) public view
            returns (Task memory)
    {
        return taskIdMap[_id];
    }


}
