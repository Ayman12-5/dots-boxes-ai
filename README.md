# Dots and Boxes AI Game

## Project Information
**Course:** Artificial Intelligence  
**University:** Minia University  
**Faculty:** Faculty of Computers and Information  
**Student:** Ayman Nasr  
**Student ID:** 82442255  

---

## Project Description
This project is a web-based implementation of the classic **Dots and Boxes** game where a player competes against an Artificial Intelligence opponent.

The game consists of a grid of dots. Players take turns drawing lines between adjacent dots.  
When a player completes the fourth side of a box, that player captures the box and earns one point.  
The player who captures the most boxes wins the game.

This project demonstrates how **Artificial Intelligence can be used to make decisions in games**.

---

## Technologies Used
The project was built using the following technologies:

- HTML
- CSS
- JavaScript
- Progressive Web App (PWA)

---

## Game Features

- Player vs AI gameplay
- Automatic box detection
- Score tracking system
- Turn indicator (Player / AI)
- Game end detection
- Restart game button
- Simple AI decision-making
- Responsive UI design
- Progressive Web App support

---

## Artificial Intelligence Approach

The AI uses a simple decision strategy:

1. The AI first checks if there is a move that can **complete a box**.
2. If such a move exists, the AI selects it immediately.
3. If no box can be completed, the AI selects a **random available line**.

This strategy allows the AI to play intelligently by prioritizing scoring opportunities.

---

## Game Rules

1. Players take turns drawing a line between two dots.
2. When a player completes the fourth side of a square:
   - The square is captured
   - The player earns one point
   - The player gets another turn
3. When all squares are filled, the game ends.
4. The player with the highest score wins.

---

## Project Structure


Dots-Boxes-AI
│
├── index.html
├── style.css
├── app.js
├── manifest.json
├── service-worker.js
│
└── icons
├── icon-192.png
└── icon-512.png


---

## How to Run the Project

1. Download or clone the project.

2. Open the project folder.

3. Open the file:


index.html


4. The game will run in your browser.

---

## Progressive Web App (PWA)

This project supports PWA features including:

- Installable web app
- Offline support
- Mobile friendly interface

The following files enable PWA functionality:


manifest.json
service-worker.js


---

## Demo Video

A demonstration video of the project can be found here:


Add your YouTube video link here


---

## Future Improvements

Possible improvements for the project include:

- Implementing Minimax Algorithm
- Adding difficulty levels
- Improving AI strategy
- Adding animations and sound effects
- Online multiplayer support

---

## Conclusion

This project demonstrates how Artificial Intelligence can be applied in game development.  
The AI analyzes the board and selects moves that maximize its chances of winning.

---

## License

This project is for educational purposes only.