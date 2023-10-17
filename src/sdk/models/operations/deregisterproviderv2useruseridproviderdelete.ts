/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeregisterProviderV2UserUserIdProviderDeleteRequest extends SpeakeasyBase {
    /**
     * Provider slug. e.g., `oura`, `fitbit`, `garmin`.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
    provider: shared.Providers;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
    userId: string;
}

export class DeregisterProviderV2UserUserIdProviderDeleteResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    userSuccessResponse?: shared.UserSuccessResponse;
}
