# Vital

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/vital-ts.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/vital-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/vital-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/vital-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Vital } from "Vital";
import { SearchDiagnosisV3InsuranceSearchDiagnosisGetRequest } from "Vital/dist/sdk/models/operations";

(async () => {
    const sdk = new Vital({
        apiKey: "<YOUR-API-KEY>",
    });
    const diagnosisQuery: string = "JBOD";

    const res = await sdk.insurance.searchDiagnosis(diagnosisQuery);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Vital SDK](docs/sdks/vital/README.md)

* [robotsRobotsTxtGet](docs/sdks/vital/README.md#robotsrobotstxtget) - Robots

### [insurance](docs/sdks/insurance/README.md)

* [searchDiagnosis](docs/sdks/insurance/README.md#searchdiagnosis) - Search Diagnosis
* [searchInsurancePayorInfo](docs/sdks/insurance/README.md#searchinsurancepayorinfo) - Search Insurance Payor Information

### [labTests](docs/sdks/labtests/README.md)

* [create](docs/sdks/labtests/README.md#create) - Create Lab Test For Team
* [getLabs](docs/sdks/labtests/README.md#getlabs) - Get Labs
* [getMarkerByProvider](docs/sdks/labtests/README.md#getmarkerbyprovider) - Get Markers By Provider Id
* [getMarkers](docs/sdks/labtests/README.md#getmarkers) - Get Markers
* [list](docs/sdks/labtests/README.md#list) - Get Lab Tests For Team

### [link](docs/sdks/link/README.md)

* [checkTokenState](docs/sdks/link/README.md#checktokenstate) - Check Link Token State
* [checkTokenValidity](docs/sdks/link/README.md#checktokenvalidity) - Check Token Valid
* [connectBleProvider](docs/sdks/link/README.md#connectbleprovider) - Connect Ble Provider
* [connectEmailAuth](docs/sdks/link/README.md#connectemailauth) - Connect Email Auth
* [connectEmailProvider](docs/sdks/link/README.md#connectemailprovider) - Connect Email Auth Provider
* [connectIndividualProvider](docs/sdks/link/README.md#connectindividualprovider) - Connect Individual Provider
* [connectPasswordAuth](docs/sdks/link/README.md#connectpasswordauth) - Connect Password Auth
* [connectProvider](docs/sdks/link/README.md#connectprovider) - Connect Provider
* [createDemoConnection](docs/sdks/link/README.md#createdemoconnection) - Create Demo Connection
* [createToken](docs/sdks/link/README.md#createtoken) - Create Token
* [exchangeToken](docs/sdks/link/README.md#exchangetoken) - Exchange Token
* [generate](docs/sdks/link/README.md#generate) - Generate Vital Link Token
* [getOauthProvider](docs/sdks/link/README.md#getoauthprovider) - Get Oauth Provider
* [getProviders](docs/sdks/link/README.md#getproviders) - Get Providers
* [startConnectProcess](docs/sdks/link/README.md#startconnectprocess) - Start Connect Process

### [order](docs/sdks/order/README.md)

* [bookPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentBookPost](docs/sdks/order/README.md#bookphlebotomyappointmentv3orderorderidphlebotomyappointmentbookpost) - Book Phlebotomy Appointment
* [cancelOrderV3OrderOrderIdCancelPost](docs/sdks/order/README.md#cancelorderv3orderorderidcancelpost) - Cancel Order
* [cancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatch](docs/sdks/order/README.md#cancelphlebotomyappointmentv3orderorderidphlebotomyappointmentcancelpatch) - Cancel Phlebotomy Appointment
* [create](docs/sdks/order/README.md#create) - Create Order
* [createTestkit](docs/sdks/order/README.md#createtestkit) - Create Testkit Order
* [dispatchStatus](docs/sdks/order/README.md#dispatchstatus) - Dispatch Order Status
* [get](docs/sdks/order/README.md#get) - Get Order
* [getAppointmentAvailability](docs/sdks/order/README.md#getappointmentavailability) - Get Order Appointment Availability
* [getAreaInfo](docs/sdks/order/README.md#getareainfo) - Get Area Info
* [getLabTestResult](docs/sdks/order/README.md#getlabtestresult) - Get Lab Test Result
* [getLabTestResultMetadata](docs/sdks/order/README.md#getlabtestresultmetadata) - Get Lab Test Result Metadata
* [getLabTestResultRaw](docs/sdks/order/README.md#getlabtestresultraw) - Get Lab Test Result Raw
* [getPhlebotomyAppointment](docs/sdks/order/README.md#getphlebotomyappointment) - Get Phlebotomy Appointment
* [getPhlebotomyCancellationReasons](docs/sdks/order/README.md#getphlebotomycancellationreasons) - Get Phlebotomy Appointment Cancellation Reasons
* [getRequisitionUrl](docs/sdks/order/README.md#getrequisitionurl) - Get Order Requisition Url
* [orderProcessSimulateV3OrderOrderIdTestPost](docs/sdks/order/README.md#orderprocesssimulatev3orderorderidtestpost) - Order Process Simulate
* [processTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost](docs/sdks/order/README.md#processtestkitorderv3ordertestkitprocessteamidorderidpost) - Process Testkit Order
* [processTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePost](docs/sdks/order/README.md#processtestkitshipheroordershippedv3ordertestkitwebhookshipheroshipmentupdatepost) - Process Testkit Ship Hero Order Shipped
* [registerTestkitV3OrderTestkitRegisterPost](docs/sdks/order/README.md#registertestkitv3ordertestkitregisterpost) - Register Testkit
* [reschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatch](docs/sdks/order/README.md#reschedulephlebotomyappointmentv3orderorderidphlebotomyappointmentreschedulepatch) - Reschedule Phlebotomy Appointment
* [syncTestkitOrderStatusV3OrderTestkitStatusPost](docs/sdks/order/README.md#synctestkitorderstatusv3ordertestkitstatuspost) - Sync Testkit Order Status

### [orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - Get Orders

### [physician](docs/sdks/physician/README.md)

* [reviewOpenloopV2PhysicianReviewOpenloopPost](docs/sdks/physician/README.md#reviewopenloopv2physicianreviewopenlooppost) - Review Openloop

### [providers](docs/sdks/providers/README.md)

* [list](docs/sdks/providers/README.md#list) - Get List Of Providers

### [summary](docs/sdks/summary/README.md)

* [getMeals](docs/sdks/summary/README.md#getmeals) - Get Meals
* [getUserActivity](docs/sdks/summary/README.md#getuseractivity) - Get User Activity
* [getUserActivityRaw](docs/sdks/summary/README.md#getuseractivityraw) - Get User Activity Raw
* [getUserBody](docs/sdks/summary/README.md#getuserbody) - Get User Body
* [getUserBodyRaw](docs/sdks/summary/README.md#getuserbodyraw) - Get User Body Raw
* [getUserDevicesRaw](docs/sdks/summary/README.md#getuserdevicesraw) - Get User Devices Raw
* [getUserProfile](docs/sdks/summary/README.md#getuserprofile) - Get User Profile
* [getUserProfileRaw](docs/sdks/summary/README.md#getuserprofileraw) - Get User Profile Raw
* [getUserSleep](docs/sdks/summary/README.md#getusersleep) - Get User Sleep
* [getUserSleepRaw](docs/sdks/summary/README.md#getusersleepraw) - Get User Sleep Raw
* [getUserSleepStream](docs/sdks/summary/README.md#getusersleepstream) - Get User Sleep Stream
* [getUserWorkouts](docs/sdks/summary/README.md#getuserworkouts) - Get User Workouts
* [getUserWorkoutsRaw](docs/sdks/summary/README.md#getuserworkoutsraw) - Get User Workouts Raw
* [postUserActivity](docs/sdks/summary/README.md#postuseractivity) - Post User Activity
* [postUserBody](docs/sdks/summary/README.md#postuserbody) - Post User Body
* [postUserProfile](docs/sdks/summary/README.md#postuserprofile) - Post User Profile
* [postUserSleep](docs/sdks/summary/README.md#postusersleep) - Post User Sleep
* [postUserWorkout](docs/sdks/summary/README.md#postuserworkout) - Post User Workout

### [team](docs/sdks/team/README.md)

* [create](docs/sdks/team/README.md#create) - Create Team
* [createApiKey](docs/sdks/team/README.md#createapikey) - Create Api Key
* [createPriority](docs/sdks/team/README.md#createpriority) - Create Priority
* [deleteApiKey](docs/sdks/team/README.md#deleteapikey) - Delete Api Key
* [get](docs/sdks/team/README.md#get) - Get Team
* [getApiKeys](docs/sdks/team/README.md#getapikeys) - Get Api Keys For Team
* [getConfig](docs/sdks/team/README.md#getconfig) - Get Team Config
* [getSourcePriorities](docs/sdks/team/README.md#getsourcepriorities) - Get Source Priorities
* [getUserCount](docs/sdks/team/README.md#getusercount) - Get Team User Count
* [getWebhookUrl](docs/sdks/team/README.md#getwebhookurl) - Get Svix Webhook Url
* [rotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatch](docs/sdks/team/README.md#rotateapikeyv2teamteamidapikeyapikeyidrotatepatch) - Rotate Api Key
* [searchUsersByUuid](docs/sdks/team/README.md#searchusersbyuuid) - Search Team Users By Uuid Or Client User Id
* [updateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatch](docs/sdks/team/README.md#updateapikeylabelv2teamteamidapikeyapikeyidpatch) - Update Api Key Label
* [updateSourcePrioritiesV2TeamSourcePrioritiesPatch](docs/sdks/team/README.md#updatesourceprioritiesv2teamsourceprioritiespatch) - Update Source Priorities
* [updateTeamV2TeamTeamIdPatch](docs/sdks/team/README.md#updateteamv2teamteamidpatch) - Update Team

### [timeseries](docs/sdks/timeseries/README.md)

* [getBloodOxygen](docs/sdks/timeseries/README.md#getbloodoxygen) - Get Timeseries Resource Data
* [getBloodPressure](docs/sdks/timeseries/README.md#getbloodpressure) - Get Timeseries Resource Data
* [getCaffeine](docs/sdks/timeseries/README.md#getcaffeine) - Get Timeseries Resource Data
* [getCaloriesActive](docs/sdks/timeseries/README.md#getcaloriesactive) - Get Timeseries Resource Data
* [getCaloriesBasal](docs/sdks/timeseries/README.md#getcaloriesbasal) - Get Timeseries Resource Data
* [getCholesterolAll](docs/sdks/timeseries/README.md#getcholesterolall) - Get Timeseries Resource Data
* [getCholesterolHdl](docs/sdks/timeseries/README.md#getcholesterolhdl) - Get Timeseries Resource Data
* [getCholesterolLdl](docs/sdks/timeseries/README.md#getcholesterolldl) - Get Timeseries Resource Data
* [getDistance](docs/sdks/timeseries/README.md#getdistance) - Get Timeseries Resource Data
* [getFloorsClimbed](docs/sdks/timeseries/README.md#getfloorsclimbed) - Get Timeseries Resource Data
* [getGlucose](docs/sdks/timeseries/README.md#getglucose) - Get Timeseries Resource Data
* [getHeartrate](docs/sdks/timeseries/README.md#getheartrate) - Get Timeseries Resource Data
* [getHrv](docs/sdks/timeseries/README.md#gethrv) - Get Timeseries Resource Data
* [getHypnogram](docs/sdks/timeseries/README.md#gethypnogram) - Get Timeseries Resource Data
* [getIge](docs/sdks/timeseries/README.md#getige) - Get Timeseries Resource Data
* [getIgg](docs/sdks/timeseries/README.md#getigg) - Get Timeseries Resource Data
* [getMindfulnessMinutes](docs/sdks/timeseries/README.md#getmindfulnessminutes) - Get Timeseries Resource Data
* [getRespiratoryRate](docs/sdks/timeseries/README.md#getrespiratoryrate) - Get Timeseries Resource Data
* [getSteps](docs/sdks/timeseries/README.md#getsteps) - Get Timeseries Resource Data
* [getTotalCholesterol](docs/sdks/timeseries/README.md#gettotalcholesterol) - Get Timeseries Resource Data
* [getTriglycerides](docs/sdks/timeseries/README.md#gettriglycerides) - Get Timeseries Resource Data
* [getUserSleepStream](docs/sdks/timeseries/README.md#getusersleepstream) - Get User Sleep Stream
* [getUserWorkouts](docs/sdks/timeseries/README.md#getuserworkouts) - Get User Workouts
* [getWater](docs/sdks/timeseries/README.md#getwater) - Get Timeseries Resource Data
* [postBloodPressure](docs/sdks/timeseries/README.md#postbloodpressure) - Post User Blood Pressure
* [postVitals](docs/sdks/timeseries/README.md#postvitals) - Post User Vitals

### [user](docs/sdks/user/README.md)

* [createUser](docs/sdks/user/README.md#createuser) - Create User
* [delete](docs/sdks/user/README.md#delete) - Delete User
* [deregisterProviderV2UserUserIdProviderDelete](docs/sdks/user/README.md#deregisterproviderv2useruseridproviderdelete) - Deregister Provider
* [get](docs/sdks/user/README.md#get) - Get User
* [getAll](docs/sdks/user/README.md#getall) - Get Teams Users
* [getConnectedProviders](docs/sdks/user/README.md#getconnectedproviders) - Get Connected Providers
* [getMetrics](docs/sdks/user/README.md#getmetrics) - Get Teams Metrics
* [getSignInToken](docs/sdks/user/README.md#getsignintoken) - Get User Sign In Token
* [patchUserV2UserUserIdPatch](docs/sdks/user/README.md#patchuserv2useruseridpatch) - Patch User
* [refreshUserIdV2UserRefreshUserIdPost](docs/sdks/user/README.md#refreshuseridv2userrefreshuseridpost) - Refresh User Id
* [resolveByUserId](docs/sdks/user/README.md#resolvebyuserid) - Get User By Client User Id
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
