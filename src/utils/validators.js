export const required = value => {
  return value ? undefined : "Field is required";
};

export const maxLengthCreator = limit => value => {
  return value.length > limit ? `Max length is ${limit}` : undefined;
};
