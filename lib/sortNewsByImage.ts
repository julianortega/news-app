export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImage = news.results.filter((article) => article.image_url !== null)
  const newsWithoutImage = news.results.filter((article) => article.image_url === null)
  return {
    ...news,
    results: [...newsWithImage, ...newsWithoutImage]
  }
}
