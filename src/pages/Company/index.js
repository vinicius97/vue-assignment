import Company from "./Company.vue";
import CompanyData from "./CompanyData.vue";
import CompanyPage from "./CompanyPage.vue";
import CompanyTable from "./CompanyTable.vue";

export const routes = [
  {
    path: "/",
    component: Company,
    children: [
      {
        label: "Company Data",
        name: "company-data",
        path: "/company-data",
        component: CompanyData,
        meta: {
          breadcrumb: [
            {
              label: "Home",
              path: "/"
            },
            { 
              label: "Company Data",
              path: "/company-data"
            }
          ]
        }
      },
      {
        label: "Company Table",
        name: "company-table",
        path: "/company-table",
        component: CompanyTable,
        meta: {
          breadcrumb: [
            {
              label: "Home",
              path: "/"
            },
            { 
              label: "Company Table",
              path: "/company-table"
            }
          ]
        }
      },
      {
        label: "Company Page",
        name: "company-page",
        path: "/company-page",
        component: CompanyPage,
        meta: {
          breadcrumb: [
            {
              label: "Home",
              path: "/"
            },
            { 
              label: "Company Page",
              path: "/company-page"
            }
          ]
        }
      }      
    ]
  }
];
