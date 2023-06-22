Mastermind game

pseudocode:

1) constants:
define colors object

2) state variables:
a 2d array to represent the board with the chosen combinations
turn of a b c or d in th message
state of the game
winning comb

3) cached elements:
squares of the board
message
button start
colors

4) event listeners:
when a color is clicked then it fills the board
when start game is clicked then initializing game
hoevering over buttons to make them bigger

5) functions:
initializing the game
random winning combination=answer
showing and changing message according to the games state
revealing answer when won
comparison to the answer (if won & what hints to change)
giving the hints to the hints board
showing the start game button when won, failed and start of game



musts:
*maybe lines between each chosen combination?
*when a color is chosen, the rest colors shouldnt move with it
*make code more efficient and less code typed
*beginnning of game to have start button and colors ineffective


+) extras:
*having players drag the color buttons to the place they choose- in the same order or in no particlar order
*choice to have a game timer- to have failed game if timer gets to 0
*playing with a friend - button at start of game to play with computer of friend : friend would choose colours and then press button to hide them. then friend would be choosing red or white to give the hints
*backwards button, if they wanna change their mind on the last one they submitted or for more than one of the colors
*giving a hint is showing one of the colors -button to ask help

MVP:
board
place color box
hints
ability to lay in same column more colors
win loss aspect