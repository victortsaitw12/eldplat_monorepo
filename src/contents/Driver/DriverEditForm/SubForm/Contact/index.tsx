import { Combobox, Heading, Pane, Text, TextInput } from "evergreen-ui";
import React from "react";
import { city_DATA, district_DATA, road_DATA } from "./data";
import { BodySTY } from "./style";

function Contact() {
  return (
    <BodySTY>
      <Heading is="h4">聯絡資訊</Heading>
      <form>
        <Pane className="input-line">
          <Text className="required">E-Mail</Text>
          <TextInput name="email" required />
        </Pane>
        <Pane className="input-line">
          <Text className="required">手機</Text>
          <TextInput name="telephone" required />
        </Pane>
        <Pane className="input-line">
          <Text>聯絡地址</Text>
          <Pane>
            <Pane className="address">
              <Combobox
                openOnFocus
                width="120px"
                items={city_DATA}
                onChange={(selected) => console.log(selected)}
                placeholder="縣市"
              />
              <Combobox
                openOnFocus
                width="120px"
                items={district_DATA}
                onChange={(selected) => console.log(selected)}
                placeholder="鄉鎮市區"
              />
              <Combobox
                openOnFocus
                width="120px"
                items={road_DATA}
                onChange={(selected) => console.log(selected)}
                placeholder="道路街名"
              />
            </Pane>
            <TextInput marginTop={16} name="address" />
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text>緊急聯絡人</Text>
          <TextInput name="emergency-contact" />
        </Pane>
        <Pane className="input-line">
          <Text>緊急聯絡人手機</Text>
          <TextInput name="emergency-contact-tele" />
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Contact;
