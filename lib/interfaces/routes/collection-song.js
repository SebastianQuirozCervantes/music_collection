import express from 'express';
const router = express.Router();
import makeExpressCb from '../../infrastructure/api/express-callback';
import controller from '../controllers/collection-song';
  
router.route('/')
    .post(makeExpressCb(controller.insertSongInCollection));
    
module.exports = router;