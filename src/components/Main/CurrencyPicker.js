import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const CurrencyPicker = (props) => {
  const { setCurrency } = props;
  const { currentCurrency } = props;

  return (
    <div>
      <h2>Select fiat currency</h2>
      <DropdownButton
        variant="secondary"
        id="dropdown-basic-button"
        title={currentCurrency}
      >
        <Dropdown.Item default onSelect={() => setCurrency('USD')}>
          USD
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => setCurrency('SEK')}>SEK</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default CurrencyPicker;
