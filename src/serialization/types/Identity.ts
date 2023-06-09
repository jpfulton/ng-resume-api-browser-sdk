/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as NgResumeApi from "../../api";
import * as core from "../../core";

export const Identity: core.serialization.ObjectSchema<serializers.Identity.Raw, NgResumeApi.Identity> =
    core.serialization.object({
        issuer: core.serialization.string().optional(),
        issuerAssignedId: core.serialization.string().optional(),
        signInType: core.serialization.string().optional(),
    });

export declare namespace Identity {
    interface Raw {
        issuer?: string | null;
        issuerAssignedId?: string | null;
        signInType?: string | null;
    }
}
