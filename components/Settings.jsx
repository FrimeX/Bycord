const { React } = require('powercord/webpack');
const { TextInput, ButtonItem} = require('powercord/components/settings');
// { getSetting, updateSetting, toggleSetting }
let settings = {
	APIKey: "",
	APISecret: ""
}
module.exports = () => (
	<div>
	  <TextInput
		  note="Your ByBit API key. This is needed for authenticating with Bybit's API. DO NOT SHARE THIS WITH ANYONE."
		  required={true}
		  defaultValue="kVDlbxXNw9e84pwlEk"
		  onChange={val => {settings.APIKey = val}}
	  >
		  API Key
	  </TextInput>
	  <TextInput
		  note="Your ByBit API Secret. This is needed for authenticating with Bybit's API. DO NOT SHARE THIS WITH ANYONE, EVER."
		  required={true}
		  defaultValue="Gm7UOfJV2aWSPQSLUMmC6zpRJHuLKSjs6AD7"
		  onChange={val => {settings.APISecret = val}}
	  >
		  API Secret
	  </TextInput>
	  <ButtonItem
		  note="Save Settings (this will restart Discord!)"
      onClick={()=> {updateSetting("APIKey", settings.APIKey); updateSetting("APISecret", settings.APISecret)}}
		>
	  </ButtonItem>
	  </div>
  );
  