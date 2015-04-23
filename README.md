##Welcome to un-winnable tic-tac-toe

This is a basic web application, that allows you to play tic-tac-toe. 
The catch is that you can't win, just go ahead and try...

You can play the game online here: http://immber.github.io/tictactoe.html


###Here's the logic that's going on in the code:

1. First the computer has to go first, and play an X in a corner or the center; otherwise it won't be guaranteed to win. 
2. Any time the player goes, the game picks the next best place to place an X. First it checks to see if it can win straight away, and if not, it will try to block a win by player O.
3. It's possible to tie, but not for player O to win, since they will always be blocked, and X has the advantage of going first.



