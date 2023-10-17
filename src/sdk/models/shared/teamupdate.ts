/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TeamUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "lab_tests_patient_communication_enabled" })
    labTestsPatientCommunicationEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "lab_tests_patient_email_communication_enabled" })
    labTestsPatientEmailCommunicationEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "lab_tests_patient_sms_communication_enabled" })
    labTestsPatientSmsCommunicationEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "logo_url" })
    logoUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "subscription_status" })
    subscriptionStatus?: string;
}