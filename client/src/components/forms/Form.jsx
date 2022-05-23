import { Formik } from "formik";

export default function Form({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  ...otherProps
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...otherProps}
    >
      {({ handleSubmit }) => <form onSubmit={handleSubmit}>{children}</form>}
    </Formik>
  );
}
