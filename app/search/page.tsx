import NewsList from "../components/NewsList"
import { getArticlesBySearch } from "@/lib/data"

type Props = {
    searchParams?: { term: string }
}

async function SearchPage({ searchParams }: Props) {

    const articles: Article[] = await getArticlesBySearch(searchParams?.term)

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
            <NewsList articles={JSON.parse(JSON.stringify(articles))} />
        </div>
    )
}

export default SearchPage