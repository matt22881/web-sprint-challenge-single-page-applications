import React from 'react'
import Toggle from 'react-toggle'
import Pizza from './Pizza'

export default function Form(props) {
debugger
    const { values, submit, change, disabled, errors } = props
debugger
    const onSubmit = (e) => {
        e.preventDefault()
        submit()
    }
debugger
    const onChange = (e) => {
        const { name, value, type, checked } = e.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }
debugger
    return (
        <>
            <header>
                <h1>Build Your Own Pizza</h1>
                <img src='./img/pizza.jpg' alt='placeholder picture of a pizza' />
            </header>
            <h3>Build your Pizza</h3>
            <Form onSubmit={onSubmit}>
                <h4>Choice of size.</h4>
                <h6>required</h6>
                <p>Small: $8.00  Medium: $10.00  Large $12.00  Jumbo $15.00</p>
                <select onChange={onChange} value={values.size} name='size'>
                    <option value = ''>---Choose your size---</option>
                    <option value = 'sm'>Small</option>
                    <option value = 'md'>Medium</option>
                    <option value = 'lg'>Large</option>
                    <option value = 'xl'>Jumbo</option>
                </select>
                <h4>Choice of Sauce</h4>
                <h6>required</h6>
                <label>
                <input
                    type='radio'
                    name='sauce'
                    value={'orig'}
                    checked={values.sauce === 'ori'}
                    onChange={onChange}
                    />
                Original Red Sauce
                </label>
                <label>
                <input
                    type='radio'
                    name='sauce'
                    value={'gar'}
                    checked={values.sauce === 'gar'}
                    onChange={onChange}
                    />
                Garlic Ranch Sauce
                </label>
                <label>
                <input
                    type='radio'
                    name='sauce'
                    value={'bbq'}
                    checked={values.sauce === 'bbq'}
                    onChange={onChange}
                    />
                Sweet BBQ Sauce
                </label>
                <label>
                <input
                    type='radio'
                    name='sauce'
                    value={'alf'}
                    checked={values.sauce === 'alf'}
                    onChange={onChange}
                    />
                Spinach Alfredo Sauce
                </label>
                <label>
                <input
                    type='radio'
                    name='sauce'
                    value={'dry'}
                    checked={values.sauce === 'dry'}
                    onChange={onChange}
                    />
                Hold the Sauce Please
                </label>
                <h4>Choose your toppings</h4>
                <h6>Maximum 10 (+$1.00 each)</h6>
                <label>
                <input
                    type="checkbox"
                    name="pep"
                    checked={values.pep}
                    onChange={onChange}
                />
                Pepperoni
                </label>
                <label>
                <input
                    type="checkbox"
                    name="saus"
                    checked={values.saus}
                    onChange={onChange}
                />
                Sausage
                </label>
                <label>
                <input
                    type="checkbox"
                    name="canBac"
                    checked={values.canBac}
                    onChange={onChange}
                />
                Canadian Bacon
                </label>
                <label>
                <input
                    type="checkbox"
                    name="spiSaus"
                    checked={values.spiSaus}
                    onChange={onChange}
                />
                Spicy Italian Sausage 
                </label>
                <label>
                <input
                    type="checkbox"
                    name="chix"
                    checked={values.chix}
                    onChange={onChange}
                />
                Grilled Chicken
                </label>
                <label>
                <input
                    type="checkbox"
                    name="oni"
                    checked={values.oni}
                    onChange={onChange}
                />
                Onions
                </label>
                <label>
                <input
                    type="checkbox"
                    name="grnPep"
                    checked={values.grnPep}
                    onChange={onChange}
                />
                Green Peppers
                </label>
                <label>
                <input
                    type="checkbox"
                    name="tom"
                    checked={values.tom}
                    onChange={onChange}
                />
                Diced Tomatos
                </label>
                <label>
                <input
                    type="checkbox"
                    name="oliv"
                    checked={values.oliv}
                    onChange={onChange}
                />
                Black Olives
                </label>
                <label>
                <input
                    type="checkbox"
                    name="rstGar"
                    checked={values.rstGar}
                    onChange={onChange}
                />
                Roasted Garlic
                </label>
                <label>
                <input
                    type="checkbox"
                    name="artHrt"
                    checked={values.artHrt}
                    onChange={onChange}
                />
                Artichoke Hearts
                </label>
                <label>
                <input
                    type="checkbox"
                    name="chz3"
                    checked={values.chz3}
                    onChange={onChange}
                />
                Three Cheese
                </label>
                <label>
                <input
                    type="checkbox"
                    name="pine"
                    checked={values.pine}
                    onChange={onChange}
                />
                Pineapple
                </label>
                <label>
                <input
                    type="checkbox"
                    name="xtra"
                    checked={values.xtra}
                    onChange={onChange}
                />
                Extra Cheese
                </label>
                <h4>Cluten Free Option?</h4>
                <h6>$1.00 extra</h6>
                <label>
                    <Toggle
                        name='gluFre'
                        defaultChecked={false}
                        onChange={onChange}
                        />
                </label>
                <label>
                    Name
                    <input
                    value={values.cname}
                    name='cname'
                    type='text'
                    onChange={onChange}
                    placeholder= 'Your Name'
                    />
                </label>
                <label>
                    Special Instructions
                    <textarea
                    value={values.inst}
                    name='inst'
                    type='text'
                    onChange={onChange}
                    placeholder='Special Instructions'
                    />
                </label>
                <label>
                    Quantity
                    <input
                    value={values.qty}
                    name='qty'
                    type='text'
                    onChange={onChange}
                    placeholder= 'Your Name'
                    />
                </label>
                <div className="errors">
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.role}</div>
                    <div>{errors.civil}</div>
                </div>
                <button type='submit' disabled={disabled}>Place Order</button>
            </Form>
            <Pizza details={values} />
        </>
    )
}