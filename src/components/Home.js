import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delevery"
        backgroundImg="model-s.jpg"
        LeftButtonText="Custom Order"
        RightButtonText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delevery"
        backgroundImg="model-y.jpg"
        LeftButtonText="Custom Order"
        RightButtonText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delevery"
        backgroundImg="model-s.jpg"
        LeftButtonText="Custom Order"
        RightButtonText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delevery"
        backgroundImg="model-x.jpg"
        LeftButtonText="Custom Order"
        RightButtonText="Existing Inventory"
      />
      <Section
        title=" Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        LeftButtonText=" Order Now"
        RightButtonText="Learn More"
      />
      <Section
        title=" Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        LeftButtonText=" Order Now"
        RightButtonText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        LeftButtonText=" Shop Now"
        RightButtonText=""
      />
    </Container>
  )
}
export default Home

const Container = styled.div`
height:100vh;
`