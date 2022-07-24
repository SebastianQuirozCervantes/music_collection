import { EntitySchema } from 'typeorm';
import config from '../../../config/env';

module.exports = new EntitySchema({
  name: 'collection_song',
  tableName: `${config.DB.PREFIX}_COLLECTION_SONG`,
  columns: {
    id_collection_song: {
      primary: true,
      type: 'int',
      generated: true,
    },
  },
  relations: {
    collection: {
        type: 'many-to-one',
        target: 'collection',
        joinColumn: {
          name: 'id_collection',
        },
        onDelete: 'CASCADE',
        inverseSide: 'collection_song',
    },
    song: {
        type: 'many-to-one',
        target: 'song',
        joinColumn: {
            name: 'id_song',
        },
        inverseSide: 'collection_song',
        onDelete: 'CASCADE',
    },
  },
});
