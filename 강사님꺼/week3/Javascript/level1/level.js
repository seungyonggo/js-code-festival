import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

const form = document.getElementById("account-send-form");
const bankSelector = document.getElementById("bank-selector");
const accountInput = document.getElementById("account-input");
const accountList = document.getElementById("account-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const bankName = bankSelector.options[bankSelector.selectedIndex].text;
  const accountNumber = accountInput.value;
  const maskedAccountNumber =
    accountNumber.substring(0, 2) + "-********-" + accountNumber.substring(10);
  const listItem = document.createElement("li");
  listItem.textContent = `${bankName} : ${maskedAccountNumber}`;
  accountList.appendChild(listItem);
});
console.log(BANK_LIST);
console.log(ACCOUNT_FORM);
