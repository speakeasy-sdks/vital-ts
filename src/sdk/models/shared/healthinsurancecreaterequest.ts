/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { ResponsibleRelationship } from "./responsiblerelationship";
import { Expose, Type } from "class-transformer";

/**
 * Responsible details when the value of responsible_relationship is not 'Self'.
 */
export class HealthInsuranceCreateRequestPersonDetails extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => Address)
    address: Address;

    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone_type" })
    phoneType?: string;
}

export class HealthInsuranceCreateRequest extends SpeakeasyBase {
    /**
     * Textual description of what are the physician assessments and testing plans.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "assessment_plan" })
    assessmentPlan?: string;

    /**
     * An image of the back of the patient insurance card.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "back_image" })
    backImage?: any;

    /**
     * Diagnosis codes for insurance billing.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "diagnosis_codes" })
    diagnosisCodes?: string[];

    /**
     * An image of the front of the patient insurance card.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "front_image" })
    frontImage?: any;

    /**
     * Insurance unique number assigned to a patient, usually present on the insurance card.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "insurance_id" })
    insuranceId?: string;

    /**
     * An image of the patient signature for health insurance billing.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "patient_signature_image" })
    patientSignatureImage?: any;

    /**
     * Unique identifier representing a specific Health Insurance.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payor_code" })
    payorCode?: string;

    /**
     * Responsible details when the value of responsible_relationship is not 'Self'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "responsible_details" })
    @Type(() => HealthInsuranceCreateRequestPersonDetails)
    responsibleDetails?: HealthInsuranceCreateRequestPersonDetails;

    /**
     * Relationship between the patient and the insurance contractor. Values can be (Self, Spouse, Other Relationship).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "responsible_relationship" })
    responsibleRelationship?: ResponsibleRelationship;

    /**
     * Textual description of what are the patient symptoms and attempted treatments.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subjective" })
    subjective?: string;
}
