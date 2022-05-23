import Error from "./Error";

export const unknownError = new Error(
  "API",
  `unknownError`,
  "Nastala neznámá chyba, pokusíme se jí co nejdříve opravit"
);
