import { useEffect, useState } from "react";

import Modal from "./Modal";
import SearchBox from "./SearchBox";
import Loading from "./Loading";

import {
  Box,
  Grid,
  FormControlLabel,
  Checkbox,
  Stack,
  Button,
} from "@mui/material";

export default function FilterModifier({
  isOpen,
  onClose,
  onFilterStateChange,
  onResetFilters,
  activeFilters,
  data,
  loading,
  error,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSearchQuery("");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const ingredientsFiltered = (data || []).filter((ingredient) => {
    if (!searchQuery) return true;

    return ingredient.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (error) return null;

  return (
    <Modal open onClose={() => onClose()}>
      <Box
        sx={{
          maxHeight: "40vw",
          pl: 5,
          pr: 5,
        }}
        display="block"
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="row"
          spacing={3}
          sx={{ pb: 2, pt: 2 }}
        >
          <SearchBox
            placeholder={"Search"}
            onChangeHandler={handleSearch}
            sx={{ width: 300 }}
          />
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: "#f5310e",
              color: "#f5310e",
              ":hover": {
                borderColor: "#d1290c",
                boxShadow: "inset 0px 0px 2px 2px #f15f55",
              },
            }}
            onClick={onResetFilters}
          >
            Reset filters
          </Button>
        </Stack>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            pb: 2,
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            ingredientsFiltered.map((item) => (
              <Grid item xs={3} key={item._id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={onFilterStateChange}
                      checked={activeFilters.includes(item._id)}
                      name={item._id}
                    />
                  }
                  label={item.name}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Modal>
  );
}
