export const sliderValue = (myValue) => {
    return {
        type: 'SLIDER_CHANGE_MONTH',
        payload: myValue
    }
}


export const sliderValueYear = (myValue) => {
    return {
        type: 'SLIDER_CHANGE_YEAR',
        payload: myValue
    }
}

export const flage = () => {
    return {
        type: 'FLAGE'
    }
}