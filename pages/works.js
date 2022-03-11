import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNdoroarum from '../public/images/works/ndoroarum_01.png'
import thumbSiskubis from '../public/images/works/siskubis_01.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ndoroarum" title="Ndoroarum" thumbnail={thumbNdoroarum}>
            A web portal for ndoroarum basecamp community.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="siskubis" title="Siskubis" thumbnail={thumbSiskubis}>
            Information system for Bussiness Incubator of UNY.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
