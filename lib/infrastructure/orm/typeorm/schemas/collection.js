import { EntitySchema } from 'typeorm';
import config from '../../../config/env';
import baseColumns from '../base-columns';

module.exports = new EntitySchema({
  name: 'collection',
  tableName: `${config.DB.PREFIX}_COLLECTIONS`,
  columns: {
    ...baseColumns,
    id_collection: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
      default: null
    },
    date_added: {
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)'
    }
  },
  relations: {
    user: {
        type: 'many-to-one',
        target: 'user',
        joinColumn: {
          name: 'id_user',
        },
        cascade: true,
        onDelete: 'CASCADE',
      },
      collection_songs: {
        type: 'one-to-many',
        target: 'collection_song',
        inverseSide: 'collection',
        cascade: ['insert', 'update', 'remove'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
  },
});
