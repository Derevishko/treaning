import * as express from 'express';
import {UNPROCESSABLE_ENTITY, OK} from 'http-status-codes';
import ExerciseController from '../controllers/ExerciseController';
import TreaningController from '../controllers/TreaningController';
import ExerciseRequestParser from '../request_parsers/ExerciseRequestParser';
import TreaningRequestParser from '../request_parsers/TreaningRequestParser';

import ExerciseMongoDatabase from '../data_layer/mongo_database/ExerciseMongoDatabase';

const exersciseParser = new ExerciseRequestParser();
const treaningParser = new TreaningRequestParser(); 

class Router {

  public init(): express.IRouter {
    const router = express.Router();
    router.use("/exercise", this.initExerciseRouter(new ExerciseController(new ExerciseMongoDatabase)));
    return router;
  }

  private initExerciseRouter(exerciseController: ExerciseController): express.IRouter {
    const router = express.Router();
   
    router.get('/:id', async (req,res) => {
      const result = exersciseParser.get(req);
      if (!result.status) this.unprocessableEntity(res);
      const exercise = await exerciseController.get(result.params.id);
      res.json(exercise);
    });
    
    router.get('/', async (req,res) => {
      const exercises = await exerciseController.getList();
      res.json(exercises);
    });
  
    router.post('/', async (req,res) => {
      const result = exersciseParser.create(req);
      if (!result.status) this.unprocessableEntity(res);
      const id = await exerciseController.create(result.body);
      res.json({id});
    });
    
    router.put('/:id', (req,res) => {
      const result = exersciseParser.update(req);
      if (!result.status) this.unprocessableEntity(res);
      exerciseController.update(result.params.id, result.body);
      this.ok(res);
    });
  
    router.delete('/:id', (req,res) => {
      const result = exersciseParser.delete(req);
      if (!result.status) this.unprocessableEntity(res);
      exerciseController.delete(result.params.id);
      this.ok(res);
    });
  
    return router;
  }

  // private initTreaningRouter(treaningController: TreaningController): express.IRouter {
  //   const router = express.Router();
  //   router.get('/', (req,res) => {
  //     const reanings = treaningController.getList();
  //     this.ok(res);
  //   })
  //   return router;
  // }

  private ok(res): void {
    res.sendStatus(OK);
  }
  private unprocessableEntity(res): void {
    res.sendStatus(UNPROCESSABLE_ENTITY);
  }
}

export default Router; 