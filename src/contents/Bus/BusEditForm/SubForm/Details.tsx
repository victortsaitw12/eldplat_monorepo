import React, { useState } from "react";
import Image from "next/image";
import {
  Pane,
  TextInputField,
  SelectField,
  Button,
  FilePicker
} from "evergreen-ui";
import FormCard from "@components/FormCard";
import { FilePickBtnSTY } from "@components/FormCard/style";

interface Props {
  hide?: boolean;
}
function Details({ hide }: Props) {
  const [VINValue, setVINValue] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const handleChangeVINValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVINValue(e.target.value);
  };
  console.log("imageFile", imageFile);
  return (
    <Pane marginX="20px" display={hide ? "none" : "block"}>
      <FormCard formTitle="新增一個識別碼?">
        <div className="w100">
          <Pane display="flex" gap="20px">
            <TextInputField
              width="100%"
              label="識別碼/序列號"
              onChange={handleChangeVINValue}
              name="vin"
              hint={
                <div className="hintText">
                  車輛識別號或序列號。<a href="./">了解更多</a>
                </div>
              }
            />
            <Button disabled={!VINValue} marginTop="25px">
              解碼識別碼
            </Button>
          </Pane>
        </div>
      </FormCard>
      <FormCard formTitle="身分識別">
        <div className="w100">
          <TextInputField
            label="車輛名稱"
            name="bus_name"
            hint={
              <div className="hintText">
                輸入暱稱以在 Fleetio 中區分此車輛。<a href="./">了解更多</a>
              </div>
            }
          />
          <TextInputField label="牌照" name="license_plate" />
          <SelectField label="類型" hint="車輛類型" name="type">
            <option value="03">巴士</option>
            <option value="01">沙灘車</option>
            <option value="02">船</option>
            <option value="04">車</option>
            <option value="05">堆高機</option>
            <option value="06">發電機</option>
            <option value="07">裝載機</option>
            <option value="08">機車</option>
            <option value="09">割草機</option>
            <option value="10">其他</option>
            <option value="11">皮卡車</option>
            <option value="12">半卡車</option>
            <option value="13">越野車</option>
            <option value="14">聯結車</option>
            <option value="15">貨車</option>
          </SelectField>
          <TextInputField
            label="年份"
            name="year"
            type="number"
            hint="例如 1999 年、2012 年等。"
          />
          <SelectField label="車廠" name="make" hint="例如豐田、GMC、雪佛蘭等">
            <option value="01">Toyota</option>
            <option value="02">Mercedes-Benz</option>
            <option value="03">Volkswagen</option>
            <option value="04">BMW</option>
            <option value="05">Tesla</option>
          </SelectField>
          <SelectField
            label="車款"
            name="model"
            hint="例如 4Runner, Yukon, Silverado 等。"
          >
            <option value="01">model-1</option>
            <option value="02">model-2</option>
            <option value="03">model-3</option>
          </SelectField>
          <TextInputField label="配置" name="trim" hint="對這輛車進行分類" />
          <TextInputField label="註冊州/省" name="registration_province" />
          <SelectField label="標籤" name="labels">
            <option value="">請選擇...</option>
          </SelectField>
          <FilePickBtnSTY>
            <label className="inputFileTitle">圖片</label>
            <FilePicker
              // name="photo_url"
              multiple={false}
              onChange={(file) => setImageFile(file[0])}
            />
            {imageFile ? (
              <Image
                src={URL.createObjectURL(imageFile)}
                width={250}
                height={250}
                alt="bus_image"
              />
            ) : (
              <p className="hintText">無檔案...</p>
            )}
          </FilePickBtnSTY>
        </div>
      </FormCard>

      <FormCard formTitle="分類">
        <div className="w100">
          <SelectField
            label="狀態"
            name="status"
            hint={
              <div className="hintText">
                車輛狀態 <a href="./">了解更多</a>
              </div>
            }
          >
            <option value="01">活躍中</option>
            <option value="02">閒置中</option>
            <option value="03">在維修廠</option>
            <option value="04">已販售</option>
            <option value="05">終止服務</option>
          </SelectField>
          <SelectField
            label="群組"
            name="bus_group"
            hint={
              <div className="hintText">
                車輛群組 <a href="./">了解更多</a>
              </div>
            }
          >
            <option value="" selected>
              請選擇...
            </option>
          </SelectField>
          <SelectField label="司機" name="operator">
            <option value="簡忠華(007415)">簡忠華(007415)</option>
            <option value="陳正烽(00F470)">陳正烽(00F470)</option>
            <option value="吳啟元(00A371)">吳啟元(00A371)</option>
            <option value="施純鈞(200120)">施純鈞(200120)</option>
            <option value="王百華(230014)">王百華(230014)</option>
          </SelectField>
          <SelectField label="所有權" name="ownership">
            <option value="01">擁有的</option>
            <option value="02">租來的</option>
            <option value="03">出租中</option>
            <option value="04">客戶的</option>
          </SelectField>
        </div>
      </FormCard>

      <FormCard formTitle="其他細項">
        <div className="w100">
          <TextInputField label="顏色" name="color" />
          <SelectField
            label="車身類型"
            name="body_type"
            hint="例如敞篷車、轎跑車、皮卡、轎車等"
          >
            <option value="" disabled>
              請選擇...
            </option>
            <option value="01">傳統的</option>
            <option value="02">中大型</option>
            <option value="03">掀背</option>
            <option value="04">皮卡</option>
            <option value="05">越野車</option>
          </SelectField>
          <SelectField
            label="Body Subtype"
            name="body_subtype"
            hint="例如加長駕駛室、雙排座駕駛室等。"
          >
            <option value="" disabled>
              請選擇...
            </option>
            <option value="01">貨物</option>
            <option value="02">雙排坐駕駛室</option>
            <option value="03">臥鋪行駕駛室</option>
          </SelectField>
          <TextInputField label="建議零售價" name="mspr" placeholder="$" />
          <SelectField label="已連結車輛" name="linked_vehicles">
            <option value="" disabled>
              請選擇...
            </option>
          </SelectField>
        </div>
      </FormCard>
    </Pane>
  );
}

export default Details;
