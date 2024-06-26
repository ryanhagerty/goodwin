'use client';

import { Container, Title } from '@mantine/core';
import { NewsContainer } from '../components/NewsContainer/NewsContainer';

export default function HomePage() {
  return (
    <>
      <Container>
        <header>
          <Title ta="center" mt={30} mb={50}>
            All The News That&apos;s Fit to Fly ✈️
          </Title>
        </header>
        <section>
          <NewsContainer />
        </section>
      </Container>
    </>
  );
}
