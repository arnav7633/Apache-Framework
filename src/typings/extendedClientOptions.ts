import { ClientOptions } from 'discord.js'

export type ExtendedClientOptions = ClientOptions & {
	defaultPrefix: string
	commandPath: string
	eventPath: string
}
