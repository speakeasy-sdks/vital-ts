/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MarkerType } from "./markertype";
import { Expose } from "class-transformer";

export class ClientFacingMarker extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "lab_id" })
    labId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "provider_id" })
    providerId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug: string;

    /**
     * An enumeration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: MarkerType;

    @SpeakeasyMetadata()
    @Expose({ name: "unit" })
    unit?: string;
}
