const { React } = require('powercord/webpack');
const { TextInput, ButtonItem} = require('powercord/components/settings');
const { getSetting, updateSetting, toggleSetting } = require("powercord/")
let settings = {
	APIKey: "",
	APISecret: ""
}
module.exports = () => (
	<div>
	  <TextInput
		  note="Your ByBit API key. This is needed for authenticating with Bybit's API. DO NOT SHARE THIS WITH ANYONE."
		  required={true}
		  defaultValue={getSetting("APIKey")}
		  onChange={val => {settings.APIKey = val}}
	  >
		  API Key
	  </TextInput>
	  <TextInput
		  note="Your ByBit API Secret. This is needed for authenticating with Bybit's API. DO NOT SHARE THIS WITH ANYONE, EVER."
		  required={true}
		  defaultValue={getSetting("APISecret")}
		  onChange={val => {settings.APISecret = val}}
	  >
		  API Secret
	  </TextInput>
	  <ButtonItem
		  note="Save Settings (this will restart Discord!)"
      onClick={()=> {updateSetting("APIKey", settings.APIKey); updateSetting("APISecret", settings.APISecret)}}
		>
		  Save Settings
	  </ButtonItem>
	  </div>
  );
  