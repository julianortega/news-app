import fetchNews from "../lib/fetchNews"
import NewsList from "./NewsList"

async function Homepage() {
  const news: NewsResponse = await fetchNews(undefined, undefined, false)

  return (
    <div className="max-w-7xl mx-auto">
      <NewsList news={news} />
    </div>
  )
}

export default Homepage