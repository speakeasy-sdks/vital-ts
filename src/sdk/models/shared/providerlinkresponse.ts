/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PasswordProviders } from "./passwordproviders";
import { Expose } from "class-transformer";

export class ProviderLinkResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connected" })
    connected: boolean;

    /**
     * An enumeration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider: PasswordProviders;

    @SpeakeasyMetadata()
    @Expose({ name: "provider_id" })
    providerId?: string;
}
