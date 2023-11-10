# ClientFacingOrderClientFacingLabTest

The Vital Test associated with the order


## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `fasting`                                                                                                              | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Defines whether a lab test requires fasting. Only available for Labcorp.                                               |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `isActive`                                                                                                             | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `isDelegated`                                                                                                          | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Denotes whether a lab test requires using non-Vital physician networks. If it does then it's delegated - no otherwise. |
| `lab`                                                                                                                  | [shared.ClientFacingLab](../../../sdk/models/shared/clientfacinglab.md)                                                | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `markers`                                                                                                              | [shared.ClientFacingMarker](../../../sdk/models/shared/clientfacingmarker.md)[]                                        | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `method`                                                                                                               | [shared.LabTestCollectionMethod](../../../sdk/models/shared/labtestcollectionmethod.md)                                | :heavy_check_mark:                                                                                                     | The method used to perform a lab test.                                                                                 |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `price`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sampleType`                                                                                                           | [shared.LabTestSampleType](../../../sdk/models/shared/labtestsampletype.md)                                            | :heavy_check_mark:                                                                                                     | The type of sample used to perform a lab test.                                                                         |
| `slug`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |