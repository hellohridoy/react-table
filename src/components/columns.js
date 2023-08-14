import { format } from "date-fns";
export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilter: true,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
    ],
  },
];
