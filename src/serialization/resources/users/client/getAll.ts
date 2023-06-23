/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as NgResumeApi from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.users.getAll.Response.Raw, NgResumeApi.User[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).User));

export declare namespace Response {
    type Raw = serializers.User.Raw[];
}