export const validateNumber = (input: string) => {
  const parsedNumber = parseInt(input);

  if (isNaN(parsedNumber) || parsedNumber <= 0) {
    return 0;
  }

  return parsedNumber;
};
