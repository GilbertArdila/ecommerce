const regex_email = new RegExp(
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
);
const regex_phone = new RegExp(/^[0-9](\d{9})(?!.*[ +/_=-])$/);
const regex_name = new RegExp(
  /^[ÁÉÍÓÚA-Z]?[a-záéíóú]+[\s]+([ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/
);

export { regex_email, regex_phone, regex_name };
