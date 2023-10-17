# ClientFacingStream


## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `altitude`                                          | *number*[]                                          | :heavy_minus_sign:                                  | Data points for altitude                            |
| `cadence`                                           | *number*[]                                          | :heavy_minus_sign:                                  | RPM for cycling, Steps per minute for running       |
| `distance`                                          | *number*[]                                          | :heavy_minus_sign:                                  | Cumulated distance for exercise                     |
| `heartrate`                                         | *number*[]                                          | :heavy_minus_sign:                                  | Heart rate in bpm                                   |
| `lat`                                               | *number*[]                                          | :heavy_minus_sign:                                  | Latitude for data point                             |
| `lng`                                               | *number*[]                                          | :heavy_minus_sign:                                  | Longitude for data point                            |
| `power`                                             | *number*[]                                          | :heavy_minus_sign:                                  | Power in watts                                      |
| `resistance`                                        | *number*[]                                          | :heavy_minus_sign:                                  | Resistance on bike                                  |
| `time`                                              | *number*[]                                          | :heavy_minus_sign:                                  | Corresponding time stamp in unix time for datapoint |
| `velocitySmooth`                                    | *number*[]                                          | :heavy_minus_sign:                                  | Velocity in m/s                                     |