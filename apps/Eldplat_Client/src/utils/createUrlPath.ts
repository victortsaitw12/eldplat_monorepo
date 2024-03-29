// testing server endpoint sample
// http://uvehicle-api.eldplat.com/RPW/api/DownStream/GetGroupsData

// ELDPLAT V1
// TODO EVENTUALLY WEILL BE REPLACED BY GETURLPATH => REMOVE THIS FUNCTION
export function createUrlPath(microServiceName: string, apiName: string) {
  return `${process.env.NEXT_PUBLIC_PROD_OLD_ENDPOINT}/${microServiceName}/api/DownStream/${apiName}`;
  // TODO FOR PRODUCTION AND DEVELOP (MAIN, STAGE VS TESTING BRANCH)
  return process.env.NODE_ENV === "production"
    ? `${process.env.NEXT_PUBLIC_PROD_ENDPOINT}/${microServiceName}/api/DownStream/${apiName}`
    : `${process.env.NEXT_PUBLIC_DEV_ENDPOINT}/${microServiceName}/${apiName}`;
}

// ELDPLAT V2
export function getUrlPath(
  microServiceName: string,
  tableName: string,
  apiName: string
) {
  return `${process.env.NEXT_PUBLIC_PROD_ENDPOINT}/${microServiceName}/api/V2/${tableName}/${apiName}`;
  // FOR PRODUCTION AND DEVELOP (MAIN VS TESTING)
  return process.env.NODE_ENV === "production"
    ? `${process.env.NEXT_PUBLIC_PROD_ENDPOINT}/${microServiceName}/api/DownStream/${apiName}`
    : `${process.env.NEXT_PUBLIC_DEV_ENDPOINT}/${microServiceName}/${apiName}`;
}
