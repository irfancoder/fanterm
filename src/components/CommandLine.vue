<template>
    <p>
        <span class="user">~/irfans-terminal $ </span>
        <span
            v-bind="$attrs"
            class="command"
            id="command"
            ref="command"
            placeholder="Type your command or run: help"
            :contenteditable="!readOnly"
            @input="emitValue($event)"
            @keydown.enter.prevent="emitSubmit"
            @keydown.up.prevent="emitToggle(-1)"
            @keydown.down.prevent="emitToggle(1)"
        >
            {{ value.command }}
        </span>
    </p>
    <code>
        <pre name="output" class="output" id="output">{{ value.output }}</pre>
    </code>
</template>


<script>
export default {
    props: {
        readOnly: { type: Boolean, default: false },
        value: { type: Object, required: false }
    },

    mounted() {
        if (!this.readOnly) this.$refs.command.focus()
    },

    emits: ['submit', 'clear', 'toggle', 'reset', 'input'],
    methods: {
        emitValue(e) {
            this.command = e.target.innerText
            this.$emit('input', { ...this.value, command: this.command })
        },

        emitSubmit() {
            if (this.readOnly) return
            if (this.command === 'clear') this.$emit('clear')
            else this.$emit('submit', { command: this.command })

            this.$emit('reset')
        },
        emitToggle(index) {
            if (this.readOnly) return
            this.$emit('toggle', index)
        }
    }
}
</script>

<style scoped>
.user {
    color: lime;
    font-weight: 600;
}
.command {
    text-align: left;
    margin: 0;
    width: 100%;
    outline-width: 0;
    caret-color: white;
}

[contenteditable][placeholder]:empty:before {
    content: attr(placeholder);
    pointer-events: none;
    color: #a4a4a4;
    display: inline-block; /* For Firefox */
}

.output {
    text-align: left;
}
</style>
