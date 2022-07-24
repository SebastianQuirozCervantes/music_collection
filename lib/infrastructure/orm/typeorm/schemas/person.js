import { EntitySchema } from 'typeorm';
import config from '../../../config/env';
import baseColumns from '../base-columns';

module.exports = new EntitySchema({
  name: 'person',
  tableName: `${config.DB.PREFIX}_PERSONS`,
  columns: {
    ...baseColumns,
    id_person: {
      primary: true,
      type: 'int',
      generated: true,
    },
    first_name: {
      type: 'varchar',
      nullable: true,
    },
    second_name: {
        type: 'varchar',
        nullable: true,
    },
    last_name: {
      type: 'varchar',
      nullable: true,
    },
    dni: {
      type: 'varchar',
      nullable: true,
    },
    phone: {
      type: 'varchar',
      nullable: true,
    },
  },
  relations: {
    user: {
      type: 'one-to-one',
      target: 'user',
      inverseSide: 'person',
      joinColumn: {
        name: 'id_user',
      },
      onDelete: 'CASCADE',
    },
  },
});
