pragma solidity ^0.4.23;
contract Lottery {
    
    address public owner;
    
    struct Player {
        uint numberOfTickets;
        string name;
    }
    
    mapping(address => Player) players;
    
    address[] public playersAddresses;
    
    constructor() public { owner = msg.sender; }
    
    function playerSignUp(address a, string name) public {
        
        var player = players[a];
        
        player.name = name;
        player.numberOfTickets = 0;
        
        playersAddresses.push(a) - 1;
    }

    function getPlayers() public view returns(address[]) {
        return playersAddresses;
    }

    function getPlayer(address a) public view returns (string) {
        return (players[a].name);
    }
}