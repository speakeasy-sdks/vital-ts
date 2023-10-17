/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Measured in kilocalories (kcal)
 */
export enum ClientFacingCaloriesActiveTimeseriesUnit {
    Kcal = "kcal",
}

export class ClientFacingCaloriesActiveTimeseries extends SpeakeasyBase {
    /**
     * The end time (exclusive) of the interval.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    end: Date;

    /**
     * Deprecated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: any;

    /**
     * The start time (inclusive) of the interval.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    start: Date;

    /**
     * Depracated. The start time (inclusive) of the interval.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timestamp" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    timestamp: Date;

    /**
     * Time zone UTC offset in seconds. Positive offset indicates east of UTC; negative offset indicates west of UTC; and null indicates the time zone information is unavailable at source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timezone_offset" })
    timezoneOffset?: number;

    /**
     * The reading type of the measurement. This is applicable only to Cholesterol, IGG and IGE.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    /**
     * Measured in kilocalories (kcal)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit" })
    unit: ClientFacingCaloriesActiveTimeseriesUnit;

    /**
     * Energy consumption caused by the physical activity at the time or interval::kilocalories
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: number;
}