import { Article } from './models'
import { connectToDb } from './utils.js'

export const getArticles = async () => {
    try {
        connectToDb()
        return await Article.find({})
    }
    catch (error) {
        console.log(error)
        throw new Error('Error getting articles')
    }

}

export const getArticleById = async (id) => {
    try {
        connectToDb()
        return await Article.findById(id)
    } catch (error) {
        console.log(error)
        throw new Error('Error getting article by id')
    }
}

export const getArticlesByCategory = async (category) => {
    try {
        connectToDb()
        return await Article.find({ categories: category })
    } catch (error) {
        console.log(error)
        throw new Error('Error getting articles by category')
    }
}

// get articles that match term in any field
export const getArticlesBySearch = async (term) => {
    try {
        connectToDb()
        return await Article.find({
            $or: [
                { title: { $regex: term, $options: 'i' } },
                { description: { $regex: term, $options: 'i' } },
                { 'author.name': { $regex: term, $options: 'i' } },
                { 'author.email': { $regex: term, $options: 'i' } },
                { 'source.name': { $regex: term, $options: 'i' } },
                { 'source.url': { $regex: term, $options: 'i' } },
                { 'images.caption': { $regex: term, $options: 'i' } },
                { 'images.altText': { $regex: term, $options: 'i' } },
                { tags: { $regex: term, $options: 'i' } },
                { categories: { $regex: term, $options: 'i' } }
            ]
        })
    } catch (error) {
        console.log(error)
        throw new Error('Error getting articles by search term')
    }
}
