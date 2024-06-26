interface Repository {
    name: string;
    description: string;
    stars: number;
    url: string;
    image: string;
}

interface Technology {
    name: string;
    icon: string;
    color: string;
}

export type { Repository, Technology };