export type IPermission = (model: string, role: string, permissionType: string) => void;

export type IPatterns = (noOfRows: number) => void;

export interface IUser {
  traineeEmail: string;
  reviewerEmail: string;
}
