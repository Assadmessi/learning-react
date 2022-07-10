import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function useAxiosGet(url) {
    const [request, sentRequest] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect(() => {
        sentRequest({
            loading: true,
            data: null,
            error: false 
        })
        axios.get(url)
        .then(response => {
            sentRequest({
                loading: false,
                data: response.data,
                error: false 
            })
        })
        .catch(() => {
            sentRequest({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url]);

    return request
}