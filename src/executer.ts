/**
 * @author WMXPY
 * @namespace Express_Test
 * @description Executer
 */

import { ISudooExpressRoute } from "@sudoo/express";

export class ExpressRouterExecuter {

    public static create(route: ISudooExpressRoute): ExpressRouterExecuter {

        return new ExpressRouterExecuter(route);
    }

    private readonly _route: ISudooExpressRoute;

    private constructor(route: ISudooExpressRoute) {

        this._route = route;
    }
}
