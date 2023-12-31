/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ConnectPasswordAuthV2LinkAuthPostRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    passwordAuthLink: shared.PasswordAuthLink;

    @SpeakeasyMetadata({
        data: "header, style=simple;explode=false;name=x-vital-link-client-region",
    })
    xVitalLinkClientRegion?: string;
}

export class ConnectPasswordAuthV2LinkAuthPostResponse extends SpeakeasyBase {
    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    connectionStatus?: shared.ConnectionStatus;

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
    rawResponse: AxiosResponse;
}
