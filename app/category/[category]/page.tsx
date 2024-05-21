import NewsList from "@/app/components/NewsList"
import { getArticlesByCategory } from "@/lib/data"

type Props = {
    params: { category: string }
}

async function NewsCategory({ params: { category } }: Props) {
    const articles: Article[] = await getArticlesByCategory(category)

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="headerTitle">{category}</h1>
            <NewsList articles={JSON.parse(JSON.stringify(articles))} />
        </div>
    )
}

export default NewsCategory