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
        token?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Education {
    constructor(protected readonly _options: Education.Options) {}

    public async getAll(requestOptions?: Education.RequestOptions): Promise<NgResumeApi.Education[]> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.NgResumeApiEnvironment.Default,
                "education"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@jpfulton/ng-resume-api-browser-sdk",
                "X-Fern-SDK-Version": "0.0.74",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 20000,
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

    public async getById(id: string, requestOptions?: Education.RequestOptions): Promise<NgResumeApi.Education> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.NgResumeApiEnvironment.Default,
                `education/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@jpfulton/ng-resume-api-browser-sdk",
                "X-Fern-SDK-Version": "0.0.74",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 20000,
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

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
