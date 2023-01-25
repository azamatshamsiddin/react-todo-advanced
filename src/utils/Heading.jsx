import React from 'react'

const Heading = ({tag, className, children}) => {
  return `<${tag} className=${className}>${children}</${tag}>`
}

export default Heading