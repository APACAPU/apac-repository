import {
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
} from "@chakra-ui/react";
import useSearchStore from "store/useSearchStore";
import { Search as SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Search = () => {
  const { search, setSearch } = useSearchStore();
  const [searchVal, setSearchVal] = useState("");

  const handleChange = (event) => setSearchVal(event.target.value);

  useEffect(() => {
    setSearchVal(search);
  }, []);

  return (
    <FormControl mt={12}>
      <FormLabel color="gray.400">Search</FormLabel>
      <HStack>
        <Input
          value={searchVal}
          onChange={handleChange}
          placeholder="Search Content"
          color="gray.400"
          onKeyDown={(event) => event.key === "Enter" && setSearch(searchVal)}
          _active={{
            borderColor: "teal.200",
          }}
          _focus={{
            borderColor: "teal.200",
          }}
        />
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon size="16px" />}
          onClick={() => setSearch(searchVal)}
          colorScheme="teal"
        />
      </HStack>
    </FormControl>
  );
};

export default Search;
