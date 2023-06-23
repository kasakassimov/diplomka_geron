let licenseInput = document.querySelector("#license");
let trackInput = document.querySelector("#track");
let priceInput = document.querySelector("#price");

function priceCalculate() {
  let licenseCount = parseInt(licenseInput.value) || 0;
  let trackCount = parseInt(trackInput.value) || 0;
  let licensePrice = 0;

  if (licenseCount <= 3) {
    licensePrice = trackCount * 2000;
  } else if (licenseCount <= 5) {
    licensePrice = trackCount * 1800;
  } else {
    licensePrice = trackCount * 1680;
  }

  priceInput.value = licensePrice;
}

licenseInput.addEventListener("input", priceCalculate);
trackInput.addEventListener("input", priceCalculate);

const emailBut = document.querySelector(".mail-tg .bodyM:first-child");
const telegramBut = document.querySelector(".mail-tg .bodyM:last-child");
const contactIcon = document.querySelector(".icon-container svg");
const inputPlaceholder = document.querySelector(".email-container input");

const switchToEmail = () => {
  emailBut.classList.add("active");
  telegramBut.classList.remove("active");
  inputPlaceholder.placeholder = "example@gmail.com";
  contactIcon.innerHTML = `<svg class="contact-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75239 11.1453C3.75 11.4875 3.75 11.855 3.75 12.25V17.75C3.75 20.5784 3.75 21.9926 4.62868 22.8713C5.50736 23.75 6.92157 23.75 9.75 23.75H20.25C23.0784 23.75 24.4926 23.75 25.3713 22.8713C26.25 21.9926 26.25 20.5784 26.25 17.75V12.25C26.25 11.855 26.25 11.4875 26.2476 11.1453L15.9713 16.8544C15.3672 17.1899 14.6328 17.1899 14.0287 16.8544L3.75239 11.1453ZM3.85368 9.00513C3.98403 9.01865 4.11384 9.05818 4.23564 9.12584L15 15.106L25.7644 9.12584C25.8862 9.05818 26.016 9.01866 26.1463 9.00514C26.0386 8.16313 25.819 7.57639 25.3713 7.12868C24.4926 6.25 23.0784 6.25 20.25 6.25H9.75C6.92157 6.25 5.50736 6.25 4.62868 7.12868C4.18097 7.57639 3.96138 8.16313 3.85368 9.00513Z" fill="#FAFAFA"/>
  </svg>`;
};

const switchToTelegram = () => {
  emailBut.classList.remove("active");
  telegramBut.classList.add("active");
  inputPlaceholder.placeholder = "@example123";
  contactIcon.innerHTML = `<svg class="contact-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6894 15.8965L8.19217 14.3974C5.83896 13.613 4.66235 13.2208 4.66235 12.5C4.66235 11.7792 5.83896 11.387 8.19218 10.6026L21.2053 6.26491C22.8611 5.71299 23.689 5.43702 24.126 5.87404C24.5631 6.31105 24.2871 7.13895 23.7352 8.79474L19.3974 21.8079L19.3974 21.8079C18.613 24.1611 18.2208 25.3377 17.5001 25.3377C16.7793 25.3377 16.3871 24.1611 15.6027 21.8079L14.1036 17.3107L19.4572 11.9571C19.8477 11.5666 19.8477 10.9334 19.4572 10.5429C19.0667 10.1524 18.4335 10.1524 18.043 10.5429L12.6894 15.8965Z" fill="#FAFAFA"/>
  </svg>
  `;
};

emailBut.addEventListener("click", switchToEmail);
telegramBut.addEventListener("click", switchToTelegram);

switchToEmail();
