import chalk from 'chalk'
import ngrok from 'ngrok'

export default function () {
  const { nuxt } = this

  // Don't start NGROK in production mode
  // nuxt.options is the nuxt.config.js merged with the default values
  if (nuxt.options.dev === false) {
    return
  }

  // Start NGROK when Nuxt server is listening
  let url
  nuxt.hook('listen', async function (server, { port }) {
    const options = nuxt.options.ngrok || {}

    const token = process.env.NGROK_TOKEN || options.token
    await ngrok.authtoken(token)

    url = await ngrok.connect(port)

    nuxt.options.publicRuntimeConfig.url = url
    nuxt.options.cli.badgeMessages.push(
      `Public URL: ${chalk.underline.yellow(url)}`
    )
  })

  // Disconnect ngrok connection when closing nuxt
  nuxt.hook('close', function () {
    url && ngrok.disconnect(url)
  })
}
