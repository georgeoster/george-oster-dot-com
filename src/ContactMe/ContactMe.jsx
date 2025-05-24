import { forwardRef } from 'react';
import SectionContainer from '../Shared/SectionContainer';
import ContactMeItem from './ContactMeItem';
import { contacts } from './contactMeCopy';


const ContactMe = forwardRef(({flash}, ref) => {
  return (
    <section ref={ref} className="
      bg-gradient-to-tr from-zinc-900 via-sky-900 to-zinc-900 
      pt-4 pb-8 md:pt-6 lg:pt-8 text-neutral-100 transition-colors duration-1000
    ">
      <SectionContainer>

        <h2 className={`
          relative text-center text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-100 mb-8
          after:content-[''] after:block after:h-1 after:w-16 after:mx-auto after:mt-2
          after:bg-sky-800 after:rounded-full
          ${flash ? 'flash-heading' : ''}
        `}>
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pt-1 lg:pt-2">
          {contacts.map((item) => (
            <ContactMeItem key={item.type} {...item} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
});

export default ContactMe;