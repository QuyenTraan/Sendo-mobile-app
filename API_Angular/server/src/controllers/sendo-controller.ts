import * as express from 'express';

import * as _ from 'lodash';

import { IBaseController } from "./base-controller";

import { VARIABLES, ControllerUtil, OperatorEnum } from '../util';
import * as path from 'path';
import * as fs from 'fs';



export default class SenDoController implements IBaseController {
    getTop: express.RequestHandler;
    search: express.RequestHandler;
   

     getOne = (req: express.Request, res: express.Response): void => {
        let keys = fs.readFileSync(path.join(__dirname, '..', '..', 'server', 'bin', 'crm-loai.json'), 'utf-8');

        res.status(200).json({
            result: JSON.parse(keys)
        })
    }
  
}