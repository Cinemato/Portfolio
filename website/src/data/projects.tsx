import { ListItem } from './interfaces';
import portfolio from '../assets/projects/portfolio.png';
import lazloshop from '../assets/projects/lazlo.png';
import turtleblast from '../assets/projects/turtle.png';
import aliendash from '../assets/projects/alien.png';
import cookbook from '../assets/projects/cook.png';
import classcentral from '../assets/projects/classcentral.png';
import sociality from '../assets/projects/sociality.png';
import games from '../assets/projects/games.png';
import restaurant from '../assets/projects/restaurant.png';
import bulky from '../assets/projects/bulky.png';

const PROJECTS_DATA: ListItem[] = [
    {
        id: 1,
        title: "LazLo Shop Ecommerce Website",
        url: "https://lazloshop.com/en",
        img: lazloshop,
        highlight: "PHP / Laravel / MySQL / HTML / CSS / JavaScript",
        date: "2022 - 2023",
        desc: "This is a full ecommerce website that is live and currently being used by a company named LazLo Shop which is owned by one of my friends. I was the only developer working on this project and I have developed both the frontend and the backend. The website includes an authentication system, a cart system, a sale system with a live counter, different products with different colors and images, mailing system, orders with pdf invoices, and many other features."
    },
    {
        id: 2,
        title: "Sociality.io Take Home Assignment",
        url: "https://comforting-semifreddo-f8a34f.netlify.app/",
        img: sociality,
        highlight: "React / JavaScript / HTML / CSS",
        date: "Sep 2022",
        desc: "I have developed this project as a take home assignment given by Sociality.io in order to apply for a Junior Frontend Developer position at their company. The company has given the candidates an image containing the design they wanted and told them to create a website with the same design using the given JSON data. I have created the design to be 100% exactly the same and have also made it responsive so it can work on mobile devices as a bonus which was not required."
    },
    {
        id: 3,
        title: "Turtle Blast - 2D Shooter",
        url: "https://play.google.com/store/apps/details?id=com.Cinemato.TurtleBlast",
        img: turtleblast,
        highlight: "Unity / C#",
        date: "Aug 2020",
        desc: "Turtle Blast is a mobile video game I developed for fun during the COVID-19 epidemic. During 2020, I have focused on building mobile video games and Turtle Blast was one of them. It is a 2D shooter game with 5 different enemies, 4 different powerups, and 3 different weapons to choose from. It includes a day/night cycle during the game and has a variety of skins. It also has an ad system where watching an ad allows the player to try again with the same score once. The game is currently available on the Google Play Store for free and has over 1000 downloads."
    },
    {
        id: 4,
        title: "Bulky Book Project",
        url: "https://github.com/Cinemato/BulkyBookStore",
        img: bulky,
        highlight: "ASP.NET Core / C# / jQuery / Bootstrap",
        date: "Jun 2023",
        desc: "This is a project I made to help me learn the ASP.NET framework for web development and also to increase my knowledge about MVC architecture and back-end web development overall. The website includes all basic CRUD functions and also has an authentication system using the Identity package with different user roles."
    },
    {
        id: 5,
        title: "Portfolio Website",
        url: "https://khaledalhariri.com/",
        img: portfolio,
        highlight: "React / TypeScript / HTML / CSS / Figma",
        date: "Mar 2023",
        desc: "This is my portfolio website which you are currently viewing. It took me a little over 1 week to complete and I have used frontend technologies to develop it. The website comprises of 4 pages: home, projects, education, and contact. You can also download my resume from the top of the home page. Enjoy your tour of my portfolio!"
    },
    {
        id: 6,
        title: "Video Games Website",
        url: "https://cinemato.github.io",
        img: games,
        highlight: "HTML / CSS / JavaScript",
        date: "Feb 2022",
        desc: "I developed website as a way to showcase my mobile games and it acted as my first portfolio website for a while. Furthermore, since I was considering putting my games in the Apple Store, I needed to build a website according to the rules of the store which was one of the main reasons behind this website. It was also a way to gain credibility as a game developer for my games."
    },
    {
        id: 7,
        title: "Alien Dash",
        url: "https://play.google.com/store/apps/details?id=com.Cinemato.AlienDash",
        img: aliendash,
        highlight: "Unity / C#",
        date: "Mar 2020",
        desc: "Alien Dash is the first game I have ever developed which made it a very big challenge for me. It is a 2D jetpack vertical game that features an alien with many skins and powerups. The goal of the game is to keep the alien flying by collecting fuel as long as possible to increase your score. The game includes many skins and also a public leaderboard for all players to see and compete."
    },
    {
        id: 8,
        title: "Restaurant Website",
        url: "https://github.com/Cinemato/Restaurant-Website-Project",
        img: restaurant,
        highlight: "HTML / CSS / Bootstrap / PHP / MySQL",
        date: "May 2021",
        desc: "This website was a university project for one of my software engineering bachelor classes. It was built during the 3rd year and by a team of 2. I was the person responsible for all the backend functionalities of this website while my friend handled the frontend. The project got a full mark from that class’s professor."
    },
    {
        id: 9,
        title: "Cookbook Website Design",
        url: "https://github.com/Cinemato/Cookbook-website-design",
        img: cookbook,
        highlight: "HTML / CSS",
        date: "Jun 2021",
        desc: "This website design is one of my very first websites that I created where I focused entirely on the frontend. The goal of building this website was to learn the main functionalities of HTML and CSS. It was also to improve my understanding as a web developer of how websites are created so I can eventually work as full stack web developer."
    },
    {
        id: 10,
        title: "Coding Allstars Take Home Assignment",
        url: "https://gorgeous-lollipop-371737.netlify.app/",
        img: classcentral,
        highlight: "PHP / HTML / CSS / JavaScript",
        date: "Feb 2023",
        desc: "I have developed this project as a take home assignment given by Coding Allstars. The project was about scrapping the content of the Class Central website and then translating around 100 pages inside that scrapped website into Hindi using PHP. After that, I was required to make sure all of the interactive menus that were scrapped worked exactly the same as in the original website which required me to write JavaScript code. In the end, I managed to complete all of the requirements successfully."
    },
]

export default PROJECTS_DATA;