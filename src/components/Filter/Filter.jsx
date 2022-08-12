import { IoFilterOutline } from 'react-icons/io5';
import { Wrapper, TitleFilter, InputFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

export function Filter({ value, onChange }) {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TitleFilter>
        Find contacts by name <IoFilterOutline />
      </TitleFilter>
      <InputFilter type="text" value={value}  onChange={e => dispatch(setFilter(e.currentTarget.value))} />
    </Wrapper>
  );
};