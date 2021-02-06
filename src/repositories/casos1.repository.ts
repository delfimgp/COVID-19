import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Casos1, Casos1Relations} from '../models';

export class Casos1Repository extends DefaultCrudRepository<
  Casos1,
  typeof Casos1.prototype.id,
  Casos1Relations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Casos1, dataSource);
  }
}
