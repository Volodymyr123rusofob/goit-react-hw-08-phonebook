import ContactForm from './form/ContactForm';
import FilterContact from './filter/Filter';

import style from './appContact.module.css';

export const AppContact = () => {
  return (
    <div className={style.box}>
      <div className={style.boxdiv}>
        <h1>Phonebook</h1>
        <ContactForm />
        <div className={style.div}>
          <h2 className={style.h2}>Contacts</h2>
          <FilterContact />
        </div>
      </div>
    </div>
  );
};
