import React from 'react'
import { Helmet } from 'react-helmet'
import BgGlassmorphism from '../../components/commons/BgGlassmorphism/BgGlassmorphism'
import SectionLargeSlider from '../../components/commons/SectionLargeSlider/SectionLargeSlider'
import { DEMO_POSTS } from '../../data/posts'
import SectionMagazine from '../../components/commons/SectionMagazine/SectionMagazine.component'

const MAGAZINE1_TABS = [
  'Tất cả',
  'Trường học ưu thích',
  'Trường gợi ý',
  'trường top'
]
const MAGAZINE1_POSTS = DEMO_POSTS.filter((_, i) => i >= 8 && i < 16)
const HomePage = () => (
  <div>
    <div className="nc-PageHome relative">
      <Helmet>
        <title>Home || UniFlatForm</title>
      </Helmet>
      <div className="relative overflow-hidden">
        <BgGlassmorphism />
        <div className="container relative">
          <SectionLargeSlider
            className="pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-24 "
            posts={DEMO_POSTS.filter((_, i) => i < 3)}
          />
          <SectionMagazine
            className="py-16 lg:py-28"
            posts={MAGAZINE1_POSTS}
            tabs={MAGAZINE1_TABS}
          />
        </div>
      </div>
    </div>
  </div>
)
export default HomePage
