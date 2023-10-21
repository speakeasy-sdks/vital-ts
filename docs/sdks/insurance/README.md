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

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const diagnosisQuery: string = "string";

  const res = await sdk.insurance.searchDiagnosis(diagnosisQuery);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `diagnosisQuery`                                                    | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.SearchDiagnosisV3InsuranceSearchDiagnosisGetResponse](../../models/operations/searchdiagnosisv3insurancesearchdiagnosisgetresponse.md)>**


## searchInsurancePayorInfo

Search Insurance Payor Information

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.insurance.searchInsurancePayorInfo({
    insuranceName: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.PayorSearchRequest](../../models/shared/payorsearchrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `retries`                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                 | :heavy_minus_sign:                                                     | Configuration to override the default retry behavior of the client.    |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.SearchInsurancePayorInformationV3InsuranceSearchPayorPostResponse](../../models/operations/searchinsurancepayorinformationv3insurancesearchpayorpostresponse.md)>**

