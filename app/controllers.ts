import fs from 'fs'
import { Router, Request, Response } from 'express'
import { articles } from './models/articles'

const router = Router()

router.use('/articles/:slug', (req: Request, res: Response) => {
  const content = fs.readFileSync(`./app/public/articles/${req.params.slug}.html`)
  res.render('articles/show', { content })
})


router.use('/articles', (req: Request, res: Response) => {
  res.render('articles/index', { articles })
})

router.use('/projects', (req: Request, res: Response) => {
  res.render('projects/index')
})

router.use('/contact', (req: Request, res: Response) => {
  res.render('contact/index')
})

router.use('/musings/:slug', (req: Request, res: Response) => {
  const content = fs.readFileSync(`./app/public/musings/${req.params.slug}.html`)
res.render('musings/show', { content })
})

router.use('/musings', (req: Request, res: Response) => {
  res.render('musings/index')
})

router.use('/', (req: Request, res: Response) => {
  res.render('home/index')
})

export {
  router
}
