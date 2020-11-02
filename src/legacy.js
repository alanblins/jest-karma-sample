function getGlobalValue() {
  return this.globalValue;//jest ❌ karma ✔️
}
function getGlobalValue2() {
  return this.globalValue2;//jest ✔️ karma ✔️
}
window.getGlobalValue = getGlobalValue;
window.getGlobalValue2 = getGlobalValue2;
