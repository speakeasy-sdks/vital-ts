# ClientFacingSleep


## Fields

| Field                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `averageHrv`                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | The average heart rate variability registered during the sleep period::rmssd                                                                                                                                                                     |
| `awake`                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                               | Total amount of awake time registered during the sleep period::seconds                                                                                                                                                                           |
| `bedtimeStart`                                                                                                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                               | UTC Time when the sleep period started                                                                                                                                                                                                           |
| `bedtimeStop`                                                                                                                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                               | UTC Time when the sleep period ended                                                                                                                                                                                                             |
| `calendarDate`                                                                                                                                                                                                                                   | [RFCDate](../../types/rfcdate.md)                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                               | Date of the sleep summary in the YYYY-mm-dd format. This generally matches the sleep end date.                                                                                                                                                   |
| ~~`date`~~                                                                                                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                               | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Date of the specified record, formatted as ISO8601 datetime string in UTC 00:00. Deprecated in favour of calendar_date. |
| `deep`                                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                               | Total amount of deep (N3) sleep registered during the sleep period::seconds                                                                                                                                                                      |
| `duration`                                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                               | Total duration of the sleep period (sleep.duration = sleep.bedtime_end - sleep.bedtime_start)::seconds                                                                                                                                           |
| `efficiency`                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | Sleep efficiency is the percentage of the sleep period spent asleep (100% * sleep.total / sleep.duration)::perc                                                                                                                                  |
| `hrAverage`                                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | The average heart rate registered during the sleep period::beats per minute                                                                                                                                                                      |
| `hrLowest`                                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | The lowest heart rate (5 minutes sliding average) registered during the sleep period::beats per minute                                                                                                                                           |
| `id`                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                              |
| `latency`                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | Detected latency from bedtime_start to the beginning of the first five minutes of persistent sleep::seconds                                                                                                                                      |
| `light`                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                               | Total amount of light sleep registered during the sleep period::seconds                                                                                                                                                                          |
| `rem`                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                               | Total amount of REM sleep registered during the sleep period, minutes::seconds                                                                                                                                                                   |
| `respiratoryRate`                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | Average respiratory rate::breaths per minute                                                                                                                                                                                                     |
| `score`                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | A value between 1 and 100 representing how well the user slept. Currently only available for Withings, Oura, Whoop and Garmin::scalar                                                                                                            |
| `skinTemperature`                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | The skin temperature::celcius                                                                                                                                                                                                                    |
| `sleepStream`                                                                                                                                                                                                                                    | [ClientFacingSleepStream](../../models/shared/clientfacingsleepstream.md)                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                              |
| `source`                                                                                                                                                                                                                                         | [ClientFacingSleepSource](../../models/shared/clientfacingsleepsource.md)                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                               | Source the data has come from.                                                                                                                                                                                                                   |
| `temperatureDelta`                                                                                                                                                                                                                               | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | Skin temperature deviation from the long-term temperature average::celcius                                                                                                                                                                       |
| `timezoneOffset`                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | Timezone offset from UTC as seconds. For example, EEST (Eastern European Summer Time, +3h) is 10800. PST (Pacific Standard Time, -8h) is -28800::seconds                                                                                         |
| `total`                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                               | Total amount of sleep registered during the sleep period (sleep.total = sleep.rem + sleep.light + sleep.deep)::seconds                                                                                                                           |
| `userId`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                               | User id returned by vital create user request. This id should be stored in your database against the user and used for all interactions with the vital api.                                                                                      |