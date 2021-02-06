import {Entity, model, property} from '@loopback/repository';

@model()
export class Internamentos1 extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  enfermaria: number;

  @property({
    type: 'number',
    required: true,
  })
  uci: number;


  constructor(data?: Partial<Internamentos1>) {
    super(data);
  }
}

export interface Internamentos1Relations {
  // describe navigational properties here
}

export type Internamentos1WithRelations = Internamentos1 & Internamentos1Relations;
