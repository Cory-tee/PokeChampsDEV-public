export type BlueprintPackageInfo = {
  name: "@pokechamps/blueprint-db";
  version: string;
};

export type EntityId = string;

export type ISODateTimeString = string;

export type StaticSource = {
  sourceId: string;
  sourceVersion?: string;
  importedAt?: ISODateTimeString;
};

export type UserOwnedEntity = {
  id: EntityId;
  accountId: EntityId;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
};
