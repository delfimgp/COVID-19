import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Internamentos1} from '../models';
import {Internamentos1Repository} from '../repositories';

export class Internamentos1Controller {
  constructor(
    @repository(Internamentos1Repository)
    public internamentos1Repository : Internamentos1Repository,
  ) {}

  @post('/internamentos1s')
  @response(200, {
    description: 'Internamentos1 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Internamentos1)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Internamentos1, {
            title: 'NewInternamentos1',
            exclude: ['id'],
          }),
        },
      },
    })
    internamentos1: Omit<Internamentos1, 'id'>,
  ): Promise<Internamentos1> {
    return this.internamentos1Repository.create(internamentos1);
  }

  @get('/internamentos1s/count')
  @response(200, {
    description: 'Internamentos1 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Internamentos1) where?: Where<Internamentos1>,
  ): Promise<Count> {
    return this.internamentos1Repository.count(where);
  }

  @get('/internamentos1s')
  @response(200, {
    description: 'Array of Internamentos1 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Internamentos1, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Internamentos1) filter?: Filter<Internamentos1>,
  ): Promise<Internamentos1[]> {
    return this.internamentos1Repository.find(filter);
  }

  @patch('/internamentos1s')
  @response(200, {
    description: 'Internamentos1 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Internamentos1, {partial: true}),
        },
      },
    })
    internamentos1: Internamentos1,
    @param.where(Internamentos1) where?: Where<Internamentos1>,
  ): Promise<Count> {
    return this.internamentos1Repository.updateAll(internamentos1, where);
  }

  @get('/internamentos1s/{id}')
  @response(200, {
    description: 'Internamentos1 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Internamentos1, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Internamentos1, {exclude: 'where'}) filter?: FilterExcludingWhere<Internamentos1>
  ): Promise<Internamentos1> {
    return this.internamentos1Repository.findById(id, filter);
  }

  @patch('/internamentos1s/{id}')
  @response(204, {
    description: 'Internamentos1 PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Internamentos1, {partial: true}),
        },
      },
    })
    internamentos1: Internamentos1,
  ): Promise<void> {
    await this.internamentos1Repository.updateById(id, internamentos1);
  }

  @put('/internamentos1s/{id}')
  @response(204, {
    description: 'Internamentos1 PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() internamentos1: Internamentos1,
  ): Promise<void> {
    await this.internamentos1Repository.replaceById(id, internamentos1);
  }

  @del('/internamentos1s/{id}')
  @response(204, {
    description: 'Internamentos1 DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.internamentos1Repository.deleteById(id);
  }
}
