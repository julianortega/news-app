import { gql } from 'graphql-request';
import sortNewsByImage from './sortNewsByImage';


const fetchNews = async (
  category?: Category,
  q?: string,
  isDynamic?: boolean
) => {

  const query = gql`
    query MyQuery(
      $apikey: String!
      $q: String
      $category: String
      $country: String
    ) {
      myQuery(
        apikey: $apikey
        q: $q
        category: $category
        country: $country
      ) {
        results {
          ai_region
          ai_tag
          article_id
          category
          content
          country
          description
          creator
          image_url
          keywords
          language
          link
          pubDate
          sentiment
          sentiment_stats
          source_icon
          source_id
          source_priority
          source_url
          title
        }
        status
        totalResults
        nextPage
      }
    }
  `;


  const res = await fetch('https://alashkharah.eu-central-a.ibm.stepzen.net/api/rude-turtle/__graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        apikey: process.env.NEWSDATA_API_KEY,
        q: q,
        category: category,
        country: 'us,gb,au,ca',
      },
    })
  });



  const newResponse = await res.json()

  const response = sortNewsByImage(newResponse.data.myQuery)

  return response
}
export default fetchNews;