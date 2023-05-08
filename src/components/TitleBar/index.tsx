import {
    Pane,
    Text,
    Button,
    IconButton,
    FullscreenIcon,
    SmallCrossIcon,
    majorScale,
    EditIcon
} from "evergreen-ui";
import { BodySTY } from "./style";

export interface I_TitlteBarProps {
    titleLabel?: string;
    clickEdit?: () => void;
    clickCancel?: () => void;
    clickZoom?: () => void;
    children?: React.ReactNode;
    infoType?: string
}


const TitlteBar = ({ titleLabel, clickEdit, clickCancel, clickZoom, children, infoType }: I_TitlteBarProps) => {
    return (
        <BodySTY>
            <Pane display="flex" justifyContent="space-between" className="title-bar">
                <Text className="title-label">{titleLabel}</Text>
                <Pane className="right-function">
                    <Button
                        iconBefore={EditIcon}
                        className="save"
                        onClick={clickEdit}
                    >
                        編輯
                    </Button>
                    <IconButton icon={FullscreenIcon} onClick={clickZoom} />
                    <IconButton icon={SmallCrossIcon} marginRight={majorScale(1)} onClick={clickCancel} />
                </Pane>
            </Pane>
        </BodySTY>
    )
}

export default TitlteBar;