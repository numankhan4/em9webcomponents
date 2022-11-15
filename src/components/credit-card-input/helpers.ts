const trimAllSpaces = (str: string) => str.replace(/\s/g, '').trim();

const allowDigitsOnly = (str: string): string => {
  console.log(str);
  return str.replace(/^[0-9\s]*$/, '');
};

const setMaxlength = (element: HTMLInputElement, length: string) => {
  element.setAttribute('maxlength', length);
};

const mask = (str: string, pattern: string) => {
  const arrPattern: string[] = [...pattern];
  const noSpaces: any[] = [...str.replace(/\s/g, '')];
  const masked: any[] = [];

  arrPattern.forEach(value => {
    if (noSpaces.length === 0) return;

    if (value !== ' ') {
      masked.push(noSpaces.shift());
    }

    if (value === ' ') {
      masked.push(' ');
    }
  });

  return masked.join('');
};

export { trimAllSpaces, mask, setMaxlength, allowDigitsOnly };
