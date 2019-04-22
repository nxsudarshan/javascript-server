export interface IPermission {
  (model: string, role: string, permissionType: string): void
}

export interface IPatterns {
  (noOfRows: number): void
}

export interface IUser {
  traineeEmail: string;
  reviewerEmail: string;
}

