import Image from "next/image";

// ExpnseList dummy data
export const EXPENSE_lIST_TITLES = [
  "Vehicle",
  "Date",
  "Type",
  "Vendor",
  "Source",
  "Amount",
  "Watchers"
];

export const EXPENSE_lIST_DATA = [
  {
    id: 0,
    vehicle: (
      <>
        <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "08/06/2022",
    type: "Toyota",
    vendor: "",
    source: "Manually Entered",
    amount: "$196.21",
    watchers: ""
  },
  {
    id: 1,
    vehicle: (
      <>
        <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "08/06/2022",
    type: "Toyota",
    vendor: "",
    source: "Manually Entered",
    amount: "$196.21",
    watchers: ""
  },
  {
    id: 2,
    vehicle: (
      <>
        <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "08/06/2022",
    type: "Toyota",
    vendor: "",
    source: "Manually Entered",
    amount: "$196.21",
    watchers: ""
  },
  {
    id: 3,
    vehicle: (
      <>
        <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "08/06/2022",
    type: "Toyota",
    vendor: "",
    source: "Manually Entered",
    amount: "$196.21",
    watchers: ""
  }
];

const handleCheck = (checkedItems: any) => {
  console.log(checkedItems);
};

// =========================================================

// ExpenseListDetail dummy data
export const EXPENSE_lIST_DETAIL_TITLE = "Details";

export const EXPENSE_lIST_DETAIL_DATA = {
  Vehicle: (
    <>
      <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
      1100 [2018 Toyota Prius]
    </>
  ),
  Date: "08/06/2022",
  Type: "Toyota",
  Vendor: "",
  Source: "Manually Entered",
  Amount: "$196.21",
  Notes: "Title fee and first time registration"
};

// ==========================================================
// AddNewExpense  dummy data
export const ADD_NEW_EXPENSE_SELECT = [
  {
    label: "Vehicle",
    options: [
      {
        label: "Annual Inspection Fees",
        value: 1359141
      },
      {
        label: "Depreciation",
        value: 1359135
      }
    ]
  },
  {
    label: "Expense Type",
    options: [
      {
        label: "Annual Inspection Fees",
        value: 1359141
      },
      {
        label: "Depreciation",
        value: 1359135
      }
    ]
  },
  {
    label: "Vendor",
    notRequired: true,
    options: [
      {
        label: "Annual Inspection Fees",
        value: 1359141
      },
      {
        label: "Depreciation",
        value: 1359135
      },
      {
        label: "Down Payment",
        value: 1359139
      }
    ]
  }
];
