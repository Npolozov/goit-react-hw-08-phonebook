import { useSelector } from 'react-redux';
import { getContact, getIsLoading, getError } from 'redux/contact/selectors';

export const useContact = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContact);

  return {
    isLoading,
    error,
    contacts,
  };
};
