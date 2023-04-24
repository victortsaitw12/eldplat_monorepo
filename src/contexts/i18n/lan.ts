import enUS from "./messageTest/enUS";
import { LOCALES } from "./locales";
interface planTYPE {
  title: string;
}
// const lan: {
//   [key: string]: {
//     [categoryKey: string]: {
//       [contentKey: string]: string;
//     };
//   };
// } = {
//   chTW: {
//     planInfo: { title: "我是標題" }
//   },

//   enUS: {
//     planInfo: { title: "I'm a title." }
//   }
// };

export const translation = (
  // key: string,
  categoryKey: any,
  contentKey: string
) => {
  return enUS[categoryKey[contentKey]];
};
