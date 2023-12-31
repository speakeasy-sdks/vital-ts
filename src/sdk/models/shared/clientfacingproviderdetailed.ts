/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingResource } from "./clientfacingresource";
import { SourceAuthType } from "./sourceauthtype";
import { Expose } from "class-transformer";

export class ClientFacingProviderDetailed extends SpeakeasyBase {
    /**
     * An enumeration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "auth_type" })
    authType?: SourceAuthType;

    /**
     * Description of source of information
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * URL for source logo
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logo" })
    logo?: string;

    /**
     * Name of source of information
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Slug for designated source
     */
    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug: string;

    @SpeakeasyMetadata()
    @Expose({ name: "supported_resources" })
    supportedResources?: ClientFacingResource[];
}
