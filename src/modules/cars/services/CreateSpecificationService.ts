import { ISpecificationRepository } from '../repositories/ISpecificationRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationExist = this.specificationRepository.findByName(name)

    if (specificationExist) {
      throw new Error('Specification Already Exist')
    }

    this.specificationRepository.create({
      name,
      description
    })
  }
}

export { CreateSpecificationService }
