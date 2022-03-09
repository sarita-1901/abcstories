import React from 'react'

const ContentList = () => {
  const subcatg=["Travelling", "Reading","Gardening"];
  const contenttitles=["Reading > Charles Dickens", "Reading > Sudha Murthy","Travelling > Trip to Goa", "Travelling > Trip to Spain"]

  return (
    <div className="contentlist">
<div className="contentlist__subcatg">
  Travelling
  <div className="contentlist_subcatg__content">Trip to Goa</div>
  <div className="contentlist_subcatg__content">Trip to Spain</div>
</div>

<div className="contentlist__subcatg">
  Reading
  <div className="contentlist_subcatg__content">Charles Dickens</div>
  <div className="contentlist_subcatg__content">Sudha Murthy</div>
</div>

<div className="contentlist__subcatg">
  Gardening
</div>

</div>

      

  )
}

export default ContentList
