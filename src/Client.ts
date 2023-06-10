/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Education } from "./api/resources/education/client/Client";
import { Test } from "./api/resources/test/client/Client";
import { Workhistory } from "./api/resources/workhistory/client/Client";

export declare namespace JpfultonApiClient {
    interface Options {
        environment?: core.Supplier<environments.JpfultonApiEnvironment | string>;
        fetcher?: core.FetchFunction;
    }
}

export class JpfultonApiClient {
    constructor(protected readonly options: JpfultonApiClient.Options) {}

    protected _education: Education | undefined;

    public get education(): Education {
        return (this._education ??= new Education(this.options));
    }

    protected _test: Test | undefined;

    public get test(): Test {
        return (this._test ??= new Test(this.options));
    }

    protected _workhistory: Workhistory | undefined;

    public get workhistory(): Workhistory {
        return (this._workhistory ??= new Workhistory(this.options));
    }
}