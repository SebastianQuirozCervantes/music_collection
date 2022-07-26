import express from 'express';
const router = express.Router();
import makeExpressCb from '../../infrastructure/api/express-callback';
import controller from '../controllers/collection';

router.route('/:id/songs')
  .get(makeExpressCb(controller.getSongsByCollectionId));
      
module.exports = router;