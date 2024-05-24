import { notFound } from "next/navigation"
import LiveTimestamp from "../../components/LiveTimestamp"
import { getArticleById } from "@/lib/data"

type Props = {
    params: { id: string }
}

async function ArticlePage({ params }: Props) {
    if (
        (params && Object.entries(params).length === 0) ||
        !params
    ) {
        return notFound()
    }

    const article: Article = await getArticleById(params.id)

    return (
        <article className="max-w-6xl mx-auto flex justify-between items-center py-8">
            <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
                {article.images[0].url && (
                    <img
                        src={article.images[0].url}
                        alt={article.title}
                        className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl w-full object-cover rounded-lg shadow-md"
                    />
                )}

                <div className="px-10">
                    <h1 className="headerTitle px-0 no-underline pb-2">{article.title}</h1>
                    <div className="flex divide-x-2 space-x-4">
                        <h2 className="pl-0">Category: {article.categories.join(', ')}</h2>
                        <h2 className="pl-4">By: {article.author.name}</h2>
                        <h2 className="pl-4">Source: {article.source.name}</h2>
                        <p className="pl-4">
                            Published: <LiveTimestamp time={article.datePublished} />
                        </p>
                    </div>

                    <p className="pt-4">{article.description}</p>

                </div>
            </section>
        </article>
    )
}

export default ArticlePage