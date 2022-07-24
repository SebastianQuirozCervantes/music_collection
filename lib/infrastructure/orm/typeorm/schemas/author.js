import { EntitySchema } from 'typeorm';
import config from '../../../config/env';
import baseColumns from '../base-columns';

module.exports = new EntitySchema({
  name: 'author',
  tableName: `${config.DB.PREFIX}_AUTHORS`,
  columns: {
    ...baseColumns,
    id_author: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
        type: 'varchar',
        default: null
    },
    birth_date: {
        type: 'timestamp',
        default: null
    },
    cover: {
      type: 'varchar',
      default: null
    }
  },
  relations: {
    author_song: {
      type: 'one-to-many',
      target: 'author_song',
      inverseSide: 'author',
      cascade: ['insert', 'update', 'remove'],
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
});
