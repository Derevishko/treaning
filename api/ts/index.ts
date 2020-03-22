import * as express from 'express';
import Router from './core/Router';
import * as parser from 'body-parser'; 
import { connect } from 'mongoose';

connect('mongodb://localhost:27017/sportix', {useNewUrlParser: true});

const app = express(),
      router = new Router(),
      port = 9000
;
app.use(parser.json())
app.use(router.init());

app.listen(port, () => console.log(`start on port ${port}`));