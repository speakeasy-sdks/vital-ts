# Vital SDK


## Overview

Vital API: API for at-home health Wearables and Lab test API for digital health companies.

### Available Operations

* [robotsRobotsTxtGet](#robotsrobotstxtget) - Robots

## robotsRobotsTxtGet

Robots

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.robotsRobotsTxtGet();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.RobotsRobotsTxtGetResponse](../../sdk/models/operations/robotsrobotstxtgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
