let Lottery = artifacts.require("./Lottery.sol");

contract('Lottery', async (accounts) => {
    let lottery;
    let owner = accounts[0];
    let player1 = accounts[1];
    let player2 = accounts[2];
    let player3 = accounts[3];

    before(async () => {
        lottery = await Lottery.deployed();
    });

    it("Should store first player that buys a ticket", async () => {
        await lottery.buyTicket("lala", {
            from: player1,
            value: 1000000,
            gas: 1000000
        });

        let players = lottery.getPlayers();

        assert(1, players.length, "Expect a single player stored after 1 ticket bought");
        assert(player1, players[0], "Expect stored player to be the same as ticket buyer");
    });

    it("Should store second player that buys a ticket", async () => {
        await lottery.buyTicket("po", {
            from: player2,
            value: 1000000,
            gas: 1000000
        });

        let players = lottery.getPlayers();

        assert(2, players.length, "Expect 2 players stored after 2 tickets bought");
        assert(player2, players[1], "Expect second sstored player to be the same as second ticket buyer");
    });

});