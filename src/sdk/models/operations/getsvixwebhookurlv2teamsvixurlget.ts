/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Successful Response
 */
export class GetSvixWebhookUrlV2TeamSvixUrlGetResponseGetSvixWebhookUrlV2TeamSvixUrlGet extends SpeakeasyBase {}

export class GetSvixWebhookUrlV2TeamSvixUrlGetResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    responseGetSvixWebhookUrlV2TeamSvixUrlGet?: GetSvixWebhookUrlV2TeamSvixUrlGetResponseGetSvixWebhookUrlV2TeamSvixUrlGet;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
