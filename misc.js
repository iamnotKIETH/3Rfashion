const contactBtn = document.getElementById("contact-btn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      alert("Lời nhắn của bạn đã được gửi. Cảm ơn bạn đã góp phần làm hoàn thiện hơn Shop 3R!");
    });
  }

const accountBtn = document.getElementById("account-btn");
  if (accountBtn) {
    accountBtn.addEventListener("click", () => {
      alert("Mật khẩu không đúng hoặc tài khoản đã bị vô hiệu hóa. Vui lòng thử lại sau.");
    });
  }