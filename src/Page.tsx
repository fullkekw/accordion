import React from 'react';

import { Accordion, AccordionHeader, AccordionPanel, AccordionWrapper } from './_package/index';



const Page: React.FC = () => {
  return <div className="p-10 flex flex-col gap-5">
    <AccordionWrapper singleActive>

      <Accordion>
        <AccordionHeader>
          header
        </AccordionHeader>

        <AccordionPanel>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quo, quidem placeat saepe atque eveniet esse ea aspernatur accusamus! Quos natus dolore itaque eum fugiat debitis iste id voluptate assumenda!
          Assumenda reiciendis error natus iste dolore cupiditate totam impedit. Quos saepe nemo et ipsam dolores perferendis, deleniti eos consequatur, eius minima aut? Eum iste animi officia eaque consequuntur, sunt pariatur.
          Saepe odit explicabo distinctio sed incidunt ea alias quae quaerat id assumenda! Corporis aperiam mollitia exercitationem ullam cupiditate eveniet et omnis a nulla hic reprehenderit similique, ut quisquam voluptatem aliquam!
          Dolore accusantium tempore at beatae quam omnis natus eaque asperiores minima, soluta laudantium cumque nobis reprehenderit odit tenetur est quibusdam autem rerum qui hic cupiditate minus. Labore ratione ipsam porro!
          Quasi dolorem commodi, ipsam culpa hic nemo tenetur mollitia corporis illum eius quis sint dolorum neque reiciendis. Quisquam esse alias possimus deleniti facere repudiandae nulla quae similique, qui beatae cupiditate?
          Saepe ducimus eius sint iusto, consectetur repudiandae velit inventore temporibus amet assumenda. Voluptas sed quidem praesentium quaerat eligendi consectetur inventore sapiente fuga, iure perspiciatis esse voluptate. Nihil iusto sed quibusdam.
          Ea hic doloremque molestias quam omnis, reiciendis praesentium! Fuga natus eligendi, corporis aliquid quasi cumque voluptatum dolore ullam quaerat quae? Et quae exercitationem dolorem nemo itaque sed, ducimus eos ex?
          Laborum veritatis in rem ducimus sunt asperiores a provident error minima eos delectus perferendis nulla illo, consectetur molestias nisi libero. Reiciendis provident numquam quisquam ipsam doloremque quidem recusandae nostrum est?
          Odio deserunt corporis, magnam commodi a id rerum animi explicabo dolores dignissimos, vitae voluptatum soluta? Exercitationem, autem adipisci. Non officiis molestias magni eligendi, repudiandae odit nam nisi amet quisquam aut.
          Incidunt asperiores voluptatum obcaecati inventore porro velit magnam suscipit officia omnis, ratione totam qui harum sapiente nostrum optio fugit aspernatur quos quidem! Earum praesentium harum dicta libero reiciendis culpa dignissimos!
        </AccordionPanel>
      </Accordion>

      <Accordion>
        <AccordionHeader>
          header 2
        </AccordionHeader>

        <AccordionPanel>
          panel 2
        </AccordionPanel>
      </Accordion>

      <Accordion>
        <AccordionHeader>
          header 3
        </AccordionHeader>

        <AccordionPanel>
          panel 3
        </AccordionPanel>
      </Accordion>

      <Accordion disabled>
        <AccordionHeader>
          header disabled
        </AccordionHeader>

        <AccordionPanel>
          panel disabled
        </AccordionPanel>
      </Accordion>

    </AccordionWrapper>
  </div>;
};

export default Page;