import { Path } from "react-hook-form";

export type FieldTypes = "text" | "email" | "password" | "number" | "date";
interface BaseField<T> {
  label: string;
  field: Path<T>;
  optional?: boolean;
  size?: "small" | "large";
}

export interface TextField<T> extends BaseField<T> {
  type?: Extract<FieldTypes, "text" | "email" | "password">;
  placeholder: string;
}

export interface NumberField<T> extends BaseField<T> {
  type: Extract<FieldTypes, "number">;
  placeholder: number;
}

export interface DateField<T> extends BaseField<T> {
  type: Extract<FieldTypes, "date">;
  placeholder: Date;
}

export interface VoteField<T> extends BaseField<T> {
  type: Extract<FieldTypes, "vote">;
  label: string;
  link: string;
}

export type InputType<T> =
  | TextField<T>
  | VoteField<T>
  | NumberField<T>
  | DateField<T>;
