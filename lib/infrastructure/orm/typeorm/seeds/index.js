import initDB from '../typeorm';
import GenericSeeder from './seeder';

const dir_schema = '../schemas/';
const dir_data = '../data/';
const seeds = [
    { name: 'genre', dir_schema: dir_schema + 'genre', dir_data: dir_data + 'genre' },
    { name: 'author', dir_schema: dir_schema + 'author', dir_data: dir_data + 'author' },
    { name: 'album', dir_schema: dir_schema + 'album', dir_data: dir_data + 'album' },
    { name: 'songs', dir_schema: dir_schema + 'songs', dir_data: dir_data + 'songs' },
    { name: 'user', dir_schema: dir_schema + 'user', dir_data: dir_data + 'user' },
    { name: 'collection', dir_schema: dir_schema + 'collection', dir_data: dir_data + 'collection' },
    { name: 'collection-songs', dir_schema: dir_schema + 'collection-songs', dir_data: dir_data + 'collection-songs' },
    { name: 'author-song', dir_schema: dir_schema + 'author-song', dir_data: dir_data + 'author-song' },
    { name: 'person', dir_schema: dir_schema + 'person', dir_data: dir_data + 'person' },
    { name: 'permits', dir_schema: dir_schema + 'permits', dir_data: dir_data + 'permits' },
    { name: 'authority', dir_schema: dir_schema + 'authority', dir_data: dir_data + 'authority' },
    { name: 'authority-permits', dir_schema: dir_schema + 'authority-permits', dir_data: dir_data + 'authority-permits' },
    { name: 'user-authority', dir_schema: dir_schema + 'user-authority', dir_data: dir_data + 'user-authority' },
];

const seedDB = async () => {
  for (let seed of seeds) {
    await GenericSeeder.seed(seed);
    console.log(`Done ${seed.name}.`);
  }
};

const run = async () => {
  const env = process.env.NODE_ENV;

  console.log('Connecting to DB');
  const params = {
    synchronize: true,
    dropSchema: true,
    logging: true
  };

  const conn = await initDB(params);
  console.log('Seeding DB');
  await seedDB();
  console.log('Closing DB');
  return await conn.close();
};

run();