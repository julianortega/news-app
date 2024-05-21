import { getArticles } from "@/lib/data"
import NewsList from "./components/NewsList"

async function Homepage() {
  const articles: Article[] = await getArticles()

  return (
    <div className="max-w-7xl mx-auto">
      <NewsList articles={JSON.parse(JSON.stringify(articles))} />
    </div>
  )
}

export default Homepage