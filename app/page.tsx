import { Container, Title } from '@mantine/core';
import { NewsList } from '../components/NewsList/NewsList';

export default function HomePage() {
  return (
    <>
      <Container>
        <header>
          <Title ta="center" mt={50} mb={30}>
            All The News That&apos;s Fit to Fly ✈️
          </Title>
        </header>
        <section>
          <NewsList />
        </section>
      </Container>
    </>
  );
}
