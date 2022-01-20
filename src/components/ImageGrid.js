import React from "react"
import { connect } from "react-redux"

const ImageGrid = () => {
  return (
    <div>
      Image grid
    </div>
  )
}

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error
})

export default connect(mapStateToProps)(ImageGrid);

