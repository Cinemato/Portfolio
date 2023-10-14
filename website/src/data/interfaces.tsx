interface ListItem {
    id?: string,
    title: string,
    url: string,
    image: string,
    highlight: string,
    date: string,
    desc: string,
    order: number
}

interface Skill {
    id?: string,
    title: string,
    image: string,
    order: number
}

export type { ListItem };
export type { Skill };