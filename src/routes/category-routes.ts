import { Router } from 'express'
import { createCategoryController } from '@/modules/cars/useCases/createCategory/'
import { listCategoryController } from '@/modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (_, response) => {
  return listCategoryController.handle(_, response)
})

export { categoriesRoutes }