﻿class Utilities {
    constructor() {

    }
    public manageRequest = (options) => {
        $.ajax({
            url: 'https://localhost:44303/Api/' + options.url,
            data: options.data,
            type: options.type,
            success: (response, status, jqXhr) => {
                if (options.callback != undefined) {
                    options.callback(response);
                }
            },
            error: (jqXhr, status, error) => {
                if (options.errorMessage === undefined || options.errorMessage === null || options.errorMessage === '') {
                    swal.fire('Error', 'Could NOT get satisfactory answer due to error : ' + error, 'error');
                }
                else {
                    swal.fire('Error', options.errorMessage, 'error');
                }
            }
        });
    }
}