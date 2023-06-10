/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as JpfultonApi from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Workhistory {
    interface Options {
        environment?: core.Supplier<environments.JpfultonApiEnvironment | string>;
        fetcher?: core.FetchFunction;
    }
}

export class Workhistory {
    constructor(protected readonly options: Workhistory.Options) {}

    public async workHistoryGetAll(): Promise<JpfultonApi.WorkHistory[]> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.JpfultonApiEnvironment.Default,
                "workhistory"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.41",
            },
            contentType: "application/json",
            timeoutMs: 10000,
        });
        if (_response.ok) {
            return await serializers.workhistory.workHistoryGetAll.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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

    public async workHistoryGetById(id: string): Promise<JpfultonApi.WorkHistory> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.JpfultonApiEnvironment.Default,
                `workhistory/${id}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.41",
            },
            contentType: "application/json",
            timeoutMs: 10000,
        });
        if (_response.ok) {
            return await serializers.WorkHistory.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
