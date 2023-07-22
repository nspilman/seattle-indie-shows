import { Venue, createVenue, getIsSuccess } from "../../../../queries/insert";
import { Form } from "../../Form";

export const VenueForm = () => {
  const venueFormFields = [
    {
      field: "name" as const,
      label: "Venue Name",
      isRequired: true,
      placeholder: "e.g. Madison Square Garden",
    },
    {
      field: "address" as const,
      label: "Address",
      isRequired: true,
      placeholder: "e.g. 4 Pennsylvania Plaza, New York, NY",
    },
    {
      field: "capacity" as const,
      label: "Capacity",
      type: "number" as const,
      placeholder: 500,
    },
    {
      field: "description" as const,
      label: "Description",
      placeholder: "Describe the venue",
    },
    {
      field: "image_url" as const,
      label: "Image URL",
      placeholder: "URL to venue's image",
    },
    {
      field: "website" as const,
      label: "Website",
      placeholder: "e.g. https://www.msg.com/",
    },
  ];

  const onSubmit = async (data: Venue) => {
    const status = await createVenue(data); // Assuming you have a similar method for venues as for bands
    return { ok: getIsSuccess(status) } as Response;
  };

  return (
    <Form title="Venue Form" fields={venueFormFields} onSubmit={onSubmit} />
  );
};
