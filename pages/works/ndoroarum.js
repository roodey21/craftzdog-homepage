import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Ndoroarum">
    <Container>
      <Title>
        Ndoroarum <Badge>2021</Badge>
      </Title>
      <P>
        A website portal for ndoroarum basecamp community, where you can book for your
        journey to climb on mt. Sindoro.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.ndoroarum.com/">
            https://www.ndoroarum.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Laravel</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ndoroarum_01.png" alt="Ndoroarum" />
      <WorkImage src="/images/works/ndoroarum_02.png" alt="Ndoroarum" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
