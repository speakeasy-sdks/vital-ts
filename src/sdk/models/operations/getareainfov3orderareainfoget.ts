/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetAreaInfoV3OrderAreaInfoGetRequest extends SpeakeasyBase {
    /**
     * Zip code of the area to check
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip_code" })
    zipCode: string;
}

export class GetAreaInfoV3OrderAreaInfoGetResponse extends SpeakeasyBase {
    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    areaInfo?: shared.AreaInfo;

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
}
