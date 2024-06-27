import { useState } from 'react';
import { Grid, Button, TextInput, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { SearchBarProps } from '../types/types';

export const SearchBar: React.FC<SearchBarProps> = ({ refetch, loading }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loading(true);
    refetch(inputValue);
  };

  return (
    <form style={{ width: '100%' }} onSubmit={handleSearchClick}>
      <Grid grow mb={30}>
        <Grid.Col span={9}>
          <TextInput
            label="Enter your keywords"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            placeholder="Airlines and airplanes"
            visibleFrom="s"
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={3} style={{ alignSelf: 'end' }}>
          <Button type="submit" color="blue" style={{ width: '100%' }}>
            Search
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
};
