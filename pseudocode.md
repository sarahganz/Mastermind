# pseudocode
## 1) constants:
define colors object

## 2) state variables:
a 2d array to represent the board with the chosen combinations
turn of a b c or d in th message
state of the game
winning comb

## 3) cached elements:
squares of the board
message
button start
colors

## 4) event listeners:
when a color is clicked then it fills the board
when start game is clicked then initializing game
hoevering over buttons to make them bigger

## 5) functions:
initializing the game
random winning combination=answer
showing and changing message according to the games state
revealing answer when won
comparison to the answer (if won & what hints to change)
giving the hints to the hints board
showing the start game button when won, failed and start of game

## MVP:
board
place color box
hints
ability to lay in same column more colors
win loss aspect