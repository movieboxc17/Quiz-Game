const quizzes = {
    html: {
        title: "HTML Quiz",
        questions: [
            {
                question: "What does HTML stand for?",
                choice1: "Hypertext Markup Language",
                choice2: "Hypertext Markdown Language",
                choice3: "Hyperloop Machine Language",
                choice4: "Helicopters Terminals Motorboats Lamborginis",
                answer: 1
            },
            {
                question: "Which HTML tag is used for creating a line break?",
                choice1: "<lb>",
                choice2: "<break>",
                choice3: "<br>",
                choice4: "<newline>",
                answer: 3
            },
            {
                question: "Which HTML element is used to define an image?",
                choice1: "<image>",
                choice2: "<img>",
                choice3: "<picture>",
                choice4: "<src>",
                answer: 2
            },
            {
                question: "Which HTML element is used to define important text?",
                choice1: "<important>",
                choice2: "<strong>",
                choice3: "<bold>",
                choice4: "<em>",
                answer: 2
            },
            {
                question: "Which HTML attribute is used to specify a unique id for an HTML element?",
                choice1: "class",
                choice2: "unique",
                choice3: "id",
                choice4: "identifier",
                answer: 3
            },
            {
                question: "Which HTML element is used to create a hyperlink?",
                choice1: "<hyperlink>",
                choice2: "<link>",
                choice3: "<a>",
                choice4: "<href>",
                answer: 3
            },
            {
                question: "Which HTML tag is used for creating the largest heading?",
                choice1: "<heading>",
                choice2: "<h1>",
                choice3: "<h6>",
                choice4: "<head>",
                answer: 2
            },
            {
                question: "What is the correct HTML element for inserting a line break?",
                choice1: "<break>",
                choice2: "<lb>",
                choice3: "<br>",
                choice4: "<newline>",
                answer: 3
            },
            {
                question: "What is the correct HTML for creating a checkbox?",
                choice1: "<check>",
                choice2: "<checkbox>",
                choice3: "<input type='check'>",
                choice4: "<input type='checkbox'>",
                answer: 4
            },
            {
                question: "Which HTML element defines the title of a document?",
                choice1: "<meta>",
                choice2: "<head>",
                choice3: "<title>",
                choice4: "<header>",
                answer: 3
            }
        ]
    },
    css: {
        title: "CSS Quiz",
        questions: [
            {
                question: "What does CSS stand for?",
                choice1: "Colorful Style Sheets",
                choice2: "Computer Style Sheets",
                choice3: "Creative Style Sheets",
                choice4: "Cascading Style Sheets",
                answer: 4
            },
            {
                question: "Which property is used to change the background color?",
                choice1: "color",
                choice2: "bgcolor",
                choice3: "background-color",
                choice4: "background",
                answer: 3
            },
            {
                question: "How do you add a comment in CSS?",
                choice1: "// this is a comment",
                choice2: "' this is a comment",
                choice3: "/* this is a comment */",
                choice4: "<!-- this is a comment -->",
                answer: 3
            },
            {
                question: "Which CSS property is used to change the text color of an element?",
                choice1: "text-color",
                choice2: "color",
                choice3: "font-color",
                choice4: "text-style",
                answer: 2
            },
            {
                question: "Which CSS property controls the text size?",
                choice1: "text-size",
                choice2: "font-style",
                choice3: "font-size",
                choice4: "text-style",
                answer: 3
            },
            {
                question: "Which CSS property is used to control the spacing between elements?",
                choice1: "spacing",
                choice2: "margin",
                choice3: "padding",
                choice4: "border",
                answer: 2
            },
            {
                question: "Which CSS property is used to make text bold?",
                choice1: "font-style",
                choice2: "text-style",
                choice3: "font-weight",
                choice4: "text-decoration",
                answer: 3
            },
            {
                question: "How do you select an element with id 'demo'?",
                choice1: "#demo",
                choice2: ".demo",
                choice3: "demo",
                choice4: "*demo",
                answer: 1
            },
            {
                question: "How do you select all p elements inside a div element?",
                choice1: "div.p",
                choice2: "div p",
                choice3: "div + p",
                choice4: "div > p",
                answer: 2
            },
            {
                question: "What is the default value of the position property?",
                choice1: "relative",
                choice2: "fixed",
                choice3: "absolute",
                choice4: "static",
                answer: 4
            }
        ]
    },
    javascript: {
        title: "JavaScript Quiz",
        questions: [
            {
                question: "Inside which HTML element do we put the JavaScript?",
                choice1: "<javascript>",
                choice2: "<js>",
                choice3: "<scripting>",
                choice4: "<script>",
                answer: 4
            },
            {
                question: "How do you create a function in JavaScript?",
                choice1: "function = myFunction()",
                choice2: "function myFunction()",
                choice3: "function:myFunction()",
                choice4: "createMyFunction()",
                answer: 2
            },
            {
                question: "How do you call a function named 'myFunction'?",
                choice1: "call myFunction()",
                choice2: "call function myFunction()",
                choice3: "myFunction()",
                choice4: "execute myFunction()",
                answer: 3
            },
            {
                question: "How to write an IF statement in JavaScript?",
                choice1: "if i = 5 then",
                choice2: "if i == 5 then",
                choice3: "if (i == 5)",
                choice4: "if i = 5",
                answer: 3
            },
            {
                question: "How does a FOR loop start?",
                choice1: "for (i = 0; i <= 5; i++)",
                choice2: "for (i <= 5; i++)",
                choice3: "for i = 1 to 5",
                choice4: "for (i = 0; i <= 5)",
                answer: 1
            },
            {
                question: "What is the correct way to write a JavaScript array?",
                choice1: "var colors = (1:'red', 2:'green', 3:'blue')",
                choice2: "var colors = ['red', 'green', 'blue']",
                choice3: "var colors = 'red', 'green', 'blue'",
                choice4: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
                answer: 2
            },
            {
                question: "How do you find the number with the highest value of x and y?",
                choice1: "Math.ceil(x, y)",
                choice2: "top(x, y)",
                choice3: "Math.max(x, y)",
                choice4: "Math.highest(x, y)",
                answer: 3
            },
            {
                question: "How do you declare a JavaScript variable?",
                choice1: "v carName;",
                choice2: "variable carName;",
                choice3: "var carName;",
                choice4: "create carName;",
                answer: 3
            },
            {
                question: "Which event occurs when the user clicks on an HTML element?",
                choice1: "onmouseover",
                choice2: "onchange",
                choice3: "onclick",
                choice4: "onmouseclick",
                answer: 3
            },
            {
                question: "How do you add a comment in JavaScript?",
                choice1: "<!-- This is a comment -->",
                choice2: "// This is a comment",
                choice3: "/* This is a comment */",
                choice4: "# This is a comment",
                answer: 2
            }
        ]
    },
    python: {
        title: "Python Quiz",
        questions: [
            {
                question: "What is the correct file extension for Python files?",
                choice1: ".pt",
                choice2: ".py",
                choice3: ".python",
                choice4: ".pyt",
                answer: 2
            },
            {
                question: "How do you create a variable with the numeric value 5?",
                choice1: "x = 5",
                choice2: "x = int(5)",
                choice3: "Both of the above",
                choice4: "x = numeric(5)",
                answer: 3
            },
            {
                question: "What is the correct way to create a function in Python?",
                choice1: "function myFunction():",
                choice2: "def myFunction():",
                choice3: "create myFunction():",
                choice4: "func myFunction():",
                answer: 2
            },
            {
                question: "How do you start an IF statement in Python?",
                choice1: "if x > y then:",
                choice2: "if (x > y)",
                choice3: "if x > y:",
                choice4: "if x > y",
                answer: 3
            },
            {
                question: "What is the correct way to create a list in Python?",
                choice1: "list = [1, 2, 3]",
                choice2: "list = (1, 2, 3)",
                choice3: "list = {1, 2, 3}",
                choice4: "array = [1, 2, 3]",
                answer: 1
            },
            {
                question: "What does the 'len()' function do in Python?",
                choice1: "Calculates the length of a string or collection",
                choice2: "Generates a random number",
                choice3: "Converts to lowercase",
                choice4: "Calculates the sine of an angle",
                answer: 1
            },
            {
                question: "How do you insert COMMENTS in Python code?",
                choice1: "/* Comment */",
                choice2: "// Comment",
                choice3: "<!-- Comment -->",
                choice4: "# Comment",
                answer: 4
            },
            {
                question: "Which collection in Python is ordered and changeable?",
                choice1: "List",
                choice2: "Tuple",
                choice3: "Set",
                choice4: "Dictionary",
                answer: 1
            },
            {
                question: "What is a correct syntax to output 'Hello World' in Python?",
                choice1: "print('Hello World')",
                choice2: "echo('Hello World');",
                choice3: "console.log('Hello World');",
                choice4: "System.out.println('Hello World')",
                answer: 1
            },
            {
                question: "Which built-in function can be used to evaluate Python expressions from a string-based input?",
                choice1: "str()",
                choice2: "eval()",
                choice3: "exec()",
                choice4: "parse()",
                answer: 2
            }
        ]
    },
    science: {
        title: "Science Quiz",
        questions: [
            {
                question: "What is the chemical symbol for gold?",
                choice1: "Go",
                choice2: "Gl",
                choice3: "Gd",
                choice4: "Au",
                answer: 4
            },
            {
                question: "What is the hardest natural substance on Earth?",
                choice1: "Diamond",
                choice2: "Titanium",
                choice3: "Platinum",
                choice4: "Tungsten",
                answer: 1
            },
            {
                question: "Which planet has the most moons?",
                choice1: "Jupiter",
                choice2: "Saturn",
                choice3: "Uranus",
                choice4: "Neptune",
                answer: 2
            },
            {
                question: "What is the largest organ in the human body?",
                choice1: "Heart",
                choice2: "Liver",
                choice3: "Skin",
                choice4: "Brain",
                answer: 3
            },
            {
                question: "What is the Earth's primary protector from the sun's UV radiation?",
                choice1: "Exosphere",
                choice2: "Thermosphere",
                choice3: "Mesosphere",
                choice4: "Ozone Layer",
                answer: 4
            },
            {
                question: "What particle has a negative charge?",
                choice1: "Proton",
                choice2: "Neutron",
                choice3: "Electron",
                choice4: "Positron",
                answer: 3
            },
            {
                question: "Which of the following is NOT a state of matter?",
                choice1: "Plasma",
                choice2: "Bose-Einstein condensate",
                choice3: "Energy",
                choice4: "Gas",
                answer: 3
            },
            {
                question: "What is the speed of light in a vacuum?",
                choice1: "300,000 km/s",
                choice2: "150,000 km/s",
                choice3: "200,000 km/s",
                choice4: "250,000 km/s",
                answer: 1
            },
            {
                question: "What is the most abundant gas in Earth's atmosphere?",
                choice1: "Oxygen",
                choice2: "Carbon Dioxide",
                choice3: "Hydrogen",
                choice4: "Nitrogen",
                answer: 4
            },
            {
                question: "What is the study of fungi called?",
                choice1: "Botany",
                choice2: "Mycology",
                choice3: "Zoology",
                choice4: "Entomology",
                answer: 2
            }
        ]
    },
    movies: {
        title: "Movies Quiz",
        questions: [
            {
                question: "Who directed 'Jurassic Park'?",
                choice1: "James Cameron",
                choice2: "Steven Spielberg",
                choice3: "George Lucas",
                choice4: "Christopher Nolan",
                answer: 2
            },
            {question: "Which movie features a character named Jack Dawson?",
                choice1: "The Departed",
                choice2: "Inception",
                choice3: "Titanic",
                choice4: "Catch Me If You Can",
                answer: 3
            },
            {
                question: "What color pill does Neo take in 'The Matrix'?",
                choice1: "Blue",
                choice2: "Red",
                choice3: "Green",
                choice4: "Yellow",
                answer: 2
            },
            {
                question: "In 'The Lord of the Rings', who is given the task of destroying the One Ring?",
                choice1: "Gandalf",
                choice2: "Aragorn",
                choice3: "Frodo",
                choice4: "Legolas",
                answer: 3
            },
            {
                question: "Which movie won the Academy Award for Best Picture in 2020?",
                choice1: "1917",
                choice2: "Joker",
                choice3: "Once Upon a Time in Hollywood",
                choice4: "Parasite",
                answer: 4
            },
            {
                question: "Who played Iron Man in the Marvel Cinematic Universe?",
                choice1: "Chris Evans",
                choice2: "Chris Hemsworth",
                choice3: "Robert Downey Jr.",
                choice4: "Mark Ruffalo",
                answer: 3
            },
            {
                question: "Which of these movies was NOT directed by Christopher Nolan?",
                choice1: "Inception",
                choice2: "Interstellar",
                choice3: "The Revenant",
                choice4: "Dunkirk",
                answer: 3
            },
            {
                question: "What is the highest-grossing film of all time (as of 2023)?",
                choice1: "Avengers: Endgame",
                choice2: "Avatar",
                choice3: "Titanic",
                choice4: "Star Wars: The Force Awakens",
                answer: 2
            },
            {
                question: "Which actor has won the most Academy Awards for Best Actor?",
                choice1: "Jack Nicholson",
                choice2: "Marlon Brando",
                choice3: "Daniel Day-Lewis",
                choice4: "Tom Hanks",
                answer: 3
            }
        ]
    },
    geography: {
        title: "Geography Quiz",
        questions: [
            {
                question: "What is the capital of Australia?",
                choice1: "Sydney",
                choice2: "Melbourne",
                choice3: "Canberra",
                choice4: "Perth",
                answer: 3
            },
            {
                question: "Which is the largest ocean on Earth?",
                choice1: "Atlantic Ocean",
                choice2: "Indian Ocean",
                choice3: "Arctic Ocean",
                choice4: "Pacific Ocean",
                answer: 4
            },
            {
                question: "Which country has the largest population in the world?",
                choice1: "India",
                choice2: "China",
                choice3: "United States",
                choice4: "Indonesia",
                answer: 2
            },
            {
                question: "Which desert is the largest in the world?",
                choice1: "Gobi",
                choice2: "Arabian",
                choice3: "Sahara",
                choice4: "Antarctic",
                answer: 4
            },
            {
                question: "What is the longest river in the world?",
                choice1: "Amazon",
                choice2: "Nile",
                choice3: "Yangtze",
                choice4: "Mississippi-Missouri",
                answer: 2
            },
            {
                question: "Which continent is the least populated?",
                choice1: "Australia",
                choice2: "Europe",
                choice3: "Antarctica",
                choice4: "South America",
                answer: 3
            },
            {
                question: "Which mountain range stretches across seven countries: France, Switzerland, Italy, Germany, Liechtenstein, Austria, and Slovenia?",
                choice1: "The Andes",
                choice2: "The Alps",
                choice3: "The Rockies",
                choice4: "The Himalayas",
                answer: 2
            },
            {
                question: "What is the smallest country in the world by land area?",
                choice1: "Monaco",
                choice2: "Nauru",
                choice3: "Vatican City",
                choice4: "San Marino",
                answer: 3
            },
            {
                question: "Which of these cities is NOT in Europe?",
                choice1: "Prague",
                choice2: "Istanbul",
                choice3: "Casablanca",
                choice4: "Vienna",
                answer: 3
            },
            {
                question: "Which of these countries does NOT border Brazil?",
                choice1: "Chile",
                choice2: "Peru",
                choice3: "Colombia",
                choice4: "Bolivia",
                answer: 1
            }
        ]
    },
    history: {
        title: "History Quiz",
        questions: [
            {
                question: "In what year did World War II end?",
                choice1: "1943",
                choice2: "1944",
                choice3: "1945",
                choice4: "1946",
                answer: 3
            },
            {
                question: "Who was the first President of the United States?",
                choice1: "Thomas Jefferson",
                choice2: "George Washington",
                choice3: "Abraham Lincoln",
                choice4: "John Adams",
                answer: 2
            },
            {
                question: "In which year did the Berlin Wall fall?",
                choice1: "1987",
                choice2: "1989",
                choice3: "1991",
                choice4: "1993",
                answer: 2
            },
            {
                question: "The ancient city of Rome was built on how many hills?",
                choice1: "Five",
                choice2: "Six",
                choice3: "Seven",
                choice4: "Eight",
                answer: 3
            },
            {
                question: "Who was the first female Prime Minister of the United Kingdom?",
                choice1: "Queen Elizabeth II",
                choice2: "Theresa May",
                choice3: "Margaret Thatcher",
                choice4: "Victoria Woodhull",
                answer: 3
            },
            {
                question: "What event marked the beginning of World War I?",
                choice1: "The invasion of Poland",
                choice2: "The sinking of the Lusitania",
                choice3: "The assassination of Archduke Franz Ferdinand",
                choice4: "The Treaty of Versailles",
                answer: 3
            },
            {
                question: "Which ancient civilization built the Machu Picchu complex in Peru?",
                choice1: "Maya",
                choice2: "Aztec",
                choice3: "Olmec",
                choice4: "Inca",
                answer: 4
            },
            {
                question: "During which decade was the first successful powered airplane flight?",
                choice1: "1890s",
                choice2: "1900s",
                choice3: "1910s",
                choice4: "1920s",
                answer: 2
            },
            {
                question: "Which famous ship sank on its maiden voyage in 1912?",
                choice1: "Lusitania",
                choice2: "Titanic",
                choice3: "Britannic",
                choice4: "Olympic",
                answer: 2
            },
            {
                question: "Who wrote 'The Communist Manifesto'?",
                choice1: "Karl Marx and Friedrich Engels",
                choice2: "Vladimir Lenin",
                choice3: "Joseph Stalin",
                choice4: "Leon Trotsky",
                answer: 1
            }
        ]
    },
    technology: {
        title: "Technology Quiz",
        questions: [
            {
                question: "Who is considered the founder of Microsoft?",
                choice1: "Steve Jobs",
                choice2: "Bill Gates",
                choice3: "Elon Musk",
                choice4: "Jeff Bezos",
                answer: 2
            },
            {
                question: "What does CPU stand for?",
                choice1: "Central Processing Unit",
                choice2: "Computer Personal Unit",
                choice3: "Central Process Utility",
                choice4: "Central Processor Unit",
                answer: 1
            },
            {
                question: "In what year was the first iPhone released?",
                choice1: "2005",
                choice2: "2006",
                choice3: "2007",
                choice4: "2008",
                answer: 3
            },
            {
                question: "What does 'HTTP' stand for?",
                choice1: "Hypertext Transfer Protocol",
                choice2: "Hypertext Transit Protocol",
                choice3: "Hypertext Transmission Procedure",
                choice4: "High-Tech Transfer Protocol",
                answer: 1
            },
            {
                question: "Which programming language was created by James Gosling at Sun Microsystems?",
                choice1: "Python",
                choice2: "JavaScript",
                choice3: "C++",
                choice4: "Java",
                answer: 4
            },
            {
                question: "What is the world's most popular operating system for desktop/laptop computers?",
                choice1: "macOS",
                choice2: "Windows",
                choice3: "Linux",
                choice4: "Chrome OS",
                answer: 2
            },
            {
                question: "Which of these is NOT a web browser?",
                choice1: "Chrome",
                choice2: "Firefox",
                choice3: "Edge",
                choice4: "Oracle",
                answer: 4
            },
            {
                question: "What does 'AI' stand for in the tech world?",
                choice1: "Automated Intelligence",
                choice2: "Artificial Intelligence",
                choice3: "Augmented Interface",
                choice4: "Advanced Integration",
                answer: 2
            },
            {
                question: "Which company developed the Android operating system?",
                choice1: "Apple",
                choice2: "Microsoft",
                choice3: "Google",
                choice4: "Samsung",
                answer: 3
            },
            {
                question: "What was the first widely-used social media platform?",
                choice1: "Facebook",
                choice2: "Friendster",
                choice3: "MySpace",
                choice4: "LinkedIn",
                answer: 2
            }
        ]
    }
};
