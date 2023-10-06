import { MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function Select({ label, fullwidth, options, defaultValue,control }) {
  return (
    <Controller
      name={label}
      control={control}
      render={({ field }) => {
        return (
          <TextField
            id={label}
            label={label}
            select
            defaultValue={defaultValue}
                fullWidth={fullwidth}
            margin="normal"
            {...field}
          >
            {options.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        );
      }}
    />
  );
}
