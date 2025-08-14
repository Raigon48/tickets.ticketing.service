import { Publisher, Subjects, TicketUpdatedEvent } from "@raipackages/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
