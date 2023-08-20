// API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'loading...',
        messages: 'Data is being loaded, please wait'
    },
    success: {
        title: 'success',
        message: 'data successfuly loaded'
    },
    responseFailure: {
        title: 'Error',
        messages: 'an error occured while fetching response from server'
    },
    requestFailure: {
        title: 'Error',
        message: 'an error occured while parsing request data'
    },
    networkError: {
        title: 'Error',
        messages: 'unable to connect with sevrer . please check internet connectivity adn try again'
    }
}

// api service call

export const SERVICE_URLS = {
    userSignup: {url: '/signup', method: 'POST'}
}