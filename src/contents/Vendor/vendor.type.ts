export interface I_contactData {
    contact_Name: string;
    contact_Phone_Code: string;
    contact_Phone: string;
    contact_Tel_Code: string;
    contact_Tel: string;
    contact_Email: string;
    contact_Sort: string;
}

export interface I_vendorData {
    label_Name: string;
    vendor_No: string;
    vendor_Name: string;
    vendor_Gui_No: string;
    vendor_Owner: string;
    address1: string;
    address2: string;
    vendor_City: string;
    vendor_Area: string;
    vendor_District_Code: string;
    vendor_Country: string;
    vendor_Tel: string;
    vendor_Tel_Code: string;
    vendor_Fax: string;
    vendor_Fax_Code: string;
    vendor_Email: string;
    vendor_Url: string;
    vendor_Contact_List: Array<I_contactData>;
    vendor_Code_List: Array<{ vendor_Code: string, vendor_Code_Name: string }>
}