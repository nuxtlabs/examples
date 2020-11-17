import chalk from 'chalk'
import ngrok from 'ngrok'

export default function (){
    const { nuxt } = this

    // Don't start NGROK in production mode
    // nuxt.options is the nuxt.config.js merged with the default values
    if (nuxt.options.dev === false) {
        return
    }

    // Start NGROK when Nuxt server is listening
    let url
    nuxt.hook('listen', async function (server, { port }) {
        await ngrok.authtoken('1k9Kr7ISq2aouzNuhvhpTfvMlLk_ZXHJ8T47mFSXPctbLQVV')
        url = await ngrok.connect(port);
        console.log(url)
        nuxt.options.publicRuntimeConfig.url = url
        nuxt.options.cli.badgeMessages.push(`Public URL: ${chalk.underline.yellow(url)}`)
    })

    // Disconnect ngrok connection when closing nuxt
    nuxt.hook('close', function () {
        url && ngrok.disconnect(url)
    })

}