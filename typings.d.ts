type Article = {
    _id: string
    title: string
    content: string
    author: Author
    categories: string[]
    tags: string[]
    source: Source
    images: Images[]

}

type Author = {
    name: string
    email: string
}

type Source = {
    name: string
    url: string
}

type Images = {
    url: string
    caption: string
    altText: string
}

type ArticleResponse = {
    article: Article[]
}
