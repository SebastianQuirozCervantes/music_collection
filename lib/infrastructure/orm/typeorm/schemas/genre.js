import { EntitySchema } from 'typeorm';
import config from '../../../config/env';

module.exports = new EntitySchema({
  name: 'genre',
  tableName: `${config.DB.PREFIX}_GENRES`,
  columns: {
    id_genre: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
      default: null
    },
  },
  relations: {
  },
});
