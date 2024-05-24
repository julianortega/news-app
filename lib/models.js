const mongoose = require('mongoose');

const articlesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        author: {
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            }
        },
        datePublished: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            required: false
        },
        categories: {
            type: [String],
            required: true
        },
        source: {
            name: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        images: [
            {
                url: {
                    type: String,
                    required: true
                },
                caption: {
                    type: String,
                    required: true
                },
                altText: {
                    type: String,
                    required: true
                }
            }
        ]
    },
)

export const Article = mongoose.models.Article || mongoose.model('Article', articlesSchema)
