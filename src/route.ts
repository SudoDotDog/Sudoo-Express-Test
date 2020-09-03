/**
 * @author WMXPY
 * @namespace Express_Test
 * @description Route
 */

import { ISudooExpressRoute, ROUTE_MODE, SudooExpressErrorInfo } from "@sudoo/express";

export class SudooExpressRouterExecuter {

    public static create(route: ISudooExpressRoute): SudooExpressRouterExecuter {

        return new SudooExpressRouterExecuter(route);
    }

    private readonly _route: ISudooExpressRoute;

    private constructor(route: ISudooExpressRoute) {

        this._route = route;
    }

    public get length(): number {
        return this._route.groups.length;
    }
    public get mode(): ROUTE_MODE {
        return this._route.mode;
    }

    public simulateError(code: number, error: Error): SudooExpressErrorInfo {

        return this._route.onError(code, error);
    }
}
