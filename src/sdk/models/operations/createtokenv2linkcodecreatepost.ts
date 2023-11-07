/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class CreateTokenV2LinkCodeCreatePostRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
    userId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expires_at" })
    expiresAt?: Date;
}

export class CreateTokenV2LinkCodeCreatePostResponse extends SpeakeasyBase {
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
    vitalTokenCreatedResponse?: shared.VitalTokenCreatedResponse;
}
