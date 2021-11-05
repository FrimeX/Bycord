const { React } = require('powercord/webpack');
const { TextInput, ButtonItem} = require('powercord/components/settings');
const fs = require("fs");
const { cwd } = require("process");
let CurrSessSett = {
	"aPIKey": "",
	"aPISecret": "",
	"currencies": []
}
module.exports = () => (
	<div>
	  <TextInput
		  note="Your ByBit API key. This is needed for authenticating with Bybit's API. DO NOT SHARE THIS WITH ANYONE."
		  required={true}
		  defaultValue="CHANGEME"
		  onChange={val => {CurrSessSett.aPIKey = val}}
	  >
		  API Key
	  </TextInput>
	  <TextInput
		  note="Your ByBit API Secret. This is needed for authenticating with Bybit's API. DO NOT SHARE THIS WITH ANYONE, EVER."
		  required={true}
		  defaultValue="CHANGEME"
		  onChange={val => {CurrSessSett.aPISecret = val}}
	  >
		  API Secret
	  </TextInput>
	  <ButtonItem
		  note="Save Settings (this will restart Discord! YOU CAN ONLY SET THIS ONE TIME!)"
      onClick={()=> {
		var processed = JSON.stringify(CurrSessSett)
		fs.writeFileSync(cwd() + "config.json")
	  }}
		>
		  Save Settings
	  </ButtonItem>
	  </div>
);
  