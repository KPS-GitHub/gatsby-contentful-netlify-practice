import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Home from "../components/PreviewHomePage/Home";
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
