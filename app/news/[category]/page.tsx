import NewsList from "@/app/NewsList"
import fetchNews from "@/lib/fetchNews"

type Props = {
    params: { category: Category }
}

async function NewsCategory({ params: { category } }: Props) {
    const news: NewsResponse = await fetchNews(category)
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="headerTitle">{category}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default NewsCategory