import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DonationFAQ = () => {
  const faqs = [
    { question: "How is my donation used?", answer: "Your donation directly supports HUFIDA's projects and initiatives in Africa. We ensure that at least 85% of all donations go directly to our programs." },
    { question: "Is my donation tax-deductible?", answer: "Yes, HUFIDA is a registered non-profit organization, and your donations are tax-deductible to the extent allowed by law." },
    { question: "Can I donate monthly?", answer: "Absolutely! We offer a monthly giving option that allows you to provide sustained support to our projects." },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default DonationFAQ;