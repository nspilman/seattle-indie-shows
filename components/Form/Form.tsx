import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  Path,
  Controller,
} from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  VStack,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { SubmissionOverlay } from "./FormSuccessOverlay";

export interface GenericFormProps<FormField extends FieldValues, Payload> {
  fields: Field<FormField>[];
  transform: (formState: FormField) => Payload;
  onSubmit: (payload: Payload) => Promise<Response>;
}

interface BaseField<T> {
  name: Path<T>;
  label: string;
  type: "email" | "text" | "tel" | "password" | "date" | "number";
  isRequired?: boolean;
  pattern?: RegExp;
}

interface CheckboxField<T> extends Omit<BaseField<T>, "type"> {
  type: "multiselect";
  options: {
    display: string;
    value: string;
  }[];
}

export type Field<FormField> = BaseField<FormField> | CheckboxField<FormField>;

export const GenericForm = <FormField extends FieldValues, Payload>({
  fields,
  onSubmit: submitHandler,
  transform,
}: GenericFormProps<FormField, Payload>) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm<FormField>();
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    const payload = transform(data);
    const response = await submitHandler(payload);
    if (response.ok) {
      setShowSuccessModal(true);
    }
  };

  const closeSuccessModalAndResetValues = () => {
    reset();
    setShowSuccessModal(false);
  };

  return (
    <Box>
      <SubmissionOverlay
        isOpen={showSuccessModal}
        onClose={closeSuccessModalAndResetValues}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} flexDirection="row" flexWrap="wrap">
          {fields.map((formField) => (
            <>
              {formField.type === "multiselect" ? (
                <Controller
                  name={formField.name}
                  control={control}
                  render={({ field }) => (
                    <FormControl isRequired={formField.isRequired}>
                      <FormLabel>{formField.label}</FormLabel>
                      <CheckboxGroup
                        onChange={(values) => {
                          field.onChange(values);
                          if (values.length > 0) {
                            clearErrors(formField.name);
                          } else {
                            setError(formField.name, {
                              type: "required",
                              message: "At least one option must be selected",
                            });
                          }
                        }}
                      >
                        <VStack align="start" spacing={2}>
                          {formField.options.map((option) => (
                            <Checkbox key={option.value} value={option.value}>
                              {option.display}
                            </Checkbox>
                          ))}
                        </VStack>
                      </CheckboxGroup>
                    </FormControl>
                  )}
                />
              ) : (
                <FormControl
                  key={formField.name}
                  isRequired={formField.isRequired}
                >
                  <FormLabel>{formField.label}</FormLabel>
                  <Input
                    type={formField.type}
                    {...register(formField.name, {
                      required: formField.isRequired,
                      ...formField.pattern,
                      valueAsNumber: formField.type === "number",
                    })}
                  />
                </FormControl>
              )}
            </>
          ))}
          <Button type="submit">Submit</Button>
        </VStack>
      </form>
    </Box>
  );
};
