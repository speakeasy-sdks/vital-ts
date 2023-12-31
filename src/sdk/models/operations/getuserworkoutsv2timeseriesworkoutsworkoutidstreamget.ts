/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetRequest extends SpeakeasyBase {
    /**
     * The Vital ID for the workout
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workout_id" })
    workoutId: string;
}

export class GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetResponse extends SpeakeasyBase {
    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    clientFacingStream?: shared.ClientFacingStream;

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
