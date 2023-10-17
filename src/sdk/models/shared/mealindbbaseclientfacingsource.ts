/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingFood } from "./clientfacingfood";
import { ClientFacingSource } from "./clientfacingsource";
import { Energy } from "./energy";
import { Macros } from "./macros";
import { Micros } from "./micros";
import { Expose, Transform, Type } from "class-transformer";

export class MealInDBBaseClientFacingSource extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    @SpeakeasyMetadata({ elemType: ClientFacingFood })
    @Expose({ name: "data" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, ClientFacingFood> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], ClientFacingFood);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    data?: Record<string, ClientFacingFood>;

    @SpeakeasyMetadata()
    @Expose({ name: "energy" })
    @Type(() => Energy)
    energy?: Energy;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "macros" })
    @Type(() => Macros)
    macros?: Macros;

    @SpeakeasyMetadata()
    @Expose({ name: "micros" })
    @Type(() => Micros)
    micros?: Micros;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "priority_id" })
    priorityId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "provider_id" })
    providerId: string;

    /**
     * Source summarizes where a sample or a summary is sourced from.
     *
     * @remarks
     * At minimum, the source provider is always included.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    @Type(() => ClientFacingSource)
    source: ClientFacingSource;

    @SpeakeasyMetadata()
    @Expose({ name: "source_id" })
    sourceId: number;

    @SpeakeasyMetadata()
    @Expose({ name: "timestamp" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    timestamp: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId: string;
}
