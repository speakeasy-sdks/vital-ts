# Insurance
(*insurance*)

### Available Operations

* [searchDiagnosis](#searchdiagnosis) - Search Diagnosis
* [searchInsurancePayorInfo](#searchinsurancepayorinfo) - Search Insurance Payor Information

## searchDiagnosis

Search Diagnosis

### Example Usage

```typescript
import { Vital } from "Vital";
import { SearchDiagnosisV3InsuranceSearchDiagnosisGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const diagnosisQuery: string = "string";

  const res = await sdk.insurance.searchDiagnosis(diagnosisQuery);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `diagnosisQuery`                                                    | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.SearchDiagnosisV3InsuranceSearchDiagnosisGetResponse](../../sdk/models/operations/searchdiagnosisv3insurancesearchdiagnosisgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## searchInsurancePayorInfo

Search Insurance Payor Information

### Example Usage

```typescript
import { Vital } from "Vital";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.insurance.searchInsurancePayorInfo({
    insuranceName: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.PayorSearchRequest](../../sdk/models/shared/payorsearchrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `retries`                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                   | :heavy_minus_sign:                                                         | Configuration to override the default retry behavior of the client.        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.SearchInsurancePayorInformationV3InsuranceSearchPayorPostResponse](../../sdk/models/operations/searchinsurancepayorinformationv3insurancesearchpayorpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
