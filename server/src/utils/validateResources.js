const validateResource = (object, schema, Error) => {
  try {
    schema.parse(object);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = validateResource;
