import { useState } from "react";

import {
  Wrapper,
  Icon,
  Container,
  StyledSelect,
} from "./CurrencySelector.styles";

export const CurrencySelector = () => {
  const [currency, setCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    setCurrency(selectedValue);

    switch (selectedValue) {
      case "USD":
        setCurrencySymbol("$");
        break;
      case "GBP":
        setCurrencySymbol("£");
        break;
      case "EUR":
        setCurrencySymbol("€");
        break;
      case "BTC":
        setCurrencySymbol("₿");
        break;
      case "ETH":
        setCurrencySymbol("Ξ");
        break;
    }
  };

  return (
    <Container>
      <Icon>{currencySymbol}</Icon>
      <Wrapper>
        <StyledSelect value={currency} onChange={handleSelectChange}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
        </StyledSelect>
      </Wrapper>
    </Container>
  );
};
