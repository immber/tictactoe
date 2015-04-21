###Welcome to un-winnable tic-tac-toe

This is a basic web application, that allows you to play tic-tac-toe. 
The catch is that you can't win, just go ahead and try...


Here's the logic that's going on in the code:

1. Computer goes first, choosing either the center or one of 4 corners. The GameType = either CENTER or CORNER
2. User goes, selecting any available spot. 
	(error pops up if a spot is already taken)
3. Computer make next move based on user's go
	If CENTER was first:
		If user picked EDGE (mid position not a corner)
			computer picks corner on oppisite side
		If user picked CORNER 
			computer picks oppisite diagonal corner

		Next turn = 
		If user picks


	If CORNER was first:

		pick oppisite row or column corner


