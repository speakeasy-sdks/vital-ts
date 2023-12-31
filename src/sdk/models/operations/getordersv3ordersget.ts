/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetOrdersV3OrdersGetRequest extends SpeakeasyBase {
    /**
     * Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
    endDate?: Date;

    /**
     * Filter by order ids.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_ids" })
    orderIds?: string[];

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    /**
     * Filter by patient name.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient_name" })
    patientName?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
    size?: number;

    /**
     * Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
    startDate?: Date;

    /**
     * Filter by user ID.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
    userId?: string;
}

export class GetOrdersV3OrdersGetResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    getOrdersResponse?: shared.GetOrdersResponse;

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
