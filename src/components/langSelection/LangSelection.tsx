import { Autocomplete, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const LangSelection = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng?: string) => {
    i18n.changeLanguage(lng ?? "en");
  };
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 200 }}
      options={[
        { value: "en", label: "English" },
        { value: "fr", label: "France" },
      ]}
      clearIcon={false}
      defaultValue={{ value: "en", label: "English" }}
      onChange={(e, val) => changeLanguage(val?.value)}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            },
          }}
        />
      )}
    />
  );
};

export default LangSelection;
