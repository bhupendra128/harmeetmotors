/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import address from 'assets/images/icons/address.png';
import sales from 'assets/images/icons/sales.png';
import repair from 'assets/images/icons/repair.png';

const data = [
  {
    id: 1,
    icon: sales,
    title: 'Sales',
    description: `Phone No:- +91 9116632201`,
  },
  {
    id: 3,
    icon: repair,
    title: 'Service',
    description: `Phone No:- +91 9116632220`,
  },
  {
    id: 3,
    icon: address,
    title: 'Adresss',
    description: `Harmeet motors`,
    subDescriptions:[{
      line1: 'G9, Automobile',
      line2: 'Zone, IPIA, Kota',
      line3: 'Rajasthan - 324005',
    }]
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Contact US"
          description="For more detail regarding prices and offer, please contact on below mentioned numbers"
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 6],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 8],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
