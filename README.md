# Sarah Ganz SEI-Project 1-Mastermind

## Game Description - Mastermind
Mastermind or Master Mind is a code-breaking game for two players invented in Israel. It resembles an earlier pencil and paper game called Bulls and Cows that may date back a century.
The game was invented in 1970 by Mordecai Meirowitz.
The object of Mastermind is to guess a secret code consisting of a series of 4 colored pegs. Each guess results in feedback narrowing down the possibilities of the code.
In this version of Mastermind the winner is the player who solves the secret code with the least amount of guesses and before the timer runs out.
After each chosen combination of four colors, the player will get feedback according to his choice.
Black border means: it is the right color and right place. White border means: it is the right color but on the wrong place. No border means: it is the wrong color and wrong place.

## Game pictures
![board state 1](./pics-board/1.png)
![board state 2](./pics-board/2.png)




## Technologies Used

## Challenging Code Parts

## Link to Game

## Next Steps













## pseudocode

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

MVP:
board
place color box
hints
ability to lay in same column more colors
win loss aspect