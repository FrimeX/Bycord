const { React } = require('powercord/webpack');
const { TextInput, ButtonItem} = require('powercord/components/settings');
module.exports = () => (
	<div>
	  <TextInput
		  note="Your ByBit API key. This is needed for authenticating with Bybit's API. DO NOT SHARE THIS WITH ANYONE."
		  required={true}
		  defaultValue={}
		  onChange={val => {}}
	  >
		  API Key
	  </TextInput>
	  <TextInput
		  note="Your ByBit API Secret. This is needed for authenticating with Bybit's API. DO NOT SHARE THIS WITH ANYONE, EVER."
		  required={true}
		  defaultValue={}
		  onChange={val => {}}
	  >
		  API Secret
	  </TextInput>
	  <ButtonItem
		  note="Save Settings (this will restart Discord!)"
      onClick={()=> {}}
		>
		  Save Settings
	  </ButtonItem>
	  </div>
);
  