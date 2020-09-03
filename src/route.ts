/**
 * @author WMXPY
 * @namespace Express_Test
 * @description Route
 */

import { ISudooExpressRoute } from "@sudoo/express";

export class SudooExpressRouterExecuter {

    public static create(route: ISudooExpressRoute): SudooExpressRouterExecuter {

        return new SudooExpressRouterExecuter(route);
    }

    private readonly _route: ISudooExpressRoute;

    private constructor(route: ISudooExpressRoute) {

        this._route = route;
    }
}
