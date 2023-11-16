/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class ConnectProviderV2LinkConnectProviderGetRequest extends SpeakeasyBase {
    /**
     * Provider slug. e.g., `oura`, `fitbit`, `garmin`.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
    provider: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-vital-sdk-no-redirect" })
    xVitalSDKNoRedirect?: string;
}

/**
 * Successful Response
 */
export class ConnectProviderV2LinkConnectProviderGetResponseConnectProviderV2LinkConnectProviderGet extends SpeakeasyBase {}

export class ConnectProviderV2LinkConnectProviderGetResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    responseConnectProviderV2LinkConnectProviderGet?: ConnectProviderV2LinkConnectProviderGetResponseConnectProviderV2LinkConnectProviderGet;

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
