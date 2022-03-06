<template>
    <div id="terminal" class="terminal">
        <div v-for="(history, index) in histories" :key="index">
            <command-line :value="history" :readOnly="true" :id="`command_${index}`"></command-line>
        </div>

        <command-line ref="current" @submit="submitCommand" @clear="clearHistory" @toggle="toggleCommand" @reset="resetCurrentCommand"></command-line>
    </div>
</template>


<script>
import CommandLine from './CommandLine.vue'
import CommandMixin from '../mixins/command-mixin'
// import { io } from 'socket.io-client'
// const socket = io('http://localhost:3333')

export default {
    components: {
        CommandLine
    },
    data() {
        return {
            histories: [],
            current: {
                command: '',
                output: ''
            },
            index: 0
        }
    },

    mixins: [CommandMixin],

    mounted() {
        this.run('welcome')
        this.index = this.histories.length
        // socket.on('response', (data) => {
        //     this.curren  t.output = data.toString()
        //     this.histories.push(this.current)
        //     this.resetCurrentCommand()
        // })
    },
    methods: {
        update(payload) {
            this.$refs.current.updateCommand(payload)
        },

        run(command) {
            this.current.command = command
            if (command === 'help') this.current.output = 'Available commands: \n- '.concat(Object.keys(this.availableCommands).join('\n- '), '\n\nMisc.\n- clear\n- help')
            else
                this.current.output =
                    typeof this.availableCommands[command] === 'function'
                        ? this.availableCommands[command]()
                        : this.availableCommands[command]
                        ? this.availableCommands[command]
                        : `Unknown command '${command}'. Try typing: help`
            this.histories.push(this.current)
            this.index = this.histories.length
            this.resetCurrentCommand()
        },

        submitCommand({ command }) {
            this.run(command)
            // this.scroll()
            // socket.emit('request', {
            //     command: this.current.command,
            //     meta: {
            //         timestamp: new Date()
            //     }
            // })
        },
        scroll() {
            const el = this.$refs.current

            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        },

        toggleCommand(value) {
            this.index += value
            console.log(this.index)
            if (this.index < 0) {
                this.index -= value
            } else if (this.index >= this.histories.length + 1) {
                this.resetCurrentCommand()
                this.index -= value
            } else if (this.index >= this.histories.length) {
                this.resetCurrentCommand()
            } else {
                console.log(this.histories[this.index])
                this.update({ command: this.histories[this.index].command, output: '' })
            }
        },

        clearHistory() {
            this.histories = []
        },

        resetCurrentCommand() {
            this.current = {
                command: '',
                output: ''
            }
            this.$refs.current.resetCommand()
        }
    }
}
</script>

<style scoped>
.terminal {
    background: #2c3e50;
    padding: 12px;
    min-height: 100vh;
}
</style>
