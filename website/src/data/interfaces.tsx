interface ListItem {
    id: number,
    title: string,
    img: string,
    highlight: string,
    date: string,
    desc: string
}

interface Skill {
    id: number,
    img: string
    title?: string
}

export type { ListItem };
export type { Skill };