import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormContact, Label, InputContact, ButtonContact } from './Form.styled';

export function Form({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const handelInputChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error();
    }
  };
  
  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
      <FormContact onSubmit={onSubmitForm}>
        <Label>
          Name
          <InputContact
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handelInputChange}
          />
        </Label>
        <Label>
          Num
          <InputContact
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handelInputChange}
          />
        </Label>

        <ButtonContact type="submit">Add contact</ButtonContact>
      </FormContact>
    );
  }

Form.propTypes = {
  state: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
};