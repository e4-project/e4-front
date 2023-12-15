import mongoose, { Schema, Types } from "mongoose";

interface IMemberEntity {
  member: Types.ObjectId;
  studyId: Types.ObjectId;
  rel: "leader" | "common";
}
//applicant
const MemberSchema = new Schema<IMemberEntity>(
  {
    member: {
      type: Schema.Types.ObjectId,
      require: true,
      unique: true,
      ref: "User",
    },
    rel: {
      type: String,
      default: "common",
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Member =
  mongoose.models.Member ||
  mongoose.model<IMemberEntity>("Member", MemberSchema);
export default Member;
