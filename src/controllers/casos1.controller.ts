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
import {Casos1} from '../models';
import {Casos1Repository} from '../repositories';

export class Casos1Controller {
  constructor(
    @repository(Casos1Repository)
    public casos1Repository : Casos1Repository,
  ) {}

  @post('/casos1s')
  @response(200, {
    description: 'Casos1 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Casos1)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Casos1, {
            title: 'NewCasos1',
            exclude: ['id'],
          }),
        },
      },
    })
    casos1: Omit<Casos1, 'id'>,
  ): Promise<Casos1> {
    return this.casos1Repository.create(casos1);
  }

  @get('/casos1s/count')
  @response(200, {
    description: 'Casos1 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Casos1) where?: Where<Casos1>,
  ): Promise<Count> {
    return this.casos1Repository.count(where);
  }

  @get('/casos1s')
  @response(200, {
    description: 'Array of Casos1 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Casos1, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Casos1) filter?: Filter<Casos1>,
  ): Promise<Casos1[]> {
    return this.casos1Repository.find(filter);
  }

  @patch('/casos1s')
  @response(200, {
    description: 'Casos1 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Casos1, {partial: true}),
        },
      },
    })
    casos1: Casos1,
    @param.where(Casos1) where?: Where<Casos1>,
  ): Promise<Count> {
    return this.casos1Repository.updateAll(casos1, where);
  }

  @get('/casos1s/{id}')
  @response(200, {
    description: 'Casos1 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Casos1, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Casos1, {exclude: 'where'}) filter?: FilterExcludingWhere<Casos1>
  ): Promise<Casos1> {
    return this.casos1Repository.findById(id, filter);
  }

  @patch('/casos1s/{id}')
  @response(204, {
    description: 'Casos1 PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Casos1, {partial: true}),
        },
      },
    })
    casos1: Casos1,
  ): Promise<void> {
    await this.casos1Repository.updateById(id, casos1);
  }

  @put('/casos1s/{id}')
  @response(204, {
    description: 'Casos1 PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() casos1: Casos1,
  ): Promise<void> {
    await this.casos1Repository.replaceById(id, casos1);
  }

  @del('/casos1s/{id}')
  @response(204, {
    description: 'Casos1 DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.casos1Repository.deleteById(id);
  }
}
