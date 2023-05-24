import React from "react";
import { BodySTY } from "./style";

import { ChevronLeftIcon, ChevronRightIcon } from "evergreen-ui";

interface I_PaginationField {
    onPageChange?: () => void;
    onClickNext?: () => void;
    onClickPrevious?: () => void;
}

function PaginationField(props: I_PaginationField) {
    const {
        onPageChange,
        onClickNext,
        onClickPrevious,
    } = props;
    return (
        <BodySTY>
            <div className="container-pagination">
                <span>
                    第{1}-{5}筆, 共{5}筆
                </span>
                <div className="actions">
                    <button>
                        <ChevronLeftIcon onClick={onClickPrevious} size={12} />
                    </button>
                    <button>
                        <ChevronRightIcon onClick={onClickNext} size={12} />
                    </button>
                </div>
            </div>
        </BodySTY>
    )
};

export default PaginationField;