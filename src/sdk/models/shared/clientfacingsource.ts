/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Source summarizes where a sample or a summary is sourced from.
 *
 * @remarks
 * At minimum, the source provider is always included.
 */
export class ClientFacingSource extends SpeakeasyBase {
    /**
     * The identifier of the app which recorded this summary. This is only applicable to multi-source providers like Apple Health and Android Health Connect.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "app_id" })
    appId?: string;

    /**
     * Deprecated.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logo" })
    logo: string;

    /**
     * Deprecated.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Provider slug. e.g., `oura`, `fitbit`, `garmin`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider: string;

    /**
     * Deprecated.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug: string;

    /**
     * The type of the data source (app or device) by which the summary or the timeseries data were recorded. This defaults to `unknown` when Vital cannot extract or infer that information
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;
}
