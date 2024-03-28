import React, { useState } from "react";

const SelectCountry = () => {
  const options = [
    { name: "Afghanistan", requireVisa: 2 },
    {
      name: "Albania",
      requireVisa: 3,
      details:
        "The exemption from the obligation to hold a visa applies only to holders of biometric passports.",
    },
    { name: "Algeria", requireVisa: 2 },
    { name: "Andorra", requireVisa: 3, details: "" },
    { name: "Angola", requireVisa: 2 },
    { name: "Antigua and Barbuda", requireVisa: 3, details: "" },
    { name: "Argentina", requireVisa: 3, details: "" },
    { name: "Armenia", requireVisa: 2 },
    { name: "Australia", requireVisa: 3, details: "" },
    { name: "Austria", requireVisa: 1 },
    { name: "Azerbaijan", requireVisa: 2 },
    { name: "Bahamas", requireVisa: 3, details: "" },
    { name: "Bahrain", requireVisa: 2 },
    { name: "Bangladesh", requireVisa: 2 },
    { name: "Barbados", requireVisa: 3, details: "" },
    { name: "Belarus", requireVisa: 2 },
    { name: "Belgium", requireVisa: 1 },
    { name: "Belize", requireVisa: 2 },
    { name: "Benin", requireVisa: 2 },
    { name: "Bhutan", requireVisa: 2 },
    { name: "Bolivia", requireVisa: 2 },
    {
      name: "Bosnia and Herzegovina",
      requireVisa: 3,
      details:
        "The exemption from the obligation to hold a visa applies only to holders of biometric passports.",
    },
    { name: "Botswana", requireVisa: 2 },
    { name: "Brazil", requireVisa: 3, details: "" },
    { name: "Brunei", requireVisa: 3, details: "" },
    { name: "Bulgaria", requireVisa: 1 },
    { name: "Burkina Faso", requireVisa: 2 },
    { name: "Burundi", requireVisa: 2 },
    { name: "Cabo Verde", requireVisa: 2 },
    { name: "Cambodia", requireVisa: 2 },
    { name: "Cameroon", requireVisa: 2 },
    { name: "Canada", requireVisa: ``, details: "" },
    { name: "Central African Republic", requireVisa: 2 },
    { name: "Chad", requireVisa: 2 },
    { name: "Chile", requireVisa: 3, details: "" },
    { name: "China", requireVisa: 2 },
    { name: "Colombia", requireVisa: 3, details: "" },
    { name: "Comoros", requireVisa: 2 },
    { name: "Congo (Congo-Brazzaville)", requireVisa: 2 },
    { name: "Costa Rica", requireVisa: 3, details: "" },
    { name: "Côte d'Ivoire", requireVisa: 2 },
    { name: "Croatia", requireVisa: 1 },
    { name: "Cuba", requireVisa: 2 },
    { name: "Cyprus", requireVisa: 1 },
    { name: "Czechia (Czech Republic)", requireVisa: 1 },
    { name: "Democratic Republic of the Congo", requireVisa: 2 },
    { name: "Denmark", requireVisa: 1 },
    { name: "Djibouti", requireVisa: 2 },
    {
      name: "Dominica",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa waiver, which is to be concluded with the European Union.",
    },
    { name: "Dominican Republic", requireVisa: 2 },
    { name: "Ecuador", requireVisa: 2 },
    { name: "Egypt", requireVisa: 2 },
    { name: "El Salvador", requireVisa: 3, details: "" },
    { name: "Equatorial Guinea", requireVisa: 2 },
    { name: "Eritrea", requireVisa: 2 },
    { name: "Estonia", requireVisa: 1 },
    { name: 'Eswatini (fmr. "Swaziland")', requireVisa: 2 },
    { name: "Ethiopia", requireVisa: 2 },
    { name: "Fiji", requireVisa: 2 },
    { name: "Finland", requireVisa: 1 },
    { name: "France", requireVisa: 1 },
    { name: "Gabon", requireVisa: 2 },
    { name: "Gambia", requireVisa: 2 },
    {
      name: "Georgia",
      requireVisa: 3,
      details:
        "The visa waiver is limited to holders of biometric passports issued by Georgia in accordance with the standards of the International Civil Aviation Organization (ICAO).",
    },
    { name: "Germany", requireVisa: 1 },
    { name: "Ghana", requireVisa: 2 },
    { name: "Greece", requireVisa: 1 },
    {
      name: "Grenada",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa waiver, which is to be concluded with the European Union.",
    },
    { name: "Guatemala", requireVisa: 3, details: "" },
    { name: "Guinea", requireVisa: 2 },
    { name: "Guinea-Bissau", requireVisa: 2 },
    { name: "Guyana", requireVisa: 2 },
    { name: "Haiti", requireVisa: 2 },
    { name: "Honduras", requireVisa: 3, details: "" },
    {
      name: "Hong Kong",
      requireVisa: 3,
      details:
        "The visa exemption applies only to holders of a passport of the 'Hong Kong Special Administrative Region",
    },
    { name: "Hungary", requireVisa: 1 },
    { name: "Iceland", requireVisa: 1 },
    { name: "India", requireVisa: 2 },
    { name: "Indonesia", requireVisa: 2 },
    { name: "Iran", requireVisa: 2 },
    { name: "Iraq", requireVisa: 2 },
    { name: "Ireland", requireVisa: 1 },
    { name: "Israel", requireVisa: 3, details: "" },
    { name: "Italy", requireVisa: 1 },
    { name: "Jamaica", requireVisa: 2 },
    { name: "Japan", requireVisa: 1, details: "" },
    { name: "Jordan", requireVisa: 2 },
    { name: "Kazakhstan", requireVisa: 2 },
    { name: "Kenya", requireVisa: 2 },
    {
      name: "Kiribati",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa waiver, which is to be concluded with the European Union.",
    },
    { name: "Kosovo", requireVisa: 2 },
    { name: "Kuwait", requireVisa: 2 },
    { name: "Kyrgyzstan", requireVisa: 2 },
    { name: "Laos", requireVisa: 2 },
    { name: "Latvia", requireVisa: 1 },
    { name: "Lebanon", requireVisa: 2 },
    { name: "Lesotho", requireVisa: 2 },
    { name: "Liberia", requireVisa: 2 },
    { name: "Libya", requireVisa: 1 },
    { name: "Liechtenstein", requireVisa: 1 },
    { name: "Lithuania", requireVisa: 1 },
    { name: "Luxembourg", requireVisa: 1 },
    {
      name: "Macao",
      requireVisa: 3,
      details:
        "The visa exemption applies only to holders of a passport of the 'Macau Special Administrative Region",
    },
    { name: "Madagascar", requireVisa: 2 },
    { name: "Malaysia", requireVisa: 3, details: "" },
    { name: "Malawi", requireVisa: 2 },
    { name: "Maldives", requireVisa: 2 },
    { name: "Mali", requireVisa: 2 },
    { name: "Malta", requireVisa: 1 },
    {
      name: "Marshall Islands",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa exemption, which is to be concluded with the European Union.",
    },
    { name: "Mauritania", requireVisa: 2 },
    { name: "Mauritius", requireVisa: 3, details: "" },
    { name: "Mexico", requireVisa: 3, details: "" },
    {
      name: "Micronesia",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa waiver, which is to be concluded with the European Union.",
    },
    {
      name: "Moldova",
      requireVisa: 3,
      details:
        "The exemption from the obligation to hold a visa applies only to holders of biometric passports issued by Moldova in accordance with the standards of the International Civil Aviation Organization (ICAO).",
    },
    { name: "Monaco", requireVisa: 3, details: "" },
    { name: "Mongolia", requireVisa: 2 },
    {
      name: "Montenegro",
      requireVisa: 3,
      details:
        "The exemption from the obligation to hold a visa applies only to holders of biometric passports.",
    },
    { name: "Morocco", requireVisa: 2 },
    { name: "Mozambique", requireVisa: 2 },
    { name: "Myanmar", requireVisa: 2 },
    { name: "Namibia", requireVisa: 2 },
    {
      name: "Nauru",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa exemption, which is to be concluded with the European Union.",
    },
    { name: "Nepal", requireVisa: 2 },
    { name: "Netherlands", requireVisa: 1 },
    { name: "New Zealand", requireVisa: 3, details: "" },
    { name: "Nicaragua", requireVisa: 3, details: "" },
    { name: "Niger", requireVisa: 1 },
    { name: "Nigeria", requireVisa: 2 },
    { name: "North Korea", requireVisa: 2 },
    {
      name: "North Macedonia",
      requireVisa: 3,
      details:
        "The exemption from the obligation to hold a visa applies only to holders of biometric passports.",
    },
    { name: "Norway", requireVisa: 1 },
    { name: "Oman", requireVisa: 2 },
    { name: "Pakistan", requireVisa: 2 },
    {
      name: "Palau",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa exemption, which is to be concluded with the European Union.",
    },
    { name: "Palestine", requireVisa: 2 },
    { name: "Panama", requireVisa: 3, details: "" },
    { name: "Papua New Guinea", requireVisa: 2 },
    { name: "Paraguay", requireVisa: 3, details: "" },
    {
      name: "Peru",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa exemption, which is to be concluded with the European Union.",
    },
    { name: "Philippines", requireVisa: 2 },
    { name: "Poland", requireVisa: 1 },
    { name: "Portugal", requireVisa: 1 },
    { name: "Qatar", requireVisa: 2 },
    { name: "Romania", requireVisa: 1 },
    { name: "Russia", requireVisa: 2 },
    { name: "Rwanda", requireVisa: 2 },
    { name: "Saint Kitts and Nevis", requireVisa: 3, details: "" },
    {
      name: "Saint Lucia",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa waiver, which is to be concluded with the European Union.",
    },
    {
      name: "Saint Vincent and the Grenadines",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa exemption, which is to be concluded with the European Union.",
    },
    { name: "Samoa", requireVisa: 3, details: "" },
    { name: "San Marino", requireVisa: 3, details: "" },
    { name: "Sao Tome and Principe", requireVisa: 2 },
    { name: "Saudi Arabia", requireVisa: 2 },
    { name: "Senegal", requireVisa: 2 },
    {
      name: "Serbia",
      requireVisa: 3,
      details:
        "The exemption from the obligation to hold a visa applies only to holders of biometric passports. Additionally, holders of Serbian passports issued by the Serbian Coordination Directorate (in Serbian: Koordinaciona uprava) will also be exempt from the obligation.",
    },
    { name: "Seychelles", requireVisa: 3, details: "" },
    { name: "Sierra Leone", requireVisa: 2 },
    { name: "Singapore", requireVisa: 3, details: "" },
    { name: "Slovakia", requireVisa: 1 },
    { name: "Slovenia", requireVisa: 1 },
    { name: "Solomon Islands", requireVisa: 3, details: "" },
    { name: "Somalia", requireVisa: 2 },
    { name: "South Africa", requireVisa: 2 },
    { name: "South Korea", requireVisa: 3, details: "" },
    { name: "South Sudan", requireVisa: 2 },
    { name: "Spain", requireVisa: 1 },
    { name: "Sri Lanka", requireVisa: 2 },
    { name: "Sudan", requireVisa: 2 },
    { name: "Suriname", requireVisa: 2 },
    { name: "Sweden", requireVisa: 1 },
    { name: "Switzerland", requireVisa: 1 },
    { name: "Syria", requireVisa: 2 },
    {
      name: "Taiwan",
      requireVisa: 3,
      details:
        "The exemption from the obligation to hold a visa applies only to holders of passports issued by Taiwan that contain the identity card number.",
    },
    { name: "Tajikistan", requireVisa: 2 },
    { name: "Tanzania", requireVisa: 2 },
    { name: "Thailand", requireVisa: 2 },
    {
      name: "Timor-Leste",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa exemption, which is to be concluded with the European Union.",
    },
    { name: "Togo", requireVisa: 2 },
    { name: "Tonga", requireVisa: 3, details: "" },
    { name: "Trinidad and Tobago", requireVisa: 3, details: "" },
    { name: "Tunisia", requireVisa: 2 },
    { name: "Turkey", requireVisa: 2 },
    { name: "Turkmenistan", requireVisa: 2 },
    {
      name: "Tuvalu",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa exemption, which is to be concluded with the European Union.",
    },
    { name: "Uganda", requireVisa: 2 },
    {
      name: "Ukraine",
      requireVisa: 3,
      details:
        "The exemption from the visa requirement is limited to holders of biometric passports issued by Ukraine in accordance with the standards of the International Civil Aviation Organization (ICAO).",
    },
    {
      name: "United Arab Emirates",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa waiver, which is to be concluded with the European Union.",
    },
    { name: "United Kingdom", requireVisa: 1 },
    { name: "United States", requireVisa: 1, details: "" },
    { name: "Uruguay", requireVisa: 3, details: "" },
    { name: "Uzbekistan", requireVisa: 2 },
    {
      name: "Vanuatu",
      requireVisa: 3,
      details:
        "The visa waiver applies from the date of entry into force of an agreement on visa exemption, which is to be concluded with the European Union.",
    },
    { name: "Vatican City", requireVisa: 1 },
    { name: "Venezuela", requireVisa: 3, details: "" },
    { name: "Vietnam", requireVisa: 2 },
    { name: "Yemen", requireVisa: 2 },
    { name: "Zambia", requireVisa: 2 },
    { name: "Zimbabwe", requireVisa: 2 },
  ];

  const [country, setCountry] = useState(options[0].name);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h2>Find out if your country requires visa!</h2>
      <label>
        Pick your country:
        <select
          name="selectedCountry"
          value={country}
          onChange={handleCountryChange}
          className="selectCountry"
        >
          {options.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
      <div>
        <h3>
          {options.find((option) => option.name === country)?.requireVisa === 2
            ? `Yes, ${country} requires a visa in order to enter Romania. Try to apply for the visa as early as possible, as the process takes time.`
            : options.find((option) => option.name === country)?.requireVisa ===
              1
            ? `No, ${country} doesn't require a visa in order to enter Romania. `
            : options.find((option) => option.name === country)?.requireVisa ===
              3
            ? `No, ${country} doesn't require a visa in order to enter Romania. However, citizens from ${country} are not allowed to stay in Romania for more than 90 days within any 180-day period without applying for a long-stay visa. Don't forget that the visa interview will need to be conducted in ${country}. Try to apply for the visa as early as possible, as the process takes time.`
            : ""}
        </h3>
        {options.find((option) => option.name === country)?.requireVisa === 3 &&
        options.find((option) => option.name === country)?.details !== "" ? (
          <h3>
            Details:{" "}
            {options.find((option) => option.name === country)?.details}
          </h3>
        ) : null}
      </div>
    </div>
  );
};

export default SelectCountry;
