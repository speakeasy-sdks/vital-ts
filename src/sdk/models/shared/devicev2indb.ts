/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingProvider } from "./clientfacingprovider";
import { Expose, Type } from "class-transformer";

export class DeviceV2InDB extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    data?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "provider_id" })
    providerId: string;

    /**
     * A vendor, a service, or a platform which Vital can connect with.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    @Type(() => ClientFacingProvider)
    source: ClientFacingProvider;

    @SpeakeasyMetadata()
    @Expose({ name: "source_id" })
    sourceId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId: string;
}
