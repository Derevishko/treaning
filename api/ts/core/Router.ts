import * as express from 'express';
import {UNPROCESSABLE_ENTITY, OK} from 'http-status-codes';
import ExerciseController from '../controllers/ExerciseController';
import ExerciseRequestParser from '../request_parsers/ExerciseRequestParser';
import ExerciseStaticDatabase from '../data_layer/static_database/ExerciseStaticDatabase';

const requestParser = new ExerciseRequestParser();

class Router {

  public init(): express.IRouter {
    const router = express.Router();
    router.use("/exercise", this.initExerciseRouter(new ExerciseController(new ExerciseStaticDatabase)));
    return router;
  }

  private initExerciseRouter(exerciseController: ExerciseController): express.IRouter {
    const router = express.Router();
    
    router.get('/', (req,res) => {
      const exercises = exerciseController.getList();
      res.json(exercises);
    });
  
    router.post('/', (req,res) => {
      const result = requestParser.create(req);
      if (!result.status) this.unprocessableEntity(res);
      const id = exerciseController.create(result.body);
      res.json({id});
    });
    
    router.get('/:id', (req,res) => {
      const result = requestParser.get(req);
      if (!result.status) this.unprocessableEntity(res);
      const exercise = exerciseController.get(result.params.id);
      res.json(exercise);
    });
  
    router.put('/:id', (req,res) => {
      const result = requestParser.update(req);
      if (!result.status) this.unprocessableEntity(res);
      exerciseController.update(result.params.id, result.body);
      this.ok(res);
    });
  
    router.delete('/:id', (req,res) => {
      const result = requestParser.delete(req);
      if (!result.status) this.unprocessableEntity(res);
      exerciseController.delete(result.params.id);
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