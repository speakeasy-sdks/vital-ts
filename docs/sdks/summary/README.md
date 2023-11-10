# Summary
(*summary*)

### Available Operations

* [getMeals](#getmeals) - Get Meals
* [getUserActivity](#getuseractivity) - Get User Activity
* [getUserActivityRaw](#getuseractivityraw) - Get User Activity Raw
* [getUserBody](#getuserbody) - Get User Body
* [getUserBodyRaw](#getuserbodyraw) - Get User Body Raw
* [getUserDevicesRaw](#getuserdevicesraw) - Get User Devices Raw
* [getUserProfile](#getuserprofile) - Get User Profile
* [getUserProfileRaw](#getuserprofileraw) - Get User Profile Raw
* [getUserSleep](#getusersleep) - Get User Sleep
* [getUserSleepRaw](#getusersleepraw) - Get User Sleep Raw
* [getUserSleepStream](#getusersleepstream) - Get User Sleep Stream
* [getUserWorkouts](#getuserworkouts) - Get User Workouts
* [getUserWorkoutsRaw](#getuserworkoutsraw) - Get User Workouts Raw
* [postUserActivity](#postuseractivity) - Post User Activity
* [postUserBody](#postuserbody) - Post User Body
* [postUserProfile](#postuserprofile) - Post User Profile
* [postUserSleep](#postusersleep) - Post User Sleep
* [postUserWorkout](#postuserworkout) - Post User Workout

## getMeals

Get user's meals

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetMealsV2SummaryMealUserIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "string";
const userId: string = "641fb67c-c4de-44d2-8b5e-3e073000b0a5";
const endDate: string = "string";
const provider: string = "string";

  const res = await sdk.summary.getMeals(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetMealsV2SummaryMealUserIdGetResponse](../../sdk/models/operations/getmealsv2summarymealuseridgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserActivity

Get Daily Activity for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserActivityV2SummaryActivityUserIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "string";
const userId: string = "29994eda-1c81-42f3-a33b-dcb5592eeffb";
const endDate: string = "string";
const provider: string = "string";

  const res = await sdk.summary.getUserActivity(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetUserActivityV2SummaryActivityUserIdGetResponse](../../sdk/models/operations/getuseractivityv2summaryactivityuseridgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserActivityRaw

Get Daily Activity for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserActivityRawV2SummaryActivityUserIdRawGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "string";
const userId: string = "c752487b-77c7-4c61-ad1e-e885ef0bdc3c";
const endDate: string = "string";
const provider: string = "string";

  const res = await sdk.summary.getUserActivityRaw(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetUserActivityRawV2SummaryActivityUserIdRawGetResponse](../../sdk/models/operations/getuseractivityrawv2summaryactivityuseridrawgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserBody

Get Daily Body data for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserBodyV2SummaryBodyUserIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "string";
const userId: string = "8170daa1-c702-4d4a-9653-9a8a9e6e4eae";
const endDate: string = "string";
const provider: string = "string";

  const res = await sdk.summary.getUserBody(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetUserBodyV2SummaryBodyUserIdGetResponse](../../sdk/models/operations/getuserbodyv2summarybodyuseridgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserBodyRaw

Get Daily Body data for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserBodyRawV2SummaryBodyUserIdRawGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "string";
const userId: string = "318730e0-1d99-4c94-97d6-8e72c1985489";
const endDate: string = "string";
const provider: string = "string";

  const res = await sdk.summary.getUserBodyRaw(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetUserBodyRawV2SummaryBodyUserIdRawGetResponse](../../sdk/models/operations/getuserbodyrawv2summarybodyuseridrawgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserDevicesRaw

Get Devices for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserDevicesRawV2SummaryDevicesUserIdRawGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "d3afcead-cf24-4987-97fa-74fe26009852";
const provider: string = "string";

  const res = await sdk.summary.getUserDevicesRaw(userId, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `provider`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | Provider oura/strava etc                                            |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetUserDevicesRawV2SummaryDevicesUserIdRawGetResponse](../../sdk/models/operations/getuserdevicesrawv2summarydevicesuseridrawgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserProfile

Get Daily profile for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserProfileV2SummaryProfileUserIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "1e03319e-ca0e-4660-8784-a0581ebdd19f";
const provider: string = "string";

  const res = await sdk.summary.getUserProfile(userId, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `provider`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | Provider oura/strava etc                                            |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetUserProfileV2SummaryProfileUserIdGetResponse](../../sdk/models/operations/getuserprofilev2summaryprofileuseridgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserProfileRaw

Get Daily profile for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserProfileRawV2SummaryProfileUserIdRawGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "ae101aa4-8797-4dc6-bac7-aa9d64e72a37";
const provider: string = "string";

  const res = await sdk.summary.getUserProfileRaw(userId, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `provider`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | Provider oura/strava etc                                            |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetUserProfileRawV2SummaryProfileUserIdRawGetResponse](../../sdk/models/operations/getuserprofilerawv2summaryprofileuseridrawgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserSleep

Get Daily sleep for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserSleepV2SummarySleepUserIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "string";
const userId: string = "6a2ea429-e1c8-48ab-a43b-c6a94c896bba";
const endDate: string = "string";
const provider: string = "string";

  const res = await sdk.summary.getUserSleep(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetUserSleepV2SummarySleepUserIdGetResponse](../../sdk/models/operations/getusersleepv2summarysleepuseridgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserSleepRaw

Get Daily sleep for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserSleepRawV2SummarySleepUserIdRawGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "string";
const userId: string = "b2ba77ed-68ff-441f-bfc0-77eae7285ab9";
const endDate: string = "string";
const provider: string = "string";

  const res = await sdk.summary.getUserSleepRaw(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetUserSleepRawV2SummarySleepUserIdRawGetResponse](../../sdk/models/operations/getusersleeprawv2summarysleepuseridrawgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserSleepStream

Get Daily sleep stream for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserSleepStreamV2SummarySleepUserIdStreamGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "string";
const userId: string = "8905f1c3-5295-4037-bc4a-b0890f30d313";
const endDate: string = "string";
const provider: string = "string";

  const res = await sdk.summary.getUserSleepStream(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetUserSleepStreamV2SummarySleepUserIdStreamGetResponse](../../sdk/models/operations/getusersleepstreamv2summarysleepuseridstreamgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserWorkouts

Get Daily workout for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserWorkoutsV2SummaryWorkoutsUserIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "string";
const userId: string = "bc0edaf0-6098-41f4-a6eb-525d09cc6d26";
const endDate: string = "string";
const provider: string = "string";

  const res = await sdk.summary.getUserWorkouts(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetUserWorkoutsV2SummaryWorkoutsUserIdGetResponse](../../sdk/models/operations/getuserworkoutsv2summaryworkoutsuseridgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getUserWorkoutsRaw

Get Daily workout for user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "string";
const userId: string = "4853d653-58ad-48c0-b4b1-c219bac589e4";
const endDate: string = "string";
const provider: string = "string";

  const res = await sdk.summary.getUserWorkoutsRaw(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetResponse](../../sdk/models/operations/getuserworkoutsrawv2summaryworkoutsuseridrawgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## postUserActivity

Post User Activity

### Example Usage

```typescript
import { Vital } from "Vital";
import { PostUserActivityV2SummaryActivityUserIdPostRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "0e4724f5-d113-41c1-bf58-cd7168d06d0c";
const xVitalAndroidSDKVersion: string = "string";
const xVitalIosSDKVersion: string = "string";

  const res = await sdk.summary.postUserActivity(userId, xVitalAndroidSDKVersion, xVitalIosSDKVersion);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `xVitalAndroidSDKVersion`                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `xVitalIosSDKVersion`                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.PostUserActivityV2SummaryActivityUserIdPostResponse](../../sdk/models/operations/postuseractivityv2summaryactivityuseridpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## postUserBody

Post User Body

### Example Usage

```typescript
import { Vital } from "Vital";
import { PostUserBodyV2SummaryBodyUserIdPostRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "2aac64a8-1a4b-47b9-b083-c6d33a9beb02";
const xVitalAndroidSDKVersion: string = "string";
const xVitalIosSDKVersion: string = "string";

  const res = await sdk.summary.postUserBody(userId, xVitalAndroidSDKVersion, xVitalIosSDKVersion);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `xVitalAndroidSDKVersion`                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `xVitalIosSDKVersion`                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.PostUserBodyV2SummaryBodyUserIdPostResponse](../../sdk/models/operations/postuserbodyv2summarybodyuseridpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## postUserProfile

Post User Profile

### Example Usage

```typescript
import { Vital } from "Vital";
import { PostUserProfileV2SummaryProfileUserIdPostRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "343ee935-de73-408c-a15e-4782d3b864c4";
const xVitalAndroidSDKVersion: string = "string";
const xVitalIosSDKVersion: string = "string";

  const res = await sdk.summary.postUserProfile(userId, xVitalAndroidSDKVersion, xVitalIosSDKVersion);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `xVitalAndroidSDKVersion`                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `xVitalIosSDKVersion`                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.PostUserProfileV2SummaryProfileUserIdPostResponse](../../sdk/models/operations/postuserprofilev2summaryprofileuseridpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## postUserSleep

Post User Sleep

### Example Usage

```typescript
import { Vital } from "Vital";
import { PostUserSleepV2SummarySleepUserIdPostRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "4332e922-db99-44ec-bd9d-77a063c520e5";
const xVitalAndroidSDKVersion: string = "string";
const xVitalIosSDKVersion: string = "string";

  const res = await sdk.summary.postUserSleep(userId, xVitalAndroidSDKVersion, xVitalIosSDKVersion);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `xVitalAndroidSDKVersion`                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `xVitalIosSDKVersion`                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.PostUserSleepV2SummarySleepUserIdPostResponse](../../sdk/models/operations/postusersleepv2summarysleepuseridpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## postUserWorkout

Post User Workout

### Example Usage

```typescript
import { Vital } from "Vital";
import { PostUserWorkoutV2SummaryWorkoutsUserIdPostRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "63a9d635-f084-45f5-a781-131420d3a83b";
const xVitalAndroidSDKVersion: string = "string";
const xVitalIosSDKVersion: string = "string";

  const res = await sdk.summary.postUserWorkout(userId, xVitalAndroidSDKVersion, xVitalIosSDKVersion);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `xVitalAndroidSDKVersion`                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `xVitalIosSDKVersion`                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.PostUserWorkoutV2SummaryWorkoutsUserIdPostResponse](../../sdk/models/operations/postuserworkoutv2summaryworkoutsuseridpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |
