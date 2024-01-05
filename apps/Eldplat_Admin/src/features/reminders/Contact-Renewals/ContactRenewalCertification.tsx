import React from "react";

import DetailTable from "@components/Table/DetailTable";
import { MOCK_CERTIFICATIONDATA } from "src/mock-data/reminder/ContactRenewals";

function ContactRenewalCertification() {
  return <DetailTable title="Detail" data={MOCK_CERTIFICATIONDATA} />;
}

export default ContactRenewalCertification;
