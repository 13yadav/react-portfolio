import React from 'react';
import { DiAndroid, DiBootstrap, DiCss3, DiDatabase, DiFirebase, DiMarkdown, DiReact, DiUikit, DiWebplatform, DiWordpress, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technology</SectionTitle>
    <SectionText>
      I've worked with a large range of technologies in software development world.
      From Android development to Web development
    </SectionText>
    <List>
      <ListItem>
        <DiAndroid size="3rem" />
        <ListContainer>
          <ListTitle>Mobile Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Native Android Development
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JS & Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Laravel, Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUikit size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
