import PropTypes from 'prop-types';
import { IoFilterOutline } from 'react-icons/io5';
import { Wrapper, TitleFilter, InputFilter } from './Filter.styled';

export function Filter({ value, onChange }) {
  return (
    <Wrapper>
      <TitleFilter>
        Find contacts by name <IoFilterOutline />
      </TitleFilter>
      <InputFilter type="text" value={value} onChange={onChange} />
    </Wrapper>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};