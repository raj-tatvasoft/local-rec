export enum ROLE_ENUM {
  recruiter = "recruiter",
  employee = "employee",
}

export const getSideMenu = (role: ROLE_ENUM, t: any) => {
  let sideMenus = [];
  if (role === ROLE_ENUM.employee)
    sideMenus = ["dashboard", "myProfile", "jobs", "messages"];
  else
    sideMenus = ["myProfile", "myCompany", "jobs", "application", "messages"];

  return sideMenus.map((x) => ({
    name: x,
    label: t(x),
  }));
};
