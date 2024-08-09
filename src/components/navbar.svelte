<nav class="navbar main-navbar is-fixed-top" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item navbar-logo is-size-4" href="/">
			<img class="mr-4" src="/images/skycrane.svg" alt="Skycrane logo" />
			<span class="has-text-light-green">Skycrane</span>
		</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navMenu"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	</div>
	<div id="navMenu" class="navbar-menu ml-6">
		<div class="navbar-start">
			<a class="navbar-item is-size-5 has-text-light-green" href="/overview"> Overview </a>
			<a class="navbar-item is-size-5 has-text-light-green" href="https://docs.skycrane.io">
				Docs
			</a>
			<div class="navbar-item has-dropdown is-hoverable is-size-5">
				<a class="navbar-link has-text-light-green" href="/skyforge"> Skyforge </a>
				<div class="navbar-dropdown">
					<a class="navbar-item" href="/skyforge#registry"> Registry </a>
					<a class="navbar-item" href="/docs.skycrane.io"> Docs </a>
				</div>
			</div>
		</div>
	</div>
	<div class="navbar-end">
		<div class="navbar-item">
			<a href="https://github.com/cloudflavor/skycrane" class="button is-small">
				<span class="icon">
					<i class="fab fa-github fa-xl"></i>
				</span>
				<span class="has-text-weight-bold">Star</span>
			</a>
		</div>
	</div>
</nav>
