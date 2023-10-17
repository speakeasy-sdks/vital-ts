/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingProvider } from "./clientfacingprovider";
import { Expose, Transform, Type } from "class-transformer";

export class BodyV2InDB extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    data?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "priority" })
    priority?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "priority_id" })
    priorityId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "provider_id" })
    providerId: string;

    /**
     * A vendor, a service, or a platform which Vital can connect with.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    @Type(() => ClientFacingProvider)
    source?: ClientFacingProvider;

    @SpeakeasyMetadata()
    @Expose({ name: "source_id" })
    sourceId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "timestamp" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    timestamp: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId: string;
}
