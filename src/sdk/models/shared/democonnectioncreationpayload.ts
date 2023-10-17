/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DemoProviders } from "./demoproviders";
import { Expose } from "class-transformer";

export class DemoConnectionCreationPayload extends SpeakeasyBase {
    /**
     * Demo provider. For more information, please check out our docs (https://docs.tryvital.io/wearables/providers/test_data)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider: DemoProviders;

    /**
     * Vital user ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId: string;
}