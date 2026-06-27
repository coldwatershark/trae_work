const actionButton = document.getElementById("actionButton");
const message = document.getElementById("message");

actionButton?.addEventListener("click", () => {
  const now = new Date().toLocaleString("zh-CN");
  message.textContent = `按钮点击成功，时间：${now}`;
});
