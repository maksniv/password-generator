export function passwordGenerator(initialConditions) {
  console.log(initialConditions);

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

  let password = '';

  for (let i = 0; i < initialConditions.length; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars[randomNumber];
  }
  console.log(password);

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
