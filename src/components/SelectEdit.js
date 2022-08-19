import { Height, Widgets } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

export default ({ onChange, options, value, className, Field, defValue, disable }) => {

    let [sectorName, setsectorName] = useState(options);
    let result;
    const dot = () => ({
        alignItems: "center",
        display: "flex"
    });
    let search = Field == 'Bussiness' ? true : false;
    const colourStyles = {
        control: (styles) => ({
            ...styles,
            fontSize: "1rem",
            boxSizzing: "content- box",
            width: " 100 %",
            height: "3rem",
            margin: " 0 0 8px",
            padding: "0",
            transition: "box - shadow .3s, border .3s",
            border: "none",
            borderBottom: "1px solid #9e9e9e",
            borderRadius: "0",
            outline: "0",
            backgroundColor: " transparent",
            boxShadow: "none",
            boxShadow: "none",
            borderBottom: '1px solid #9e9e9e',
        }),
        valueContainer: (styles) => ({ ...styles, height: '50px' }),
        indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
        input: (styles) => ({ ...styles, ...dot() }),
        placeholder: (styles) => ({ ...styles, ...dot() }),
        singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) })
    };
    const defaultValue = () => {
        if (Field == 'Employee') {
            return (defValue.map(data => ({ label: data.number_of_employee, value: data.id })))
        }
        if (Field == 'Sector') {
            return (defValue.map(data => ({ label: data.sector_name, value: data.id })))
        }
        if (Field == 'AvgEmployee') {
            return (defValue.map(data => ({ label: data.average_employees, value: data.id })))
        }
        if (Field == 'FeedBack') {
            return (defValue.map(data => ({ label: data.feedback_frequencies, value: data.id })))
        }
        if (Field == 'Role') {
            return (defValue.map(data => ({ label: data.role, value: data.id })))
        }
        if (Field == 'Headquaters') {
            return (defValue.map(data => ({ label: data.country_name, value: data.id })))
        }
        if (Field == 'Package') {
            return (defValue.map(data => ({ label: data.package_name, value: data.id })))
        }
        if (Field == 'Bussiness') {
            return (defValue.map(data => ({ label: data, value: data })))
        }
    };

    const renderList = () => {
        if (Field == 'Sector') {
            return (options.map(data => ({ label: data.sector_name, value: data.id })))
        }
        if (Field == 'Employee') {
            return (options.map(data => ({ label: data.number_of_employee, value: data.id })))
        }
        if (Field == 'AvgEmployee') {
            return (options.map(data => ({ label: data.average_employees, value: data.id })))
        }
        if (Field == 'FeedBack') {
            return (options.map(data => ({ label: data.feedback_frequencies, value: data.id })))
        }
        if (Field == 'Role') {
            return (options.map(data => ({ label: data.role, value: data.id })))
        }
        if (Field == 'Headquaters') {
            return (options.map(data => ({ label: data.country_name, value: data.id })))
        }
        if (Field == 'Package') {
            return (options.map(data => ({ label: data.package_name, value: data.id })))
        }
        if (Field == 'Bussiness') {
            return (options.map(data => ({ label: data, value: data })))
        }
    }
    const filterProducts = (e) => {
        setsectorName(e.value);
    }

    return (
        <div>
            <Select
                className="inputselect"
                isSearchable={search}
                styles={colourStyles}
                defaultValue={defaultValue()}
                onChange={e => {
                    onChange(e.value)
                }}
                placeholder="Select Option"
                options={renderList()}
                isDisabled={disable}
            />
        </div >
    )
}