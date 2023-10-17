/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { ClientFacingSleepStream } from "./clientfacingsleepstream";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Source summarizes where a sample or a summary is sourced from.
 *
 * @remarks
 * At minimum, the source provider is always included.
 */
export class ClientFacingSleepSource extends SpeakeasyBase {
    /**
     * The identifier of the app which recorded this summary. This is only applicable to multi-source providers like Apple Health and Android Health Connect.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "app_id" })
    appId?: string;

    /**
     * Deprecated.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logo" })
    logo: string;

    /**
     * Deprecated.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Provider slug. e.g., `oura`, `fitbit`, `garmin`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider: string;

    /**
     * Deprecated.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug: string;

    /**
     * The type of the data source (app or device) by which the summary or the timeseries data were recorded. This defaults to `unknown` when Vital cannot extract or infer that information
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;
}

export class ClientFacingSleep extends SpeakeasyBase {
    /**
     * The average heart rate variability registered during the sleep period::rmssd
     */
    @SpeakeasyMetadata()
    @Expose({ name: "average_hrv" })
    averageHrv?: number;

    /**
     * Total amount of awake time registered during the sleep period::seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "awake" })
    awake: number;

    /**
     * UTC Time when the sleep period started
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bedtime_start" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    bedtimeStart: Date;

    /**
     * UTC Time when the sleep period ended
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bedtime_stop" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    bedtimeStop: Date;

    /**
     * Date of the sleep summary in the YYYY-mm-dd format. This generally matches the sleep end date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "calendar_date" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    calendarDate: RFCDate;

    /**
     * Date of the specified record, formatted as ISO8601 datetime string in UTC 00:00. Deprecated in favour of calendar_date.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    date: Date;

    /**
     * Total amount of deep (N3) sleep registered during the sleep period::seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deep" })
    deep: number;

    /**
     * Total duration of the sleep period (sleep.duration = sleep.bedtime_end - sleep.bedtime_start)::seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration" })
    duration: number;

    /**
     * Sleep efficiency is the percentage of the sleep period spent asleep (100% * sleep.total / sleep.duration)::perc
     */
    @SpeakeasyMetadata()
    @Expose({ name: "efficiency" })
    efficiency?: number;

    /**
     * The average heart rate registered during the sleep period::beats per minute
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hr_average" })
    hrAverage?: number;

    /**
     * The lowest heart rate (5 minutes sliding average) registered during the sleep period::beats per minute
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hr_lowest" })
    hrLowest?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Detected latency from bedtime_start to the beginning of the first five minutes of persistent sleep::seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "latency" })
    latency?: number;

    /**
     * Total amount of light sleep registered during the sleep period::seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "light" })
    light: number;

    /**
     * Total amount of REM sleep registered during the sleep period, minutes::seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rem" })
    rem: number;

    /**
     * Average respiratory rate::breaths per minute
     */
    @SpeakeasyMetadata()
    @Expose({ name: "respiratory_rate" })
    respiratoryRate?: number;

    /**
     * A value between 1 and 100 representing how well the user slept. Currently only available for Withings, Oura, Whoop and Garmin::scalar
     */
    @SpeakeasyMetadata()
    @Expose({ name: "score" })
    score?: number;

    /**
     * The skin temperature::celcius
     */
    @SpeakeasyMetadata()
    @Expose({ name: "skin_temperature" })
    skinTemperature?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "sleep_stream" })
    @Type(() => ClientFacingSleepStream)
    sleepStream?: ClientFacingSleepStream;

    /**
     * Source the data has come from.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    @Type(() => ClientFacingSleepSource)
    source: ClientFacingSleepSource;

    /**
     * Skin temperature deviation from the long-term temperature average::celcius
     */
    @SpeakeasyMetadata()
    @Expose({ name: "temperature_delta" })
    temperatureDelta?: number;

    /**
     * Timezone offset from UTC as seconds. For example, EEST (Eastern European Summer Time, +3h) is 10800. PST (Pacific Standard Time, -8h) is -28800::seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timezone_offset" })
    timezoneOffset?: number;

    /**
     * Total amount of sleep registered during the sleep period (sleep.total = sleep.rem + sleep.light + sleep.deep)::seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total: number;

    /**
     * User id returned by vital create user request. This id should be stored in your database against the user and used for all interactions with the vital api.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId: string;
}