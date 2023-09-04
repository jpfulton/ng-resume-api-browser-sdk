/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as NgResumeApi from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Groups {
    interface Options {
        environment?: core.Supplier<environments.NgResumeApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Groups {
    constructor(protected readonly _options: Groups.Options) {}

    /**
     * @throws {@link NgResumeApi.UnauthorizedError}
     */
    public async getAll(requestOptions?: Groups.RequestOptions): Promise<NgResumeApi.Group[]> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.NgResumeApiEnvironment.Default,
                "groups"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@jpfulton/ng-resume-api-browser-sdk",
                "X-Fern-SDK-Version": "0.0.71",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 20000,
        });
        if (_response.ok) {
            return await serializers.groups.getAll.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new NgResumeApi.UnauthorizedError(_response.error.body);
                default:
                    throw new errors.NgResumeApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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

    /**
     * @throws {@link NgResumeApi.UnauthorizedError}
     */
    public async addUser(
        groupId: string,
        request: NgResumeApi.User,
        requestOptions?: Groups.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.NgResumeApiEnvironment.Default,
                `groups/${groupId}/users`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@jpfulton/ng-resume-api-browser-sdk",
                "X-Fern-SDK-Version": "0.0.71",
            },
            contentType: "application/json",
            body: await serializers.User.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 20000,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new NgResumeApi.UnauthorizedError(_response.error.body);
                default:
                    throw new errors.NgResumeApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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

    /**
     * @throws {@link NgResumeApi.UnauthorizedError}
     */
    public async removeUser(groupId: string, userId: string, requestOptions?: Groups.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.NgResumeApiEnvironment.Default,
                `groups/${groupId}/users/${userId}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@jpfulton/ng-resume-api-browser-sdk",
                "X-Fern-SDK-Version": "0.0.71",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 20000,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new NgResumeApi.UnauthorizedError(_response.error.body);
                default:
                    throw new errors.NgResumeApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
