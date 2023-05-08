import { Pane } from "evergreen-ui";
import { BodySTY } from "./style";

export interface I_VendorLayoutProps {
    basicSection?: React.ReactNode;
    categorySection?: React.ReactNode;
    labelSection?: React.ReactNode;
    contactSection?: React.ReactNode;
}

const VendorLayout = ({ basicSection, categorySection, labelSection, contactSection }: I_VendorLayoutProps) => {
    return (
        <BodySTY>
            <Pane
                display='flex'
                flexDirection="column"
                gap="10px"
            >
                {basicSection}
                <Pane
                    width="100%"
                    overflow="auto"
                    display="flex"
                    gap="10px"
                >
                    <Pane
                        flex="1"
                    >
                        {categorySection}
                    </Pane>
                    <Pane
                        flex="1"
                    >
                        {labelSection}
                    </Pane>
                </Pane>
            </Pane>
            <Pane>
                {contactSection}
            </Pane>

        </BodySTY>
    )
};
export default VendorLayout;