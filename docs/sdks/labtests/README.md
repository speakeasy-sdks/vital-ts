# LabTests
(*labTests*)

### Available Operations

* [create](#create) - Create Lab Test For Team
* [getLabs](#getlabs) - Get Labs
* [getMarkerByProvider](#getmarkerbyprovider) - Get Markers By Provider Id
* [getMarkers](#getmarkers) - Get Markers
* [list](#list) - Get Lab Tests For Team

## create

Create Lab Test For Team

### Example Usage

```typescript
import { Vital } from "Vital";
import { LabTestCollectionMethod, LabTestSampleType } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital();

  const res = await sdk.labTests.create({
    description: "Multi-tiered human-resource model",
    labId: 859213,
    markerIds: [
      417458,
    ],
    method: LabTestCollectionMethod.Testkit,
    name: "blue",
    sampleType: LabTestSampleType.Urine,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.CreateLabTestRequest](../../models/shared/createlabtestrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateLabTestForTeamV3LabTestsPostResponse](../../models/operations/createlabtestforteamv3labtestspostresponse.md)>**


## getLabs

GET all the labs.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.labTests.getLabs();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetLabsV3LabTestsLabsGetResponse](../../models/operations/getlabsv3labtestslabsgetresponse.md)>**


## getMarkerByProvider

GET a specific marker for the given lab and provider_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.labTests.getMarkerByProvider({
    labId: 263548,
    providerId: "Bronze",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                  | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                  | [operations.GetMarkersByProviderIdV3LabTestsLabIdMarkersProviderIdGetRequest](../../models/operations/getmarkersbyprovideridv3labtestslabidmarkersprovideridgetrequest.md) | :heavy_check_mark:                                                                                                                                                         | The request object to use for the request.                                                                                                                                 |
| `config`                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                               | :heavy_minus_sign:                                                                                                                                                         | Available config options for making requests.                                                                                                                              |


### Response

**Promise<[operations.GetMarkersByProviderIdV3LabTestsLabIdMarkersProviderIdGetResponse](../../models/operations/getmarkersbyprovideridv3labtestslabidmarkersprovideridgetresponse.md)>**


## getMarkers

GET all the markers for the given lab.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.labTests.getMarkers({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetMarkersV3LabTestsMarkersGetRequest](../../models/operations/getmarkersv3labtestsmarkersgetrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetMarkersV3LabTestsMarkersGetResponse](../../models/operations/getmarkersv3labtestsmarkersgetresponse.md)>**


## list

GET all the lab tests the team has access to.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.labTests.list();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetLabTestsForTeamV3LabTestsGetResponse](../../models/operations/getlabtestsforteamv3labtestsgetresponse.md)>**

