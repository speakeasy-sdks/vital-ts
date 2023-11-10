<!-- Start SDK Example Usage -->
```typescript
import { Vital } from "Vital";
import { SearchDiagnosisV3InsuranceSearchDiagnosisGetRequest } from "Vital/dist/sdk/models/operations";

(async () => {
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
<!-- End SDK Example Usage -->