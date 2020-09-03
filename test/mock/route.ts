/**
 * @author WMXPY
 * @namespace Express_Test
 * @description Route
 * @package Mock
 */

import { ISudooExpressRoute, ROUTE_MODE } from "@sudoo/express";

export const createMockRoute = (chance: Chance.Chance): ISudooExpressRoute => {

    return {
        path: chance.string(),
        mode: ROUTE_MODE.GET,

        groups: [],
        onError: () => {
            return {
                message: chance.state(),
                code: chance.natural(),
            };
        },
    }
};
