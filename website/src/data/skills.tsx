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
}

const SKILLS_DATA: Skill[] = [
    {
        id: 1,
        img: phpLogo
    },
    {
        id: 2,
        img: laravelLogo
    },
    {
        id: 3,
        img: htmlLogo
    },
    {
        id: 4,
        img: jsLogo
    },
    {
        id: 5,
        img: tsLogo
    },
    {
        id: 6,
        img: cssLogo
    },
    {
        id: 7,
        img: reactLogo
    },
    {
        id: 8,
        img: xamppLogo
    },
    {
        id: 9,
        img: javaLogo
    },
    {
        id: 10,
        img: mysqlLogo
    },
    {
        id: 11,
        img: reduxLogo
    },
    {
        id: 12,
        img: unityLogo
    },
]

export type { Skill };
export default SKILLS_DATA;