const powerForwards = [
    { id: 0, name: "Tim Duncan", position: "PF" },
    { id: 1, name: "Dirk Nowitzki", position: "PF" },
    { id: 2, name: "Karl Malone", position: "PF" },
    { id: 3, name: "Michael Jordan", position: "SG" },
];

// removing any player who doesn't play power forward
// console.log(powerForwards.filter((player) => player.position === "PF"));
powerForwards.map((eachPlayer) => (
    console.log(powerForwards.filter((player) => player.id !== eachPlayer.id))
));