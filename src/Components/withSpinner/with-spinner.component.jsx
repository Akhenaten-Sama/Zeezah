import React from 'react'
import {SpinnerContainer, SpinnerOverlay} from './withSpinner.styles'


const WithSpinner = WrappedComponent => ({isloading, ...otherProps}) => {
    return isloading ? (
        <SpinnerOverlay>
        <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner