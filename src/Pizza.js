import React from 'react'

function Pizza({ details }) {
  if (!details) {
    return <h3>Working fetching your pizza details...</h3>
  }
debugger
  return (
    <>{
        details.pizza = {
            Name: details.cname,
            Size: details.size,
            Sauce: details.sauce,
            Crust: details.gluFre ? 'Gluten Free' : 'Standard Crust',
            Toppings: [details.pep, details.saus, details.canBac, details.spiSaus, details.chix, details.oni, details.grnPep, details.tom, details.oliv, details.rstGar, details.artHrt, details.chz3, details.pine, details.xtra]}}</>
  )
}

export default Pizza