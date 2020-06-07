import $ from "jquery";
import { treatmentsService } from "../common/treatments-service";
import { treatmentsList } from "./scores-list";

export const scores = () => {
  const fragment = $(new DocumentFragment());

  return treatmentsService.getTreatments().then((treatments) => {
    return fragment
      .append("<h2>Treatments</h2>")
      .append('<i class="fas fa-coffee"></i>')
      .append(treatmentsList(treatments))
      .append("<p>Lorem ipsum </p>");
  });
};