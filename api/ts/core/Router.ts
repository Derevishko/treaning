import * as express from 'express';
import {UNPROCESSABLE_ENTITY, OK} from 'http-status-codes';
import ExerciseController from '../controllers/ExerciseController';
import TrainingController from '../controllers/TrainingController';
import ExerciseRequestParser from '../request_parsers/ExerciseRequestParser';
import TrainingRequestParser from '../request_parsers/TrainingRequestParser';

import ExerciseMongoDatabase from '../data_layer/mongo_database/models/ExerciseMongoDatabase';
import TrainingMongoDatabase from '../data_layer/mongo_database/models/TrainingMongoDatabase';

const exersciseParser = new ExerciseRequestParser();
const trainingParser = new TrainingRequestParser(); 

class Router {

  public init(): express.IRouter {
    const router = express.Router();
    router.use("/exercise", this.initExerciseRouter(new ExerciseController(new ExerciseMongoDatabase)));
    router.use("/training", this.initTrainingRouter(new TrainingController(new TrainingMongoDatabase)));
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
  private initTrainingRouter(trainingController: TrainingController): express.IRouter {
    const router = express.Router();
   
    router.get('/:id', async (req,res) => {
      const result = trainingParser.get(req);
      if (!result.status) this.unprocessableEntity(res);
      const exercise = await trainingController.get(result.params.id);
      res.json(exercise);
    });
    
    router.get('/', async (req,res) => {
      const exercises = await trainingController.getList();
      res.json(exercises);
    });
  
    router.post('/', async (req,res) => {
      const result = trainingParser.create(req);
      if (!result.status) this.unprocessableEntity(res);
      const id = await trainingController.create(result.body);
      res.json({id});
    });
    
    router.put('/:id', (req,res) => {
      const result = trainingParser.update(req);
      if (!result.status) this.unprocessableEntity(res);
      trainingController.update(result.params.id, result.body);
      this.ok(res);
    });
  
    router.delete('/:id', (req,res) => {
      const result = trainingParser.delete(req);
      if (!result.status) this.unprocessableEntity(res);
      trainingController.delete(result.params.id);
      this.ok(res);
    });
  
    return router;
  }

  private ok(res): void {
    res.sendStatus(OK);
  }
  private unprocessableEntity(res): void {
    res.sendStatus(UNPROCESSABLE_ENTITY);
  }
}

export default Router; 