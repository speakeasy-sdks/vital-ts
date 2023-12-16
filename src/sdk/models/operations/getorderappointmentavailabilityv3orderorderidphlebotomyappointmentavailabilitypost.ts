/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * At-home phlebotomy appointment address. If None, the address given at the time of placing the order is used.
 */
export class GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostAddress extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city: string;

    @SpeakeasyMetadata()
    @Expose({ name: "first_line" })
    firstLine: string;

    @SpeakeasyMetadata()
    @Expose({ name: "second_line" })
    secondLine?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state: string;

    @SpeakeasyMetadata()
    @Expose({ name: "unit" })
    unit?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "zip_code" })
    zipCode: string;
}

export class GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostRequest extends SpeakeasyBase {
    /**
     * Your Order ID.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
    orderId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostAddress;
}

export class GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostResponse extends SpeakeasyBase {
    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    appointmentAvailabilitySlots?: shared.AppointmentAvailabilitySlots;

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
