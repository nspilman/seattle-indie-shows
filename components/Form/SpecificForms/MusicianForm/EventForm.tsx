import { createEvent, Event, getIsSuccess } from "../../../../queries/insert";
import { Form } from "../../Form";

export const EventForm = () => {
  const eventFields = [
    {
      field: "band_id" as const,
      label: "Band ID",
      isRequired: true,
      placeholder: "0",
    },
    {
      field: "venue_id" as const,
      label: "Venue ID",
      isRequired: true,
      placeholder: "0",
    },
    {
      field: "date_time" as const,
      label: "Event Date and Time",
      type: "date" as const,
      isRequired: true,
      placeholder: new Date(),
    },
    {
      field: "ticket_price" as const,
      label: "Ticket Price",
      type: "number" as const,
      placeholder: 0,
    },
    {
      field: "description" as const,
      label: "Description",
      placeholder: "event details",
    },
    {
      field: "event_url" as const,
      label: "Event URL",
      placeholder: "website for tickets",
    },
    {
      field: "band_id" as const,
      label: "Band Id",
      placeholder: "band_id",
    },
  ];

  const onSubmit = async (data: Event) => {
    const status = await createEvent(data);
    return { ok: getIsSuccess(status) } as Response;
  };

  return <Form title="Event Form" fields={eventFields} onSubmit={onSubmit} />;
};
