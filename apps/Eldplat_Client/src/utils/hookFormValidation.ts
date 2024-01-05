const textValidation = (text: string) => {
  const globalRegex = new RegExp(/^[a-zA-Z0-9\u4E00-\u9FFF]+$/, "g");
  if (!globalRegex.test(text)) {
    return "不能有標點符號或空白!";
  }
  return true;
};

const textValidationAllowBlank = (text: string) => {
  const globalRegex = new RegExp(/^[a-zA-Z0-9\u4E00-\u9FFF]*$/, "g");
  if (!globalRegex.test(text)) {
    return "不能有標點符號!";
  }
  return true;
};

const numberValidation = (number: string) => {
  const globalRegex = new RegExp(/^\d+$/, "g");
  if (!globalRegex.test(number)) {
    return "請輸入純數字!";
  }
  return true;
};

const emailValidation = (email: string) => {
  const globalRegex = new RegExp(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([A-Za-z]{2,6})$/,
    "g"
  );
  if (!globalRegex.test(email)) {
    return "格式不符。";
  }
  return true;
};

const phoneValidation = (phone: string) => {
  const globalRegex = new RegExp(/(^09|^9)\d{8}$/, "g");
  if (!globalRegex.test(phone)) {
    return "格式不符。";
  }
  return true;
};

const tellValidation = (phone: string) => {
  const globalRegex = new RegExp(/^0?[1-9]\d{7}$/, "g");
  if (!globalRegex.test(phone)) {
    return "格式不符。";
  }
  return true;
};

const passwordValidation = (password: string) => {
  const globalRegex = new RegExp(/^[0-9]{4,}$/, "g");
  if (!globalRegex.test(password)) {
    return "密碼至少4碼數字";
  }
};

export const confirmPasswordValidation = (
  password: string,
  confirmPassword: string
) => {
  if (password !== confirmPassword) {
    return "密碼不一致";
  }
};

const passwordValidation2 = (password: string) => {
  const globalRegex = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])[A-Za-z\d#?!@$ %^&*-]{10,}$/,
    "g"
  );
  if (!globalRegex.test(password)) {
    return "密碼必須包含大寫、小寫、數字、特殊符號且長度至少10碼。";
  }
  return true;
};

const dateFormatValidation = (date: string) => {
  const globalRegex = new RegExp(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    "g"
  );
  if (!globalRegex.test(date)) {
    return "日期格式必須為yyyy-mm-dd";
  }
  return true;
};

export {
  textValidation,
  textValidationAllowBlank,
  numberValidation,
  emailValidation,
  phoneValidation,
  tellValidation,
  passwordValidation,
  passwordValidation2,
  dateFormatValidation
};

/*
const str = 'Table<football123';

const globalRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{10,}$', 'g');

console.log(globalRegex.test(str));

//^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$
1994-02-12
// mail
// ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([A-Za-z]{2,6})$
// phone
// ^09\d{2}-?\d{3}-?\d{3}$
// number
// ^\d+$
// not char
// ^[a-zA-Z0-9\u4E00-\u9FFF]+$
// lower upper special digit
// ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{10,}$

*/
