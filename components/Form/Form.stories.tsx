import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { GenericForm, GenericFormProps, Field } from "./Form";
import { Response } from "node-fetch";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  interests: string[];
}

type Payload = FormData;

export default {
  title: "Components/GenericForm",
  component: GenericForm,
} as Meta;

const Template: Story<GenericFormProps<FormData, Payload>> = (args) => (
  <GenericForm {...args} />
);

const fields: Field<FormData>[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    isRequired: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    isRequired: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    isRequired: true,
  },
  {
    name: "interests",
    label: "Interests",
    type: "multiselect",
    options: [
      {
        display: "Technology",
        value: "technology",
      },
      {
        display: "Sports",
        value: "sports",
      },
      {
        display: "Arts",
        value: "arts",
      },
    ],
  },
];

const transform = (formState: FormData) => {
  return formState;
};

const onSubmit = async (payload: Payload) => {
  console.log("Payload:", payload);
  return new Response("", { status: 200 });
};

export const Default = Template.bind({});
Default.args = {
  fields,
  transform,
  //@ts-ignore
  onSubmit,
};
