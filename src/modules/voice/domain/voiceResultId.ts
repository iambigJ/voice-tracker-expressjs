import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { Result } from "../../../shared/core/Result";
import { Entity } from "../../../shared/domain/Entity";

export class VoiceResultId extends Entity<any> {

    get id (): UniqueEntityID {
        return this._id;
    }

    private constructor (id?: UniqueEntityID) {
        super(null, id)
    }

    public static create (id?: UniqueEntityID): Result<VoiceResultId> {
        return Result.ok<VoiceResultId>(new VoiceResultId(id));
    }
}