import { notFound } from "next/navigation"
import LiveTimestamp from "../LiveTimestamp"

type Props = {
    searchParams?: Article
}

function ArticlePage({ searchParams }: Props) {
    console.log(searchParams)
    if (
        (searchParams && Object.entries(searchParams).length === 0) ||
        !searchParams
    ) {
        return notFound()
    }

    const article: Article = searchParams

    return (
        <article className="max-w-6xl mx-auto flex justify-between items-center py-8">
            <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
                {article.image_url && (
                    <img
                        src={article.image_url}
                        alt={article.title}
                        className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl w-full object-cover rounded-lg shadow-md"
                    />
                )}

                <div className="px-10">
                    <h1 className="headerTitle px-0 no-underline pb-2">{article.title}</h1>
                    <div className="flex divide-x-2 space-x-4">
                        <h2 className="pl-0">Category: {article.category}</h2>
                        <h2 className="pl-4">By: {article.creator}</h2>
                        <h2 className="pl-4">Source: {article.source_url}</h2>
                        <p className="pl-4">
                            Published: <LiveTimestamp time={article.pubDate} />
                        </p>
                    </div>

                    <p className="pt-4">{article.description}</p>

                </div>
            </section>
        </article>
    )
}

export default ArticlePage