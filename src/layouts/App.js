import React from 'react'

import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'

const App = ({ children }) => (
  <>
    <Header />
    <Container>
      {children}
    </Container>
    <Footer />
  </>
)

export default App
