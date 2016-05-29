import { handleActions } from 'redux-actions';
const initialState ={
  "display_tab":0,
  "name": "鑽頭戰士",
  "image_url": "https://xpgcards.blob.core.windows.net/image/null.jpg",
  "kind": "同步怪獸",
  "level": "等級6",
  "property": "地",
  "race": "戰士族",
  "attack": 2400,
  "defence": 2000,
  "effect": "「鑽頭同步者」+協調以外的怪獸1體以上\r\n1回合1次，在我方的主要階段時可以發動。此卡攻擊力變為效果處理當時數值的一半，此回合此卡可以直接攻擊。1回合1次，在我方的主要階段時可以發動。捨棄1張手札，此卡移除。下個我方的準備階段時，此效果移除的此卡在我方場上特殊召喚。之後，我方墓地存在的1體怪獸加入手札。",
  "serial_number": "03429238",
  "pack":[
    {
      "type":"普卡",
      "items":[
        {
          "name":"【補充包】(GS06)黃金系列2014",
          "card_number": "DREV-JP001"
        }
      ]
    },
    {
      "type":"金閃",
      "items":[
        {
          "name":"【補充包】(GS06)黃金系列2014",
          "card_number": "DREV-JP002"
        }
      ]
    }
  ]
};
export default handleActions({
  'change tab' (state, action) {
    state.display_tab = action.payload;
  return Object.assign({},state);
  },
}, initialState);
