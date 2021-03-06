import {Command, flags} from '@oclif/command'

class WithPiping extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ with-piping
hello world from ./src/with-piping.ts!
`,
  ]

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    // add --help flag to show CLI version
    help: flags.help({char: 'h'}),

    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(WithPiping)

    const name = flags.name || 'world'
    this.log(`hello ${name} from ${__filename}!`)
    setTimeout(() => this.log(`DELAYED: hello ${name} from ${__filename}!`), 100)

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}

export = WithPiping
