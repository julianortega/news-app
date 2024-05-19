import fetchNews from "@/lib/fetchNews"
import NewsList from "../NewsList"

type Props = {
    searchParams?: { term: string }
}

async function SearchPage({ searchParams }: Props) {

    const news: NewsResponse = await fetchNews(undefined, searchParams?.term, true)

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default SearchPage