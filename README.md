Mastermind game

pseudocode:

1) constants:
define colors object
define the random winning combination=answer

2) state variables:
a 2d array to represent the board with the chosen combinations
a 2d array to represent the board with the hints
turn of a b c or d in th message
state of the game

3) cached elements:
hints placings
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
showing and changing message according to the games state
revealing answer when won
comparison to the answer (if won & what hints to change)
giving the hints to the hints board
showing the start game button when won, failed and start of game

+) extras:
*whichever letter has to be filled in-> the font-size should grow on its turn
*instead of hints board => to have each of the squared circled with red or white, change the boards frame color(not white)
*having players drag the color buttons to the place they choose- in the same order or in no particlar order
*choice to have a game timer- to have failed game if timer gets to 0
*have a message on board :red=right place , right color  &   white=right color, wrong place or instructions bring to a different html page with typed instructions and link to youtube video or paste video there
*playing with a friend - button at start of game to play with computer of friend : friend would choose colours and then press button to hide them. then friend would be choosing red or white to give the hints
*backwards button, if they wanna change their mind on the last one they submitted or for more than one of the colors
*choose amouunt of colors shown- level of difficulty(max of)

MVP:
board
place color box
hints
ability to lay in same column more colors
win loss aspect