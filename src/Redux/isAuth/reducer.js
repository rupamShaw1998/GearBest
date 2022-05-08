import { AUTH } from "./action";
const init = {
  isLogin:false,
}
export const authreducer = (store=init, { type, payload }) => {
  //console.log(store)
  switch (type) {
    case AUTH:
      return { ...store, isLogin: payload };
    default:
      return { ...store };
  }
};
