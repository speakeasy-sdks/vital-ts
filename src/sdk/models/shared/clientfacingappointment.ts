/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppointmentProvider } from "./appointmentprovider";
import { AppointmentStatus } from "./appointmentstatus";
import { AppointmentType } from "./appointmenttype";
import { LngLat } from "./lnglat";
import { USAddress } from "./usaddress";
import { Expose, Transform, Type } from "class-transformer";

export class ClientFacingAppointment extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => USAddress)
    address: USAddress;

    @SpeakeasyMetadata()
    @Expose({ name: "can_reschedule" })
    canReschedule: boolean;

    /**
     * Time is in UTC
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "iana_timezone" })
    ianaTimezone: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "location" })
    @Type(() => LngLat)
    location: LngLat;

    /**
     * An enumeration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider: AppointmentProvider;

    @SpeakeasyMetadata()
    @Expose({ name: "provider_id" })
    providerId: string;

    /**
     * Time is in UTC
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startAt: Date;

    /**
     * An enumeration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: AppointmentStatus;

    /**
     * An enumeration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: AppointmentType;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId: string;
}
