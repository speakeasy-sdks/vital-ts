/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Providers } from "./providers";
import { Expose } from "class-transformer";

export class LinkTokenExchange extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "filter_on_providers" })
    filterOnProviders?: Providers[];

    /**
     * An enumeration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider?: Providers;

    @SpeakeasyMetadata()
    @Expose({ name: "redirect_url" })
    redirectUrl?: string;

    /**
     * User id returned by vital create user request. This id should be stored in your database against the user and used for all interactions with the vital api.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user_key" })
    userKey: string;
}
