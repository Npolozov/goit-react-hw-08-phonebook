import { ListContact } from '../ListContact/ListContact';
import { ListStyle, ItemStyle, TotalParagraf } from './List.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from 'redux/filter/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contact/contactOperations';
import { useContact } from 'hooks/useContacts';

export const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { contacts, error, isLoading } = useContact();
  const filter = useSelector(getStatusFilter);

  const normalizeFilter = filter.toLowerCase();

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  const totalContact = contacts.length;

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && (
        <TotalParagraf>Total contacts:{totalContact} </TotalParagraf>
      )}
      {totalContact > 0 ? (
        <ListStyle>
          {visibleContact.map(item => (
            <ItemStyle key={item.id}>
              <ListContact id={item.id} item={item} />
            </ItemStyle>
          ))}
        </ListStyle>
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </>
  );
};
