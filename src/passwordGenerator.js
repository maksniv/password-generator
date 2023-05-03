export function passwordGenerator(initialConditions) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numbersChars = '0123456789';
  const symbolsChars = '@#&(§!-_)^$*%+=/?';

  let chars = '';

  if (initialConditions.uppercase === true) {
    chars += uppercaseChars;
  }
  if (initialConditions.lowercase === true) {
    chars += lowercaseChars;
  }
  if (initialConditions.numbers === true) {
    chars += numbersChars;
  }
  if (initialConditions.symbols === true) {
    chars += symbolsChars;
  }

  if (chars === '') {
    return 'Use checkbox, please';
  }

  let password = '';

  for (let i = 0; i < initialConditions.length; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars[randomNumber];
  }

  return password;
}

export function passwordStrengthGenerator(length) {
  if (length < 8) {
    return 'too weak!';
  }
  if (length < 13 && length >= 8) {
    return 'weak';
  }
  if (length < 15 && length >= 13) {
    return 'medium';
  }
  if (length >= 15) {
    return 'strong';
  }
}
