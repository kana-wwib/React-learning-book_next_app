import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";


//Firebaseの初期化
var firebaseConfig = {
  apiKey: "AIzaSyCyeyM4ONQJu-QYEEFMkJbNm2TZ6s-Kf3U",
  authDomain: "kana-react.firebaseapp.com",
  databaseURL: "https://kana-react.firebaseio.com",
  projectId: "kana-react",
  storageBucket: "kana-react.appspot.com",
  messagingSenderId: "646454837215",
  appId: "1:646454837215:web:41cff14677e222e563ce6a",
  measurementId: "G-FCZ95BBRJH"
};

var fireapp;
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}
export default fireapp;


//ステート初期値
const initial = {
  message: 'START',
  data: [],
  number: [],
  result: 0
}

//レデューサー
function fireReducer (state = initial, action) {
  switch (action.type) {
    //計算実行
    case 'ENTER':
      let data2 = state.data.slice();
      let s = action.value;
      data2.unshift(s);
      let num = s.replace(/[^0-9]/g,"");
      let number2 = state.number.slice();
      number2.unshift(num);
      let result = (state.result * 1) + (num * 1);
      return {
        message: 'ENTER',
        data: data2,
        number: number2,
        result: result
      }
    //リセット
    case 'RESET':
      return {
        message: 'RESET',
        data: [],
        number: [],
        result: 0
      };
    //デフォルト
    default: 
    return state;
  }
}


//initStore関数(redux-store.jsで必要)
export function initStore(state = initial) {
  return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}