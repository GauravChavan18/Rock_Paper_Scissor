# Rock-Paper-Scissors Game

This repository contains a web-based Rock-Paper-Scissors game built using HTML, CSS, and JavaScript. The game provides an interactive experience where users can play against a computer opponent.

## Features

- **Interactive Gameplay**: Users can make their choice (Rock, Paper, or Scissors) by clicking on the corresponding images.
- **Score Tracking**: The game keeps track of the player's and computer's scores.
- **Game Rules**: Clear rules are provided for players to understand how the game works.
- **Visual Representation**: Choices are visually represented with icons for a more engaging experience.
- **Play Again Option**: After each round, players have the option to play another round without reloading the page.
  
![Screenshot (38)](https://github.com/GauravChavan18/Rock_Paper_Scissor/assets/107454180/c5d4fbeb-6cc0-4f9f-aee1-70e9f4f80db2)
![Screenshot (37)](https://github.com/GauravChavan18/Rock_Paper_Scissor/assets/107454180/19194c67-10c4-4282-a428-e307f394ae77)

## Local Storage

The game utilizes local storage to persistently store the scores of both the player and the computer across different sessions. This means that even if the page is refreshed or the browser is closed, the scores will be retained. 

Here's how it works:

- When a game is played, the scores are updated in real-time on the webpage.
- Simultaneously, the scores are also stored in the local storage of the browser.
- Upon refreshing the page or returning to the game later, the scores are retrieved from the local storage and displayed on the scoreboard.

This feature enhances the user experience by allowing them to track their progress over multiple sessions without losing any game data.
