"use client";

import { Box, Button, CircularProgress, Divider, Paper } from "@mui/material";
import styles from "./newproduct.module.scss";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TextInput from "@/app/Components/FormComponent/TextInput";
import { useForm } from "react-hook-form";
import Select from "@/app/Components/FormComponent/Select";
import CloseIcon from "@mui/icons-material/Close";
import { Suspense } from "react";

const addNewItem = (values) => {};
export default function AddNewProduct() {
  const materialOptions = [
    {
      label: "Metal",
      value: "metal",
    },
    {
      label: "Steel",
      value: "steel",
    },
    {
      label: "Alloy",
      value: "alloy",
    },
    {
      label: "Aluminium",
      value: "aluminium",
    },
  ];
  const categoryOptions = [
    {
      label: "Door Handel",
      value: "doorhandel",
    },
    {
      label: "Stopper",
      value: "stopper",
    },
    {
      label: "Door Lock",
      value: "doorlock",
    },
    {
      label: "Other",
      value: "other",
    },
  ];
  const { control, handleSubmit } = useForm();
  return (
    <Suspense fallback={<CircularProgress color="success" />}>
      <>
        <div className={`${styles["chip"]} p-2 m-2 d-flex justify-content-end`}>
          <span className={`me-2`}>Add New Product</span>

          <BorderColorIcon />
        </div>
        <div className={`${styles["item-form"]}`}>
          <Paper>
            <form
              onSubmit={handleSubmit(addNewItem)}
              className={`d-flex flex-column justify-content-center p-4 `}
            >
              <TextInput
                label="Item Name"
                control={control}
                type="text"
                fullwidth={true}
              />
              {/* <div className={`d-flex`}>
              <TextInput
                label="Width"
                control={control}
                type="number"
                fullwidth={true}
                adornment="cm"
                adornmentPosition="end"
              />
              <span className={`me-2 ms-2 d-flex align-items-center`}>
                <CloseIcon />
              </span>
              <TextInput
                label="Height"
                control={control}
                type="number"
                fullwidth={true}
                adornment="cm"
                adornmentPosition="end"
              />
            </div> */}
              <Box
                // className='d-lg-flex'
                sx={{
                  display: {
                    lg: "flex",
                  },
                }}
              >
                <Select
                  label={"Category"}
                  fullwidth={true}
                  defaultValue={"none"}
                  options={categoryOptions}
                  control={control}
                />
                <Divider orientation="vertical" />
                <Divider orientation="vertical" />
                <Divider orientation="vertical" />
                <Divider orientation="vertical" />
                <Select
                  label={"Sub Category"}
                  fullwidth={true}
                  defaultValue={"none"}
                  options={materialOptions}
                  control={control}
                />
              </Box>
              {/* <TextInput
              label="Price"
              control={control}
              type="number"
              fullwidth={false}
              adornment="₹"
              adornmentPosition="start"
            /> */}
              <Button
                type="submit"
                variant="contained"
                size="small"
                sx={{ width: "30%" }}
              >
                Add
              </Button>
            </form>
          </Paper>
        </div>
      </>
    </Suspense>
  );
}
