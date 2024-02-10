function urlPath(imageFileName, req) {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    return `${baseUrl}/${imageFileName}`;
}

module.exports = { urlPath };