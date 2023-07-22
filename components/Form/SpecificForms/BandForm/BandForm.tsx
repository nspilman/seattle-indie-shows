import { Band, createBand, getIsSuccess } from "../../../../queries/insert";
import { Form } from "../../Form";

export const BandForm = () => {
  const bandFormFields = [
    {
      field: "name" as const,
      label: "Band Name",
      isRequired: true,
      placeholder: "e.g. Radiohead",
    },
    {
      field: "genre" as const,
      label: "Genre",
      placeholder: "e.g. Alternative Rock",
    },
    {
      field: "description" as const,
      label: "Description",
      placeholder: "Describe the band",
    },
    {
      field: "image_url" as const,
      label: "Image URL",
      placeholder: "URL to band's image",
    },
    {
      field: "website" as const,
      label: "Website",
      placeholder: "e.g. https://www.radiohead.com/",
    },
  ];

  const onSubmit = async (data: Band) => {
    const status = await createBand(data);
    return { ok: getIsSuccess(status) } as Response;
  };

  return <Form title="Band Form" fields={bandFormFields} onSubmit={onSubmit} />;
};
