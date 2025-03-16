import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Stack } from "@mui/material";

export const SliderSizes = () => {
  return (
    <Stack sx={{ height: 300 }} spacing={1} direction="row">
      <Slider
        aria-label="Temperature"
        orientation="vertical"
        valueLabelDisplay="auto"
        defaultValue={30}
        shiftStep={30}
        step={1000}
        min={1000}
        max={50000}
        valueLabelFormat={(value) => `₹ ${value.toLocaleString()}`}
        sx={{
          width: 10,
          color: 'success.main',
          '& .MuiSlider-thumb': {
            borderRadius: '1px',
          },
        }}
      />
    </Stack>
  );
};
