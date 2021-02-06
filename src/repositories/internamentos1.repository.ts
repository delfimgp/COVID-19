import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Internamentos1, Internamentos1Relations} from '../models';

export class Internamentos1Repository extends DefaultCrudRepository<
  Internamentos1,
  typeof Internamentos1.prototype.id,
  Internamentos1Relations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Internamentos1, dataSource);
  }
}
