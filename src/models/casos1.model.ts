import {Entity, model, property} from '@loopback/repository';

@model()
export class Casos1 extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  concelho: string;

  @property({
    type: 'number',
    default: 0,
  })
  infetados?: number;

  @property({
    type: 'number',
    default: 0,
  })
  obitos?: number;

  @property({
    type: 'number',
    default: 0,
  })
  ativos?: number;

  @property({
    type: 'number',
    default: 0,
  })
  recuperados?: number;

  @property({
    type: 'date',
    required: true,
  })
  data: string;


  constructor(data?: Partial<Casos1>) {
    super(data);
  }
}

export interface Casos1Relations {
  // describe navigational properties here
}

export type Casos1WithRelations = Casos1 & Casos1Relations;
