import express from 'express';
const router = express.Router();
import makeExpressCb from '../../infrastructure/api/express-callback';
import controller from '../controllers/author';

router.route('/:id/songs')
  .get(makeExpressCb(controller.getSongsByAuthorId));
  
module.exports = router;