type Article = {
    ai_region: string
    ai_tag: string
    article_id: string
    category: Category[]
    content: string
    country: string[]
    creator: string[]
    description: string
    image_url: string
    keywords: string[]
    language: string
    link: string
    pubDate: string
    sentiment: string
    sentiment_stats: string
    source_icon: string
    source_id: string
    source_priority: number
    source_url: string
    title: string
}

type NewsResponse = {

    results: Article[]
    status: string
    totalResults: number
    nextPage: string


}

type Category =
    | "world"
    | "top"
    | "tourism"
    | "health"
    | "science"
    | "sports"
    | "business"
    | "entertainment"
    | "technology"
    | "politics"
    | "education"
    | "domestic"
    | "environment"
    | "food"
    | "lifestyle"
    | "other"
    | "crime";

