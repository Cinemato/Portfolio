import phpLogo from '../assets/skills/php-logo.svg';
import laravelLogo from '../assets/skills/laravel-logo.svg';
import htmlLogo from '../assets/skills/html-logo.svg';
import jsLogo from '../assets/skills/js-logo.svg';
import tsLogo from '../assets/skills/ts-logo.svg';
import cssLogo from '../assets/skills/css-logo.svg';
import reactLogo from '../assets/skills/react-logo.svg';
import xamppLogo from '../assets/skills/xampp-logo.svg';
import javaLogo from '../assets/skills/java-logo.svg';
import mysqlLogo from '../assets/skills/mysql-logo.svg';
import reduxLogo from '../assets/skills/redux-logo.svg';
import unityLogo from '../assets/skills/unity-logo.svg';

interface Skill {
    id: number,
    img: string
    title?: string
}

const SKILLS_DATA: Skill[] = [
    {
        id: 1,
        img: phpLogo,
        title: "PHP"
    },
    {
        id: 2,
        img: laravelLogo,
        title: "Laravel"
    },
    {
        id: 3,
        img: htmlLogo,
        title: "HTML"
    },
    {
        id: 4,
        img: jsLogo,
        title: "JavaScript"
    },
    {
        id: 5,
        img: tsLogo,
        title: "TypeScript"
    },
    {
        id: 6,
        img: cssLogo,
        title: "CSS"
    },
    {
        id: 7,
        img: reactLogo,
        title: "React"
    },
    {
        id: 8,
        img: xamppLogo,
        title: "XAMPP"
    },
    {
        id: 9,
        img: javaLogo,
        title: "Java"
    },
    {
        id: 10,
        img: mysqlLogo,
        title: "MySQL"
    },
    {
        id: 11,
        img: reduxLogo,
        title: "Redux"
    },
    {
        id: 12,
        img: unityLogo,
        title: "Unity"
    },
]

export type { Skill };
export default SKILLS_DATA;