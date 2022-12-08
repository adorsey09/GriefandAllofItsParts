A “design document” for your project in the form of a Markdown file called DESIGN.md that discusses, technically, how you implemented your project and why you made the design decisions you did. Your design document should be at least several paragraphs in length. Whereas your documentation is meant to be a user’s manual, consider your design document your opportunity to give the staff a technical tour of your project underneath its hood.


There are 3 main parts to this project in terms of files. There is the python file, the html files, and the javascript files. These are not the only files as there are image files and a css file.


# Python
The python file allows for flask to run and determines different webpage routes. It was really only needed to make sure that the different routes rendered the correct HTML file.

# HTML

There are several HTML files. Any of the HTML files that start with scene# is the code for each scene in the storyline. I decided to create an HTML for each scene as this seemed to be the easiest way to edit text on the HTML file and was the easiest way to change the text of buttons and images. Each HTML file is formatted the same with the javascript file loaded first, then the image for the scene, the text, the buttons for different choices that can be made, and the the 'Back' and 'Next' buttons.

The "about" and "help" HTML files are just bodies of text for the player. The "index" HTML file is the home screen for the game. The "layout" HTML files is for the navigation bar which allows the user to start over if they want to.

# Javascript

There are multiple javascript files that correspond with each scene in the game. Each javascript file contains functions for the 'Back' and 'Next' buttons. In the these files, you will see that these functions change the text on the page using '.innerHTML'. The javascript grabs the text, the back button, the next button, and the different choice buttons and allows the visibility of the buttons to be changed once you reach a certain point in the game. I allowed the buttons that allow you to continue on in the story (called choice1 and choice2 in most js files) to be visible after you reach that point in the story even if you go back to another part of the text. This seemed to make it easier for the user to make a choice whenever they wanted after they went through the all of the text in that scene.


# Other Files

The only other files in this project is the css file. There isn't much to that file other than it helped with stylistic choices. The image folder contains all of the images used in this game.


# A note on comments
Comments were only placed in scene_1.html and scene1.js as the comments would be the same for all javascript files and html files that start with scene. If the files are unique, then comments were placed.
