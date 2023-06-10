/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as JpfultonApi from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Education {
    interface Options {
        environment?: core.Supplier<environments.JpfultonApiEnvironment | string>;
        fetcher?: core.FetchFunction;
    }
}

export class Education {
    constructor(protected readonly options: Education.Options) {}

    public async educationGetAll(): Promise<JpfultonApi.Education[]> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.JpfultonApiEnvironment.Default,
                "education"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@jpfulton/ng-resume-api-browser-sdk",
                "X-Fern-SDK-Version": "0.0.47",
            },
            contentType: "application/json",
            timeoutMs: 10000,
        });
        if (_response.ok) {
            return await serializers.education.educationGetAll.Response.parseOrThrow(_response.body, {
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

    public async educationGetById(id: string): Promise<JpfultonApi.Education> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.JpfultonApiEnvironment.Default,
                `education/${id}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@jpfulton/ng-resume-api-browser-sdk",
                "X-Fern-SDK-Version": "0.0.47",
            },
            contentType: "application/json",
            timeoutMs: 10000,
        });
        if (_response.ok) {
            return await serializers.Education.parseOrThrow(_response.body, {
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
