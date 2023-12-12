<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->