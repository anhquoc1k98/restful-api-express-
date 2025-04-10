import { Response, NextFunction } from "express";
import { Request } from "../utils/types";
import AppMiddleware from "../base/middleware.base";
import Injectable from "../decorators/InjecTable.decorator";
Injectable();
export default class ExecuteHandlerMiddleware implements AppMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.context) {
        const { context } = req;
        console.log(req.params);
        const instance = context.instance;
        const handlerName = context.handlerName;
        const result = await instance[handlerName](req, res, next);
        res.locals.data = result;
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}
