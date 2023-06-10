/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as JpfultonApi from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Test {
    interface Options {
        environment?: core.Supplier<environments.JpfultonApiEnvironment | string>;
        fetcher?: core.FetchFunction;
    }
}

export class Test {
    constructor(protected readonly options: Test.Options) {}

    public async testGet(request: JpfultonApi.TestGetRequest = {}): Promise<void> {
        const { name } = request;
        const _queryParams = new URLSearchParams();
        if (name != null) {
            _queryParams.append("name", name);
        }

        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.JpfultonApiEnvironment.Default,
                "test"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.41",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 10000,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.JpfultonApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.JpfultonApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.JpfultonApiTimeoutError();
            case "unknown":
                throw new errors.JpfultonApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
