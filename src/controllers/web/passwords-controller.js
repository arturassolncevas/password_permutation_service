import indexHtml from '../../views/passwords/index.html'

export const index = (req, res) => {
    res.sendFile(indexHtml, {root: __dirname })
}
