import { ListItem } from './interfaces';
import bauImage from '../assets/education/bau.png';
import gamedev from '../assets/education/gamedev.png';
import ztmreact from '../assets/education/ztm.png';

const EDUCATION_DATA: ListItem[] = [
    {
        id: 1,
        title: "Bachelor's of Software Engineering",
        url: "https://bau.edu.tr/content/3879-software-engineering",
        img: bauImage,
        highlight: "Bahcesehir University (Istanbul, Turkey)",
        date: "2018 - 2022",
        desc: "I graduated from Bahcesehir University with a Bachelor’s of Software Engineering with a GPA of 3.49. I took all of the required courses and completed them including Data Structures and Algorithms, Programming Languages, Software Architecture, Linear Algebra, and many more. My Capstone Project was in the top 28 projects out of over 200 projects and was nominated for the project exhibition."
    },
    {
        id: 2,
        title: "Master's of Computer Engineering",
        url: "https://bau.edu.tr/content/9157-computer-engineering-english-thesis-non-thesis-program-definition",
        img: bauImage,
        highlight: "Bahcesehir University (Istanbul, Turkey)",
        date: "2022 - current",
        desc: "I am currently taking a Master’s of Computer Engineering at Bahcesehir University and my current GPA is 3.83. I am expected to graduate in June of 2024. So far I have taken many courses including Optimization with Artificial Intelligence, Image and Video Processing, Data Mining, and many more. I will be having my thesis in 2024 during the second year of my degree."
    },
    {
        id: 3,
        title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
        url: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
        img: ztmreact,
        highlight: "ZeroToMastery (ZTM)",
        date: "Nov 2022",
        desc: "I have taken the ZTM course for studying React in the Udemy educational platform. During this course, I have learned all of the fundamentals of react such as components, props, and hooks. I have also delved into state management with Context API and Redux. Furthermore, I learned about using Firebase and its real-time database for frontend development. The course also taught me TypeScript and how to use it with React. There are many other topics that I learned from this course such as thunks, custom hooks, and many more."
    },
    {
        id: 4,
        title: "Complete C# Unity Game Developer 2D Online Course",
        url: "https://www.udemy.com/course/unitycourse/?src=sac&kw=game+dev+2d",
        img: gamedev,
        highlight: "GameDev.tv",
        date: "Jan 2020",
        desc: "I have the 2D Game Developer course for Unity which was instructed by GameDev.tv in the Udemy educational platform. The course included all of the fundamentals of Unity game development and the C# programming language. By the end of the course, I learned the ability to create 2D video games and have challenged myself to create 2 mobile video games during 2020 which I have successfully achieved."
    },
]

export default EDUCATION_DATA;