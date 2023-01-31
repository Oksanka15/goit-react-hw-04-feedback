import {SectionStyled} from './Section.styled'
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => (
  <section>
    <SectionStyled>{title}</SectionStyled>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};