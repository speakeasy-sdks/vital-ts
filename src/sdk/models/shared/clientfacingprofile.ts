/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSource } from "./clientfacingsource";
import { Expose, Type } from "class-transformer";

export class ClientFacingProfile extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "height" })
    height?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Source summarizes where a sample or a summary is sourced from.
     *
     * @remarks
     * At minimum, the source provider is always included.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    @Type(() => ClientFacingSource)
    source: ClientFacingSource;

    /**
     * User id returned by vital create user request. This id should be stored in your database against the user and used for all interactions with the vital api.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId: string;
}
