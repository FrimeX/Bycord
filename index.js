const { Plugin } = require('powercord/entities');
const { uninject, inject } = require('../../../../injectors/main');
const fs = require("fs");
const { RestClient } = require('@pxtrn/bybit-api');

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
        return {"aPIKey":"CHANGEME","aPISecret":"CHANGEME", "currencies": ["BTC"]}
      }
      return imported
    };
    const client = new RestClient(
      config.aPIKey,
      config.aPISecret,
      true,
    );
    switch(config.currencies.length) {
    case(1):
      client.getWalletBalance({ coin: config.currencies[0] })
      .then( (result) => {
        console.log(`Balance(${config.currencies[0]}) result: `,  result);
      })
      .catch(err => {
        console.error(`Balance(${config.currencies[0]}) error: `, err);
      });
    default: 
      client.getWalletBalance({ coin: "BTC" })
      .then( (result) => {
        console.log("Balance(BTC) result: ",  result);
      })
      .catch(err => {
        console.error("Balance(BTC) error: ", err);
      });
    }
  }
};
