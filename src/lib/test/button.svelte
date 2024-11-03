<script lang="ts" module>
	export type Props = {
		onclick?: () => void;
	};
</script>

<script lang="ts">
	let { onclick }: Props = $props();
</script>

<button type="button" {onclick}> click </button>
