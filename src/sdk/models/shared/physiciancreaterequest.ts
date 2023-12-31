/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PhysicianCreateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "licensed_states" })
    licensedStates?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "npi" })
    npi: string;

    /**
     * An image of the physician signature for health insurance billing
     */
    @SpeakeasyMetadata()
    @Expose({ name: "signature_image" })
    signatureImage?: any;
}
