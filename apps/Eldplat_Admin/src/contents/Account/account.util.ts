import {
  DUMMY_ROLE_NAME_MOUDULE_MAP,
  DUMMY_ROLE_NAME_MAP
} from "@services/account/getOneAccount";
import { I_GroupedRoles, I_RoleName } from "./account.type";

// TODO: to be remved, just for DEMO
export const getAccountName = (data: any) => {
  return `${data.account_lname}${data.account_fname}`;
};

// TODO: to be remved, just for DEMO
export const getRoleNames = (data: any): I_RoleName[] => {
  const groupedRoles = data.account_role.reduce(
    (acc: I_GroupedRoles, item: string) => {
      const role_no = item.slice(item.length - 2);
      const module_no = item.slice(0, item.length - 2);
      if (!acc[module_no]?.includes(role_no)) {
        return {
          ...acc,
          [module_no]: [...(acc[module_no] || []), role_no]
        };
      }
      return acc;
    },
    {}
  );

  const result: I_RoleName[] = [];
  for (const module_no in groupedRoles) {
    if (groupedRoles.hasOwnProperty(module_no)) {
      const value = groupedRoles[module_no];
      result.push({
        role_name_m: DUMMY_ROLE_NAME_MOUDULE_MAP.get(module_no) || "",
        role_name: value.map((item: string) =>
          DUMMY_ROLE_NAME_MAP.get(item || "")
        )
      });
    }
  }
  // for (const [key, value] of Object.entries(groupedRoles)) {
  //   result.push({
  //     role_name_m: DUMMY_ROLE_NAME_MOUDULE_MAP.get(key) || "",
  //     role_name: value.map((item: string) =>
  //       DUMMY_ROLE_NAME_MAP.get(item || "")
  //     )
  //   });
  // }

  return result;
};
