/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ReschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatchRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    appointmentRescheduleRequest: shared.AppointmentRescheduleRequest;

    /**
     * Your Order ID.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
    orderId: string;
}

export class ReschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatchResponse extends SpeakeasyBase {
    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    clientFacingAppointment?: shared.ClientFacingAppointment;

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
