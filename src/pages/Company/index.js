import Company from "./Company.vue";
import CompanyData from "./CompanyData.vue";
import CompanyPage from "./CompanyPage.vue";

export const routes = [
  {
    path: "/company",
    component: Company,
    children: [
      {
        label: "Company Data",
        path: "/company/data",
        component: CompanyData
      },
      {
        label: "Company Table",
        path: "/company/table",
        component: CompanyData
      },
      {
        label: "Company Page",
        path: "/company/page",
        component: CompanyPage
      }
    ]
  }
];
