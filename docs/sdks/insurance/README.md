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

(async() => {
  const sdk = new Vital();

  const res = await sdk.insurance.searchDiagnosis({
    diagnosisQuery: "deposit Car",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.SearchDiagnosisV3InsuranceSearchDiagnosisGetRequest](../../models/operations/searchdiagnosisv3insurancesearchdiagnosisgetrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.SearchDiagnosisV3InsuranceSearchDiagnosisGetResponse](../../models/operations/searchdiagnosisv3insurancesearchdiagnosisgetresponse.md)>**


## searchInsurancePayorInfo

Search Insurance Payor Information

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.insurance.searchInsurancePayorInfo({
    insuranceName: "South entry Bicycle",
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
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.SearchInsurancePayorInformationV3InsuranceSearchPayorPostResponse](../../models/operations/searchinsurancepayorinformationv3insurancesearchpayorpostresponse.md)>**

