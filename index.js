const { Plugin } = require('powercord/entities');
const { uninject, inject } = require('../../../../injectors/main');

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
      this.startVisualizer();
  }

  reload () {
    uninject('Bycord');
    inject('Bycord');
  }

  pluginWillUnload () {
    uninject('Bycord');
  }

  stopVisualizer () {
  }

  async startVisualizer () {
    const {RestClient} = require('@pxtrn/bybit-api');
    const client = new RestClient(
      "kVDlbxXNw9e84pwlEk",
      "Gm7UOfJV2aWSPQSLUMmC6zpRJHuLKSjs6AD7",
      true,
      );
    setTimeout(() => {
      client.getWalletBalance({ coin: "BTC"})
      .then( (result) => {
          console.log("getOrderBook inverse result: ",  result);
      })
      .catch(err => {
          console.error("getOrderBook inverse error: ", err);
      });
    }, 10000);

  }
};
