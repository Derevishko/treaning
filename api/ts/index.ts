import * as express from 'express';
import Router from './core/Router';
const app = express(),
      router = new Router(),
      port = 9000
;
app.use(router.init());

app.listen(port, () => console.log(`start on port ${port}`));