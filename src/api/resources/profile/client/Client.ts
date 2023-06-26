/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as NgResumeApi from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Profile {
    interface Options {
        environment?: core.Supplier<environments.NgResumeApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }
}

export class Profile {
    constructor(protected readonly _options: Profile.Options) {}

    /**
     * @throws {@link NgResumeApi.UnauthorizedError}
     */
    public async get(): Promise<NgResumeApi.User> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.NgResumeApiEnvironment.Default,
                "profile"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@jpfulton/ng-resume-api-browser-sdk",
                "X-Fern-SDK-Version": "0.0.48",
            },
            contentType: "application/json",
            timeoutMs: 20000,
        });
        if (_response.ok) {
            return await serializers.User.parseOrThrow(_response.body, {
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

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
