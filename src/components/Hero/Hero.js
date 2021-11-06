import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Namastey! <br />
        I'm Ranjit Yadav
      </SectionTitle>
      <SectionText>
        I'm a Software Developer.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/13yadav/'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;