import { Publisher, Subjects, TicketCreatedEvent } from "@raipackages/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
