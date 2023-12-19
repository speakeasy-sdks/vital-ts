# Providers
(*providers*)

### Available Operations

* [list](#list) - Get List Of Providers

## list

Get Provider list

### Example Usage

```typescript
import { Vital } from "Vital";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.providers.list();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetListOfProvidersV2ProvidersGetResponse](../../sdk/models/operations/getlistofprovidersv2providersgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
