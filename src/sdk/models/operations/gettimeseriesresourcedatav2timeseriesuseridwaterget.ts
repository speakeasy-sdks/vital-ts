/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetRequest extends SpeakeasyBase {
    /**
     * Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
    endDate?: string;

    /**
     * Provider oura/strava etc
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
    provider?: string;

    /**
     * Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
    startDate: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
    userId: string;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetResponse extends SpeakeasyBase {
    /**
     * Successful Response
     */
    @SpeakeasyMetadata({ elemType: shared.ClientFacingWaterTimeseries })
    clientFacingWaterTimeseries?: shared.ClientFacingWaterTimeseries[];

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
