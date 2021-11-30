<script lang="ts">
    // props
    export let name: string = 'world'; // default value

    // state
    let msg = 'message';

    $: computed = `[${msg.toUpperCase()}]`;
</script>

<h1>Hello {name}!</h1>
<input bind:value={msg} />
<p>Computed: {computed}</p>

<style>
    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }
</style>
