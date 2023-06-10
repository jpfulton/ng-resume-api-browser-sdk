/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as NgResumeApi from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Education {
    interface Options {
        environment?: core.Supplier<environments.NgResumeApiEnvironment | string>;
    }
}

export class Education {
    constructor(protected readonly options: Education.Options) {}

    public async getAll(): Promise<NgResumeApi.Education[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.NgResumeApiEnvironment.Default,
                "education"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@jpfulton/ng-resume-api-browser-sdk",
                "X-Fern-SDK-Version": "0.1.0",
            },
            contentType: "application/json",
            timeoutMs: 10000,
        });
        if (_response.ok) {
            return await serializers.education.getAll.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.NgResumeApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.NgResumeApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.NgResumeApiTimeoutError();
            case "unknown":
                throw new errors.NgResumeApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async getById(id: string): Promise<NgResumeApi.Education> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.NgResumeApiEnvironment.Default,
                `education/${id}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@jpfulton/ng-resume-api-browser-sdk",
                "X-Fern-SDK-Version": "0.1.0",
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
            throw new errors.NgResumeApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.NgResumeApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.NgResumeApiTimeoutError();
            case "unknown":
                throw new errors.NgResumeApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
