import { useState } from 'react';
import { Autocomplete, Grid, Button, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { SearchBarProps } from '../types/types';

export const SearchBar: React.FC<SearchBarProps> = ({ keywords, setKeywords, refetch }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const handleSearchClick = () => {
    setKeywords(inputValue);
    refetch();
  };

  return (
    <Grid grow>
      <Grid.Col span={9}>
        <Autocomplete
          placeholder="Search"
          leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          data={keywords}
          value={inputValue}
          onChange={handleInputChange}
          visibleFrom="s"
          mb={30}
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button onClick={handleSearchClick} color="blue" style={{ width: '100%' }}>
          Search
        </Button>
      </Grid.Col>
    </Grid>
  );
};
