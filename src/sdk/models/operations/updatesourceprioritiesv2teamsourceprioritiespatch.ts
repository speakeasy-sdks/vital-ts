/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team_id" })
    teamId: string;
}

export class UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchResponseBody extends SpeakeasyBase {}

export class UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful Response
     */
    @SpeakeasyMetadata({ elemType: UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchResponseBody })
    responseUpdateSourcePrioritiesV2TeamSourcePrioritiesPatch?: UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchResponseBody[];

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
