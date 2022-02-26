import { Client, ClientOptions } from 'discord.js'
import { ExtendedClientOptions } from './typings/extendedClientOptions'

class ApacheClient extends Client {
	private prefix: string
	private commandPath: string
	private eventPath: string

	constructor(options: ExtendedClientOptions) {
		super(options as ClientOptions)
		this.prefix = options.defaultPrefix
		this.commandPath = options.commandPath || './commands'
		this.eventPath = options.eventPath || './events'
	}
}

module.exports = ApacheClient
