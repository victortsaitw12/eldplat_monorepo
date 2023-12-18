export interface I_GroupedRoles {
  [module_no: string]: string[];
}

// TODO: to be remved, just for DEMO
// Assuming DUMMY_ROLE_NAME_MOUDULE_MAP.get(key) returns a string
// Assuming DUMMY_ROLE_NAME_MAP.get(item) returns a string
export interface I_RoleName {
  role_name_m: string;
  role_name: string[];
}
