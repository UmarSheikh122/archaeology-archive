import React, { useState } from 'react';
import { Autocomplete, TextField, Snackbar, Button } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Login from './Login/Login';

const App = () => {
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3']);
  const [value, setValue] = useState('');
  console.log('value: ', value);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleAddNewValue = (newValue) => {
    if (newValue && !options.includes(newValue)) {
      setOptions([...options, newValue]);
      setShowSnackbar(true);
      setValue(''); // Clear input value
    }
  };

  const handleDeleteOption = (option) => {
    console.log('option: ', option);
    const updatedOptions = options.filter((item) => item !== option);
    console.log('updatedOptions: ', updatedOptions);
    setOptions(updatedOptions);
    setValue(''); // Clear input value
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <>
    <Login/>
      {/* <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleAddNewValue(newValue);
        }}
        options={options}
        renderInput={(params) => <TextField {...params} label="Search or Add New Value" fullWidth />}
        isOptionEqualToValue={(option, value) =>  }
        freeSolo
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            {option}
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => handleDeleteOption(option)}
              sx={{ marginLeft: '8px' }}
            >
              Delete
            </Button>
          </li>
        )}
      />
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          New value added!
        </MuiAlert>
      </Snackbar> */}
    </>
  );
};

export default App;
