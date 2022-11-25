function handler(event) {

    var request = event.request;

    if (request.uri.indexOf('.') === -1) {
        request.uri = '/admin/index.html';
    }

    return request;
}