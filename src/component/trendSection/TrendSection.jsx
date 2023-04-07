import React from 'react'
import TrendSectionStyle from "./TrendSection.module.scss"
import SearchBar from './searchBar/SearchBar'

const TrendSection = () => {
  return (
    <div className={TrendSectionStyle.trend_section}>
      <SearchBar />
    </div>
  )
}

export default TrendSection