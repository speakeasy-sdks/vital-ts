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
  const sdk = new Vital();

  const res = await sdk.vital.robotsRobotsTxtGet();

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

**Promise<[operations.RobotsRobotsTxtGetResponse](../../models/operations/robotsrobotstxtgetresponse.md)>**

