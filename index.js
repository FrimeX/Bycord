const { Plugin } = require('powercord/entities');
const { uninject, inject } = require('../../../../injectors/main');
const fs = require("fs");

const Settings = require('./components/Settings');
const App = require('./components/Settings');
module.exports = class Bycord extends Plugin {
  async startPlugin () {
      inject('Bycord');
      powercord.api.settings.registerSettings(this.entityID, {
        category: this.entityID,
        label: 'Bycord',
        render: Settings,
      });
      this.start();
  }
  reload () {
    uninject('Bycord');
    inject('Bycord');
  }
  pluginWillUnload () {
    uninject('Bycord');
  }

  async start() {
    const config = () => {
      const imported = require("./config.json");
      if(imported.aPIKey == "undefined" || imported.aPISecret == "undefined") {
        return {"aPIKey":"CHANGEME","aPISecret":"CHANGEME"}
      }
      return imported
    };
    const { RestClient } = require('@pxtrn/bybit-api');
    const client = new RestClient(
      config.aPIKey,
      config.aPISecret,
      true,
      );
      client.getWalletBalance({ coin: "BTC" })
      .then( (result) => {
          console.log("getOrderBook inverse result: ",  result);
      })
      .catch(err => {
          console.error("getOrderBook inverse error: ", err);
      });

  }
};
