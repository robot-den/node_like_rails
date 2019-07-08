const express = require('express')
const Article = require('../models/Article')

const router = express.Router()

// List
router.get('/', async (req, res, next) => {
  const articles = await Article.query()

  return res.render('articles/index', {
    title: 'Articles',
    articles
  })
})

// Show
router.get('/:id', async (req, res, next) => {
  if (req.params.id === 'new') {
    return next()
  }

  const article = await Article.query().findById(req.params.id)

  return res.render('articles/show', {
    title: article.title,
    article
  })
})

// New
router.get('/new', (req, res, next) => {
  return res.render('articles/new', {
    title: 'New article'
  })
})

// Create
router.post('/', async (req, res, next) => {
  const title = req.body.title
  const text = req.body.text

  const article = await Article.query().insert({ title, text })

  return res.redirect(`/articles/${article.id}`)
})

// Edit
router.get('/:id/edit', async (req, res, next) => {
  const article = await Article.query().findById(req.params.id)

  return res.render('articles/edit', {
    title: 'Edit article',
    article
  })
})

// Update
router.patch('/:id', async (req, res, next) => {
  const title = req.body.title
  const text = req.body.text

  await Article.query().findById(req.params.id).patch({ title, text })

  return res.redirect(`/articles/${req.params.id}`)
})

// Delete
router.delete('/:id', async (req, res, next) => {
  await Article.query().deleteById(req.params.id)

  return res.redirect('/articles')
})

module.exports = router
