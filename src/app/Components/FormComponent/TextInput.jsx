import { InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function TextInput({ label, control, type, fullWidth, adornment, adornmentPosition }) {
  return (
    <Controller
      name={label}
      control={control}
      render={({ field }) => {
        return (
          <TextField
            id={label}
            label={label}
            fullWidth={fullWidth}
            size="small"
            margin="normal"
            type={type}
            InputProps={
              adornment && {
                ...(adornmentPosition === "end"
                  ? {
                      endAdornment: (
                        <InputAdornment>{adornment}</InputAdornment>
                      ),
                    }
                  : {
                      startAdornment: (
                        <InputAdornment>{adornment}</InputAdornment>
                      ),
                    }),
              }
            }
            {...field}
          />
        );
      }}
    />
  );
}