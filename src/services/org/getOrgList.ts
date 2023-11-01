import API_Path from "./apiPath";

export const getOrgList = async () => {
  return DUMMY_ARR;

  //   const res = await fetch(`${API_Path["getOrg"]}?driver_no=${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //     }
  //   });
  //   return await res.json();
};

// ------- MOCK DATA ------- //
const DUMMY_ARR = [
  {
    id: "0-001",
    label: "雄獅通運",
    children: [
      {
        id: "0-00101",
        label: "交通事業處",
        children: [
          {
            id: "0-0010101",
            label: "大中巴業務組",
            children: [
              { id: "0-0010102", label: "A組" },
              {
                id: "0-0010102",
                label: "B組",
                children: [
                  { id: "0-0010102", label: "Aa組" },
                  { id: "0-0010102", label: "Bb組" }
                ]
              }
            ]
          },
          { id: "0-0010102", label: "中車駕駛組" },
          { id: "0-0010103", label: "機動駕駛組" },
          { id: "0-0010104", label: "廠務組" }
        ]
      },
      {
        id: "0-00102",
        label: "企劃處",
        children: [{ id: "0-0010201", label: "大中巴業務組" }]
      },
      {
        id: "0-00102",
        label: "資訊處"
      }
    ]
  }
];
