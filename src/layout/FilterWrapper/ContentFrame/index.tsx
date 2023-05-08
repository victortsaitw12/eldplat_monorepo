import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  ChevronDownIcon,
  Icon,
  Pane,
  PanelTableIcon,
  Paragraph,
  PlusIcon,
  TagInput,
  Text
} from "evergreen-ui";
import { BodySTY, OptionSTY } from "./style";
import {
  AllSubBookmarkData,
  distributedSubBookmarkData,
  SecondLevelData
} from "./data";

interface I_FrameProps {
  selectedIndex: number;
  subBookmarkActive: string;
  setSubBookmarkActive: (subBookmarkActive: string) => void;
}

function ContentFrame({
  selectedIndex,
  subBookmarkActive,
  setSubBookmarkActive
}: I_FrameProps) {
  const [allData, setAllData] = useState<any>(AllSubBookmarkData); // 把所有頁籤的假資料存在一個狀態裡
  const [values, setValues] = React.useState([]);
  const [detailOptActive, setDetailOptActive] = useState<boolean>(false);
  const bookmarkRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // 選到哪個大頁籤，下方就渲染哪個子頁籤
  useEffect(() => {
    switch (selectedIndex) {
      case 0:
        setAllData(AllSubBookmarkData);
        break;
      case 1:
        setAllData(distributedSubBookmarkData);
        break;
      default:
        setAllData([]);
        break;
    }
  }, [selectedIndex]);

  const handleClick = (e: any) => {
    setSubBookmarkActive(e.target.innerText);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const stopPropagation = (e: any) => e.stopPropagation();

  return (
    <BodySTY isOpen={isOpen} onClick={handleClose}>
      <Pane className="sub-bookmark-background">
        {allData?.map((subItem: any, i: number) => {
          return (
            <React.Fragment key={i}>
              <Pane className="subBookmark">
                {/* 文字左手邊icon */}
                {subItem.value === "form" && (
                  <Icon
                    icon={PanelTableIcon}
                    size={14}
                    color="#678AF7"
                    cursor="pointer"
                  />
                )}

                <Pane className="select">
                  <Text
                    ref={bookmarkRef}
                    onClick={(e: any) => {
                      handleClick(e);
                    }}
                  >
                    {subItem.subName}
                  </Text>

                  {subBookmarkActive === subItem.subName &&
                  subBookmarkActive !== "表格" ? (
                    <Pane className="options-card" elevation={1}>
                      <TagInput
                        // inputProps={{ placeholder: "Add trees..." }}
                        values={values}
                        onChange={(values) => {
                          console.log(values);
                        }}
                        // disabled
                        className="tag-input"
                      />
                      {subItem.options.map(
                        (option: { label: string; value: string }) => {
                          return (
                            <option key={option.value} value="">
                              {option.label}
                            </option>
                          );
                        }
                      )}
                      <Pane
                        width="90%"
                        height={1}
                        backgroundColor="#d5e5fc"
                        marginX="auto"
                        marginY="0"
                      />
                      <Pane className="buttons">
                        <Button
                          className="cancel"
                          onClick={() => setSubBookmarkActive("")}
                        >
                          取消
                        </Button>
                        <Button className="confirm">確定</Button>
                      </Pane>
                    </Pane>
                  ) : (
                    <>
                      {subBookmarkActive === "表格" &&
                        subItem.subName === "表格" && (
                          <Pane className="form-card">
                            <Pane className="form-card-first" elevation={1}>
                              {subItem.options.map(
                                (
                                  option: {
                                    label: string;
                                    value: string;
                                    description?: string;
                                    icon?: any;
                                    hasDetail?: boolean;
                                  },
                                  index: number
                                ) => {
                                  return (
                                    <OptionSTY
                                      key={option.value}
                                      index={index}
                                      onClick={() => {
                                        option.hasDetail
                                          ? setDetailOptActive(true)
                                          : setDetailOptActive(false);
                                      }} // 確認點到的是不是第一個"開放協作"，是的話才有小跳框
                                    >
                                      <Pane display="flex" alignItems="center">
                                        <Icon
                                          icon={option.icon}
                                          size={14}
                                          marginRight={6}
                                          color="#567190"
                                        />
                                        <option value="">{option.label}</option>
                                      </Pane>
                                      <Paragraph>
                                        {option.description}
                                      </Paragraph>
                                    </OptionSTY>
                                  );
                                }
                              )}

                              {/* 有子項目卡牌才會出現 */}
                            </Pane>
                            {detailOptActive && (
                              <Pane className="form-card-second" elevation={1}>
                                {SecondLevelData.map((item) => {
                                  return (
                                    <Pane
                                      key={item.title}
                                      className="second-level-options"
                                    >
                                      <Pane display="flex" alignItems="center">
                                        <Icon
                                          icon={item.icon}
                                          size={14}
                                          marginRight={6}
                                          color="#567190"
                                        />
                                        <Pane>{item.title}</Pane>
                                      </Pane>

                                      <Paragraph>{item.description}</Paragraph>
                                    </Pane>
                                  );
                                })}
                              </Pane>
                            )}
                          </Pane>
                        )}
                    </>
                  )}
                </Pane>

                {/* 文字右手邊icon */}
                {subItem.value === "form" ? (
                  <Icon
                    icon={PlusIcon}
                    size={14}
                    color="#91A9C5"
                    cursor="pointer"
                  />
                ) : (
                  <Icon
                    icon={ChevronDownIcon}
                    size={14}
                    color="#91A9C5"
                    cursor="pointer"
                  />
                )}
              </Pane>
            </React.Fragment>
          );
        })}
      </Pane>
    </BodySTY>
  );
}

export default ContentFrame;
