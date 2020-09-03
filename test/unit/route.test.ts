/**
 * @author WMXPY
 * @namespace Express_Test
 * @description Route
 * @package Unit Test
 */

import { ISudooExpressRoute } from '@sudoo/express';
import { expect } from 'chai';
import * as Chance from 'chance';
import { SudooExpressRouterExecuter } from '../../src';
import { createMockRoute } from '../mock/route';

describe('Given {SudooExpressRouterExecuter} Class', (): void => {

    const chance: Chance.Chance = new Chance('sudoo-express-test-route');

    it('should be able to construct', (): void => {

        const mockRoute: ISudooExpressRoute = createMockRoute(chance);

        const executer: SudooExpressRouterExecuter = SudooExpressRouterExecuter.create(mockRoute);

        expect(executer).to.be.instanceOf(SudooExpressRouterExecuter);
    });
});
