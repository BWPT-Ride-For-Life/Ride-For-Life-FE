import React, { useState } from 'react';
import Select from 'react-select';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { axiosWithAuth } from '../utils/AxiosWithAuth'

const debounceFunction = () => {}
const debounce = AwesomeDebouncePromise(debounceFunction, 350);

const DebounceSearch = () => {
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");

    const handleValueChanged = (option) => {
        setValue(option.driver);
    }

    const handleInputValueChanged = async (search) => {
        setInputValue(search);

        await debounce();

        if (search.length > 3) {
            axiosWithAuth()
                .get("url?search=" + search)
                .then((response) => {
                    let searchOptions = [];
                    response.data.forEach((driver) => {
                        searchOptions.push({
                            value: driver.id,
                            label: driver.name,
                            driver: { ...driver }
                        });
                    });
                })
                .catch(() =>
                    setOptions([])
                )
        }
    }

    let displayValue = null;
    options.forEach((option) => {
        if (option.id === value.id) {
            displayValue = option;
        }
    });

    return (
        <Select options={options} value={displayValue} inputValue={inputValue} onChange={handleValueChanged} onInputChange={handleInputValueChanged} />
    );
}

export default DebounceSearch;