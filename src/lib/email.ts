import { Chosen } from "./chosen";
import emailjs from "@emailjs/browser";

export const sendChosen = (chosen: Chosen) => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_KEY;

  const solution = `${chosen.a} ${chosen.b} ${chosen.c}
  ${chosen.d} ${chosen.e} ${chosen.f}
  ${chosen.g} ${chosen.h} ${chosen.i}
  `;

  emailjs.init(publicKey);
  emailjs.send(serviceId, templateId, { solution });
};
