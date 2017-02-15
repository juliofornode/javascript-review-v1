/*

 Implement a method solve(map, miner, exit) that has to return the path the miner must
 take to reach the exit as an array of moves, such as : ['up', 'down', 'right', 'left'].

 map is a 2-dimensional array of boolean values, representing squares. false for walls,
 true for open squares (where the miner can walk). It will never be larger than 5 x 5.
 It is laid out as an array of columns. All columns will always be the same size, though
 not necessarily the same size as rows (in other words, maps can be rectangular). The map
 will never contain any loop, so there will always be only one possible path. The map may
 contain dead-ends though.

 miner is the position of the miner at the start, as an object made of two zero-based
 integer properties, x and y. For example {x:0, y:0} would be the top-left corner.

 exit is the position of the exit, in the same format as miner.

 Note that the miner can't go outside the map, as it is a tunnel.


 var map = [[true, false], [true, true]];

 solve(map, {x:0,y:0}, {x:1,y:1}); // Should return ['right', 'down']

 */

var moves = ['up', 'down', 'left', 'right'];

function solve(map, miner, exit) {
    return arrayOfMoves;
}

