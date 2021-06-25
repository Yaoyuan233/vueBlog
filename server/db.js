const mongoose = require('mongoose')

mongoose.connect('mongodb://yao:KLWmd3Kmk8cNTL8H@cluster1-shard-00-00.bsyng.mongodb.net:27017,cluster1-shard-00-01.bsyng.mongodb.net:27017,cluster1-shard-00-02.bsyng.mongodb.net:27017/blog?ssl=true&replicaSet=atlas-ssh88k-shard-0&authSource=admin&retryWrites=true&w=majority')

const userSchema = new mongoose.Schema({
  name: String,
  password: String
})

const articleSchema = new mongoose.Schema({
  title: String,
  date: String,
  content: String,
  gist: String,
  labels: Array
})

const Models = {
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema)
}

module.exports = Models
