<script context="module">
	export const prerender = true;

	const TeamBuildingOutline = async () => {
		try {
			return (
				await import('@quentincaffeino/manypixels-illustrations-svelte/outline/TeamBuilding.svelte')
			).default;
		} catch (e) {
			console.error(e);
		}
	};

	const TeamBuildingMonochromatic = async () => {
		try {
			return (
				await import(
					'@quentincaffeino/manypixels-illustrations-svelte/monochromatic/TeamBuilding.svelte'
				)
			).default;
		} catch (e) {
			console.error(e);
		}
	};

	const TeamBuildingIsometric = async () => {
		try {
			return (
				await import(
					'@quentincaffeino/manypixels-illustrations-svelte/isometric/TeamBuilding.svelte'
				)
			).default;
		} catch (e) {
			console.error(e);
		}
	};

	const TeamBuildingFlatline = async () => {
		try {
			return (
				await import(
					'@quentincaffeino/manypixels-illustrations-svelte/flatline/TeamBuilding.svelte'
				)
			).default;
		} catch (e) {
			console.error(e);
		}
	};

	const TeamBuildingTwoColor = async () => {
		try {
			return (
				await import(
					'@quentincaffeino/manypixels-illustrations-svelte/two_color/TeamBuilding.svelte'
				)
			).default;
		} catch (e) {
			console.error(e);
		}
	};

	const illustrations = [
		TeamBuildingOutline,
		TeamBuildingMonochromatic,
		TeamBuildingIsometric,
		TeamBuildingFlatline,
		TeamBuildingTwoColor
	];

	function getRandomIllustration() {
		return illustrations[Math.floor(Math.random() * illustrations.length)];
	}
</script>

<script>
	let illustrationFn = getRandomIllustration();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#await illustrationFn() then illustration}
		<svelte:component this={illustration} />
	{/await}

	<button on:click={() => (illustrationFn = getRandomIllustration())}>Load random</button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
