// testing server endpoint sample
// http://uvehicle-api.eldplat.com/RPW/api/DownStream/GetGroupsData
export function createUrlPath(microServiceName: string, apiName: string) {
  return `${process.env.NEXT_PUBLIC_PROD_ENDPOINT}/${microServiceName}/api/DownStream/${apiName}`;
  // FOR PRODUCTION AND DEVELOP (MAIN VS TESTING)
  return process.env.NODE_ENV === "production"
    ? `${process.env.NEXT_PUBLIC_PROD_ENDPOINT}/${microServiceName}/api/DownStream/${apiName}`
    : `${process.env.NEXT_PUBLIC_DEV_ENDPOINT}/${microServiceName}/${apiName}`;
}
