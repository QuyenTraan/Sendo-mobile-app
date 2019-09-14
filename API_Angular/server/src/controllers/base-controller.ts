/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import { IReadController } from "./interfaces/read-controller.interface";
import { IWriteController } from "./interfaces/write-controller.interface";
export interface IBaseController extends IReadController, IWriteController {

}