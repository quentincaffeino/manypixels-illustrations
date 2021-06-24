<script context="module">
	export const prerender = true;

	const TeamPresentationOutline = async () => {
		try {
			return (
				await import('@quentincaffeino/manypixels-svelte/src/outline/TeamPresentation.svelte')
			).default;
		} catch (e) {
			console.error(e);
		}
	};

	const TeamPresentationMonochromatic = async () => {
		try {
			return (
				await import('@quentincaffeino/manypixels-svelte/src/monochromatic/TeamPresentation.svelte')
			).default;
		} catch (e) {
			console.error(e);
		}
	};

	const TeamPresentationIsometric = async () => {
		try {
			return (
				await import('@quentincaffeino/manypixels-svelte/src/isometric/TeamPresentation.svelte')
			).default;
		} catch (e) {
			console.error(e);
		}
	};

	const TeamPresentationFlatline = async () => {
		try {
			return (
				await import('@quentincaffeino/manypixels-svelte/src/flatline/TeamPresentation.svelte')
			).default;
		} catch (e) {
			console.error(e);
		}
	};

	const TeamPresentationTwoColor = async () => {
		try {
			return (
				await import('@quentincaffeino/manypixels-svelte/src/two_color/TeamPresentation.svelte')
			).default;
		} catch (e) {
			console.error(e);
		}
	};

	const illustrations = [
		TeamPresentationOutline,
		TeamPresentationMonochromatic,
		TeamPresentationIsometric,
		TeamPresentationFlatline,
		TeamPresentationTwoColor
	];

	const displayIllustration = Math.floor(Math.random() * illustrations.length);
</script>

<script>
	import Counter from '$lib/Counter/index.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			{#await illustrations[displayIllustration]() then illustration}
				<svelte:component this={illustration} />
			{/await}
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome :global(svg) {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
