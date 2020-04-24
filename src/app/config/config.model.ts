export interface Category {
    id: string;
    name: string;
    rank: number;
}

export interface ArticleStatus{
    id: string;
    name: 'Eingekauft' | 'Verrechnet';
}