const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const BlogPostSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      index: true
    }
  },
  {
    title: {
      type: String,
      required: true
    }
  },
  {
    content: {
      type: String,
      required: true
    }
  },
  {
    featuredImage: {
      type: String,
      required: true
    }
  },
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      index: true
    }
  },
  {
    versionKey: false,
    /** Following creates updatedAt, createdAt fields with date type*/
    timestamps: true
  }
)

BlogPostSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('BlogPost', BlogPostSchema)
