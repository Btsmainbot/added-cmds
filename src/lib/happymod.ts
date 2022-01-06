/**
 * Get modded APK from happymod.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
const happymod = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for ${query}...`)
    fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${query}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})