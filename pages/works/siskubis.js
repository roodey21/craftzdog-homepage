import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Siskubis">
    <Container>
      <Title>
        Siskubis <Badge>2020</Badge>
      </Title>
      <P>
        An information system for Bussiness Incubator of Universitas Negeri Yogyakarta. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://siskubisdemo.com/">
              https://siskubisdemo.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Laravel, PHP, Bootstrap 5</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/siskubis_02.png" alt="Siskubis" />
      <WorkImage src="/images/works/siskubis_03.png" alt="Siskubis" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
