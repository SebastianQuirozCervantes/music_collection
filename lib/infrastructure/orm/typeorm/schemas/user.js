import { EntitySchema } from 'typeorm';
import config from '../../../config/env';
import baseColumns from '../base-columns';

module.exports = new EntitySchema({
  name: 'user',
  tableName: `${config.DB.PREFIX}_USERS`,
  columns: {
    ...baseColumns,
    id_user: {
      primary: true,
      type: 'int',
      generated: true,
    },
    email: {
      type: 'varchar',
    },
    password: {
      type: 'varchar',
      select: false,
      default: null
    },
  },
  relations: {
    authorities: {
      type: 'one-to-one',
      target: 'user_authority',
      inverseSide: 'user',
      cascade: ['insert', 'update', 'remove'],
      onDelete: 'CASCADE',
    },
    person: {
      type: 'one-to-one',
      target: 'person',
      inverseSide: 'user',
      cascade: ['insert', 'update'],
      onDelete: 'CASCADE',
    },
  },
});
