/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as NgResumeApi from "../../api";
import * as core from "../../core";

export const Group: core.serialization.ObjectSchema<serializers.Group.Raw, NgResumeApi.Group> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        displayName: core.serialization.string().optional(),
        securityEnabled: core.serialization.boolean().optional(),
    });

export declare namespace Group {
    interface Raw {
        id?: string | null;
        displayName?: string | null;
        securityEnabled?: boolean | null;
    }
}
