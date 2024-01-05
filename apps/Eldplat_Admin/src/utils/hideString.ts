export const hideEmail = (email: string) => {
  const [first, second] = email.split("@");
  const firstPart = first.slice(0, 1);
  // create a secondPart as the rest of first, and replace it with "*"
  const secondPart = first.slice(1).replace(/./g, "*");
  return `${firstPart}****${secondPart}@${second}`;
};

export const hidePhoneNumber = (phoneNumber: string) => {
  const firstPart = phoneNumber.slice(0, 4);
  const secondPart = phoneNumber.slice(4, 7).replace(/./g, "*");
  const thirdPart = phoneNumber.slice(7);
  return `${firstPart} - ${secondPart} - ${thirdPart}`;
};
