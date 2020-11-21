import indexHtml from '../../views/users/index.html'

export const index = (req, res, next) => {
    res.sendFile(indexHtml, {root: __dirname })
}
