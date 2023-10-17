<!-- Start SDK Example Usage -->


```typescript
import { Vital } from "Vital";

(async () => {
    const sdk = new Vital({
        apiKey: "<YOUR-API-KEY>",
    });

    const res = await sdk.insurance.searchDiagnosis({
        diagnosisQuery: "deposit Car",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->