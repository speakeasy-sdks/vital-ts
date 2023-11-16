/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetMarkersV3LabTestsMarkersGetRequest extends SpeakeasyBase {
    /**
     * The identifier Vital assigned to a lab partner.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lab_id" })
    labId?: number;

    /**
     * The name of an individual biomarker or a panel. Used as a fuzzy filter when searching markers.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
    name?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
    size?: number;
}

export class GetMarkersV3LabTestsMarkersGetResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    getMarkersResponse?: shared.GetMarkersResponse;

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
