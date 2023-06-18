export const validateNumber = (input: string) => {
  const parsedNumber = parseInt(input);

  if (isNaN(parsedNumber) || parsedNumber <= 0) {
    return 0;
  }

  return parsedNumber;
};

export const handleFocusInput = (index: number, refs: Array<React.RefObject<HTMLInputElement>>) => {
  if (refs[index + 1] && index < refs.length - 1) {
    refs[index + 1].current?.focus();
  }
  if (index === refs.length - 1) {
    refs[index].current?.blur();
  }
};
