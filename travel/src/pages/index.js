import React from "react"

import Layout from "../components/layout"
import Hero from "../components/sections/Hero"
import Testimonials from "../components/sections/Testimonials"
import Trips from "../components/sections/Trips"
import Stats from "../components/sections/Stats"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials heading="Our Testimonials" />
    <Stats />
  </Layout>
)

export default IndexPage
