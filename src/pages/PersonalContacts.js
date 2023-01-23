import { Contacts } from 'components/Contacts/Contacts';
import { Helmet } from 'react-helmet-async';

export const PersonalContacts = () => {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Contacts />
    </>
  );
};
