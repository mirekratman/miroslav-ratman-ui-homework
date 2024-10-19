export type JSONValue = string | number | boolean | JSONObject | JSONValue[];

export interface JSONObject {
  [key: string]: JSONValue;
}

export interface JSONProps extends Array<JSONObject> {}
