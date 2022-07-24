import express from 'express';
const router = express.Router();
import makeExpressCb from '../../infrastructure/api/express-callback';
import controller from '../controllers/songs';

router.route('/')
  .get(makeExpressCb(controller.getSongsByQuery));
  
router.route('/:id')
  .put(makeExpressCb(controller.updateSong));
module.exports = router;