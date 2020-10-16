import React, { useState, useEffect } from "react"
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Form from './Form'
import Home from './Home'
import * as yup from "yup";
import schema from "./formSchema";
// debugger
const initialFormValues ={
    size: '',
    sauce: '', 
    pep: false,
    saus: false,
    canBac: false,
    spiSaus: false,
    chix: false,
    oni: false,
    grnPep: false,
    tom: false,
    oliv: false,
    rstGar: false,
    artHrt: false,
    chz3: false,
    pine: false,
    xtra: false,
    gluFre: false,
    spec: '',
    qty: '1',
}
const initialFormErrors = {
    size: '',
    sauce: '',

}
const initialPizza = {}
const initialDisabled = true
// debugger
const App = () => {

    const [ currentPizza, setPizza ] = useState({})
    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    const [ disabled, setDisabled ] = useState(initialDisabled)

    console.log('formValues: ', formValues)
    console.log('formErrors: ', formErrors)
    console.log('disabled: ', disabled)
    
    // setPizza(initialPizza)

// const changePizza = (pizza) => {
//     setPizza(pizza)}

// debugger

    const inputChange = (name, value) => {
        yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
            setFormErrors({
                ...formErrors, 
                [name]: '',
            })
        })
        .catch((err) => {
            setFormErrors({
                ...formErrors, 
                [name]: err.errors[0],
            })
        })
// debugger
        setFormValues({
            ...formValues,
            [name]: initialFormValues,
        })
    }
// debugger    
    const formSubmit = () => {
        const newPizza = {
            size: formValues.size,
            sauce: formValues.sauce,
            crust: formValues.gluFree,
            cname: formValues.name.trim(),
            spec: formValues.spec.trim(),
            qty: formValues.qty.trim(),
            pep: formValues.pep,
            saus: formValues.saus,
            canBac: formValues.canBac,
            spiSaus: formValues.spiSaus,
            chix: formValues.chix,
            oni: formValues.oni,
            grnPep: formValues.grnPep,
            tom: formValues.tom,
            oliv: formValues.oliv,
            rstGar: formValues.rstGar,
            artHrt: formValues.artHrt,
            chz3: formValues.chz3,
            pine: formValues.pine,
            xtra: formValues.xtra,
            gluFre: false,
       
        };
       setFormValues(initialFormValues)
    }
// debugger
    useEffect(() => {
  
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
// debugger
    useEffect(() => {
        setFormValues(initialFormValues)
    }, [currentPizza])

// debugger
    return (
        <>
            <Nav />
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/pizza'>
                <Form 
                    pizza= {currentPizza}
                    values = {formValues}
                    change = {inputChange}
                    submit = {formSubmit}
                    disabled = {disabled}
                    errors = {formErrors}
                />
            </Route>
            
        

        </>
  );
};
export default App